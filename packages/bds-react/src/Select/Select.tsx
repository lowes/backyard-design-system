import * as React from 'react'
import classNames from 'classnames'

import TriangleUp from '@lowes-tech/bds-icons/TriangleUp'
import TriangleDown from '@lowes-tech/bds-icons/TriangleDown'

import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import useRandomId from '../utils/hooks/useRandomId'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import { useFormControl } from '../FormControl/hooks/useFormControl'

import type { OptionGroupProps } from './OptionGroup'
import Option from './Option'
import type { OptionProps } from './Option'

import SelectWrapper from './styles/SelectWrapper'
import SelectFieldset from './styles/SelectFieldset'
import SelectFormControl from './styles/SelectFormControl'
import SelectLabel from './styles/SelectLabel'

/**
 * Get children of `Select` as `Option`s
 *
 * @param {React.Children} children - children prop of `Select`
 * @param {bool} disabled - disabled prop of `Select`
 */
const getOptionChildren = (children: React.ReactNode, disabled = false): React.ReactNode[] =>
    React.Children.map(children, (child) =>
        React.isValidElement(child)
            ? typeof child.props.children === 'string' ||
              typeof child.props.children === 'undefined'
                ? React.cloneElement(child, { disabled: child.props.disabled || disabled })
                : getOptionChildren(child.props.children, child.props.disabled)
            : null,
    ).filter(Boolean)

/**
 * Get children as options from `Select` and map them into array data structure
 *
 * @param {React.Children} children - children prop of `Select`
 */
const getOptions = (children: React.ReactNode): SelectOptionInfo[] =>
    React.Children.toArray(getOptionChildren(children)).map((child, index) =>
        React.isValidElement(child)
            ? {
                  index,
                  value: child.props.value,
                  text: child.props.label || child.props.children,
                  label: child.props.label || child.props.children,
                  disabled: child.props.disabled,
              }
            : null,
    )

/**
 * Get single option data structure from children
 *
 * @param {React.Children} children - children prop of `Select`
 * @param {string} value - value to search for
 */
const getOption = (children: React.ReactNode, value: string | number): SelectOptionInfo => {
    const options = getOptions(children)

    const selectedOption = options.filter((option) => option.value === value)[0]

    return selectedOption
}

const getChildren = (options: SelectProps['options'], children: SelectProps['children']) =>
    options
        ? options.map(({ label: optionLabel, ...option }, index) => (
              <Option key={index} {...option}>
                  {optionLabel}
              </Option>
          ))
        : children

/**
 * Returns true if option is defined with value that is
 *  * not undefined, and
 *  * not null, and
 *  * not an empty string
 *
 * @param {SelectOptionInfo} option - Option to validate
 * @return {Boolean}
 */
 const isComplete = (option: SelectOptionInfo): boolean =>
 typeof option?.value !== 'undefined' && option?.value !== null && option?.value !== ''

/**
 * Backyard React Select
 *
 * Select component that uses native option selection; see `Dropdown` for a custom selector...
 *
 * ```
 *  <Select>
 *      <Option value="1">Option 1</Option>
 *      <Option value="2">Option 2</Option>
 *      <Option value="3">Option 3</Option>
 *  </Select>
 * ```
 *
 * Can group options via `OptionGroup` and allow native selection to handle visuals
 *
 * ```
 *  <Select>
 *      <OptionGroup
 *          label="Group 1"
 *      >
 *          <Option value="11">Option 1</Option>
 *          <Option value="12">Option 2</Option>
 *          <Option value="13">Option 3</Option>
 *      </OptionGroup>
 *      <OptionGroup
 *          label="Group 2"
 *      >
 *          <Option value="21">Option 1</Option>
 *          <Option value="22">Option 2</Option>
 *          <Option value="23">Option 3</Option>
 *      </OptionGroup>
 *  </Select>
 * ```
 *
 * To include helper text, wrap in `FormControl` and use `FormHelperText` to sync visual states
 *
 * ```
 *  <FormControl>
 *      <Select>
 *          <Option value="1">Option 1</Option>
 *          <Option value="2">Option 2</Option>
 *          <Option value="3">Option 3</Option>
 *      </Select>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */
