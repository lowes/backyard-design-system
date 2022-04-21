import * as React from 'react'
import { usePopper } from 'react-popper'
import { Modifier as PopperJSModifier, Options as PopperJSOptions } from '@popperjs/core/lib/types'

import 'core-js/es/array/find'
import 'core-js/es/promise'
import 'core-js/es/object/assign'

import useControlled from '../utils/hooks/useControlled'
import useRandomId from '../utils/hooks/useRandomId'
import useForkRef from '../utils/hooks/useForkRef'
import { usePopupState, bindHover, bindPopper } from '../utils/hooks/usePopupState'
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme } from '../ThemeProvider'
import Tooltip from '../Tooltip'
import type { TooltipProps, TooltipRef } from '../Tooltip'
import Portal from '../Portal'
import type { PortalProps } from '../Portal'



let hysteresisOpen = false
let hysteresisTimer = null

export function testReset() {
    hysteresisOpen = false

    clearTimeout(hysteresisTimer)
}

const flipArrow = (placement) =>
    ({
        'bottom-end': 'top-start',
        'bottom-start': 'top-end',
        bottom: 'top',
        'left-end': 'right-start',
        'left-start': 'right-end',
        left: 'right',
        'right-end': 'left-start',
        'right-start': 'left-end',
        right: 'left',
        'top-end': 'bottom-start',
        'top-start': 'bottom-end',
        top: 'bottom',
    }[placement])

/**
 * Backyard React TooltipPopper
 *
 * @todo Comments
 */
const TooltipPopper: BDSForwardRef<TooltipPopperProps> = React.forwardRef<
    TooltipPopperRef,
    TooltipPopperProps
>(function TooltipPopper(
    {
        children,
        className,
        container,
        disablePortal = false,
        enterDelay = 200,
        enterNextDelay = 0,
        id: idProp,
        keepMounted = false,
        leaveDelay = 200,
        onClose,
        onOpen,
        open: openProp,
        defaultOpen = false,
        placement = 'bottom',
        popperModifiers = [],
        popperOptions = {},
        tooltip,
        title,
        ...props
    },
    ref,
) {
    const theme = useBackyardTheme({ validate: true, name: 'TooltipPoppper' })

    const [referenceElement, setReferenceElement] = React.useState(null)
    const [popperElement, setPopperElement] = React.useState(null)
    const [arrowElement, setArrowElement] = React.useState(null)
    const popperRef = useForkRef(setPopperElement, ref)

    const enterTimer = React.useRef<NodeJS.Timeout>()
    const leaveTimer = React.useRef<NodeJS.Timeout>()

    const id = useRandomId(idProp)

    const [open, setOpen] = useControlled({
        controlled: openProp,
        default: defaultOpen,
        name: `Backyard->TooltipPopper->[id="${id}"]`,
    })

    const popupState = usePopupState({ variant: 'popper', popupId: id })

    const { open: hovering, ...popperProps } = bindPopper(popupState)
    const { onMouseEnter, onMouseLeave, ...hoverProps } = bindHover(popupState)

    React.useEffect(() => {
        return () => {
            clearTimeout(enterTimer.current)
            clearTimeout(leaveTimer.current)
        }
    }, [])

    const handleOpen = (event) => {
        clearTimeout(hysteresisTimer)
        hysteresisOpen = true

        setOpen(true)

        if (onOpen) {
            onOpen(event)
        }
    }

    const handleClose = (event) => {
        clearTimeout(hysteresisTimer)

        hysteresisTimer = setTimeout(() => {
            hysteresisOpen = false
        }, 800 + leaveDelay)

        setOpen(false)

        if (onClose) {
            onClose(event)
        }
    }

    const handleEnter = (event) => {
        onMouseEnter(event)

        clearTimeout(enterTimer.current)
        clearTimeout(leaveTimer.current)

        if (enterDelay || (hysteresisOpen && enterNextDelay)) {
            persistSyntheticEvent(event)

            enterTimer.current = setTimeout(
                () => {
                    handleOpen(event)
                },
                hysteresisOpen ? enterNextDelay : enterDelay,
            )
        } else {
            handleOpen(event)
        }
    }

    const handleLeave = (event) => {
        onMouseLeave(event)

        clearTimeout(enterTimer.current)
        clearTimeout(leaveTimer.current)

        persistSyntheticEvent(event)

        leaveTimer.current = setTimeout(() => {
            handleClose(event)
        }, leaveDelay)
    }

    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [
            { name: 'arrow', options: { element: arrowElement, padding: 8 } },
            { name: 'offset', options: { offset: [0, 16] } },
            { name: 'eventListeners', options: { scroll: open, resize: open } },
            ...popperModifiers,
        ],
        placement,
        ...popperOptions,
    })

    const place = attributes.popper ? attributes.popper['data-popper-placement'] : placement

    return (
        <>
            {React.cloneElement(children, {
                ...hoverProps,
                onMouseEnter: handleEnter,
                onMouseLeave: handleLeave,
                ref: setReferenceElement,
            })}
            {open || keepMounted ? (
                <Portal disablePortal={disablePortal} container={container}>
                    <Tooltip
                        id={id}
                        {...tooltip.props}
                        {...attributes.popper}
                        {...popperProps}
                        ref={popperRef}
                        arrowProps={{
                            ref: setArrowElement,
                            style: styles.arrow,
                        }}
                        arrow={flipArrow(place)}
                        style={{
                            ...styles.popper,
                            zIndex: theme.zIndex.tooltip,
                            opacity: openProp || hovering ? 1 : 0,
                        }}
                        {...props}
                    />
                </Portal>
            ) : null}
        </>
    )
})

