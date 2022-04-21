import * as React from 'react'
import classNames from 'classnames'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import ClickAwayListener from '../ClickAwayListener'
import { Popover, usePopover } from '../Popover'
import type { PopoverProps } from '../Popover'
import { arrayEquals, getOptions, flattenOptions } from '../ListSelector/utils'
import { ListSelector } from '../ListSelector'
import {
    ListSelectorMultiple,
    ListSelectorMultipleProps,
} from '../ListSelector/ListSelectorMultiple'
import Select from '../Select'
import type { SelectProps, SelectRef, SelectOption, OptionProps } from '../Select'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import MultiselectWrapper from './styles/MultiselectWrapper'
import { ToggleProps } from '../Toggle'

/**
 * Misc. horizontal rule component
 *
 * Used for separating popover content
 */
const Hr = () => (
    <div
        style={{
            backgroundColor: 'var(--bds-color-border-subdued)',
            height: 'var(--bds-sizes-size-1)',
            margin: 'var(--bds-sizes-size-4) var(--bds-sizes-size-16)',
        }}
    />
)

/**
 * Backyard React Multiselect
 *
 * Customized popover for multiple variant of `Select`
 *
 * Examples:
 *
 * - [Multiselect](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Multiselect)
 *
 * API:
 *
 * - [Multiselect API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Multiselect)
 *
 * - [Option API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Option)
 */
const Multiselect: BDSForwardRef<MultiselectProps> = React.forwardRef<
    MultiselectRef,
    MultiselectProps
>(function Multiselect(
    {
        children,
        openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
        closeKeys = ['Escape'],
        delayClose = 300,
        delayOpen = 10,
        open: openProp = false,
        options: optionsProp = [],
        listSelectorProps = {},
        popoverProps = {},
        popperProps = {},
        state: stateProp = 'default',
        shape: shapeProp, // = 'rounded',
        value: valueProp,
        defaultValue = [],
        maxHeight,
        label = 'Label',
        id,
        popoverContent,
        noSelectAll = false,
        onChange,
        onOpen,
        onClose,
        onMouseDown,
        onKeyDown,
        onBlur,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Multiselect',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Get options from either `options` or `children`
    const options = getOptions(optionsProp, children)

    // Calculate and hold flat options and their values
    const flatOptions = flattenOptions(options, -1)
    const values = flatOptions.map((option) => option.value).filter(Boolean)

    // Holds the current value of the dropdown
    const [value, setValue] = React.useState(valueProp || defaultValue)
    // Holds the native picker ref for the anchor point of the popover
    const forwardRef = useForwardedRef(ref)
    // Holds the current picker element set by the native picker for the anchor
    const [referenceElement, setReferenceElement] = React.useState<SelectRef>(null)
    // Holds the list reference inside the popover
    const listRef = React.useRef(null)
    // Holds state of the current state of the native input (either 'error' or 'default')
    const [state, setState] = React.useState(stateProp)
    // Hold the container ref
    const containerRef = React.useRef(null)

    // Hold the interaction state of the component
    const [interaction, setInteraction] = React.useState('enabled')

    // Use Popover hook for open/close state handling
    const {
        open,
        handleOpen,
        handleClose,
        handleBlur,
        handleMouseDown,
        handleKeyDown,
        clearPopoverTimeout,
    } = usePopover({
        containerRef,
        referenceElement,
        delayClose,
        delayOpen,
        closeKeys,
        openKeys,
        open: openProp,
        onOpen,
        onClose,
        onKeyDown,
        onBlur,
        onMouseDown,
    })

    /**
     * Handles the component change interaction
     *
     * @param event - change event
     * @param info - info object from either `Select` or `ListSelector`
     */
    const handleChange = (event: React.MouseEvent, info: string[]) => {
        // Set new value
        setValue(info)

        // If `onChange` defined,
        if (onChange) {
            // Trigger `onChange`
            onChange(event, info)
        }

        setInteraction('completed')

        // Cancel close to keep popover open
        clearPopoverTimeout('close')
    }

    // Side effect for when `value` changes...
    React.useEffect(() => {
        // If value is different,
        if (typeof valueProp !== 'undefined' && !arrayEquals(value, valueProp)) {
            // Set new option
            setValue(valueProp)
        }
    }, [valueProp])
    // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes
    React.useEffect(() => setReferenceElement(forwardRef.current), [forwardRef])
    // Side effect for when the `state` prop is updated externally
    React.useEffect(() => setState(stateProp), [stateProp])

    // Calculate value and label of select
    const selectValue = (value || []).join(', ')
    const selectLabel = `${value.length} Selected`

    // Select option is recalculated depending on value
    const selectOptions = [
        {
            value: selectValue,
            label: selectLabel,
            id: selectLabel,
        },
    ]

    // Calculate whether some or every value is selected
    const every = values.every((val) => value.includes(val))
    const some = values.some((val) => value.includes(val))

    /**
     * Function for handling toggling all options and suboptions
     */
    const toggleAll = () => (!some ? setValue(values) : setValue([]))

    // Memoize content above popover
    const contentAbove = React.useMemo(
        () =>
            // If popover content above defined or select all disabled,
            // Render content above with Hr
            popoverContent?.above || !noSelectAll ? (
                <div className="content-above">
                    {popoverContent?.above}
                    {!noSelectAll ? (
                        <ListSelectorMultiple
                            options={[
                                {
                                    label: 'All',
                                    value: 'all',
                                    checkboxProps: {
                                        checked: some,
                                        indeterminate: some && !every,
                                    },
                                },
                            ]}
                            onChange={toggleAll}
                        />
                    ) : null}
                    <Hr />
                </div>
            ) : null,
        [popoverContent, noSelectAll, some, every],
    )

    // Memoize content below popover
    const contentBelow = React.useMemo(
        () =>
            // If popover content below defined,
            // Render content below with Hr
            popoverContent?.below ? (
                <div className="content-below">
                    <Hr />
                    {popoverContent?.below}
                </div>
            ) : null,
        [popoverContent],
    )

    /**
     * Layout:
     *  <div> // click away listener listens for any click outside of this element
     *      <Select />
     *      <Popover> // appears open only on desktop
     *          <ListSelector />
     *      </Popover>
     *  </div>
     */
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <MultiselectWrapper
                className={classNames('multiselect', 'multiselect--wrapper', `shape--${shape}`)}
                maxHeight={maxHeight}
                ref={containerRef}
            >
                <Select
                    key="multiselect"
                    id={id}
                    readOnly={Boolean(referenceElement)}
                    className={classNames(value.length > 0 ? 'completed' : '', open ? 'focus' : '')}
                    options={[{ label: '', value: '' }, ...selectOptions]}
                    onClick={handleOpen}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                    onMouseDown={handleMouseDown}
                    state={state}
                    interaction={interaction}
                    label={label}
                    value={selectValue || ''}
                    shape={shape}
                    open={open}
                    {...props}
                    ref={forwardRef}
                />
                {referenceElement ? (
                    <Popover
                        disablePortal
                        keepMounted
                        open={open}
                        anchorEl={referenceElement}
                        offset={[0, 0]}
                        pop={
                            <div className={classNames('popover--wrapper', `shape--${shape}`)}>
                                {contentAbove}
                                <ListSelector
                                    multiple
                                    onChange={handleChange}
                                    value={value}
                                    options={options}
                                    enableGlobalKeyDown={open}
                                    shape={shape}
                                    {...listSelectorProps}
                                    ref={listRef}
                                />
                                {contentBelow}
                            </div>
                        }
                        {...popoverProps}
                        {...popperProps}
                    />
                ) : null}
            </MultiselectWrapper>
        </ClickAwayListener>
    )
})

