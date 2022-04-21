import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { GridColumn as ColumnBase } from '../styles/GridStyles'
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider'

const Column: BDSForwardRef<ColumnProps> = React.forwardRef<ColumnRef, ColumnProps>(function Column(
    { className, children, sm, md, lg, xl, ...props },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Grid.Column')

    const cols = []

    if (sm) {
        cols.push(`sm-${sm}`)
    }
    if (md) {
        cols.push(`md-${md}`)
    }
    if (lg) {
        cols.push(`lg-${lg}`)
    }
    if (xl) {
        cols.push(`xl-${xl}`)
    }

    return (
        <ColumnBase className={classNames('col', className, cols)} {...props} ref={ref}>
            {children}
        </ColumnBase>
    )
})

type ColumnRef = HTMLDivElement

interface ColumnProps extends BackyardBaseProps<ColumnRef> {
    /**
     * Number of columns to display in a small viewport
     */
    sm?: number
    /**
     * Number of columns to display in a medium viewport
     */
    md?: number
    /**
     * Number of columns to display in a large viewport
     */
    lg?: number
    /**
     * Number of columns to display in an extra large viewport
     */
    xl?: number
}

Column.bdsName = 'Column'

export { Column }

export { ColumnProps, ColumnRef }

export default Column