type TooltipPopperRef = TooltipRef

type TooltipPopperEvent = React.MouseEvent

type TooltipPopperOverrideProps = 'title'

interface TooltipPopperProps extends Omit<TooltipProps, TooltipPopperOverrideProps> {
    /**
     * Tooltip reference element.
     */
    children: React.ReactElement<any, any>
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Portal Container
     */
    container?: PortalProps['container']
    /**
     * Whether or not the tooltip is open by default
     */
    defaultOpen?: boolean
    /**
     * Whether or not portal will be disabled
     */
    disablePortal?: PortalProps['disablePortal']
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This prop won't impact the enter touch delay (`enterTouchDelay`).
     */
    enterDelay?: number
    /**
     * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
     */
    enterNextDelay?: number
    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide this prop. It falls back to a randomly generated id.
     */
    id?: string
    /**
     * Whether or not the tooltip/portal will remain mounted when closed
     * This is useful for SSR/SEO situations where you want the Tooltip to remain on the page when closed
     */
    keepMounted?: boolean
    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This prop won't impact the leave touch delay (`leaveTouchDelay`).
     */
    leaveDelay?: number
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {Event} event The event source of the callback.
     */
    onClose?: (event: TooltipPopperEvent) => void
    /**
     * Callback fired when the component requests to be open.
     *
     * @param {object} event The event source of the callback.
     */
    onOpen?: (event: TooltipPopperEvent) => void
    /**
     * If `true`, the tooltip is shown.
     */
    open?: boolean
    /**
     * Position of the tooltip from the reference element (child)
     * Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *    [Tooltip]
     */
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top'
    /**
     * PopperJS Modifiers to extend/override default modifiers in `TooltipPopper`
     */
    popperModifiers?: PopperJSModifier<string, object>[]
    /**
     * PopperJS Options to extends/override default options in `TooltipOptions`
     */
    popperOptions?: PopperJSOptions
    /**
     * Tooltip title. Zero-length titles string are never displayed.
     */
    title?: React.ReactNode
    /**
     * Tooltip to handle popper events
     */
    tooltip: React.ReactElement<TooltipProps>
}

TooltipPopper.bdsName = 'TooltipPopper'

export { TooltipPopper }

export { TooltipPopperProps, TooltipPopperRef }

export default TooltipPopper
