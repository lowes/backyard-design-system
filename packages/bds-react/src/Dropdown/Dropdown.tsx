import * as React from 'react'
import { isIOS } from 'react-device-detect'
import classNames from 'classnames'

import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import ClickAwayListener from '../ClickAwayListener'
import { Popover, usePopover } from '../Popover'
import type { PopoverProps } from '../Popover'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import ListSelector from '../ListSelector'
import type { ListOptionInfo, ListSelectorProps, ListSelectorOption } from '../ListSelector'
import Select from '../Select'
import type { SelectOptionInfo, SelectProps, SelectRef, SelectOption, OptionProps } from '../Select'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import DropdownWrapper from './styles/DropdownWrapper'

/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for dropdown
 * @param children - children `Option`s for dropdown
 */
const getOptions = (options: DropdownProps['options'], children: DropdownProps['children']) =>
    // If options are defined,
    options?.length > 0
        ? // Then use options format
          options.map((option) => ({
              tabIndex: '-1',
              ...option,
          }))
        : // Else, map children props to `options` format
        children
        ? React.Children.map(children, (child) => ({
              label: child?.props?.children as string,
              tabIndex: '-1',
              ...child?.props,
          }))
        : []

/**
 * Backyard React Dropdown
 *
 * Customized popover for `Select`
 *
 * Examples:
 *
 * - [Dropdown](https://backyard.lowes.com/Components/Dropdown)
 *
 * API:
 *
 * - [Dropdown API](https://backyard.lowes.com/ComponentsAPI/Dropdown)
 *
 * - [Option API](https://backyard.lowes.com/ComponentsAPI/Option)
 */
