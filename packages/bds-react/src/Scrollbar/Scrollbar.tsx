import classNames from 'classnames'
import * as React from 'react'
import { ResizeObserver } from '@juggle/resize-observer'

import ownerDocument from '../utils/functions/ownerDocument'
import ownerWindow from '../utils/functions/ownerWindow'
import useForkRef from '../utils/hooks/useForkRef'
import useHasOverflow  from '../utils/hooks/useHasOverflow'
import useRandomId from '../utils/hooks/useRandomId'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import {
    ScrollbarContainerWrapper,
    ScrollbarKnobWrapper,
    ScrollbarTrackWrapper,
    ScrollbarWrapper,
} from './styles'

/**
 * A styled scrollbar for use with the Backyard Design System.
 *
 * TODO Implement a vertical scrollbar for the Y axis. Currently only provides a horizontal scrollbar for the X axis.
 *
 * ex:
 * <Scrollbar>
 *     Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin landjaeger rump alcatra capicola chicken
 *     pork chop. Filet mignon tenderloin drumstick burgdoggen swine shoulder picanha meatball ham venison chislic
 *     landjaeger andouille beef ribs jerky. Strip steak kevin sirloin cow picanha pork loin jowl chuck short loin
 *     shoulder sausage flank, brisket drumstick. Landjaeger ham pig meatball chuck ribeye. Kevin filet mignon
 *     pastrami turducken. Spare ribs pastrami chicken, meatball rump ball tip bacon kevin pork belly shoulder
 *     venison capicola cow pig ground round. Shank beef turducken, leberkas chuck tri-tip hamburger pork ham spare
 *     ribs kielbasa.
 * </Scrollbar>
 *
 * note:
 * To override/change the scrollbar styling please target the following css classes:
 *   - .scrollbar-container
 *   - .scrollbar-track
 *   - .scrollbar-knob
 * To override/change the content styling please target the following css classes:
 *   - .content-container
 */
