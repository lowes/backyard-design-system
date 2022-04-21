import * as React from 'react'
import classNames from 'classnames'

import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'

import BaseTabsWrapper from './style/TabsWrapper'

import Carousel, { CarouselItem } from '../Carousel'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import TabContext from './TabContext'
import TabContent from './TabContent'
import type { TabRef } from './Tab'

/**
 * Backyard React Tabs Component
 */
const Tabs: BDSForwardRef<TabsProps> = React.forwardRef<TabsRef, TabsProps>(function Tabs(
    {
        children,
        className,
        defaultSelected = 0,
        shape: shapeProp, // = 'rounded',
        isOnLayer = false,
        keepMounted = false,
        handleOnChange,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'Tabs',
    })

    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // the index of the current selected tab
    const [selected, setSelected] = React.useState(defaultSelected)

    // ref of tab list
    const tabListRef = React.useRef<HTMLDivElement>(null)

    /**
     * The `handleClick` prop.
     *
     * This is passed to the tab component's `onClick` property and is called inside
     * of the Tab component.
     *
     * @param index - the index of the tab within the list of the tabs
     */
    const handleClick = (index: number, event: React.MouseEvent) => {
        setSelected(index)

        if (handleOnChange) {
            handleOnChange(event)
        }
    } // (event: React.KeyboardEvent | React.MouseEvent) => void

    /**
     * Get enabled sibling through recursion
     *
     * @param direction - direction to recursively check
     * @param element - current tab
     */
    const getEnabledSibling = (direction: 'previous' | 'next', element: TabRef) => {
        // Get next or previous sibling depending on dirction
        const sibling = (direction === 'next'
            ? element.nextElementSibling
            : element.previousElementSibling) as TabRef

        // If sibling found,
        if (sibling) {
            // If sibling is disabled,
            if (sibling.disabled) {
                // Try next sibling
                return getEnabledSibling(direction, sibling as TabRef)
            }

            // Else, sibling is not disabled
            // Return enabled sibling
            return sibling
        }

        // Else, sibling was not found,
        // Return no sibling
        return null
    }

    /**
     * The `handleKeyDown` trigger.
     *
     * This is called inside of the Tab component.
     *
     * @param id - the id of the tab
     * @param index - the index of the tab within the list of tabs
     */
    const handleKeyDown = (index: number, event: React.KeyboardEvent<TabRef>) => {
        // get tab from event target
        const tab = event.target as TabRef

        // default target to null
        let target: TabRef = null

        // where key down...
        switch (event.key) {
            // is left arrow...
            case 'ArrowLeft':
                // target is previous tab (if available)
                target = getEnabledSibling('previous', tab) as TabRef
                break

            case 'ArrowRight':
                // target is next tab (if available)
                target = getEnabledSibling('next', tab) as TabRef
                break

            default:
                // Do nothing
                break
        }

        if (target !== null) {
            target.focus()
        }

        if (event.key === 'Enter' || event.key === ' ') {
            setSelected(index)
        }

        if (handleOnChange) {
            handleOnChange(event)
        }
    }

    /**
     * Returns the tabs with event handlers and their respective index passed through.
     */
    const getTabs = (role: string) =>
        React.Children.map(children, (tab, index) =>
            // @ts-ignore
            React.cloneElement(tab, {
                // @ts-ignore
                ariaControls: `${tab.props.id}-panel`,
                role,
                index,
            }),
        )

    // The tabs mapped with the event handlers and their respective index
    const tabs = theme.isMobile ? getTabs('') : getTabs('tab')

    // if is mobile, wrap the tabs in a carousel
    // else return the tabs
    const computedTabs = theme.isMobile ? (
        <Carousel
            id="mobile-tabs-scrollbar"
            carouselButtonProps={{
                shape: 'squared',
                style: {
                    border: 'none',
                },
            }}
            role="tablist"
            leftIcon={<ChevronLeft />}
            noScrollbar
            rightIcon={<ChevronRight />}
            ref={tabListRef}
        >
            {tabs.map((tab, index) => (
                <CarouselItem key={index}>{tab}</CarouselItem>
            ))}
        </Carousel>
    ) : (
        <div className="tablist" role="tablist" ref={tabListRef}>
            {tabs}
        </div>
    )

    /**
     * Layout:
     * <div tabs role='navigation'>
     *   <
     * </div>
     */
    return (
        <TabContext.Provider
            value={{
                selected,
                handleClick,
                handleKeyDown,
                isOnLayer,
            }}
        >
            <BaseTabsWrapper
                className={classNames('tabs-wrapper', `shape--${shape}`, className)}
                isOnLayer={isOnLayer}
                role="navigation"
                {...props}
                ref={ref}
            >
                <div className="tabs">{computedTabs}</div>
                {
                    /**
                     * If keepMounted is true, we display only the selected tab's content.
                     *
                     * If keepMounted is false, we display all tab content, but only set
                     * the selected tab's content to be visible. The keepMounted prop should
                     * be set to false when content will have an impact on SEO.
                     */
                    !keepMounted ? (
                        <TabContent
                            id={`${
                                tabs.find((tab) => tab.props.index === selected).props.id
                            }-panel`}
                            selected
                        >
                            {tabs.find((tab) => tab.props.index === selected).props.children}
                        </TabContent>
                    ) : (
                        React.Children.map(tabs, (tab, index) => {
                            return (
                                <TabContent
                                    key={index}
                                    id={`${tab.props.id}-panel`}
                                    selected={selected === index}
                                >
                                    {tab.props.children}
                                </TabContent>
                            )
                        })
                    )
                }
            </BaseTabsWrapper>
        </TabContext.Provider>
    )
})

type TabsRef = HTMLDivElement

interface TabsProps extends BackyardBaseProps<TabsRef> {
    /**
     * The Tab components.
     */
    children?: React.ReactElement[]
    /**
     * Adds a class name to the Tab component's wrapper.
     */
    className?: string
    /**
     * Shape of the edges of the tabs
     */
    shape?: 'rounded' | 'squared'
    /**
     * Iverses the field color token. This should be used when the Tabs component is on a layer color.
     */
    isOnLayer?: boolean
    /**
     * If false, the TabContent for each tab is not attached to the DOM.
     *
     * If true, the TabContent for each tab is attached to the DOM. This
     * option is best if you need the content in the DOM for SEO purposes.
     */
    keepMounted?: boolean
    /**
     * Sends a mouse or keyboard event based on how the change occurred.
     */
    handleOnChange?: (event: React.MouseEvent | React.KeyboardEvent) => void
    /**
     * The tab that is selected by default.
     */
    defaultSelected?: number
}

Tabs.bdsName = 'Tabs'

export type { TabsRef, TabsProps }

export { Tabs }

export default Tabs
