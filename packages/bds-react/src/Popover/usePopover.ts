import * as React from 'react'

import canFocus from '../utils/functions/canFocus'
import type { SelectRef } from '../Select'
import type { PopoverProps } from './Popover'

const usePopover = <R extends HTMLElement = SelectRef>({
    disabled = false,
    containerRef,
    referenceElement,
    openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
    closeKeys = ['Escape'],
    delayClose = 300,
    delayOpen = 10,
    open: openProp = false,
    onOpen,
    onClose,
    onBlur,
    onKeyDown,
    onMouseDown,
    ref,
}: UsePopoverProps<R>) => {
    // Holds state of whether or not the popover is open
    const [open, setOpen] = React.useState(openProp)

    // Hold the delay close timeout when defined
    const delayCloseTimeout = React.useRef(null)
    // Hold the delay open timeout when defined
    const delayOpenTimeout = React.useRef(null)

    /**
     * Opens the popover
     *
     * Triggers `onOpen` if defined
     */
    const handleOpen = () => {
        // If popover is not open,
        if (!open) {
            // Open
            setOpen(true)

            // Trigger `onOpen`
            if (onOpen) {
                onOpen()
            }
        }
    }

    /**
     * Closes the popover
     *
     * Triggers `onClose` if defined
     */
    const handleClose = () => {
        // If popover is open,
        if (open) {
            // Close
            setOpen(false)

            // Trigger `onClose`
            if (onClose) {
                onClose()
            }
        }
    }

    /**
     * Close popover after delay
     */
    const closeAfterDelay = () => {
        delayCloseTimeout.current = setTimeout(handleClose, delayClose)
    }

    /**
     * Open popover after delay
     */
    const openAfterDelay = () => {
        delayOpenTimeout.current = setTimeout(handleOpen, delayOpen)
    }

    /**
     * Handles `onKeyDown` event of `select`
     * Triggers defined `onKeyDown` from props if available
     *
     * @param {KeyboardEvent} event - DOM event
     */
    const handleKeyDown = (event: React.KeyboardEvent<R>) => {
        // Get key from event
        const { key } = event

        // If space or enter key pressed,
        // The native select doesn't respond to enter on MacOS, but it's recommended by
        // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
        if (!disabled && openKeys.indexOf(key) !== -1) {
            // Prevent browser interactions
            event.preventDefault()

            // Open popover
            openAfterDelay()
        }

        // If escape key pressed,
        if (!disabled && closeKeys.indexOf(key) !== -1) {
            // Prevent browser interactions
            event.preventDefault()

            // Open popover
            closeAfterDelay()
        }

        // If `onKeyDown` prop defined,
        if (onKeyDown) {
            // Trigger `onKeyDown` prop function
            onKeyDown(event)
        }
    }

    /**
     * Handles `onBlur` event of `select`
     *
     * @param {FocusEvent} event - DOM event
     */
    const handleBlur = (event: React.FocusEvent<R>) => {
        // If `onBlur` trigger defined,
        if (onBlur) {
            // Callback blur
            onBlur(event)
        }
    }

    /**
     * Handles the select mouse down interaction event
     *
     * @param event
     */
    const handleMouseDown = (event: React.MouseEvent<R>) => {
        // If reference defined,
        if (!disabled && referenceElement) {
            // Prevent default mousedown
            event.preventDefault()

            const target = event.target as R

            // Force focus target
            target.focus()
        }

        if (onMouseDown) {
            onMouseDown(event)
        }
    }

    /**
     * Remove focus event and close
     *
     * This function is used to close the popover when the user
     * tabs between focusable elements on the page.
     *
     * @param event focus event
     */
    const removeFocus = (event) => {
        // Get related target from 'focusout' event
        const target = event.relatedTarget
        // Check for whether there is no target
        const noTarget = target === null
        // Check whether or not focus is leaving parent container
        const leavingParent = !containerRef?.current?.contains(event.relatedTarget)

        // If there is a target and focus is leaving parent container,
        if (!noTarget && leavingParent) {
            // If there is a current valid ref and the target can NOT be focused,
            if (ref?.current && !canFocus(ref.current, target)) {
                // Do not remove current focus
                // Because the target cannot receive focus
                return
            }

            // Otherwise, focusout is valid
            // Close current open popover after delay
            closeAfterDelay()
        }
    }

    const clearPopoverTimeout = (type: 'open' | 'close') => {
        switch (type) {
            case 'open':
                clearTimeout(delayOpenTimeout.current)
                break
            case 'close':
            default:
                clearTimeout(delayCloseTimeout.current)
        }
    }

    // Side effect for when the container ref changes...
    React.useEffect(() => {
        // Add 'focusout' event listener to container
        containerRef?.current?.addEventListener('focusout', removeFocus)

        // When the component unloads...
        return () => {
            // Remove 'focusout' event listener from container
            containerRef?.current?.removeEventListener('focusout', removeFocus)
        }
    }, [containerRef])
    // Side effect for when the `open` prop changes externally
    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
        if (openProp !== open) {
            return openProp ? handleOpen() : handleClose()
        }
    }, [openProp])
    // Cleanup timeout
    React.useEffect(() => {
        return () => {
            clearTimeout(delayCloseTimeout.current)
            clearTimeout(delayOpenTimeout.current)
        }
    }, [])

    return {
        open,
        setOpen,
        handleOpen,
        handleClose,
        handleKeyDown,
        handleBlur,
        handleMouseDown,
        clearPopoverTimeout,
        openAfterDelay,
        closeAfterDelay,
    }
}

interface UsePopoverProps<R extends HTMLElement = SelectRef> {
    disabled?: Boolean
    containerRef: React.MutableRefObject<HTMLDivElement>
    referenceElement: R
    openKeys?: React.KeyboardEvent['key'][]
    closeKeys?: React.KeyboardEvent['key'][]
    delayClose?: number
    delayOpen?: number
    open: PopoverProps['open']
    onOpen?: PopoverProps['onOpen']
    onClose?: PopoverProps['onClose']
    onBlur?: (event: React.FocusEvent<R>) => void
    onKeyDown?: (event: React.KeyboardEvent<R>) => void
    onMouseDown?: (event: React.MouseEvent<R>) => void
    ref?: React.MutableRefObject<R>
}

export { usePopover }

export type { UsePopoverProps }

export default usePopover
