import * as React from 'react'
import classNames from 'classnames'
import { OrderedListWrapper } from './styles/OrderedListWrapper'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

/**
 * OrderedList component
 *
 * This component is used to geneate an ordered list (<ol>) within an app.
 *
 * Has one dependent component for usage -- ListItem
 */
const OrderedList: BDSForwardRef<OrderedListProps> = React.forwardRef<
    OrderedListRef,
    OrderedListProps
>(function OrderedList({ children, density, className, ...props }, ref) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'OrderedList')

    /**
     * Layout:
     *  <OrderedList density='normal'>
     *      <ListItem>Item List One</ListItem>
     *      <ListItem>Item List Two</ListItem>
     *  </OrderedList>
     */
    return (
        <OrderedListWrapper
            className={classNames(density ? `density--${density}` : null, className)}
            ref={ref}
            {...props}
        >
            {children}
        </OrderedListWrapper>
    )
})

type OrderedListRef = HTMLOListElement

interface OrderedListProps extends BackyardBaseProps<OrderedListRef> {
    /**
     * Handles the vertical and horizontal spacing of the OrderedList
     * Needs only be applied to the outermost instance of a OrderdList
     */
    density?: 'normal' | 'comfort' | 'condensed'
}

OrderedList.bdsName = 'OrderedList'

export { OrderedList }

export type { OrderedListProps, OrderedListRef }

export default OrderedList
