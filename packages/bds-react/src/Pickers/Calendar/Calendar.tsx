import * as React from 'react'
import classNames from 'classnames'

import useAdapter from '../hooks/useAdapter'
import useCalendarState from '../hooks/useCalendarState'
import type { DateValidationProps } from '../functions/validateDate'
import findClosestDate from '../functions/findClosestDate'
import CalendarWrapper from './styles/CalendarWrapper'
import Month from './Month'
import type { ExportedMonthProps } from './Month'

import CalendarHeader from './CalendarHeader'
import type { CalendarHeaderProps } from './CalendarHeader'
import { isParsableDateObject } from '../typings/types'
import type { ParsableDateObject, ParsableDate } from '../typings/types'

const isDatesObject = (
    dates: ParsableDate[] | ParsableDateObject[],
): dates is ParsableDateObject[] => isParsableDateObject(dates[0])

const Calendar: React.ForwardRefExoticComponent<CalendarProps & { ref?: any }> = React.forwardRef<
    CalendarRef,
    CalendarProps
>(function Calendar(
    {
        className,
        date,
        onChange,
        onMonthChange,
        minDate: __minDate,
        maxDate: __maxDate,
        disableKeyboardControl = false,
        shouldDisableDate,
        disablePast,
        disableFuture,
        disableDates: disableDatesProp = [],
        dates: datesProp = [],
        shape,
        ...props
    },
    ref,
) {
    const adapter = useAdapter()

    const minDate = adapter.parse(__minDate || adapter.date(new Date('1900-01-01')))
    const maxDate = adapter.parse(__maxDate || adapter.date(new Date('2099-12-31')))

    const dates = isDatesObject(datesProp)
        ? datesProp.map((info) => adapter.parse(info.value))
        : datesProp.map((value) => adapter.parse(value))
    const disableDates = disableDatesProp.map((value) => adapter.parse(value))

    const {
        calendarState,
        changeFocusedDay,
        changeMonth,
        isDateDisabled,
        handleChangeMonth,
    } = useCalendarState({
        date,
        dates,
        onMonthChange,
        minDate,
        maxDate,
        shouldDisableDate,
        disablePast,
        disableFuture,
        disableDates,
    })

    React.useEffect(() => {
        if (date && isDateDisabled(date)) {
            const closestEnabledDate = findClosestDate({
                adapter,
                date,
                minDate: adapter.date(minDate),
                maxDate: adapter.date(maxDate),
                disablePast: Boolean(disablePast),
                disableFuture: Boolean(disableFuture),
                shouldDisableDate: isDateDisabled,
            })

            onChange(closestEnabledDate, false)
        }
        // This call is too expensive to run it on each prop change.
        // So just ensure that we are not rendering disabled as selected on mount.
    }, []) // eslint-disable-line

    React.useEffect(() => {
        changeMonth(date)
    }, [date]) // eslint-disable-line

    return (
        <CalendarWrapper className={classNames('calendar', `shape--${shape}`, className)} ref={ref}>
            <CalendarHeader
                className="calendar-header"
                shape={shape}
                {...props}
                currentMonth={calendarState.currentMonth}
                onMonthChange={(newMonth) => handleChangeMonth({ newMonth })}
                minDate={minDate}
                maxDate={maxDate}
                disablePast={disablePast}
                disableFuture={disableFuture}
                disableKeyboardControl={disableKeyboardControl}
            />
            <div className={classNames('calendar-body')}>
                <Month
                    {...props}
                    {...calendarState}
                    disableKeyboardControl={disableKeyboardControl}
                    changeFocusedDay={changeFocusedDay}
                    date={date}
                    onChange={onChange}
                    isDateDisabled={isDateDisabled}
                />
            </div>
        </CalendarWrapper>
    )
})

type PublicCalendarHeaderProps = Pick<
    CalendarHeaderProps,
    | 'leftArrowIcon'
    | 'rightArrowIcon'
    | 'leftArrowButtonProps'
    | 'rightArrowButtonProps'
    | 'leftArrowButtonText'
    | 'rightArrowButtonText'
>

type CalendarRef = HTMLDivElement

type CalendarOverrideProps = 'minDate' | 'maxDate' | 'disableDates' | 'dates'

interface CalendarProps
    extends Omit<DateValidationProps, CalendarOverrideProps>,
        ExportedMonthProps,
        PublicCalendarHeaderProps {
    className?: string
    date?: Date
    dates?: ParsableDate[] | ParsableDateObject[]
    onChange?: (date: Date, isFinish?: boolean | symbol) => void
    /**
     * Callback firing on month change.
     */
    onMonthChange?: (date: Date) => void
    disableDates?: ParsableDate[]
    disablePast?: CalendarHeaderProps['disablePast']
    disableFuture?: CalendarHeaderProps['disableFuture']
    minDate?: ParsableDate
    maxDate?: ParsableDate
    shape?: 'rounded' | 'squared'
}

export { Calendar }

export type { CalendarRef, CalendarProps }

export default Calendar
