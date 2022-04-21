import * as React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import ownerDocument from '../utils/functions/ownerDocument'
import useForkRef from '../utils/hooks/useForkRef'
import useEventCallback from '../utils/hooks/useEventCallback'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import Portal from '../Portal'
import type { PortalRef } from '../Portal'
import TrapFocus from '../TrapFocus'
import Overlay from '../Overlay'
import type { OverlayProps } from '../Overlay'

import ModalManager, { ariaHidden } from './ModalManager'
import ModalHandlerWrapper from './styles/ModalHandlerWrapper'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * Gets container node from DOM if needed
 *
 * @param {func|node} container
 */
function getContainer(container) {
    // eslint-disable-next-line no-param-reassign
    container = typeof container === 'function' ? container() : container

    // eslint-disable-next-line react/no-find-dom-node
    return ReactDOM.findDOMNode(container)
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager()

/**
 * Backyard React Modal Handler
 *
 * This component is used to extend the higher ordered component `ModalController`
 * Abstracts some of the complexity for future extending, if needed
 *
 * Heavily influenced by Material UI's Modal Component
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/Modal.js
 */
const ModalHandler: BDSForwardRef<ModalHandlerProps> = React.forwardRef<
    ModalHandlerRef,
    ModalHandlerProps
>(function ModalHandler(
    {
        OverlayComponent = Overlay,
        overlayProps = {},
        children,
        className,
        container,
        disableAutoFocus = false,
        disableOverlayClick = false,
        disableEnforceFocus = false,
        disableEscapeKeyDown = false,
        disablePortal = false,
        disableRestoreFocus = false,
        disableScrollLock = false,
        hideOverlay = false,
        keepMounted = false,
        manager = defaultManager,
        onOverlayClick,
        onOpen,
        onClose,
        onEscapeKeyDown,
        onRendered,
        open,
        ...props
    },
    ref,
) {
    // Modal refs
    const modal = React.useRef({} as ModalInnerRef)
    const mountNodeRef = React.useRef(null)
    const modalRef = React.useRef(null)
    const handleRef = useForkRef(modalRef, ref)

    /**
     * Gets nearest DOM document that owns modal ref
     */
    const getDoc = () => ownerDocument(mountNodeRef.current)
    /**
     * Gets modal from ref
     */
    const getModal = () => {
        modal.current.modalRef = modalRef.current
        modal.current.mountNode = mountNodeRef.current

        return modal.current
    }

    /**
     * Calls the modal manager's mount logic to handle mounting to DOM
     */
    const handleMounted = () => {
        manager.mount(getModal(), { disableScrollLock })

        // Fix a bug on Chrome where the scroll isn't initially 0
        modalRef.current.scrollTop = 0
    }

    /**
     * Handles modal opening
     */
    const handleOpen = useEventCallback(() => {
        // Gets current container from DOM document structure
        const resolvedContainer = getContainer(container) || getDoc().body

        // Adds modal to container DOM
        manager.add(getModal(), resolvedContainer)

        // The element was already mounted
        if (modalRef.current) {
            handleMounted()
        }

        // Call `onOpen` trigger if defined
        if (typeof onOpen === 'function') {
            onOpen()
        }
    })

    /**
     * Determines whether or not modal is top modal (in case multiple modals are mounted)
     */
    const isTopModal = React.useCallback(() => manager.isTopModal(getModal()), [manager])

    /**
     * Handles setting portal reference
     */
    const handlePortalRef = useEventCallback((node) => {
        // Set current ref to portal
        mountNodeRef.current = node

        // Don't call rendered trigger functions
        if (!node) {
            return
        }

        // Call `onRendered` prop if defined
        if (onRendered) {
            onRendered()
        }

        // Handle mount if modal is top and open
        if (open && isTopModal()) {
            handleMounted()
        } else {
            // Hide below or unopened modal
            ariaHidden(modalRef.current, true)
        }
    })

    /**
     * Handles modal close logic
     */
    const handleClose = React.useCallback(() => {
        // Remove modal via manager
        manager.remove(getModal())

        // Call `onClose` trigger function if defined
        if (typeof onClose === 'function') {
            onClose()
        }
    }, [manager, onClose])

    // Handle close when React unmounts component
    React.useEffect(() => {
        return () => {
            handleClose()
        }
    }, [handleClose])

    // Rerenders component when `open` prop changes
    React.useEffect(() => {
        if (open) {
            handleOpen()
        } else {
            handleClose()
        }
    }, [open, handleClose, handleOpen])

    /**
     * Handles event when overlay is clicked
     *
     * @param {Event} event - DOM Event
     */
    const handleOverlayClick = (event) => {
        // Ignore when child of overlay is clicked
        if (event.target !== event.currentTarget) {
            return
        }

        // Trigger `onOverlayClick` if defined
        if (onOverlayClick) {
            onOverlayClick(event)
        }

        // Trigger `onClose` if defined and not disabled
        if (!disableOverlayClick && onClose) {
            onClose(event, 'overlayClick')
        }
    }

    /**
     * Handles key down event, for escape key
     *
     * @param {Event} event - DOM Event
     */
    const handleKeyDown = (event) => {
        // The handler doesn't take event.defaultPrevented into account:
        //
        // event.preventDefault() is meant to stop default behaviours like
        // clicking a checkbox to check it, hitting a button to submit a form,
        // and hitting left arrow to move the cursor in a text input etc.
        // Only special HTML elements have these default behaviors.
        if (event.key !== 'Escape' || !isTopModal()) {
            return
        }

        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation()

        // Trigger `onEscapeKeyDown` if defined
        if (onEscapeKeyDown) {
            onEscapeKeyDown(event)
        }

        // Trigger `onClose` if defined and not disabled
        if (!disableEscapeKeyDown && onClose) {
            onClose(event, 'escapeKeyDown')
        }
    }

    // Don't render component if closed and not keeping modal mounted
    if (!keepMounted && !open) {
        return null
    }

    // Props to set child with
    const childProps: ModalHandlerChildProps = {}

    if (children.props.tabIndex === undefined) {
        // Forces child to tab focus
        childProps.tabIndex = children.props.tabIndex || '-1'
    }

    /**
     * Layout:
     *  <Portal>
     *      <div modal-handler>
     *          <Overlay />
     *          <TrapFocus>
     *              ...
     *          </TrapFocus>
     *      </div>
     *  </Portal>
     */
    return (
        <Portal ref={handlePortalRef} container={container} disablePortal={disablePortal}>
            <ModalHandlerWrapper
                className={classNames(
                    'modal-handler',
                    {
                        'keep-mounted': keepMounted,
                    },
                    className,
                )}
                ref={handleRef}
                onKeyDown={handleKeyDown}
                role="presentation"
                {...props}
            >
                {hideOverlay ? null : (
                    <OverlayComponent open={open} onClick={handleOverlayClick} {...overlayProps} />
                )}
                <TrapFocus
                    disableEnforceFocus={disableEnforceFocus}
                    disableAutoFocus={disableAutoFocus}
                    disableRestoreFocus={disableRestoreFocus}
                    getDoc={getDoc}
                    isEnabled={isTopModal}
                    open={open}
                >
                    {React.cloneElement(children, {
                        ...childProps,
                    })}
                </TrapFocus>
            </ModalHandlerWrapper>
        </Portal>
    )
})

type ModalHandlerRef = HTMLDivElement

interface ModalHandlerProps extends BackyardBaseProps<ModalHandlerRef> {
    /**
     * Overlay component to display behind modal
     */
    OverlayComponent?: React.ElementType
    /**
     * Props to extend overlay component with
     * Useful if the `style` prop needs to be different
     */
    overlayProps?: OverlayProps
    /**
     * Children
     */
    children?: React.ReactElement
    /**
     * Container object or function of modal to display
     */
    container?: React.ReactInstance
    /**
     * Whether or not browser will auto focus on modal
     */
    disableAutoFocus?: boolean
    /**
     * Whether or not overlay click listener is active
     */
    disableOverlayClick?: boolean
    /**
     * Whether or not modal enforces focus (traps)
     */
    disableEnforceFocus?: boolean
    /**
     * Whether or not escape key listener is active
     */
    disableEscapeKeyDown?: boolean
    /**
     * Whether or not portal is used to bring modal to root DOM
     */
    disablePortal?: boolean
    /**
     * Whether or not modal restores focus
     */
    disableRestoreFocus?: boolean
    /**
     * Whether or not scroll lock is disabled
     */
    disableScrollLock?: boolean
    /**
     * Whether or not overlay is hidden
     */
    hideOverlay?: boolean
    /**
     * Whether or not modal continues to be mounted when closed
     * Useful for certain SEO conditions
     */
    keepMounted?: boolean
    /**
     * Class that manages modal state and properties
     */
    manager?: ModalManager
    /**
     * `onOverlayClick` trigger function, when overlay is clicked
     * @argument {Event} event - DOM event
     */
    onOverlayClick?: (event: React.MouseEvent) => void
    /**
     * `onClose` trigger function, when modal is closed
     * @argument {Event} event - DOM event
     * @argument {string} name - Name of event fired that caused modal to close
     */
    onClose?: (event?: ModalHandlerEvent, name?: string) => void
    /**
     * `onOpen` trigger function, when modal is closed
     */
    onOpen?: () => void
    /**
     * `onEscapeKeyDown` trigger function, when escape key is pressed while modal is active
     * @argument {Event} event - DOM event
     */
    onEscapeKeyDown?: (event: React.KeyboardEvent) => void
    /**
     * `onRendered` trigger function, when modal is closed
     */
    onRendered?: () => void
    /**
     * Whether or not modal is open
     */
    open: boolean
}

type ModalHandlerEvent = React.MouseEvent | React.KeyboardEvent

type ModalHandlerChildProps = {
    tabIndex?: string
}

type ModalInnerRef = {
    modalRef?: ModalHandlerRef
    mountNode?: PortalRef
}

ModalHandler.bdsName = 'ModalHandler'

export { ModalHandler }

export type { ModalHandlerProps, ModalHandlerRef }

export default ModalHandler