type MultiselectRef = SelectRef

interface MultiselectOption extends SelectOption {}

type MultiselectPopoverContent = {
    /**
     * Content above the `ListSelector`
     */
    above?: React.ReactElement
    /**
     * Content below the `ListSelector`
     */
    below?: React.ReactElement
}

type MultiselectOverrideProps =
    | 'onChange'
    | 'onKeyDown'
    | 'onBlur'
    | 'defaultValue'
    | 'value'
    | 'children'
    | 'size'
    | 'ref'

interface MultiselectProps extends Omit<SelectProps & ToggleProps, MultiselectOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[]
    /**
     * Event keys that will trigger a close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][]
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][]
    /**
     * Default value of the multiselect
     */
    defaultValue?: string[]
    /**
     * Amount in milliseconds to delay closing the popover
     */
    delayClose?: number
    /**
     * Amount in milliseconds to delay opening the popover
     */
    delayOpen?: number
    /**
     * Whether or not popover will automatically close when
     * user selected a value from the list
     */
    disableCloseOnSelect?: boolean
    /**
     * List Selector props to override list selector with
     */
    listSelectorProps?: ListSelectorMultipleProps
    /**
     * Popper props to override popover with
     */
    popoverProps?: Partial<PopoverProps>
    /**
     * Popper props to override popover with
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<PopoverProps>
    /**
     * Set maximum popover height in `rem`
     *
     * Defaults to showing five and a half options
     */
    maxHeight?: string
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.MouseEvent, value: string[]) => void
    /**
     * `onKeyDown` trigger event for
     * when the user presses a key on the `select`
     */
    onKeyDown?: (event: React.KeyboardEvent<SelectRef>) => void
    /**
     * `onBlur` trigger event for when the
     * user blurs focus on the `select`
     */
    onBlur?: (event: React.FocusEvent<SelectRef>) => void
    /**
     * `onOpen` trigger function for when the calendar popover opens
     */
    onOpen?: () => void
    /**
     * `onClose` trigger function for when the calendar popover closes
     */
    onClose?: () => void
    /**
     * `onMouseDown` trigger function
     */
    onMouseDown?: () => void
    /**
     * State of the native date picker
     * Either 'error' or 'default'
     */
    state?: SelectProps['state']
    /**
     * Shape of the input and popover
     */
    shape?: 'rounded' | 'squared'
    /**
     * Options to define dropdown children from
     *
     * Required if `children` not defined.
     * Overrides `children` if defined.
     */
    options?: MultiselectOption[]
    /**
     * Size of component
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small'
    /**
     * Controlled value for dropdown
     */
    value?: string[]
    /**
     * Label of the multiselect
     */
    label?: string
    /**
     * Whether or not the multiselect popover is open
     */
    open?: boolean
    /**
     * `id` of the select input
     */
    id?: string
    /**
     * Content above and/or below the `ListSelector` in the Popover
     */
    popoverContent?: MultiselectPopoverContent
    /**
     * Whether or not to display the select all toggle
     *
     * Enabled by default
     */
    noSelectAll?: boolean
}

Multiselect.bdsName = 'Multiselect'

export { Multiselect }

export type { MultiselectRef, MultiselectProps, MultiselectPopoverContent }

export default Multiselect
