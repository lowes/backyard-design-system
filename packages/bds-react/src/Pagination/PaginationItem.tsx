import * as React from 'react'
import classNames from 'classnames'

import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'
import Dots from '@lowes-tech/bds-icons/Dots'
import ChevronDoubleLeft from '@lowes-tech/bds-icons/ChevronDoubleLeft'
import ChevronDoubleRight from '@lowes-tech/bds-icons/ChevronDoubleRight'
import Bullet from '@lowes-tech/bds-icons/Bullet'

import includes from 'core-js-pure/stable/array/includes'

import IconButton from '../IconButton'
import type { IconButtonProps, IconButtonRef } from '../IconButton'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * Backyard React PaginationItem
 *
 * @todo Comments
 */
const PaginationItem: BDSForwardRef<PaginationItemProps> = React.forwardRef<
    PaginationItemRef,
    PaginationItemProps
>(function PaginationItem(
    {
        className,
        color = 'interactive',
        component,
        disabled = false,
        page,
        selected = false,
        shape = 'custom',
        size = 'medium',
        type = 'page',
        variant = 'ghost',
        ...other
    },
    ref,
) {
    const ellipsis = includes(['start-ellipsis', 'end-ellipsis'], type)

    const normalizedIcons = {
        first: ChevronDoubleLeft,
        previous: ChevronLeft,
        next: ChevronRight,
        last: ChevronDoubleRight,
        // eslint-disable-next-line no-useless-computed-key
        ['start-ellipsis']: Dots,
        // eslint-disable-next-line no-useless-computed-key
        ['end-ellipsis']: Dots,
        dot: Bullet,
    }

    const Icon = normalizedIcons[type]

    return (
        <IconButton
            key={type === 'page' ? page : ellipsis}
            disabled={ellipsis ? true : disabled}
            variant={selected ? 'primary' : variant}
            size={size}
            shape={shape as PaginationItemProps['shape']}
            color={color}
            className={classNames(
                'pagination-item',
                `type--${type}`,
                {
                    selected,
                    ellipsis,
                },
                className,
            )}
            ref={ref as any}
            {...other}
        >
            {type === 'page' && page}
            {Icon ? <Icon /> : null}
        </IconButton>
    )
})

type PaginationItemRef = IconButtonRef

type PaginationItemOverrideProps = 'shape' | 'type'

interface PaginationItemProps extends Omit<IconButtonProps, PaginationItemOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * The active color
     */
    color?: 'interactive'
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component?: React.ReactElement
    /**
     * Whether or not the item will be disabled
     */
    disabled?: boolean
    /**
     * The current page number
     */
    page?: number
    /**
     * Whether the pagination item is selected
     */
    selected?: boolean
    /**
     * Shape of the pagination item
     */
    shape?: 'squared' | 'rounded' | 'circle'
    /**
     * The size of the pagination item
     */
    size?: 'small' | 'medium'
    /**
     * The type of pagination item
     */
    type?:
        | 'dot'
        | 'page'
        | 'first'
        | 'last'
        | 'next'
        | 'previous'
        | 'start-ellipsis'
        | 'end-ellipsis'
    /**
     * The pagination item variant
     */
    variant?: 'ghost' | 'primary'
}

PaginationItem.bdsName = 'PaginationItem'

export { PaginationItem }

export type { PaginationItemProps, PaginationItemRef }

export default PaginationItem
