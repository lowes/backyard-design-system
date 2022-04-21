/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
import React from 'react'

import ownerDocument from '../utils/functions/ownerDocument'
import useForkRef from '../utils/hooks/useForkRef'

import { BDSFunctional } from '../utils/typings/BDSComponentProps'

/**
 * Backyard React Trap Focus
 * 
 * Traps focus so that user cannot focus on anything outside of children
 * Creates sentinels around content with tab index 0 to reset tabs
 * 
 * Heavily Based on Material-UI's TrapFocus:
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/TrapFocus.js
 */
const TrapFocus: BDSFunctional<TrapFocusProps> = ({
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getDoc,
    isEnabled,
    open,
}) => {
    // Store refs
    const ignoreNextEnforceFocus = React.useRef({})
    const sentinelStart = React.useRef(null)
    const sentinelEnd = React.useRef(null)
    const nodeToRestore: React.MutableRefObject<HTMLElement> = React.useRef(null)

    const rootRef = React.useRef(null)
    const handleRef = useForkRef((children as any).ref, rootRef)

    // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
    // https://reactjs.org/docs/hooks-reference.html#usememo
    React.useMemo(() => {
        // If trap focus is closed, don't set new node to restore
        if (!open || typeof window === 'undefined') {
            return
        }

        // Set node to restore
        nodeToRestore.current = getDoc().activeElement as HTMLElement
    }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

    // Side effect to rerender if prop changes externally
    React.useEffect(() => {
        // Ignore if closed
        if (!open) {
            return
        }

        const doc = ownerDocument(rootRef.current)

        // We might render an empty child
        if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
            if (!rootRef.current.hasAttribute('tabIndex')) {
                if (process.env.NODE_ENV !== 'production') {
                    console.error( // eslint-disable-line no-console
                        [
                            'Backyard: the root content node does not accept focus.',
                            'For the benefit of assistive technologies, ' +
                            'the tabIndex of the node is being set to "-1".',
                        ].join('\n'),
                    )
                }

                rootRef.current.setAttribute('tabIndex', -1)
            }

            rootRef.current.focus()
        }

        /**
         * Contains focus with root ref
         */
        const contain = () => {
            if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
                ignoreNextEnforceFocus.current = false

                return
            }

            if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
                rootRef.current.focus()
            }
        }

        /**
         * Loops focus index from sentinel end back to sentinel start
         * 
         * @param {Event} event 
         */
        const loopFocus = (event) => {
            // 9 = Tab
            if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
                return
            }

            // Make sure the next tab starts from the right place.
            if (doc.activeElement === rootRef.current) {
                // We need to ignore the next contain as
                // it will try to move the focus back to the rootRef element.
                ignoreNextEnforceFocus.current = true

                if (event.shiftKey) {
                    sentinelEnd.current.focus()
                } else {
                    sentinelStart.current.focus()
                }
            }
        }

        doc.addEventListener('focus', contain, true)
        doc.addEventListener('keydown', loopFocus, true)

        // With Edge, Safari and Firefox, no focus related events are fired 
        // when the focused area stops being a focused area
        // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
        //
        // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
        // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
        const interval = setInterval(() => {
            contain()
        }, 50)

        return () => {
            clearInterval(interval)

            doc.removeEventListener('focus', contain, true)
            doc.removeEventListener('keydown', loopFocus, true)

            // restoreLastFocus()
            if (!disableRestoreFocus) {
                // In IE 11 it is possible for document.activeElement to be null resulting
                // in nodeToRestore.current being null.
                // Not all elements in IE 11 have a focus method.
                // Once IE 11 support is dropped the focus() call can be unconditional.
                if (nodeToRestore.current && nodeToRestore.current.focus) {
                    nodeToRestore.current.focus()
                }

                nodeToRestore.current = null
            }
        }
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open])

    return (
        <>
            <div tabIndex={0} ref={sentinelStart} data-test="sentinelStart" />
            {React.cloneElement(children, { ref: handleRef })}
            <div tabIndex={0} ref={sentinelEnd} data-test="sentinelEnd" />
        </>
    )
}

interface TrapFocusProps {
    /**
     * A single child content element
     */
    children: React.ReactElement
    /**
     * If `true`, the modal will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any modal children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableAutoFocus?: boolean
    /**
     * If `true`, the modal will not prevent focus from leaving the modal while open.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableEnforceFocus?: boolean
    /**
     * If `true`, the modal will not restore focus to previously focused element once
     * modal is hidden.
     */
    disableRestoreFocus?: boolean
    /**
     * Return the document to consider.
     * We use it to implement the restore focus between different browser documents.
     */
    getDoc: () => HTMLDocument
    /**
     * Do we still want to enforce the focus?
     * This prop helps nesting TrapFocus elements.
     */
    isEnabled: () => boolean
    /**
    * If `true`, the modal is open.
    */
    open: boolean
}

TrapFocus.bdsName = 'TrapFocus'

export {
    TrapFocus,
    TrapFocusProps
}

export default TrapFocus
