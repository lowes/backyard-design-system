import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { GridColumn as ColumnBase } from '../styles/GridStyles'
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider'

const ColumnV3: BDSForwardRef<ColumnV3Props> = React.forwardRef<ColumnV3Ref, ColumnV3Props>(function Column(
    { 
        className, 
        children, 
        start, 
        end, 
        direction, 
        justifyContent,
        justifyItems,
        alignContent,
        alignItems,
        style, 
        ...props },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Grid.Column')

    return (
        <ColumnBase 
            className={classNames(
                'col',
                className
            )}
            style={{
                '--col-start': start,
                '--col-end': end,
                '--justify-content': justifyContent,
                '--justify-items': justifyItems,
                '--align-content': alignItems,
                '--align-items': alignItems,
                ...style
            }}
            {...props} 
            ref={ref}
        >
            {children}
        </ColumnBase>
    )
})

type ColumnV3Ref = HTMLDivElement

interface ColumnV3Props extends BackyardBaseProps<ColumnV3Ref> {
    /** The grid line to have the column start on */
    start?: number
    /** The grid line to have the column end on */
    end?: number
    /** The flexbox direction property */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    /** The flexbox wrap property */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    /** Flex property: justify-content */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    /** Flex property: justify-items */
    justifyItems?: 'start' | 'end' | 'center' | 'stretch'
    /** Flex property: align-content */
    alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
    /** Flex property: align-items */
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
}

ColumnV3.bdsName = 'Column'

export { ColumnV3 }

export { ColumnV3Props, ColumnV3Ref }

export default ColumnV3
