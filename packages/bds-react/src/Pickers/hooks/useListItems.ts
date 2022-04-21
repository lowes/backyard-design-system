/* eslint-disable no-else-return */
import type { DateAdapter } from '../classes/DateAdapter'
import { isParsableDateObject, isParsableDateRange } from '../typings/types'
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from '../typings/types'

interface UseTimeItemsProps {
    optionsLabel?: string
    adapter: DateAdapter
    value: string
    options: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[]
    type: string
    format?: string
}

interface ValuePickerItem {
    label?: string
    value?: string
}

function parseDate(adapter: DateAdapter, time: ParsableDate): Date {
    if (adapter.isValid(time)) {
        return time ? adapter.date(time) : null
    } else {
        const date = adapter.date(`1/1/1970 ${time}`)

        const newDate = adapter.setMinutes(
            adapter.setHours(adapter.date(0), adapter.getHours(date)),
            adapter.getMinutes(date)
        )

        return newDate
    }
}

const useListItems = ({ optionsLabel, adapter, type, format, options: optionsProp = [] }: UseTimeItemsProps) => {
    const isDate = type === 'date'
    const dateFormat = format ? [format] : (isDate ? ['yyyy-MM-dd', 'MM/dd/yyyy'] : ['HH:mm', 'hh:mm aa'])
    const labelFormat = isDate ? 'MM/dd/yyyy' : 'hh:mm aa'
    const valueFormat = isDate ? 'yyyy-MM-dd' : 'HH:mm'

    const parseValue = (value) => {
        if (!value) {
            return null
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const form of dateFormat) {
            const date = adapter.parse(value, form)

            if (date) {
                return date
            }
        }

        throw Error(
            `Backyard: Picker: ListItem Error - The value '${value}' does ` +
            `not match any of the required formats for type '${type}': ${JSON.stringify(dateFormat)}\n` +
            `You can specify your own format with the 'format' prop\n` +
            `See https://date-fns.org/v2.9.0/docs/parse for more.` 

        )
    }

    const times = optionsLabel
        ? [
            { label: optionsLabel, value: '', disabled: true }, 
            ...optionsProp
        ]
        : optionsProp

    return times.map((time, index) => {
        const item: ValuePickerItem = {}

        if (isParsableDateRange(time)) {
            const start = parseValue(time.start)
            const end = parseValue(time.end)

            item.label = time.label
            item.value = JSON.stringify([adapter.format(start, valueFormat), adapter.format(end, valueFormat)])
        } else if (isParsableDateObject(time)) {
            const date = parseValue(time.value)

            item.label = time.label
            item.value = date ? adapter.format(date, valueFormat) : ''
        } else if (typeof time === 'string') {
            const date = parseValue(time)

            item.label = adapter.format(date, labelFormat)
            item.value = adapter.format(date, valueFormat)
        } else {
            const date = parseValue(time)

            item.label = adapter.format(date, valueFormat)
            item.value = date.toJSON()
        }

        return {
            key: index,
            value: item.value,
            disabled: isParsableDateObject(time) || isParsableDateRange(time) ? time.disabled : false,
            ariaLabel: item.label,
            children: item.label,
        }
    })
}

export {
    useListItems,
    parseDate
}

export type { UseTimeItemsProps, ValuePickerItem }

export default useListItems
