import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import { UnorderedListWrapper } from './styles/UnorderedListWrapper'

const UnorderedList: BDSForwardRef<UnorderedListProps> = React.forwardRef<
    UnorderedListRef,
    UnorderedListProps
>(function UnorderedList({ children, density, className, ...props }, ref) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'UnorderedList')

    return (
        <UnorderedListWrapper
            className={classNames(density ? `density--${density}` : null, className)}
            ref={ref}
            {...props}
        >
            {children}
        </UnorderedListWrapper>
    )
})

type UnorderedListRef = HTMLUListElement

interface UnorderedListProps extends BackyardBaseProps<UnorderedListRef> {
    density?: 'normal' | 'comfort' | 'condensed'
}

UnorderedList.bdsName = 'UnorderedList'

export { UnorderedList }

export type { UnorderedListProps, UnorderedListRef }

export default UnorderedList
