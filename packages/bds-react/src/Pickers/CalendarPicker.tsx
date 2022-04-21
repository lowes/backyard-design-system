import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import BasePickerProps from './typings/BasePicker'
import useAdapter from './hooks/useAdapter'
import { Calendar } from './Calendar'
import type { CalendarProps, CalendarRef } from './Calendar'
import { ParsableDate } from './typings/types'

/**
 * Backyard React Calendar Picker
 *
 * @todo Comments
 */
const CalendarPicker: BDSForwardRef<CalendarPickerProps> = React.forwardRef<
    CalendarPickerRef,
    CalendarPickerProps
>(function CalendarPicker(
    {
        className,
        shape: shapeProp, // = 'rounded',
        date: dateProp,
        onChange,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'CalendarPicker',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const adapter = useAdapter()
    const [date, setDate] = React.useState(adapter.parse(dateProp, 'yyyy-MM-dd'))

    React.useEffect(() => {
        const parsedDateValue = adapter.parse(dateProp)

        setDate((curDate) => {
            if (!adapter.isEqual(curDate, parsedDateValue)) {
                return parsedDateValue
            }

            return curDate
        })
    }, [dateProp])

    const handleChange = (newDate: Date) => {
        setDate(newDate)

        if (onChange) {
            onChange(newDate)
        }
    }

    return (
        <div className={classNames('datepicker-calendar', `shape--${shape}`, className)}>
            <Calendar date={date} onChange={handleChange} shape={shape} {...props} ref={ref} />
        </div>
    )
})

type CalendarPickerRef = CalendarRef

type CalendarPickerOverrideProps = 'date' | 'onChange' | 'value'

interface CalendarPickerProps
    extends BackyardBaseProps<CalendarPickerRef, CalendarPickerOverrideProps>,
        Omit<CalendarProps, CalendarPickerOverrideProps>,
        BasePickerProps {
    date?: ParsableDate
    shape?: 'rounded' | 'squared'
}

CalendarPicker.bdsName = 'CalendarPicker'

export { CalendarPicker }

export type { CalendarPickerProps, CalendarPickerRef }

export default CalendarPicker
