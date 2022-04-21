import * as React from 'react'
import classNames from 'classnames'

import ChevronDoubleLeft from '@lowes-tech/bds-icons/ChevronDoubleLeft'
import ChevronDoubleRight from '@lowes-tech/bds-icons/ChevronDoubleRight'
import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'

import Pop from '../Pop'
import IconButton from '../IconButton'
import ListSelector from '../ListSelector'
import ListOption from '../ListOption'
import Stepper from '../Stepper'
import type { StepperValueInfo } from '../Stepper'
import Typography from '../Typography'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import type { PaginationItemProps } from '../Pagination/PaginationItem'

import PaginationCondensedWrapper from './styles/PaginationCondensedWrapper'

function defaultGetAriaLabel(type, page = null, selected = false) {
    if (type === 'page' && typeof page === 'number') {
        return `${selected ? '' : 'Go to '}page ${page}`
    }

    return `Go to ${type} page`
}

/**
 * Backyard React Pagination Condensed
 *
 * Condensed version of Pagination
 */
const PaginationCondensed: BDSForwardRef<PaginationCondensedProps> = React.forwardRef<
    PaginationCondensedRef,
    PaginationCondensedProps
>(function PaginationCondensed(props, ref) {
    const {
        className,
        // color = 'interactive',
        count: countProp,
        min: minProp = 1,
        max: maxProp,
        defaultPage,
        disabled,
        getItemAriaLabel = defaultGetAriaLabel,
        showFirstButton: showFirstButtonProp = true,
        hideNextButton: hideNextButtonProp,
        hidePrevButton: hidePrevButtonProp,
        showLastButton: showLastButtonProp = true,
        onChange,
        page: pageProp = 1,
        // shape = 'squared',
        siblingCount,
        size = 'medium',
        step: stepProp = 1,
        shape: shapeProp, // = 'rounded',
        variant = 'condensed',
        open: openProp = false,
        ...other
    } = props

    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'PaginationCondensed',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Hold popover ref
    const popoverRef = React.useRef(null)

    // Hold page number
    const [page, setPage] = React.useState(pageProp || defaultPage)
    // Hold open state
    const [open, setOpen] = React.useState(openProp)

    // Memoize props & reactivity
    const { max, min, step } = React.useMemo<PaginationCondensedProps>(() => {
        // If page is updated,
        if (page !== pageProp) {
            // Set new page number
            setPage((page) => Number(typeof pageProp === 'string' ? page : pageProp))
        }

        // If open state changed,
        if (open !== openProp) {
            // Set new open state
            setOpen(openProp)
        }

        // Props update
        return {
            max: typeof maxProp === 'number' ? maxProp : countProp || 0,
            min: typeof minProp === 'number' ? minProp : 0,
            step: stepProp,
            hideNextButton: hideNextButtonProp,
            hidePrevButton: hidePrevButtonProp,
            showFirstButton: showFirstButtonProp,
            showLastButton: showLastButtonProp,
        }
    }, [
        countProp,
        maxProp,
        minProp,
        pageProp,
        openProp,
        stepProp,
        hideNextButtonProp,
        hidePrevButtonProp,
        showFirstButtonProp,
        showLastButtonProp,
    ])

    /**
     * Go to page number
     *
     * @param type - type of go to
     * @param target - target page if type === 'page'
     */
    const goTo = (type, target = null) => {
        switch (type) {
            // When next goto,
            case 'next':
                // Go to next page (with step)
                setPage((page) => (page + step >= max ? max : Number(page + step)))
                break

            // When previous goto,
            case 'previous':
                // Go to previous page (with step)
                setPage((page) => (page - step <= min ? min : Number(page - step)))
                break

            // When first goto,
            case 'first':
                // Go to minumum page
                setPage(min)
                break

            // When last goto,
            case 'last':
                // Go to maximum page
                setPage(max)
                break

            // When page given,
            case 'page':
            default:
                // Go to target page number
                setPage((page) => (target <= max && target >= min ? Number(target) : page))
                break
        }
    }

    /**
     * Handle navigation
     *
     * Used for nav buttons
     *
     * @param type type of navigation
     */
    const handleNavigation = (type) => (event, info?: StepperValueInfo) => goTo(type, info?.current)

    // Handle opening the popover
    const handleOpen = () => {
        // Open popover
        setOpen(true)

        // After timeout,
        setTimeout(() => {
            // Get selected option, if any
            const el = popoverRef.current?.querySelector('.selected')

            // If selected option, make sure it is visible
            el?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest',
            })
        }, 50)
    }

    // Handle closing the popover
    const handleClose = () => {
        // Close popover
        setOpen(false)
    }

    // Navigation buttons
    // Shared button props
    const buttonProps = {
        variant: 'ghost',
        color: 'neutral',
        shape: 'circle',
        size: 'extra_small',
    } as const
    const buttons = {
        // First button
        first: (
            <IconButton
                className={classNames('pagination-button', 'pagination-first')}
                {...buttonProps}
                disabled={page <= min}
                onClick={handleNavigation('first')}
                aria-label={getItemAriaLabel('first')}
            >
                <ChevronDoubleLeft />
            </IconButton>
        ),
        // Previous button
        previous: (
            <IconButton
                className={classNames('pagination-button', 'pagination-previous')}
                {...buttonProps}
                disabled={page <= min}
                onClick={handleNavigation('previous')}
                aria-label={getItemAriaLabel('previous')}
            >
                <ChevronLeft />
            </IconButton>
        ),
        // Next button
        next: (
            <IconButton
                className={classNames('pagination-button', 'pagination-next')}
                {...buttonProps}
                disabled={page >= max}
                onClick={handleNavigation('next')}
                aria-label={getItemAriaLabel('next')}
            >
                <ChevronRight />
            </IconButton>
        ),
        // Last button
        last: (
            <IconButton
                className={classNames('pagination-button', 'pagination-last')}
                {...buttonProps}
                disabled={page >= max}
                onClick={handleNavigation('last')}
                aria-label={getItemAriaLabel('last')}
            >
                <ChevronDoubleRight />
            </IconButton>
        ),
    }

    // Inputs inside selector
    const inputs = {
        // Stepper input
        stepper: (
            <Stepper
                hideButtons
                max={max}
                className={classNames('condensed-input')}
                value={page}
                step={step}
                size="small"
                onChange={handleNavigation('page')}
            />
        ),
        // List selector input
        options: (
            <ListSelector
                className="condensed-selector"
                options={
                    // Create numbered options from map of max
                    Array.from(new Array(max - min + 1)).map((_, index) => ({
                        value: min + index,
                        label: `${min + index}`,
                        ariaLabel: getItemAriaLabel('page', min + index),
                    }))
                }
                value={page}
                onChange={(event, info) => {
                    goTo('page', info.value)
                }}
                // Close with delay on click
                onClick={() => setTimeout(handleClose, 250)}
                renderItem={(props, ref) => (
                    <ListOption
                        component={IconButton}
                        size="small"
                        tabIndex={-1}
                        {...props}
                        ref={ref}
                    />
                )}
            />
        ),
    }

    // Combine selector with Pop
    const selector = (
        <div className={classNames('pagination-condensed-selector')}>
            <Pop
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                anchor={inputs.stepper}
                pop={inputs.options}
                popoverProps={{
                    offset: [0, 4],
                }}
                ref={popoverRef}
            />
            <Typography bold variant="body_1" className="condensed-label">
                {`of ${max}`}
            </Typography>
        </div>
    )

    return (
        <PaginationCondensedWrapper
            aria-label="pagination navigation"
            color="interactive"
            className={classNames(
                'pagination',
                'pagination-condensed',
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
                <li className="pagination-first">{buttons.first}</li>
                <li className="pagination-previous">{buttons.previous}</li>
                <li className="pagination-select">{selector}</li>
                <li className="pagination-next">{buttons.next}</li>
                <li className="pagination-last">{buttons.last}</li>
            </ul>
        </PaginationCondensedWrapper>
    )
})

type PaginationCondensedRef = HTMLElement

type PaginationCondensedOverrideProps = 'size' | 'onChange'

interface PaginationCondensedProps
    extends BackyardBaseProps<PaginationCondensedRef, PaginationCondensedOverrideProps> {
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
    variant?: 'condensed'
    step?: number
    min?: number
    max?: number
}

PaginationCondensed.bdsName = 'PaginationCondensed'

export { PaginationCondensed }

export type { PaginationCondensedProps, PaginationCondensedRef }

export default PaginationCondensed
