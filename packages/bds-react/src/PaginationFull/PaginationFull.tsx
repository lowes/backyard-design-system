import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import PaginationItem from '../Pagination/PaginationItem'
import type { PaginationItemProps } from '../Pagination/PaginationItem'
import usePagination from '../Pagination/usePagination'
import PaginationFullWrapper from './styles/PaginationFullWrapper'

function defaultGetAriaLabel(type, page, selected) {
    if (type === 'page') {
        return `${selected ? '' : 'Go to '}page ${page}`
    }

    return `Go to ${type} page`
}

/**
 * Backyard React Pagination
 *
 * @todo Comments
 */
const PaginationFull: BDSForwardRef<PaginationFullProps> = React.forwardRef<PaginationFullRef, PaginationFullProps>(
    function PaginationFull(props, ref) {
        const {
            boundaryCount: boundaryCountProp,
            className,
            // color = 'interactive',
            count,
            defaultPage,
            disabled,
            getItemAriaLabel = defaultGetAriaLabel,
            showFirstButton = false,
            hideNextButton: hideNextButtonProp,
            hidePrevButton: hidePrevButtonProp,
            showLastButton = false,
            onChange,
            page,
            renderItem = (item, index) => (
                <PaginationItem
                    key={index}
                    {...(item as React.PropsWithRef<PaginationItemProps>)}
                />
            ),
            // shape = 'squared',
            siblingCount,
            size = 'medium',
            shape: shapeProp = 'circle',
            variant = 'numbered',
            ...other
        } = props

        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'PaginationFull',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        const boundaryCount = variant === 'dotted' ? 10 : boundaryCountProp
        const hideNextButton = variant === 'dotted' ? true : hideNextButtonProp
        const hidePrevButton = variant === 'dotted' ? true : hidePrevButtonProp

        const { items } = usePagination({
            ...props,
            boundaryCount,
            showFirstButton,
            hideNextButton,
            hidePrevButton,
            showLastButton,
            componentName: 'PaginationFull',
        })

        return (
            <PaginationFullWrapper
                aria-label="pagination navigation"
                color="interactive"
                className={classNames(
                    'pagination',
                    `variant--${variant}`,
                    `size--${size}`,
                    `shape--${shape}`,
                    // `color--${color}`,
                    className,
                )}
                ref={ref}
                {...other}
            >
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {renderItem(
                                {
                                    ...item,
                                    type: variant === 'dotted' ? 'dot' : item.type,
                                    color: 'interactive',
                                    'aria-label': getItemAriaLabel(
                                        item.type,
                                        item.page,
                                        item.selected,
                                    ),
                                    shape,
                                    size,
                                },
                                index,
                            )}
                        </li>
                    ))}
                </ul>
            </PaginationFullWrapper>
        )
    },
)

type PaginationFullRef = HTMLElement

type PaginationFullOverrideProps = 'size' | 'onChange'

interface PaginationFullProps extends BackyardBaseProps<PaginationFullRef, PaginationFullOverrideProps> {
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
    count?: number
    min?: number
    max?: number
    step?: number
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
    variant?: 'numbered' | 'dotted'
}

PaginationFull.bdsName = 'PaginationFull'

export { PaginationFull }

export type { PaginationFullProps, PaginationFullRef }

export default PaginationFull
