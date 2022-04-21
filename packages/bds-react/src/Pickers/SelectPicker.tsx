import * as React from 'react'
import classNames from 'classnames'

import CalendarIcon from '@lowes-tech/bds-icons/Calendar'
import ClockIcon from '@lowes-tech/bds-icons/HistoryOutlined'
import CloseCircleFilledIcon from '@lowes-tech/bds-icons/CloseCircleFilled'

import IconButton from '../IconButton'
import type { IconButtonProps } from '../IconButton'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import Select from '../Select'
import type { SelectOptionInfo, SelectProps, SelectRef } from '../Select'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import useForwardedRef from '../utils/hooks/useForwardedRef'

import useAdapter from './hooks/useAdapter'
import { useListItems } from './hooks/useListItems'
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from './typings/types'
import TextPickerWrapper from './styles/TextPickerWrapper'

const isArrayString = (str: string) => str.match(/^\[.*\]$/)

/**
 * Backyard React Select Picker
 *
 * @todo Comments
 */
const SelectPicker: BDSForwardRef<SelectPickerProps> = React.forwardRef<
    SelectPickerRef,
    SelectPickerProps
>(function SelectPicker(
    {
        className,
        onChange,
        onClear,
        optionsLabel = '',
        type = 'date',
        shape: shapeProp, // = 'rounded',
        wrapperProps,
        value: valueProp,
        defaultValue = '',
        options,
        format,
        readOnly,
        disableNative, // Used by `DatePicker`
        selectWrapperProps,
        textWrapperProps, // Unused
        clearButtonProps = {},
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'SelectPicker',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const innerRef = useForwardedRef(ref)

    const adapter = useAdapter()

    const [value, setValue] = React.useState(valueProp || defaultValue)

    const items = useListItems({
        adapter,
        value,
        type,
        format,
        options,
        optionsLabel,
    })

    /**
     * Force event.target to `innerRef`, the text `input`
     *
     * @param {Event} event - DOM Event
     */
    function getEvent<E>(event: E) {
        return event
    }

    /**
     * Handles the `onChange` event for the select
     *
     * @param event - change event
     * @param info - option info
     * @param bypassReadOnly - whether or not to bypass readonly check
     */
    const handleChange = (
        event: React.ChangeEvent,
        info: SelectOptionInfo,
        bypassReadOnly: boolean = false,
    ) => {
        const val = info.value as string

        if (!readOnly || bypassReadOnly) {
            setValue(val)

            if (onChange) {
                const dateTime = isArrayString(val)
                    ? {
                          date: JSON.parse(val).map((date) =>
                              adapter.parse(date, 'yyyy-MM-dd'),
                          ),
                          time: JSON.parse(val).map((date) => {
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

    /**
     * Handles `onClick` event for clear button
     *
     * @param event - click event from clear button
     */
    const handleClearClick = (event: React.MouseEvent) => {
        // Call empty change event
        handleChange(
            getEvent<React.ChangeEvent>((event as unknown) as React.ChangeEvent),
            {
                index: -1,
                value: '',
                text: '',
                disabled: false,
                label: '',
            },
            true,
        )

        if (onClear) {
            onClear(event)
        }
    }

    // Default icon
    const defaultIcon =
        type === 'time' ? (
            <ClockIcon className="no-interaction" />
        ) : (
            <CalendarIcon className="no-interaction" />
        )
    // If value defined, use clear button instead
    const icon = value ? (
        <span className="icon">
            <IconButton
                variant="ghost"
                color="neutral"
                size="small"
                {...clearButtonProps}
                className={classNames('picker-clear-button', clearButtonProps?.className)}
                onClick={handleClearClick}
            >
                <CloseCircleFilledIcon />
            </IconButton>
        </span>
    ) : (
        defaultIcon
    )

    React.useEffect(() => setValue(valueProp), [valueProp])

    return (
        <TextPickerWrapper
            className={classNames('datepicker-select', `shape--${shape}`)}
            readOnly={readOnly}
            {...wrapperProps}
        >
            <Select
                className={classNames(
                    {
                        completed: value,
                    },
                    className,
                )}
                onChange={handleChange}
                value={value || ''}
                iconClosed={icon}
                iconOpened={icon}
                readOnly={readOnly}
                wrapperProps={selectWrapperProps}
                shape={shape}
                options={items.map(({ ariaLabel, ...itemProps }) => ({
                    ...itemProps,
                    label: ariaLabel,
                    hidden: readOnly,
                }))}
                {...props}
                ref={innerRef}
            />
        </TextPickerWrapper>
    )
})

interface SelectPickerOptionInfo extends SelectOptionInfo {
    date: Date | Date[]
    time: string | string[]
}

type SelectPickerRef = SelectRef

type SelectPickerOverrideProps = 'onChange' | 'value' | 'defaultValue' | 'options'

interface SelectPickerProps extends Omit<SelectProps, SelectPickerOverrideProps> {
    onChange?: (event: React.ChangeEvent, option: SelectPickerOptionInfo) => void
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void
    options?: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[]
    optionsLabel?: string
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
    type?: 'date' | 'time'
    shape?: 'rounded' | 'squared'
    value?: string
    defaultValue?: string
    readOnly?: boolean
    format?: string
    disableNative?: boolean
    textWrapperProps?: object
    selectWrapperProps?: object
    clearButtonProps?: IconButtonProps
}

SelectPicker.bdsName = 'SelectPicker'

export { SelectPicker }

export type { SelectPickerProps, SelectPickerRef, SelectPickerOptionInfo }

export default SelectPicker
