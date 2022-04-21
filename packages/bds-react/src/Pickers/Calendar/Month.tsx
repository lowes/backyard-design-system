import * as React from 'react'
import classNames from 'classnames'

import Typography from '../../Typography'
import DateAdapter from '../classes/DateAdapter'
import useAdapter from '../hooks/useAdapter'
import useNow from '../hooks/useNow'
import { useGlobalKeyDown, keycode } from '../../utils/hooks/useKeyDown'

import { Day } from './Day'
import type { DayProps } from './Day'
import MonthWrapper from './styles/MonthWrapper'

const getWeekArrays = (adapter: DateAdapter, currentMonth: Date) => {
    const thisMonth = adapter.getWeekArray(currentMonth)
    const nextMonth = adapter.getWeekArray(adapter.getNextMonth(currentMonth))

    if (
        nextMonth[0].every((day, index) =>
            adapter.isEqual(day, thisMonth[thisMonth.length - 1][index]),
        )
    ) {
        nextMonth.shift()
    }

    return [...thisMonth, nextMonth[0]].slice(0, 6)
}

const Month: React.ForwardRefExoticComponent<MonthProps> = React.forwardRef<MonthRef, MonthProps>(
    function Month(
        {
            date,
            focusedDay,
            changeFocusedDay,
            onChange,
            currentMonth,
            renderDay,
            disableKeyboardControl,
            isDateDisabled,
            disableHighlightToday,
            disableDaysOutsideCurrentMonth,
            showDaysOutsideCurrentMonth,
            className,
            ...props
        },
        ref,
    ) {
        const now = useNow()
        const adapter = useAdapter()

        const handleDaySelect = React.useCallback(
            (day) => {
                onChange(Array.isArray(date) ? day : adapter.mergeDateAndTime(day, date || now))
            },
            [date, now, onChange, adapter],
        )

        const initialDate = Array.isArray(date) ? date[0] : date

        const nowFocusedDay = focusedDay || initialDate || now

        useGlobalKeyDown(!disableKeyboardControl, {
            [keycode.ArrowUp]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, -7)),
            [keycode.ArrowDown]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, 7)),
            [keycode.ArrowLeft]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, -1)),
            [keycode.ArrowRight]: () => changeFocusedDay(adapter.addDays(nowFocusedDay, 1)),
            [keycode.Home]: () => changeFocusedDay(adapter.startOfWeek(nowFocusedDay)),
            [keycode.End]: () => changeFocusedDay(adapter.endOfWeek(nowFocusedDay)),
            [keycode.PageUp]: () => changeFocusedDay(adapter.getNextMonth(nowFocusedDay)),
            [keycode.PageDown]: () => changeFocusedDay(adapter.getPreviousMonth(nowFocusedDay)),
        })

        const currentMonthNumber = adapter.getMonth(currentMonth)
        const selectedDates = (Array.isArray(date) ? date : [date])
            .filter(Boolean)
            .map((selectedDateItem) => adapter.startOfDay(selectedDateItem))

        return (
            <MonthWrapper className={classNames('month', className)} {...props} ref={ref}>
                <div className="month-header">
                    {adapter.getWeekdays().map((day, i) => (
                        <Typography
                            aria-hidden
                            key={day + i.toString()}
                            variant="h6"
                            className="month-label"
                        >
                            {`${day.charAt(0).toUpperCase()}${day.charAt(1)}`}
                        </Typography>
                    ))}
                </div>
                <div role="grid" className="weeks">
                    {getWeekArrays(adapter, currentMonth).map((week) => (
                        <div role="row" key={`week-${week[0]}`} className="week">
                            {week.map((day) => {
                                const disabled = isDateDisabled(day)
                                const isDayInCurrentMonth =
                                    adapter.getMonth(day) === currentMonthNumber

                                const dayProps = {
                                    key: day?.toString(),
                                    day,
                                    role: 'cell',
                                    disabled,
                                    disableKeyboardControl,
                                    focused:
                                        !disableKeyboardControl &&
                                        Boolean(focusedDay) &&
                                        adapter.isSameDay(day, focusedDay),
                                    today: adapter.isSameDay(day, now),
                                    inCurrentMonth: isDayInCurrentMonth,
                                    selected: selectedDates.some((selectedDate) =>
                                        adapter.isSameDay(selectedDate, day),
                                    ),
                                    disableHighlightToday,
                                    disableDaysOutsideCurrentMonth,
                                    showDaysOutsideCurrentMonth,
                                    focusable:
                                        !disableKeyboardControl &&
                                        Boolean(nowFocusedDay) &&
                                        adapter.toJsDate(nowFocusedDay).getDate() ===
                                            adapter.toJsDate(day).getDate(),
                                    onDayFocus: changeFocusedDay,
                                    onDaySelect: handleDaySelect,
                                }

                                return renderDay ? (
                                    renderDay(day, selectedDates, dayProps)
                                ) : (
                                    <Day {...dayProps} />
                                )
                            })}
                        </div>
                    ))}
                </div>
            </MonthWrapper>
        )
    },
)

interface ExportedMonthProps
    extends Pick<
        DayProps,
        'disableHighlightToday' | 'showDaysOutsideCurrentMonth' | 'disableDaysOutsideCurrentMonth'
    > {
    /**
     * Calendar onChange.
     */
    onChange?: (date: Date) => void
    /**
     * Custom renderer for day. Check [DayComponentProps api](https://material-ui-pickers.dev/api/Day) @DateIOType.
     */
    renderDay?: (day: Date, selectedDates: Date[], DayComponentProps: DayProps) => JSX.Element
    /**
     * Disables keyboard listener for moving between days in calendar
     */
    disableKeyboardControl?: boolean
    /**
     * If `true` renders `LoadingComponent` in calendar instead of calendar view.
     * Can be used to preload information and show it in calendar.
     * @default false
     */
    loading?: boolean
    /**
     * Component displaying when passed `loading` true.
     * @default () => "..."
     */
    renderLoading?: () => React.ReactNode
}

interface MonthProps extends ExportedMonthProps {
    date?: Date | Date[]
    isDateDisabled: (day: Date) => boolean
    currentMonth: Date
    focusedDay: Date | null
    changeFocusedDay: (newFocusedDay: Date) => void
    className?: string
}

type MonthRef = HTMLDivElement

export { Month }

export type { MonthRef, MonthProps, ExportedMonthProps }

export default Month
