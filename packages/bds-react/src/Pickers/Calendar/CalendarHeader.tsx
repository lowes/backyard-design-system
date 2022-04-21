import * as React from 'react'

import Typography from '../../Typography'

import useAdapter from '../hooks/useAdapter'
import { usePreviousMonthDisabled, useNextMonthDisabled } from '../hooks/useMonthDisabled'
import { DateValidationProps } from '../functions/validateDate'
import { MonthSwitcher, ExportedMonthSwitcherProps } from './MonthSwitcher'

const CalendarHeader: React.ForwardRefExoticComponent<CalendarHeaderProps> = React.forwardRef<
    CalendarHeaderRef,
    CalendarHeaderProps
>(function CalendarHeader(
    {
        className,
        currentMonth: month,
        minDate,
        maxDate,
        disablePast,
        disableFuture,
        onMonthChange,
        leftArrowButtonProps,
        rightArrowButtonProps,
        leftArrowIcon,
        rightArrowIcon,
        leftArrowButtonText = 'previous month',
        rightArrowButtonText = 'next month',
        disableKeyboardControl = false,
        shape,
    },
    ref,
) {
    const adapter = useAdapter()

    const selectNextMonth = () => onMonthChange(adapter.getNextMonth(month))
    const selectPreviousMonth = () => onMonthChange(adapter.getPreviousMonth(month))

    const isNextMonthDisabled = useNextMonthDisabled(month, { disableFuture, maxDate })
    const isPreviousMonthDisabled = usePreviousMonthDisabled(month, { disablePast, minDate })

    return (
        <div className={className} ref={ref}>
            <div className="month-container">
                <Typography
                    aria-live="polite"
                    align="center"
                    variant="h5"
                    color="text_secondary"
                    className="month"
                >
                    {adapter.format(month, 'month').toUpperCase()}
                </Typography>
                <Typography
                    aria-live="polite"
                    align="center"
                    variant="h5"
                    color="text_secondary"
                    className="year"
                >
                    {adapter.format(month, 'year')}
                </Typography>
            </div>
            <MonthSwitcher
                leftArrowButtonProps={leftArrowButtonProps}
                rightArrowButtonProps={rightArrowButtonProps}
                leftArrowButtonText={leftArrowButtonText}
                rightArrowButtonText={rightArrowButtonText}
                leftArrowIcon={leftArrowIcon}
                rightArrowIcon={rightArrowIcon}
                onLeftClick={selectPreviousMonth}
                onRightClick={selectNextMonth}
                isLeftDisabled={isPreviousMonthDisabled}
                isRightDisabled={isNextMonthDisabled}
                disableKeyboardControl={disableKeyboardControl}
                shape={shape}
            />
        </div>
    )
})

type CalendarHeaderRef = HTMLDivElement

interface CalendarHeaderProps
    extends ExportedMonthSwitcherProps,
        Omit<DateValidationProps, 'shouldDisableDate'> {
    className?: string
    currentMonth: Date
    minDate: Date
    maxDate: Date
    onMonthChange: (date: Date) => void
    leftArrowIcon?: React.ReactNode
    rightArrowIcon?: React.ReactNode
    leftArrowButtonText?: string
    rightArrowButtonText?: string
    disableKeyboardControl?: boolean
    disablePast?: boolean
    disableFuture?: boolean
    shape?: 'rounded' | 'squared'
}

export { CalendarHeader, CalendarHeaderProps, CalendarHeaderRef }

export default CalendarHeader
