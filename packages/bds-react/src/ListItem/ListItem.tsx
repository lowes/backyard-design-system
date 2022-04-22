import * as React from 'react'
import { ListItemWrapper } from './styles/ListItemWrapper'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

const ListItem: BDSForwardRef<
    ListItemProps & {
        ref?: any
    }
> = React.forwardRef<ListItemRef, ListItemProps>(function ListItem({ children, ...props }, ref) {
    return (
        <ListItemWrapper ref={ref} {...props}>
            {children}
        </ListItemWrapper>
    )
})

type ListItemRef = HTMLLIElement

interface ListItemProps extends BackyardBaseProps<ListItemRef> {}

ListItem.bdsName = 'ListItem'

export { ListItem }

export type { ListItemRef, ListItemProps }

export default ListItem