const Dropdown: BDSForwardRef<DropdownProps> = React.forwardRef<DropdownRef, DropdownProps>(
    function Dropdown(
        {
            children,
            openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
            closeKeys = ['Escape'],
            label: labelProp,
            delayClose = 300,
            delayOpen = 10,
            disableCloseOnSelect = false,
            disabled = false,
            stacked = false,
            open: openProp = false,
            options: optionsProp = [],
            listSelectorProps = {},
            maxHeight,
            popoverProps = {},
            popperProps = {},
            state: stateProp = 'default',
            shape: shapeProp, // = 'rounded',
            value: valueProp,
            defaultValue = '',
            onClick,
            onChange,
            onOpen,
            onClose,
            onKeyDown,
            onBlur,
            optionsLabel = '',
            wrapperProps = {},
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme({
            validate: true,
            name: 'Dropdown',
        })

        const { isDesktop } = theme
        const { shape: shapeContext } = theme.context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Get options from either `options` or `children`
        const options = getOptions(optionsProp, children) as DropdownOption[]

        // Holds the current value of the dropdown
        const [value, setValue] = React.useState<DropdownProps['value']>(
            (valueProp || defaultValue) as DropdownProps['value'],
        )
        // Holds the native picker ref for the anchor point of the popover
        const forwardRef = useForwardedRef(ref)
        // Holds the current picker element set by the native picker for the anchor
        const [referenceElement, setReferenceElement] = React.useState(null)
        // Holds the list reference inside the popover
        const listRef = React.useRef(null)
        // Holds state of the current state of the native input (either 'error' or 'default')
        const [state, setState] = React.useState(stateProp)
        // Hold the container ref
        const containerRef = React.useRef(null)
        // Hold the label info
        const [dropdownLabel, setDropdownLabel] = React.useState(labelProp)

        const [interaction, setInteraction] = React.useState('enabled')

        // Hold whether select will be read only
        const readOnly = Boolean(isDesktop && referenceElement)

        // Use Popover hook for open/close state handling
        const {
            open,
            handleOpen,
            handleClose,
            handleBlur,
            handleMouseDown,
            handleKeyDown,
            closeAfterDelay,
        } = usePopover({
            disabled: !readOnly,
            containerRef,
            referenceElement,
            delayClose,
            delayOpen,
            openKeys,
            closeKeys,
            open: openProp,
            onOpen,
            onClose,
            onKeyDown,
            onBlur,
            ref: forwardRef,
        })

        /**
         * Handles the native component click interaction
         *
         * @param event - change event
         * @param info - info object
         */
        const handleClick = (event: React.MouseEvent<SelectRef>, info: SelectOptionInfo) => {
            // Open popover
            handleOpen()

            // If `onClick` defined,
            if (onClick) {
                // Trigger `onClick`
                onClick(event, info)
            }
        }

        /**
         * Handles the native component change interaction
         *
         * @param event - change event
         * @param info - info object
         */
        const handleSelectChange = (event: React.ChangeEvent, info: SelectOptionInfo) => {
            // Persist event propagation
            persistSyntheticEvent(event)

            const { value: newValue } = info

            if (stacked) {
                const LabelElement = () => (
                    <div className="label-element">
                        <span className="select--label">{labelProp}</span>
                        <span className="select--value">{info.label}</span>
                    </div>
                )
                setDropdownLabel(<LabelElement />)
            }

            // Set new date value
            setValue(newValue)

            // If `onChange` defined,
            if (onChange) {
                // Trigger `onChange`
                onChange(event, info)
            }
        }

        /**
         * Handles the calendar change event interaction
         *
         * @param date - selected date from the `CalendarPicker`
         */
        const handleListChange = (event: React.ChangeEvent, info: ListOptionInfo) => {
            // Persist event propagation
            persistSyntheticEvent(event)

            const { value: newValue } = info

            if (stacked) {
                const LabelElement = () => (
                    <div className="label-element">
                        <span className="select--label">{labelProp}</span>
                        <span className="select--value">{info.label}</span>
                    </div>
                )
                setDropdownLabel(<LabelElement />)
            }

            // Set new date value
            setValue(newValue)

            setInteraction('completed')

            // If `onChange` defined,
            if (onChange) {
                // Trigger `onChange`
                onChange(event, info)
            }

            if (!disableCloseOnSelect) {
                // Delay close handling
                closeAfterDelay()
            }

            // IOS mobile devices render an overlay effect
            // when focused with the native select...
            // If not IOS device,
            if (!isIOS) {
                // Return autofocus to reference
                referenceElement.focus()
            }
        }

        // Side effect for when `value` changes...
        React.useEffect(() => {
            // If value is different,
            if (typeof valueProp !== 'undefined' && value !== valueProp) {
                // Set new option
                setValue(valueProp)
            }
        }, [valueProp])
        // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes
        React.useEffect(() => setReferenceElement(forwardRef.current), [isDesktop, forwardRef])
        // Side effect for when the `state` prop is updated externally
        React.useEffect(() => setState(stateProp), [stateProp])

        const selectOptions = [
            { label: optionsLabel, value: '', disabled: true, hidden: readOnly },
            ...options.map((option) => ({ ...option, hidden: readOnly })),
        ]

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
                <DropdownWrapper
                    maxHeight={maxHeight}
                    ref={containerRef}
                    {...wrapperProps}
                    className={classNames(
                        'dropdown--wrapper',
                        `shape--${shape}`,
                        wrapperProps.className,
                    )}
                >
                    <Select
                        key="dropdown"
                        readOnly={readOnly}
                        className={classNames(value ? 'completed' : '', open ? 'focus' : '')}
                        stacked={stacked}
                        options={selectOptions}
                        onClick={handleClick}
                        onBlur={handleBlur}
                        label={dropdownLabel}
                        onKeyDown={handleKeyDown}
                        onChange={handleSelectChange}
                        onMouseDown={handleMouseDown}
                        interaction={interaction}
                        state={state}
                        value={value}
                        shape={shape}
                        disabled={disabled}
                        open={open}
                        {...props}
                        ref={forwardRef}
                    />
                    {readOnly ? (
                        <Popover
                            disablePortal
                            open={open}
                            anchorEl={referenceElement}
                            offset={[0, 2]}
                            pop={
                                <div className={classNames('popover--wrapper', `shape--${shape}`)}>
                                    <ListSelector
                                        options={options}
                                        onChange={handleListChange}
                                        value={value}
                                        enableGlobalKeyDown={open}
                                        shape="squared"
                                        {...listSelectorProps}
                                        ref={listRef}
                                    />
                                </div>
                            }
                            {...popoverProps}
                            {...popperProps}
                        />
                    ) : null}
                </DropdownWrapper>
            </ClickAwayListener>
        )
    },
)

type DropdownRef = SelectRef

type DropdownOverrideProps =
    | 'onChange'
    | 'onKeyDown'
    | 'onBlur'
    | 'value'
    | 'children'
    | 'size'
    | 'label'

interface DropdownChangeInfo extends SelectOptionInfo {}

interface DropdownOption extends ListSelectorOption, SelectOption {
    tabIndex?: string
}

interface DropdownProps extends Omit<SelectProps & ListSelectorProps, DropdownOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[]
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][]
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][]
    /**
     * Amount in milliseconds to delay closing the popover
     * when a value is selected from the list
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
    listSelectorProps?: ListSelectorProps
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
     * Set maximum popover height
     *
     * Defaults to showing five and a half options
     */
    maxHeight?: string

    stacked?: boolean
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.ChangeEvent, value: DropdownChangeInfo) => void
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
     *
     */
    size?: 'large' | 'medium' | 'small'
    /**
     * State of the native date picker
     * Either 'error' or 'default'
     */
    state?: SelectProps['state']
    /**
     * Options to define dropdown children from
     *
     * Required if `children` not defined.
     * Overrides `children` if defined.
     */
    options?: DropdownOption[]
    /**
     * Label to place above options in select menu
     */
    optionsLabel?: string
    /**
     * Controlled value for dropdown
     */
    value?: string | number

    label?: string | React.ReactElement

    ref?: any
}

Dropdown.bdsName = 'Dropdown'

export { Dropdown }

export type { DropdownRef, DropdownProps, DropdownChangeInfo, DropdownOption }

export default Dropdown
