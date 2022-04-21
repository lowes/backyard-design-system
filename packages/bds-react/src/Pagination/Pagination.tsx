import * as React from 'react'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import type { PaginationItemProps } from './PaginationItem'
import type { PaginationCondensedProps, PaginationCondensedRef } from '../PaginationCondensed'
import { PaginationCondensed } from '../PaginationCondensed'
import type { PaginationFullProps, PaginationFullRef } from '../PaginationFull'
import { PaginationFull } from '../PaginationFull'

/**
 * Backyard React Pagination
 *
 * @todo Comments
 */
const Pagination: BDSForwardRef<PaginationProps> = React.forwardRef<PaginationRef, PaginationProps>(
    function Pagination({ variant = 'numbered', ...props }, ref) {

        const Component = React.useMemo(() => {
            switch (variant) {
                case 'condensed':
                    return PaginationCondensed

                case 'numbered':
                case 'dotted':
                default:
                    return PaginationFull
            }
        }, [variant]) as typeof Pagination

        return (
            <Component
                variant={variant}
                {...props}
                ref={ref}
            />
        )
    },
)

type PaginationRef = PaginationCondensedRef | PaginationFullRef

type PaginationOverrideProps = 'variant'

interface PaginationProps extends Omit<PaginationCondensedProps & PaginationFullProps, PaginationOverrideProps> {
    /**
     * Number of pages at the beginning and end
     */
    boundaryCount?: number
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Number of pages
     */
    count: number
    /**
     * The page selected by default when the component is uncontrolled
     */
    defaultPage?: number
    /**
     * Whether or not all pagination items are disabled
     */
    disabled?: boolean
    /**
     * Function that maps to a string for generating aria labels
     *
     * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous')
     * @param {number} page The page number to format
     * @param {bool} selected If true, the current page is selected
     * @returns {string}
     */
    getItemAriaLabel?: (
        type: PaginationItemProps['type'],
        page: number,
        selected: boolean,
    ) => string
    /**
     * Whether or not to hide the first button
     */
    showFirstButton?: boolean
    /**
     * Whether or not to hide the next button
     */
    hideNextButton?: boolean
    /**
     * Whether or not to hide the previous button.
     */
    hidePrevButton?: boolean
    /**
     * Whether or not to hide the last button
     */
    showLastButton?: boolean
    /**
     * `onChange` trigger function
     * @argument {Event} event - DOM event
     * @argument {number} value - page number
     */
    onChange?: (event: React.ChangeEvent, value: number) => void
    /**
     * The current page (controlled)
     */
    page?: number
    /**
     * Renders pagination item
     * Useful if something other than buttons are needed
     *
     * @param {object} params The props to spread on a PaginationItem.
     * @returns {ReactNode}
     */
    renderItem?: (
        props: React.PropsWithChildren<PaginationItemProps>,
        index: number,
    ) => React.ComponentClass
    /**
     * Number of pages before and after the current page
     */
    siblingCount?: number
    /**
     * The size of the pagination items
     * Note: Only used with the `dotted` variant
     */
    size?: 'medium' | 'small'
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared' | 'circle'
    /**
     * The variant to use
     */
    variant?: 'numbered' | 'dotted' | 'condensed'
}

Pagination.bdsName = 'Pagination'

export { Pagination }

export type { PaginationProps, PaginationRef }

export default Pagination
