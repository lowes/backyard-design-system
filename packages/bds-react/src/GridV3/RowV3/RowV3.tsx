import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { GridRow as RowBase } from '../styles/GridStyles'
import { useBackyardTheme, validateBackyardTheme } from '../../ThemeProvider'
import type { BackyardTheme } from '../../ThemeProvider/ThemeProvider'

const RowV3: BDSForwardRef<RowV3Props> = React.forwardRef<RowV3Ref, RowV3Props>(function Row(
    { 
        className, 
        children, 
        cols, 
        xsCols, 
        smCols, 
        mdCols, 
        lgCols, 
        xlCols, 
        xxlCols,
        gutter,
        xsGutter,
        smGutter,
        mdGutter,
        lgGutter,
        xlGutter,
        xxlGutter,
        gap,
        xsGap,
        smGap,
        mdGap,
        lgGap,
        xlGap,
        xxlGap,
        style,
        ...props 
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()
    validateBackyardTheme(theme, 'Grid.Row')

    const changeSize = (gutter: string | undefined): undefined | string => {
        let newGutter
        if (gutter === undefined) {
            newGutter = undefined
        } else {
            newGutter = gutter.split('_').join('-')
        }
        return newGutter
    }

    const getGutterValues = () => {
        return {
            '--gutter-default': `var(--bds-sizes-${changeSize(gutter) || 'size-16'})`,
            '--gutter-xs': `var(--bds-sizes-${changeSize(xsGutter) || changeSize(gutter) || 'size-16'})`,
            '--gutter-sm': `var(--bds-sizes-${changeSize(smGutter) || changeSize(gutter) || 'size-32'})`,
            '--gutter-md': `var(--bds-sizes-${changeSize(mdGutter) || changeSize(gutter) || 'size-32'})`,
            '--gutter-lg': `var(--bds-sizes-${changeSize(lgGutter) || changeSize(gutter) || 'size-32'})`,
            '--gutter-xl': `var(--bds-sizes-${changeSize(xlGutter) || changeSize(gutter) || 'size-40'})`,
            '--gutter-xxl': `var(--bds-sizes-${changeSize(xxlGutter) || changeSize(gutter) || 'size-56'})`,
        }
    }

    const getGapValues = () => {
        return {
            '--gap-default': `var(--bds-sizes-${changeSize(gap) || 'size-32'})`,
            '--gap-xs': `var(--bds-sizes-${changeSize(xsGap) || changeSize(gap) || 'size-32'})`,
            '--gap-sm': `var(--bds-sizes-${changeSize(smGap) || changeSize(gap) || 'size-32'})`,
            '--gap-md': `var(--bds-sizes-${changeSize(mdGap) || changeSize(gap) || 'size-32'})`,
            '--gap-lg': `var(--bds-sizes-${changeSize(lgGap) || changeSize(gap) || 'size-32'})`,
            '--gap-xl': `var(--bds-sizes-${changeSize(xlGap) || changeSize(gap) || 'size-32'})`,
            '--gap-xxl': `var(--bds-sizes-${changeSize(xxlGap) || changeSize(gap) || 'size-32'})`,
        }
    }

    const getColsValues = () => {
        return {
            '--cols-default': cols || 16,
            '--cols-xs': xsCols || cols || 4,
            '--cols-sm': smCols || cols || 8,
            '--cols-md': mdCols || cols || 16,
            '--cols-lg': lgCols || cols || 16,
            '--cols-xl': xlCols || cols || 16,
            '--cols-xxl': xxlCols || cols || 16
        }
    }

    return (
        <RowBase 
            className={classNames('row', className)} 
            style={{
                ...getGutterValues(),
                ...getColsValues(),
                ...getGapValues(),
                ...style
            }}
            {...props} 
            ref={ref}
        >
            {children}
        </RowBase>
    )
})

type RowV3Ref = HTMLDivElement

interface RowV3Props extends BackyardBaseProps<RowV3Ref> {
    /** Define the number of columns that will be consistent across all breakpoints */
    cols?: number
    /** Define the number of columns at the xs breakpoint */
    xsCols?: number
    /** Define the number of columns at the sm breakpoint */
    smCols?: number
    /** Define the number of columns at the md breakpoint */
    mdCols?: number
    /** Define the number of columns at the lg breakpoint */
    lgCols?: number
    /** Define the number of columns at the xl breakpoint */
    xlCols?: number
    /** Define the number of columns at the xxl breakpoint */
    xxlCols?: number
    /** The margin on the side of the row across all breakpoints */
    gutter?: keyof BackyardTheme['sizes']
    /** The margin on the side of the row for xs breakpoing */
    xsGutter?: keyof BackyardTheme['sizes']
    /** The margin on the side of the row for sm breakpoing */
    smGutter?: keyof BackyardTheme['sizes']
    /** The margin on the side of the row for md breakpoing */
    mdGutter?: keyof BackyardTheme['sizes']
    /** The margin on the side of the row for lg breakpoing */
    lgGutter?: keyof BackyardTheme['sizes']
    /** The margin on the side of the row for xl breakpoing */
    xlGutter?: keyof BackyardTheme['sizes']
    /** The margin on the side of the row for xxl breakpoing */
    xxlGutter?: keyof BackyardTheme['sizes']
    /** The column gap size across all breakpoints */
    gap?: keyof BackyardTheme['sizes']
    /** The column gap for the xs breakpoints */
    xsGap?: keyof BackyardTheme['sizes']
    /** The column gap for the sm breakpoints */
    smGap?: keyof BackyardTheme['sizes']
    /** The column gap for the md breakpoints */
    mdGap?: keyof BackyardTheme['sizes']
    /** The column gap for the lg breakpoints */
    lgGap?: keyof BackyardTheme['sizes']
    /** The column gap for the xl breakpoints */
    xlGap?: keyof BackyardTheme['sizes']
    /** The column gap for the xxl breakpoints */
    xxlGap?: keyof BackyardTheme['sizes']
}

RowV3.bdsName = 'Row'

export { RowV3 }

export { RowV3Props, RowV3Ref }

export default RowV3
