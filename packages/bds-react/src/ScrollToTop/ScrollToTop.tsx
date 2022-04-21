import ChevronUp from '@lowes-tech/bds-icons/ChevronUp'
import classNames from 'classnames'
import * as React from 'react'

import Portal from '../Portal'
import type { PortalProps } from '../Portal'
import { ownerWindow } from '../utils/functions'
import useForkRef from '../utils/hooks/useForkRef'
import { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import FAB from './styles/FAB'
import ScrollToTopWrapper from './styles/ScrollToTopWrapper'

/**
 * Backyard React Scroll To Top
 *
 * Provides a button to allow the user to have quick access back to the top of the page without scrolling up manually.
 *
 * Documentation:
 *
 * - [ScrollToTop](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/ScrollToTop)
 *
 * API:
 *
 * - [ScrollToTop API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ScrollToTop)
 *
 */
const ScrollToTop: BDSForwardRef<ScrollToTopProps> = React.forwardRef<
    ScrollToTopRef,
    ScrollToTopProps
>(function ScrollToTop(
    {
        children,
        scrollToRef,
        rightPosition = 'size-32',
        bottomPosition = 'size-48',
        hide,
        noAnimation,
        showAt = 400,
        container,
        disablePortal,
        onClick,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'ScrollToTop')

    const fabRef = React.useRef(null)
    const wrapperRef = React.useRef<HTMLDivElement>()
    const handleRef = useForkRef(wrapperRef, ref)
    const [scrollTo, setScrollTo] = React.useState(null)
    const [showFab, setShowFab] = React.useState(false)

    /**
     * Scrolls the window back to the top if no `scrollTo` element was passed in.
     * Otherwise it scrolls to the passed in element.
     */
    const scrollToTop = (event) => {
        if (scrollTo && scrollTo.current) {
            scrollTo.current.scrollIntoView()
        } else {
            ownerWindow().scrollTo(0, 0)
        }

        if (onClick) {
            onClick(event)
        }
    }

    /**
     * Checks how far the user has scrolled down the page.
     * When the distance is greater then the `showAt` value sets the 'showFab' state to true, else sets
     * to false and hides the fab from the screen.
     */
    React.useEffect(() => {
        const onScroll = () => {
            if (ownerWindow().pageYOffset >= showAt) {
                setShowFab(true)
            } else {
                setShowFab(false)
            }

            /**
             * Blur the FAB once the window.scrollY reaches or is below the showAT value.
             * This is to reset the focus to the <body> element of the page and reset the focus flow.
             */
            if (ownerWindow().pageYOffset <= showAt) {
                fabRef.current?.blur()
            }
        }

        onScroll()

        ownerWindow().addEventListener('scroll', onScroll)

        return () => ownerWindow().removeEventListener('scroll', onScroll)
    }, [noAnimation, showAt, fabRef])

    React.useEffect(() => {
        setScrollTo(scrollToRef)
    }, [scrollToRef])

    return (
        <Portal container={container} disablePortal={disablePortal}>
            <ScrollToTopWrapper
                className={classNames(
                    'fab',
                    'scroll-to-top',
                    hide || !showFab ? 'hide' : '',
                    noAnimation ? '' : 'animate',
                    classNames
                )}
                // @ts-ignore
                style={{ right: `var(--bds-sizes-${rightPosition})`, bottom: `var(--bds-sizes-${bottomPosition})`}}
                {...props}
                ref={handleRef}
            >
                {children}
                <FAB
                    variant="primary"
                    color="interactive"
                    shape="circle"
                    onClick={scrollToTop}
                    ref={fabRef}
                >
                    <ChevronUp />
                </FAB>
            </ScrollToTopWrapper>
        </Portal>
    )
})

type ScrollToTopRef = HTMLDivElement

interface ScrollToTopProps extends BackyardBaseProps<ScrollToTopRef> {
    /**
     * Wrapper DOM className
     */
    className?: string
    /**
     * Hides the FAB from the screen when true
     */
    hide?: boolean
    /**
     * Turns off the animation effect of the FAB sliding in/out from the bottom of the screen when true
     */
    noAnimation?: boolean
    /**
     * Number in pixels that the user has to scroll from the *top of the page* inorder for the scrollToTop fab
     * to appear on the screen.
     * If you don't want the user to have to scroll for it to appear just put 0.
     */
    showAt?: number
    /**
     * Element Ref that the page should scroll to when the ScrollToTop component is clicked.
     * If nothing is provided it just scrolls to the top of the window.
     */
    scrollToRef?: React.Ref<HTMLElement>
    /**
     * Space between the Button and the right side of the window
     */
    rightPosition?: keyof BackyardToken['sizes'] | string
    /**
     * Space between the Button and the bottom of the window
     */
    bottomPosition?: keyof BackyardToken['sizes'] | string
    /**
     * `onClick` trigger function
     * @argument {Event} event - DOM event
     */
    onClick?: (event: React.MouseEvent) => void
    /**
     * Portal Container
     */
    container?: PortalProps['container']
    /**
     * Whether or not portal will be disabled
     */
    disablePortal?: PortalProps['disablePortal']
}

ScrollToTop.bdsName = 'ScrollToTop'

export { ScrollToTop }

export type { ScrollToTopProps, ScrollToTopRef }

export default ScrollToTop
