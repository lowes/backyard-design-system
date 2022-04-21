import * as React from 'react'
import classNames from 'classnames'

import Checkbox from '../Checkbox'
import type { CheckboxRef } from '../Checkbox'
import { ToggleButton } from '../Toggle'
import type { ToggleProps, ToggleRef, ToggleButtonRef } from '../Toggle'
import type { OptionProps } from '../Select'
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import type { BackyardToken } from '../utils/typings/BackyardProps'
import { useGlobalKeyDown, keycode } from '../utils/hooks/useKeyDown'
import { useForwardedRef } from '../utils/hooks/useForwardedRef'

import ListSelectorMultipleWrapper from './styles/ListSelectorMultipleWrapper'
import type { ListSelectorOption } from './useListSelector'
import { arrayEquals, clampOption, flattenOptions, getOptions } from './utils'

/**
 * Backyard React List Selector Multiple
 *
 * @internal
 *
 * Multiple selection list selection handler
 */
const ListSelectorMultiple: BDSForwardRef<
    ListSelectorMultipleProps & { ref?: any }
> = React.forwardRef<ListSelectorMultipleRef, ListSelectorMultipleProps>(
    function ListSelectorMultiple(
        {
            children,
            className,
            buttonProps,
            options: optionsProp = [],
            value: valueProp,
            defaultValue = [],
            enableGlobalKeyDown = false,
            onChange,
            onMouseDown,
            shape,
            ...props
        },
        ref,
    ) {
        // Get options from either `options` or `children`
        const options = getOptions(optionsProp, children)

        // Focused option
        const [focusedOption, setFocusedOptionState] = React.useState(-1)

        // Holds the current value
        const [value, setValue] = React.useState(valueProp || defaultValue)
        // Holds the previous value, set to initial value
        const [previousValue, setPreviousValue] = React.useState(valueProp || defaultValue)

        const innerRef = useForwardedRef<ListSelectorMultipleRef>(ref)

        // Hold ref for each toggle
        const refs = React.useRef(
            [...new Array(options ? options.length : React.Children.count(children))].map<
                React.RefObject<CheckboxRef>
            >(React.createRef),
        )

        /**
         * Handles the component change interaction
         *
         * @param event - change event
         * @param info - info object from `ListSelector`
         */
        const handleChange = (event: React.MouseEvent, info: string[]) => {
            // Persist event propagation
            persistSyntheticEvent(event)

            // Set new value
            setValue(info)
        }

        /**
         * Logic to handle setting currently focused option
         *
         * @param type
         */
        const setFocusedOption = (type) => {
            // Set new focused option
            setFocusedOptionState((option) => {
                // Clamp new option
                const newOption = clampOption(type, option, options)
                // Look ahead to next option for scrolling
                const lookaheadOption = clampOption(type, newOption, options)

                // Get lookahead option
                const toggleButton = refs.current?.[lookaheadOption]?.current
                    ?.parentElement as ToggleButtonRef

                // Scroll option into view
                toggleButton?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                })

                return newOption
            })
        }

        /**
         * Handle focused option click
         */
        const selectFocusedOption = () => {
            // If focused option is defined
            if (focusedOption >= 0) {
                // Click current focused option
                refs.current?.[focusedOption]?.current?.click()
            }
        }

        useGlobalKeyDown(enableGlobalKeyDown, {
            [keycode.ArrowUp]: () => setFocusedOption('decrement'),
            [keycode.ArrowDown]: () => setFocusedOption('increment'),
            [keycode.Enter]: () => selectFocusedOption(),
            [keycode.Space]: () => selectFocusedOption(),
            [keycode.Home]: () => setFocusedOption('first'),
            [keycode.End]: () => setFocusedOption('last'),
        })

        // Side effect for when `value` changes...
        React.useEffect(() => {
            // If value is different,
            if (typeof valueProp !== 'undefined' && !arrayEquals(value, valueProp)) {
                // Set new option
                setValue(valueProp)
            }
        }, [valueProp])

        // Handle creation of toggles on a given level of options
        const createToggles = (options, level) => (
            // Map each option...
            options.map(
                ({ 
                    label, 
                    value: toggleValue, 
                    options, 
                    // eslint-disable-next-line no-useless-computed-key
                    ['data-option-id']: optionId, 
                    checkboxProps, 
                    ...toggleButtonProps 
                }, index) => {
                    // Calculate lower level values for level
                    const values = options?.length > 0
                        ? flattenOptions(options, optionId).map((option) => option.value).filter(Boolean)
                        : toggleValue

                    // If more than one option,
                    if (options?.length > 0) {
                        // Calculate checked and indeterminate state of group
                        const checked = values.some((val) => value.includes(val))
                        const indeterminate = checked && !values.every((val) => value.includes(val))

                        // Calculate padding left for level
                        const paddingLeft = `calc(var(--bds-sizes-size-32) * ${level} + var(--bds-sizes-size-16))`

                        // Handle click even for the `OptionGroup`
                        const handleClick = () => {
                            // Fix race even condition...
                            // After a short time,
                            setTimeout(() => {
                                // Set the new value to...
                                setValue((value) => {
                                    // If some values selected,
                                    if (values.some((val) => value.includes(val))) {
                                        // Filter out already selected values
                                        return value.filter((val) => !values.includes(val))
                                    }

                                    // Else, concat all grouped values
                                    return value.concat(values)
                                })
                            }, 10)
                        }

                        // Render the option group
                        return (
                            <React.Fragment
                                key={`${level}-${index}`}
                            >
                                <ToggleButton
                                    className={classNames({ focus: focusedOption === index })}
                                    state="unselected"
                                    shape="squared"
                                    onClick={handleClick}
                                    value={null}
                                    style={{
                                        paddingLeft
                                    }}
                                    {...toggleButtonProps}
                                >
                                    <Checkbox
                                        className="list-checkbox"
                                        checked={checked}
                                        indeterminate={indeterminate}
                                        tabIndex={-1}
                                        shape={shape}
                                        {...checkboxProps}
                                        ref={refs.current?.[index]}
                                    />
                                    <span className="list-label">{label}</span>
                                </ToggleButton>
                                <ul className="list-options-level">
                                    {createToggles(options, level + 1)}
                                </ul>
                            </React.Fragment>
                        )
                    }

                    // Else, render the toggle
                    return (
                        <ToggleButton
                            key={`${level}-${index}`}
                            className={classNames({ focus: focusedOption === index })}
                            value={toggleValue}
                            state="unselected"
                            shape="squared"
                            style={{
                                paddingLeft: `calc(var(--bds-sizes-size-32) * ${level} + var(--bds-sizes-size-16))`
                            }}
                            {...toggleButtonProps}
                        >
                            <Checkbox
                                className="list-checkbox"
                                checked={value.indexOf(`${toggleValue}`) >= 0}
                                tabIndex={-1}
                                shape={shape}
                                {...checkboxProps}
                                ref={refs.current?.[index]}
                            />
                            <span className="list-label">{label}</span>
                        </ToggleButton>
                    )
                }
            )
        )

        // Side effect for when `value` changes...
        React.useEffect(() => {
            // If `onChange` defined,
            if (onChange && !arrayEquals(value, previousValue)) {
                // Trigger `onChange`
                onChange(null, value)
                // Set new previous value
                setPreviousValue(value)
            }
        }, [value])

        // Calculate toggle button children for popover
        const toggles = createToggles(options, 0)

        return (
            <ListSelectorMultipleWrapper
                className={classNames(
                    'list',
                    'list-selector',
                    'multiple-selector',
                    `shape--${shape}`,
                    className,
                )}
                onChange={handleChange}
                value={value}
                buttonProps={{
                    ...buttonProps,
                    variant: 'ghost',
                    color: 'unselected',
                }}
                selectedButtonProps={{
                    variant: 'ghost',
                    color: 'unselected',
                }}
                shape={shape}
                {...props}
                ref={innerRef}
            >
                <ul className="list-selector-list">
                    {toggles}
                </ul>
            </ListSelectorMultipleWrapper>
        )
    },
)

type ListSelectorMultipleRef = ToggleRef

type ListSelectorMultipleOverrideProps =
    | 'onChange'
    | 'defaultValue'
    | 'value'
    | 'children'
    | 'width'

interface ListSelectorMultipleProps extends Omit<ToggleProps, ListSelectorMultipleOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[]
    /**
     * Default value of the multiselect
     */
    defaultValue?: string[]
    /**
     * Enables the global key down listener to listen for arrow key interactions
     */
    enableGlobalKeyDown?: boolean
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.MouseEvent, value: string[]) => void
    /**
     * Options to define dropdown children from
     *
     * Required if `children` not defined.
     * Overrides `children` if defined.
     */
    options?: ListSelectorOption[]
    /**
     * Controlled value for dropdown
     */
    value?: string[]
    /**
     * Width override for ListWrapper
     * Can be given a token (such as `size_128`) or other value (like `15rem`)
     */
    width?: keyof BackyardToken['sizes'] | string
}

export { ListSelectorMultiple }

export type { ListSelectorMultipleRef, ListSelectorMultipleProps }

export default ListSelectorMultiple
