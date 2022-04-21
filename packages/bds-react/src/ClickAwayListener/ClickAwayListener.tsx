import * as React from 'react'
import * as ReactDOM from 'react-dom'

import ownerDocument from '../utils/functions/ownerDocument'
import useForkRef from '../utils/hooks/useForkRef'
import useEventCallback from '../utils/hooks/useEventCallback'
import { BDSFunctional } from '../utils/typings/BDSComponentProps'

function mapEventPropToEvent(eventProp) {
    return eventProp.substring(2).toLowerCase()
}

function clickedRootScrollbar(event) {
    return (
        document.documentElement.clientWidth < event.clientX ||
        document.documentElement.clientHeight < event.clientY
    )
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */
const ClickAwayListener: BDSFunctional<ClickAwayListenerProps> = function ClickAwayListener({
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd',
}) {
    const movedRef = React.useRef(false)
    const nodeRef = React.useRef(null)
    const mountedRef = React.useRef(false)
    const syntheticEventRef = React.useRef(false)

    React.useEffect(() => {
        mountedRef.current = true

        return () => {
            mountedRef.current = false
        }
    }, [])

    // can be removed once we drop support for non ref forwarding class components
    const handleOwnRef = React.useCallback((instance) => {
        // #StrictMode ready
        // eslint-disable-next-line react/no-find-dom-node
        nodeRef.current = ReactDOM.findDOMNode(instance)
    }, [])
    const handleRef = useForkRef(children.ref, handleOwnRef)

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    const handleClickAway = useEventCallback((event) => {
        // Given developers can stop the propagation of the synthetic event,
        // we can only be confident with a positive value.
        const insideReactTree = syntheticEventRef.current
        syntheticEventRef.current = false

        // 1. IE 11 support, which trigger the handleClickAway even after the unbind
        // 2. The child might render null.
        // 3. Behave like a blur listener.
        if (!mountedRef.current || !nodeRef.current || clickedRootScrollbar(event)) {
            return
        }

        // Do not act if user performed touchmove
        if (movedRef.current) {
            movedRef.current = false
            return
        }

        let insideDOM

        // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
        if (event.composedPath) {
            insideDOM = event.composedPath().indexOf(nodeRef.current) > -1
        } else {
            // TODO v6 remove dead logic https://caniuse.com/#search=composedPath.
            const doc = ownerDocument(nodeRef.current)
            insideDOM =
                !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target)
        }

        if (!insideDOM && (disableReactTree || !insideReactTree)) {
            onClickAway(event)
        }
    })

    // Keep track of mouse/touch events that bubbled up through the portal.
    const createHandleSynthetic = (handlerName) => (event) => {
        syntheticEventRef.current = true

        const childrenPropsHandler = children.props[handlerName]
        if (childrenPropsHandler) {
            childrenPropsHandler(event)
        }
    }

    const childrenProps = { ref: handleRef }

    if (touchEvent !== false) {
        childrenProps[touchEvent] = createHandleSynthetic(touchEvent)
    }

    React.useEffect(() => {
        if (touchEvent !== false) {
            const mappedTouchEvent = mapEventPropToEvent(touchEvent)
            const doc = ownerDocument(nodeRef.current)

            const handleTouchMove = () => {
                movedRef.current = true
            }

            doc.addEventListener(mappedTouchEvent, handleClickAway)
            doc.addEventListener('touchmove', handleTouchMove)

            return () => {
                doc.removeEventListener(mappedTouchEvent, handleClickAway)
                doc.removeEventListener('touchmove', handleTouchMove)
            }
        }

        return undefined
    }, [handleClickAway, touchEvent])

    if (mouseEvent !== false) {
        childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent)
    }

    React.useEffect(() => {
        if (mouseEvent !== false) {
            const mappedMouseEvent = mapEventPropToEvent(mouseEvent)
            const doc = ownerDocument(nodeRef.current)

            doc.addEventListener(mappedMouseEvent, handleClickAway)

            return () => {
                doc.removeEventListener(mappedMouseEvent, handleClickAway)
            }
        }

        return undefined
    }, [handleClickAway, mouseEvent])

    return (
        <>
            {React.cloneElement(children, childrenProps)}
        </>
    )
}

type ClickAwayEvent = React.MouseEvent<Document>

interface ClickAwayListenerProps {
    /**
     * The wrapped element.
     */
    children: React.ReactElement & { ref?: React.Ref<HTMLElement> }
    /**
     * If `true`, the React tree is ignored and only the DOM tree is considered.
     * This prop changes how portaled elements are handled.
     */
    disableReactTree?: boolean
    /**
     * The mouse event to listen to. You can disable the listener by providing `false`.
     */
    mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false
    /**
     * Callback fired when a "click away" event is detected.
     */
    onClickAway: (event: ClickAwayEvent) => void
    /**
     * The touch event to listen to. You can disable the listener by providing `false`.
     */
    touchEvent?: 'onTouchEnd' | 'onTouchStart' | false
}

ClickAwayListener.bdsName = 'ClickAwayListener'

export {
    ClickAwayListener
}

export type {
    ClickAwayListenerProps,
    ClickAwayEvent
}

export default ClickAwayListener
