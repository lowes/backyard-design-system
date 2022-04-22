import * as React from 'react'
import classNames from 'classnames'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import ClickAwayListener from '../ClickAwayListener'
import { Popover, usePopover } from '../Popover'
import type { PopoverProps } from '../Popover'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import AutocompleteWrapper from './styles/Autocomplete'

const Autocomplete: BDSForwardRef<AutocompleteProps> = React.forwardRef<
    AutocompleteRef,
    AutocompleteProps
>(function Autocomplete(
    {
        className,
        openKeys = ['ArrowUp', 'ArrowDown'],
        closeKeys = ['Escape'],
        open: openProp = false,
        options,
        delayClose = 300,
        delayOpen = 10,
        onChange,
        onOpen,
        onClose,
        onFocus,
        onKeyDown,
        isSearch,
        renderInput,
        value: valueProp,
        defaultValue = '',
        shape: shapeProp, // = 'rounded',
        popoverProps = {},
        popperProps = {},
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Autocomplete',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    let funcs = {}
    const forwardRef = useForwardedRef(ref)

    /**
     * Setup all state hooks needed
     */
    const [value, setValue] = React.useState(valueProp || defaultValue)
    const [referenceElement, setReferenceElement] = React.useState(null)
    // Hold the container ref
    const containerRef = React.useRef(null)

    // Use Popover hook for open/close state handling
    const { open, handleOpen, handleClose, handleKeyDown } = usePopover({
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
    })

    /** Handle change function to return the change event and value of input field */
    // eslint-disable-next-line no-shadow
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const handleInputChange = (event: React.ChangeEvent, value: string) => {
        setValue(value)

        if (onChange) {
            onChange(event, value)
        }
    }

    const handleClearClick = (event: React.ChangeEvent) => {
        setValue('')
        if (onChange) {
            onChange(event, '')
        }
    }

    React.useEffect(
        () => setReferenceElement(forwardRef.current?.parentElement || forwardRef.current),
        [forwardRef, value],
    )
    React.useEffect(() => {
        if (typeof valueProp !== 'undefined') {
            setValue(valueProp)
        }
    }, [valueProp])

    if ((renderInput.type as any)?.bdsName === 'Search') {
        funcs = {
            onClearClick: handleClearClick,
            onClick: handleOpen,
            onFocus: handleOpen,
            onChange: handleInputChange,
            onKeyDown: handleKeyDown,
        }
    } else {
        funcs = {
            onClick: handleOpen,
            onFocus: handleOpen,
            onChange: handleInputChange,
            onKeyDown: handleKeyDown,
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <AutocompleteWrapper
                className={classNames('autocomplete-wrapper', `shape--${shape}`, className)}
                ref={containerRef}
            >
                {React.cloneElement(renderInput, {
                    className: classNames(
                        value ? 'completed' : '',
                        open ? 'focus' : '',
                        renderInput.props.className,
                    ),
                    ...funcs,
                    value,
                    shape,
                    ...props,
                    ref: forwardRef,
                })}
                {referenceElement ? (
                    <Popover
                        disablePortal
                        open={open}
                        anchorEl={referenceElement}
                        offset={[0, 0]}
                        pop={<div className="popover-wrapper">{React.cloneElement(options)}</div>}
                        {...popoverProps}
                        {...popperProps}
                    />
                ) : null}
            </AutocompleteWrapper>
        </ClickAwayListener>
    )
})

type AutocompleteRef = HTMLElement

type AutocompleteOverrideProps = 'onChange' | 'onFocus' | 'onKeyDown'

interface AutocompleteProps extends BackyardBaseProps<AutocompleteRef, AutocompleteOverrideProps> {
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
     * Shape of the input and the popover
     */
    shape?: 'rounded' | 'squared'
    /**
     * Callback triggered when value of autocomplete changes
     */
    onChange?: (event: React.ChangeEvent, value: string) => void
    /**
     * Callback triggered when popover opens
     */
    onOpen?: () => void
    /**
     * Callback triggered when popover closed
     */
    onClose?: () => void
    /**
     * Callback triggered when input focused
     */
    onFocus?: (event: React.FocusEvent, value: string) => void
    /**
     * Callback triggered when key pressed with focus on input
     */
    onKeyDown?: (event: React.KeyboardEvent) => void
    /**
     * React element to render as popover content
     */
    options?: React.ReactElement
    /**
     * React element to render as popover input
     */
    renderInput: React.ReactElement
    /**
     * Whether or not the popover is open
     */
    open?: boolean
    /**
     * Value of the autocomplete
     */
    value?: string
    /**
     * Whether or not the autocomplete is a search input
     */
    isSearch?: boolean
    /**
     * Popover props to override Popover component with
     */
    popoverProps?: Partial<PopoverProps>
    /**
     * Popover props to override Popover component with
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<PopoverProps>
}

Autocomplete.bdsName = 'Autocomplete'

export { Autocomplete }
export type { AutocompleteRef, AutocompleteProps }
export default Autocomplete
