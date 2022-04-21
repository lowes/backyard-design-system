import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import TabContentWrapper from './style/TabContentWrapper'

const TabContent: BDSForwardRef<TabContentProps> = React.forwardRef<
    TabContentRef,
    TabContentProps
>(function TabContent({ children, className, id, selected, ...props }, ref) {
    return (
        <TabContentWrapper
            id={id}
            className={classNames(
                'tab-content',
                {
                    selected,
                },
                className,
            )}
            hidden={!selected}
            ref={ref}
            role="tabpanel"
            {...props}
        >
            {children}
        </TabContentWrapper>
    )
})

type TabContentRef = HTMLDivElement

interface TabContentProps extends BackyardBaseProps<TabContentRef> {
    /**
     * The content displayed within the tab content area.
     */
    children: React.ReactElement
    /**
     * Adds a class name to the TabContent component's wrapper.
     */
    className?: string
    /**
     * Required for accessability.
     *
     * This is the id that the Tab component's `aria-controls` property must point to.
     * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role
     */
    id: string
    /**
     * If the current Tab associated with this TabContent is selected. This is used to
     * change the value for the hidden property on TabContent.
     */
    selected?: boolean
}

TabContent.bdsName = 'TabContent'

export type { TabContentRef, TabContentProps }

export { TabContent }

export default TabContent
