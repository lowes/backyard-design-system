/* eslint-disable consistent-return */
/* eslint-disable default-case */
import * as React from 'react'

import DateAdapter from '../classes/DateAdapter'
import validateDate from '../functions/validateDate'
import useAdapter from './useAdapter'
import useNow from './useNow'

import type { CalendarProps } from '../Calendar'

interface CalendarState {
    currentMonth: Date
    focusedDay: Date | null
}

type ReducerAction<TType, TAdditional = {}> = { type: TType } & TAdditional

interface ChangeMonthPayload {
    newMonth: Date
}

const createCalendarStateReducer = (
    disableSwitchToMonthOnDayFocus: boolean,
    adapter: DateAdapter
) => (
    state: CalendarState,
    action:
        | ReducerAction<'changeMonth', ChangeMonthPayload>
        | ReducerAction<'changeFocusedDay', { focusedDay: Date }>
): CalendarState => {
    switch (action.type) {
        case 'changeMonth': {
            return {
                ...state,
                currentMonth: action.newMonth
            }
        }
        case 'changeFocusedDay': {
            // action.focusedDay = action.focusedDay || adapter.date()
            const needMonthSwitch =
                Boolean(action.focusedDay) &&
                !disableSwitchToMonthOnDayFocus &&
                !adapter.isSameMonth(state.currentMonth, action.focusedDay)

            return {
                ...state,
                focusedDay: action.focusedDay,
                currentMonth: needMonthSwitch ? adapter.startOfMonth(action.focusedDay) : state.currentMonth
            }
        }
    }
}

type CalendarStateInput = Pick<
    CalendarProps,
    'disableFuture' | 'disablePast' | 'shouldDisableDate' | 'date' | 'onMonthChange'
> & {
    minDate: Date
    maxDate: Date
    dates: Date[]
    disableDates: Date[]
    disableSwitchToMonthOnDayFocus?: boolean
}

function useCalendarState({
    date,
    dates,
    onMonthChange,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    disableSwitchToMonthOnDayFocus = false,
    disableDates
}: CalendarStateInput) {
    const now = useNow()
    const adapter = useAdapter()
    const dateForMonth = date || now
    const reducerFn = React.useRef(
        createCalendarStateReducer(disableSwitchToMonthOnDayFocus, adapter)
    ).current

    const [calendarState, dispatch] = React.useReducer(reducerFn, {
        focusedDay: date,
        currentMonth: adapter.startOfMonth(dateForMonth)
    })

    const handleChangeMonth = React.useCallback(
        (payload: ChangeMonthPayload) => {
            dispatch({
                type: 'changeMonth',
                ...payload,
            })

            if (onMonthChange) {
                onMonthChange(payload.newMonth)
            }
        },
        [onMonthChange]
    )

    const changeMonth = React.useCallback(
        (newDate: Date) => {
            const newDateRequested = newDate ?? now

            if (adapter.isSameMonth(newDateRequested, calendarState.currentMonth)) {
                return
            }

            handleChangeMonth({
                newMonth: adapter.startOfMonth(newDateRequested)
            })
        },
        [calendarState.currentMonth, handleChangeMonth, now, adapter]
    )

    const isDateDisabled = React.useCallback(
        (day: Date) =>
            validateDate(adapter, day, {
                disablePast,
                disableFuture,
                minDate,
                maxDate,
                dates,
                disableDates,
                shouldDisableDate,
            }) !== null,
        [disableFuture, disablePast, maxDate, minDate, shouldDisableDate, adapter]
    )

    const changeFocusedDay = React.useCallback(
        (newFocusedDate: Date) => {
            if (!isDateDisabled(newFocusedDate)) {
                dispatch({ type: 'changeFocusedDay', focusedDay: newFocusedDate })
            }
        },
        [isDateDisabled]
    )

    return {
        calendarState,
        changeMonth,
        changeFocusedDay,
        isDateDisabled,
        handleChangeMonth,
    }
}

export {
    useCalendarState,
    createCalendarStateReducer
}

export default useCalendarState
