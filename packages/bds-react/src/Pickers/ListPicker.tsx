import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import List from '../ListSelector'
import type { ListSelectorProps, ListSelectorRef, ListOptionInfo } from '../ListSelector'
import ListOption from '../ListOption'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import useAdapter from './hooks/useAdapter'
import { useListItems } from './hooks/useListItems'
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from './typings/types'
import ListPickerWrapper from './styles/ListPickerWrapper'

const isArrayString = (str: string) => str.match(/^\[.*\]$/)

/**
 * Backyard React List Picker
 *
 * @todo Comments
 */
const ListPicker: BDSForwardRef<ListPickerProps> = React.forwardRef<ListPickerRef, ListPickerProps>(
    function ListPicker(
        {
            className,
            readOnly = false,
            onChange,
            wrapperProps,
            value: valueProp,
            defaultValue,
            options,
            format,
            type = 'date',
            shape: shapeProp, // = 'rounded',
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'ListPicker',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        const adapter = useAdapter()

        const [value, setValue] = React.useState(valueProp || defaultValue)

        const items = useListItems({
            adapter,
            value,
            type,
            format,
            options,
        })

        const handleChange = (event: React.ChangeEvent, info: ListOptionInfo) => {
            if (!readOnly) {
                setValue(info.value)

                if (onChange) {
                    const dateTime = isArrayString(info.value)
                        ? {
                              date: JSON.parse(info.value).map((date) =>
                                  adapter.parse(date, 'yyyy-MM-dd'),
                              ),
                              time: JSON.parse(info.value).map((date) => {
                                  const time = adapter.parse(date, 'HH:mm')

                                  return time ? adapter.format(time, 'HH:mm') : null
                              }),
                          }
                        : {
                              date: adapter.parse(info.value, 'yyyy-MM-dd'),
                              time: (() => {
                                  const time = adapter.parse(info.value, 'HH:mm')

                                  return time ? adapter.format(time, 'HH:mm') : null
                              })(),
                          }

                    onChange(event, {
                        ...info,
                        ...dateTime,
                    })
                }
            }
        }

        React.useEffect(() => setValue(valueProp), [valueProp])

        return (
            <ListPickerWrapper
                className={classNames('datepicker-list', `shape--${shape}`, className)}
                {...wrapperProps}
            >
                <List
                    onChange={handleChange}
                    value={value || null}
                    shape={shape}
                    {...props}
                    ref={ref}
                >
                    {items.map((item) => (
                        <ListOption shape={shape} {...item} tabIndex={-1} />
                    ))}
                </List>
            </ListPickerWrapper>
        )
    },
)

interface ListPickerItemInfo extends ListOptionInfo {
    date: Date | Date[]
    time: string | string[]
}

type ListPickerRef = ListSelectorRef

type ListPickerOverrideProps = 'onChange' | 'value' | 'defaultValue' | 'options'

interface ListPickerProps extends Omit<ListSelectorProps, ListPickerOverrideProps> {
    options?: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[]
    onChange?: (event: React.ChangeEvent, info: ListPickerItemInfo) => void
    optionsLabel?: string
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
    type?: 'date' | 'time'
    shape?: 'rounded' | 'squared'
    value?: string
    defaultValue?: string
    format?: string
}

ListPicker.bdsName = 'ListPicker'

export { ListPicker }

export type { ListPickerProps, ListPickerRef, ListPickerItemInfo }

export default ListPicker