const Scrollbar: BDSForwardRef<ScrollbarProps> = React.forwardRef<ScrollbarRef, ScrollbarProps>(
    function Scrollbar({ children, className, id: idProp, onScroll, onResize, wrapperProps, ...props }, ref) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'Scrollbar')

        const id = useRandomId(idProp)
        const wrapperRef = React.useRef<HTMLDivElement>()
        const contentRef = React.useRef<HTMLDivElement>()
        const scrollBarKnobRef = React.useRef<HTMLDivElement>()
        const scrollbarRef = React.useRef<HTMLDivElement>()
        const scrollbarContentRef = React.useRef<HTMLDivElement>()
        const handleRef = useForkRef(contentRef, ref)

        const hasOverflow = useHasOverflow(contentRef)
        const [isUsingScrollbar, setIsUsingScrollbar] = React.useState(false)

        let currXPos = 0

        /**
         * Retrieves the current clientX position of the mouse or touch point
         * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
         * @return the current position of mouse/touch point on the screen
         */
        const getXPos = (event) => {
            if (
                event.type === 'touchstart' ||
                event.type === 'touchmove' ||
                event.type === 'touchend' ||
                event.type === 'touchcancel'
            ) {
                const touch = event.touches[0] || event.changedTouches[0]
                return touch.clientX
            }
            return event.clientX
        }

        /**
         * Moves the scrollbar to either the newPosition if provided or calculates the proper
         * location depending on the contents current scroll position.
         * @param {number} newPosition - distance in pixels to move the the scrollbar knob within the scrollbar track
         */
        const moveScrollbar = (newPosition?: number) => {
            const scrollbarKnob = scrollBarKnobRef.current

            // check if scrollbar is shown to prevent unnecessary calculations
            if (scrollbarRef.current.offsetParent && scrollbarKnob) {
                if (!newPosition && newPosition !== 0 && !isUsingScrollbar) {
                    const { scrollLeft, scrollWidth, clientWidth } = contentRef.current
                    const scrollPercentage = scrollLeft / scrollWidth
                    scrollbarKnob.style.left = `${Math.round(scrollPercentage * clientWidth)}px`
                } else {
                    scrollbarKnob.style.left = `${newPosition}px`
                }
            }

            if (onScroll) {
                onScroll()
            }
        }

        /**
         * Finds the scroll distance depending how how far the scrollbar knob has been moved.
         * Then moves the scrollbar and content accordingly/
         * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
         */
        const calculateScrollDistance = (event) => {
            const scrollbarKnob = scrollBarKnobRef.current
            const newMouseXPos = currXPos - getXPos(event)
            const leftPosition = scrollbarKnob.offsetLeft - newMouseXPos
            currXPos = getXPos(event)

            // move knob
            if (leftPosition < 0) {
                // stop scrollbar at far left
                moveScrollbar(0)
                // move content
                contentRef.current.scrollTo({ left: 0 })
            } else if (leftPosition + scrollbarKnob.clientWidth >= contentRef.current.clientWidth) {
                // stop scrollbar at far right
                moveScrollbar(contentRef.current.clientWidth - scrollbarKnob.scrollWidth)
                // move content
                contentRef.current.scrollTo({ left: contentRef.current.scrollWidth })
            } else {
                // position scrollbar within container
                moveScrollbar(leftPosition)
                // move content
                const distance =
                    (leftPosition / contentRef.current.clientWidth) * contentRef.current.scrollWidth
                contentRef.current.scroll(Math.round(distance), 0)
            }
        }

        /**
         * Gets nearest DOM document that owns modal ref
         */
        const getDoc = () => ownerDocument(scrollbarRef.current)

        /**
         * Cleans up all mouse/touch event handlers.
         */
        const cleanupDrag = () => {
            const scrollbarKnob = scrollBarKnobRef.current

            scrollbarKnob.onmouseup = null
            getDoc().onmouseup = null
            scrollbarKnob.onmousemove = null
            getDoc().onmousemove = null
            setIsUsingScrollbar(false)
        }

        /**
         * Sets up all mouse/touch event handlers
         */
        const setupDrag = () => {
            getDoc().onmouseup = cleanupDrag
            getDoc().ontouchend = cleanupDrag
            getDoc().onmousemove = calculateScrollDistance
            getDoc().ontouchmove = calculateScrollDistance
            setIsUsingScrollbar(true)
        }

        /**
         * Calculates the padding of the wrapper's left padding, margin, border
         * @return {number} total - left spacing of wrapper (left-padding + left-margin + left-border)
         */
        const getGutterSpacing = () =>
            parseInt(
                ownerWindow()
                    .getComputedStyle(wrapperRef.current)
                    .getPropertyValue('padding-left')
                    .replace('px', ''),
                10,
            ) +
            parseInt(
                ownerWindow()
                    .getComputedStyle(wrapperRef.current)
                    .getPropertyValue('margin-left')
                    .replace('px', ''),
                10,
            ) +
            parseInt(
                ownerWindow()
                    .getComputedStyle(wrapperRef.current)
                    .getPropertyValue('border-left')
                    .replace('px', ''),
                10,
            )

        /**
         * snaps middle of knob to pointer position
         * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
         */
        const snapToPointer = (event) => {
            const knobWidth = scrollBarKnobRef.current.clientWidth
            const containerMargin = wrapperRef.current.getBoundingClientRect().left
            const gutterSpacing = getGutterSpacing()

            moveScrollbar(currXPos - knobWidth / 2 - containerMargin - gutterSpacing)
            calculateScrollDistance(event)
        }

        /**
         * sets up how to handle mouse event when user initiates dragging the scrollbar
         * @param {MouseEvent | TouchEvent} event - event that triggered the scroll
         */
        const dragHandler = (event) => {
            currXPos = getXPos(event)

            snapToPointer(event)
            setupDrag()
        }

        // calculates the scrollbar width depending on the amount of overflow
        const calculateScrollbarWidth = () => {
            const { offsetWidth, scrollWidth } = contentRef.current

            const visibleRatio = offsetWidth / scrollWidth
            return Math.round(visibleRatio * offsetWidth)
        }

        // builds out and sets up the init state of the scrollbar
        const buildScrollbar = () => {
            const knob = scrollBarKnobRef.current
            const scrollbarWidth = calculateScrollbarWidth()
            const container = contentRef.current

            if (knob && hasOverflow) {
                container.scrollLeft = currXPos
                knob.style.width = `${scrollbarWidth}px`
            }
        }

        React.useEffect(() => {
            // Call handler right away so state gets updated with initial window size
            buildScrollbar()
            // Add event listener
            ownerWindow().addEventListener('resize', buildScrollbar)
            // Remove event listener on cleanup
            return () => ownerWindow().removeEventListener('resize', buildScrollbar)
        }, [contentRef, hasOverflow])

        const ro = new ResizeObserver(() => {
            const knob = scrollBarKnobRef.current
            const scrollbarWidth = calculateScrollbarWidth()

            knob.style.width = `${scrollbarWidth}px`

            if (onResize) {
                onResize()
            }
        })

        React.useEffect(() => {
            ro.observe(scrollbarContentRef.current)

            return () => ro.disconnect()
        }, [scrollbarContentRef])

        /**
         * Layout:
         * <div>
         *     <div>{content}</div>
         *     <scrollbar/>
         * </div>
         */
        return (
            <ScrollbarWrapper {...wrapperProps} className={className} ref={wrapperRef}>
                <div
                    className="content-container"
                    onScroll={() => {
                        moveScrollbar()
                    }}
                    id={id}
                    {...props}
                    ref={handleRef}
                >
                    <div
                        className="scrollbar-content"
                        ref={scrollbarContentRef}
                    >
                        {children}                        
                    </div>
                </div>

                <ScrollbarContainerWrapper
                    className={classNames('scrollbar-container', !hasOverflow && 'hide-scrollbar')}
                    onMouseDown={dragHandler}
                    onTouchStart={dragHandler}
                    ref={scrollbarRef}
                >
                    <ScrollbarTrackWrapper className="scrollbar-track">
                        <ScrollbarKnobWrapper
                            className="scrollbar-knob"
                            role="scrollbar"
                            aria-controls={id}
                            ref={scrollBarKnobRef}
                        />
                    </ScrollbarTrackWrapper>
                </ScrollbarContainerWrapper>
            </ScrollbarWrapper>
        )
    },
)

type ScrollbarRef = HTMLDivElement

interface ScrollbarProps extends BackyardBaseProps<ScrollbarRef> {
    /**
     * Classname for the ScrollbarWrapper
     */
    className?: string
    /**
     * Additional props for the ScrollbarWrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
    /**
     * Id for the content the ScrollbarWrapper is wrapping
     */
    id?: string
    /**
     * Used to pass additional functionality to the onScroll event
     */
    onScroll?: () => void
    onResize?: () => void
}

Scrollbar.bdsName = 'Scrollbar'

export { Scrollbar }

export type { ScrollbarProps, ScrollbarRef }

export default Scrollbar