const Select: BDSForwardRef<SelectProps> = React.forwardRef<SelectRef, SelectProps>(function Select(
    {
        children: childrenProp,
        className,
        defaultValue,
        disabled: disabledProp = false,
        iconOpened: iconOpenedProp = <TriangleUp />,
        iconClosed: iconClosedProp = <TriangleDown />,
        id: idProp,
        interaction: interactionProp = false,
        stacked = false,
        label,
        onChange,
        onClick,
        onKeyDown,
        onFocus,
        onBlur,
        onTouchStart,
        onTouchEnd,
        open: openProp = false,
        readOnly = false,
        shape: shapeProp, // = 'rounded',
        state: stateProp = 'default',
        itemBefore,
        size = 'medium',
        value,
        options,
        wrapperProps,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Select',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Calculate `children` if `options` is given
    const children = getChildren(options, childrenProp)

    // Memoized context props...
    const context = React.useMemo(
        () => ({
            disabled: disabledProp,
            interaction: (defaultValue || value) ? 'completed' : 'incomplete',
            open: openProp,
            state: stateProp,
        }),
        [disabledProp, interactionProp, openProp, stateProp],
    )

    // Assign random id to input
    // if id not provided
    // Accessibilty for label -> input
    const id = useRandomId(idProp)

    // Get controlled option from children, if defined
    const controlledOption: SelectOptionInfo = getOption(children, value)
    // Get default option from children, if defined
    const defaultOption = getOption(children, defaultValue) || getOptions(children)[0]
    // Hold current option state
    const [option, setOption] = React.useState(controlledOption || defaultOption)
    // Hold current interaction state
    const [interaction, setInteraction] = React.useState(
        (defaultValue || value) ? 'completed' : 'incomplete'
    )
    // Hold completion state
    const [completed, setCompleted] = React.useState(
        isComplete(option) ? 'completed' : 'incomplete',
    )
    const [selectLabel, setSelectLabel] = React.useState(label)

    // Hold `input` ref
    const innerRef = useForwardedRef(ref)

    // Uses FormControl
    const control = useFormControl({
        disabled: context.disabled,
        state: context.state,
        indent: 'size_16',
    })

    // Allow FormControl to override props
    const state = control.state || context.state
    const disabled = control.disabled || context.disabled

    /**
     * Force event.target to `innerRef`, the text `input`
     *
     * @param {Event} event - DOM Event
     */
    function getEvent<E>(event: E) {
        return event
    }

    /**
     * Clamp interaction to `active` when
     * external component provides open flag
     *
     * @param {string} interaction - interaction to set
     */
    function dispatchInteraction(action = context.interaction) {
        // If open,
        if (context.open) {
            // Clamp interaction to 'active'
            setInteraction('active')
        } else {
            // Else, set interaction
            setInteraction(action)
        }
    }

    /**
     * Handles `onChange` event for `input`
     *
     * @param {Event} event - DOM Event
     */
    const handleChange = (event: React.ChangeEvent<SelectRef>) => {
        // Persist event
        persistSyntheticEvent(event)

        // Set current option to new selected option
        setOption(getOption(children, event.target.value))
        // Set completed if necessary
        setCompleted(event.target.value ? 'completed' : 'incomplete')
        setInteraction(event.target.value !== '' ? 'completed' : 'incomplete')
        // Set focused interaction
        dispatchInteraction('focused')

        const selectOption = getOption(children, event.target.value)

        if (stacked) {
            const LabelElement = () => (
                <div className='label-element'>
                    <span className='select--label'>{label}</span>
                    <span className='select--value'>{selectOption.label}</span>
                </div>
            )

            setSelectLabel(<LabelElement />)
        }

        // If `onChange` prop defined,
        if (typeof onChange === 'function') {
            // Trigger function
            onChange(
                getEvent(event) as React.ChangeEvent<SelectRef>,
                selectOption,
            )
        }
    }

    /**
     * Handles `onClick` event for `input`
     *
     * @param {Event} event - DOM Event
     */
    const handleClick = (event: React.MouseEvent<SelectRef>) => {
        // Persist event
        persistSyntheticEvent(event)

        // Set active interaction
        dispatchInteraction('active')

        // If `onClick` prop defined,
        if (typeof onClick === 'function') {
            // Trigger function
            onClick(getEvent<React.MouseEvent<SelectRef>>(event), option)
        }
    }

    /**
     * Handles `onKeyDown` event for `input`
     *
     * @param {Event} event - DOM Event
     */
    const handleKeyDown = (event: React.KeyboardEvent<SelectRef>) => {
        // Persist event
        persistSyntheticEvent(event)

        // Get key id
        const key = event.key || event.which

        // If space, up arrow, or down arrow pressed,
        if ([' ', 32, 'ArrowUp', 38, 'ArrowDown', 40, 'Enter'].indexOf(key) >= 0) {
            // Set active interaction
            dispatchInteraction('active')
        }

        // If `onKeyDown` prop defined,
        if (typeof onKeyDown === 'function') {
            // Trigger function
            onKeyDown(getEvent<React.KeyboardEvent<SelectRef>>(event), option)
        }
    }

    /**
     * Handles `onFocus` event for `input`
     *
     * @param {Event} event - DOM Event
     */
    const handleFocus = (event: React.FocusEvent<SelectRef>) => {
        // Persist event
        persistSyntheticEvent(event)

        // Set focused interaction
        dispatchInteraction('focused')

        // If `onFocus` prop defined,
        if (typeof onFocus === 'function') {
            // Trigger function
            onFocus(getEvent<React.FocusEvent<SelectRef>>(event), option)
        }
    }

    /**
     * Handles `onBlur` event for `input`
     *
     * @param {Event} event - DOM Event
     */
    const handleBlur = (event: React.FocusEvent<SelectRef>) => {
        // Persist event
        persistSyntheticEvent(event)

        if (event.target.value !== '' 
            || (defaultOption && (defaultOption.disabled && defaultOption.text))) {
            setInteraction('completed')
        } else {
            dispatchInteraction('incomplete')
        }

        // Set completed if necessary
        setCompleted(isComplete(option) ? 'completed' : 'incomplete')
        // Remove interaction
        

        // If `onBlur` prop defined,
        if (typeof onBlur === 'function') {
            // Trigger function
            onBlur(getEvent<React.FocusEvent<SelectRef>>(event), option)
        }
    }

    // Event handlers for mobile space
    const mobileEventHandlers = {
        /**
         * Handles `onTouchStart` for input
         *
         * For IOS devices, Safari will display a native
         * select overlay on touch start. Instead, we want
         * the touch start event to function like the click
         * event to display native select when applicable.
         *
         * @param {Event} event - DOM event
         */
        onTouchStart: (event: React.TouchEvent<SelectRef>) => {
            // Prevent native touch overlays
            event.preventDefault()

            // Click event
            handleClick(event as unknown as React.MouseEvent<SelectRef>)

            // If `onTouchStart` prop defined,
            if (typeof onTouchStart === 'function') {
                // Trigger function
                onTouchStart(getEvent<React.TouchEvent<SelectRef>>(event))
            }
        },
        /**
         * Handles `onTouchEnd` for input
         *
         * For IOS devices, Safari will display a native
         * select overlay on touch end. This prevents that
         * when the select is read only. When the select is
         * not, it will function normally and display the
         * native select overlay.
         *
         * @param {Event} event - DOM event
         */
        onTouchEnd: (event: React.TouchEvent<SelectRef>) => {
            // If read only,
            if (readOnly) {
                // Prevent native touch overlays
                event.preventDefault()
            }

            // Blur input
            handleBlur(event as unknown as React.FocusEvent<SelectRef>)

            // If `onTouchEnd` prop defined,
            if (typeof onTouchEnd === 'function') {
                // Trigger function
                onTouchEnd(getEvent<React.TouchEvent<SelectRef>>(event))
            }
        },
    }

    // Select value props, if defined
    const valueProps = {
        // If `value` prop defined, use `value` as controlled component
        ...(typeof value !== 'undefined' ? { value: option?.value } : {}),
        // If `value` prop is undefined, use `defaultValue` as uncontrolled component
        ...(typeof value === 'undefined' ? { defaultValue: defaultOption?.value } : {}),
    }

    // Clone provided opened icon
    const iconOpened = React.cloneElement(iconOpenedProp, {
        className: classNames('select--arrow', 'item--after', iconOpenedProp.props.className),
    })

    // Clone provided closed icon
    const iconClosed = React.cloneElement(iconClosedProp, {
        className: classNames('select--arrow', 'item--after', iconClosedProp.props.className),
    })

    // Side effect for when `option` changes...
    React.useEffect(() => {
        // Calculate whether input was completed
        setCompleted(isComplete(option) ? 'completed' : 'incomplete')
    }, [option])
    // Side effect for when `value` changes...
    React.useEffect(() => {
        // If `value` is defined and different,
        if (typeof value !== 'undefined' && value !== option?.value) {
            // Set new option
            setOption(getOption(children, value))
        }
    }, [value])
    // Side effect for when `options` changes...
    React.useEffect(() => {
        // If `value` is defined and different,
        if (typeof value !== 'undefined' && value !== option?.value) {
            // Set new option
            setOption(getOption(children, value))
        }
    }, [options])
    // Side effect for when `open` prop changes...
    React.useEffect(() => {
        // Dispatch active interaction
        dispatchInteraction(openProp ? 'active' : 'completed')
    }, [openProp])
    /**
     * Layout:
     *
     *  <div wrapper>
     *      <select>
     *          <option 1>
     *          <option 1>
     *          ...
     *      </select>
     *      <div container>
     *          <icon (icon before) />
     *          <span>
     *              <label />
     *              <span value />
     *          </span>
     *          <arrow (icon after) />
     *      </div>
     *  </div>
     */

    return (
        <SelectWrapper
            {...wrapperProps}
            className={classNames(
                'backyard',
                'select--wrapper',
                `shape--${shape}`,
                `size--${size}`,
                state !== 'default' ? `state--${state}` : '',
                itemBefore ? 'item--before' : '',
                stacked ? 'stacked' : '',
                wrapperProps ? wrapperProps.className : ''
            )}
            readOnly={readOnly}
        >
            <SelectLabel 
                htmlFor={id}
                className={classNames(
                    'input-label',
                    `size--${size}`,
                    `state--${state}`,
                    completed === 'incomplete' ? 'incomplete' : 'completed',
                    interaction ? `interaction--${interaction}` : '',
                    itemBefore ? 'with-icon-before' : '',
                )}
            >
                {(typeof(label) === 'object') ? label : selectLabel}
            </SelectLabel>

            <SelectFormControl
                className={classNames(
                    'form-control',
                    `shape--${shape}`,
                    `size--${size}`,
                    state !== 'default' ? `state--${state}` : '',
                    interaction ? `interaction--${interaction}` : '',
                )} 
            >
                {
                    itemBefore
                        ? React.cloneElement(itemBefore, {
                            className: classNames(
                                itemBefore.props.className, 'item--before'),
                        })
                        : null
                }

                <select
                    id={id}
                    aria-label={id}
                    className={classNames('select--input', className, interaction)}
                    disabled={disabled || null}
                    data-invalid={state === 'error' || null}
                    aria-invalid={state === 'error' || null}
                    ref={innerRef}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                    {...mobileEventHandlers}
                    {...valueProps}
                    {...props}
                >
                    {children}
                </select>

                {interaction === 'active' ? iconOpened : iconClosed}

                <SelectFieldset
                    className={classNames(
                        'text-input-fieldset',
                        openProp ? 'open' : 'closed',
                        completed === 'incomplete' ? 'incomplete' : 'completed',
                        interaction ? `interaction--${interaction}` : '',
                        state !== 'default' ? `state--${state}` : '',
                        `size--${size}`,
                    )}
                    aria-hidden
                >
                    <legend>
                        <span>{(typeof(label) === 'object') ? label : selectLabel}</span>
                    </legend>
                </SelectFieldset>
            </SelectFormControl>
        </SelectWrapper>
    )
})

type SelectRef = HTMLSelectElement

type SelectOptionInfo = {
    index: number
    value: OptionProps['value']
    text: OptionProps['children'] // same as label
    disabled: OptionProps['disabled']
    label: OptionProps['children'] // same as text
}

interface SelectOption {
    label?: string
    value?: string | number
    disabled?: boolean
    options?: SelectOption[]
    [key: string]: any
}

type SelectOverrideProps = 'onChange' | 'onClick' | 'onKeyDown' | 'onFocus' | 'onBlur' | 'size' | 'label'

interface SelectProps extends BackyardBaseProps<SelectRef, SelectOverrideProps> {
    /**
     * List of options in declarative `Option` or `OptionGroup` elements
     *
     * Is required if `options` is not defined,
     * Will be overridden by `options` if both defined.
     */
    children?: React.ReactElement<OptionGroupProps>[] | React.ReactElement<OptionProps>[]
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean
    /**
     * Default value of input
     */
    defaultValue?: string | number
    /**
     * Icon displayed when opened
     */
    iconOpened?: React.ReactElement
    /**
     * Icon displayed when closed
     */
    iconClosed?: React.ReactElement
    /**
     * Initial interaction given to component
     */
    interaction?: boolean | string
    /**
     * Label of the `Select` component
     */
    label?: string | React.ReactElement
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared'
    /**
     * Size of component
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small'
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success'
    /**
     * Type of text input
     */
    type?: string

    stacked?: boolean
    /**
     * `onChange` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onChange?: (event: React.ChangeEvent<SelectRef>, option: SelectOptionInfo) => void
    /**
     * `onClick` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onClick?: (event: React.MouseEvent<SelectRef>, option: SelectOptionInfo) => void
    /**
     * `onKeyDown` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onKeyDown?: (event: React.KeyboardEvent<SelectRef>, option: SelectOptionInfo) => void
    /**
     * `onFocus` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onFocus?: (event: React.FocusEvent<SelectRef>, option: SelectOptionInfo) => void
    /**
     * `onBlur` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onBlur?: (event: React.FocusEvent<SelectRef>, option: SelectOptionInfo) => void
    /**
     * Data-driven list of options to provide to select
     *
     * Is required if `children` not defined,
     * Will override `children` if both defined.
     */
    options?: SelectOption[]
    /**
     * Controlled value of the select input
     */
    value?: string | number
    /**
     * Wrapper props object for text input.
     * Useful for setting the style of text input
     * visual container instead of input directly
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>

    itemBefore?: React.ReactElement
}

Select.bdsName = 'Select'

export { Select }

export type { SelectProps, SelectRef, SelectOptionInfo, SelectOption }

export default Select
