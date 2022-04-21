import * as React from 'react'
import { isIOS } from 'react-device-detect'
import classNames from 'classnames'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import DatePickerNative from '../DatePickerNative'
import type {
    DatePickerNativeRef,
    DatePickerNativeProps,
    DatePickerNativeChangeInfo,
} from '../DatePickerNative'
import ClickAwayListener from '../ClickAwayListener'
import Popover, { usePopover } from '../Popover'
import type { PopoverProps } from '../Popover'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import type { IconButtonProps } from '../IconButton'

import CalendarPicker from '../Pickers/CalendarPicker'
import useAdapter from '../Pickers/hooks/useAdapter'
import type { CalendarProps } from '../Pickers/Calendar'
import type { ParsableDate, ParsableDateObject } from '../Pickers/typings/types'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import DatePickerWrapper from './styles/DatePickerWrapper'

/**
 * Backyard React Date Picker
 *
 * `DatePicker` is used for selecting dates from a calendar, either through
 * the native date picker for mobile devices, or through a custom calendar popover.
 *
 * The text input of the picker uses `type` === 'date' for supporting browser, while gracefully
 * defaulting to a `text` input type with masking to help the user enter the correct date.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Date Picker with all dates selectable, use the default:
 * ```
 *  <DatePicker />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select any date
 * > On Mobile displays, this component switches to an `input` with `type` === 'date' for native browsers
 *
 * For a date picker that only allows the user to select certain dates, use the `dates` prop:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
 *          { label: 'Today 9:15 AM', value: '2020-07-19' },
 *          { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          new Date(2020, 06, 18),
 *          new Date(2020, 06, 19),
 *          new Date(2020, 06, 20)
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a read-only `select` and a calendar popover to use to select only the dates provided
 * > `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
 * > On mobile displays, removes the popover and uses the native `select` to select the date
 *
 * For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      minDate="2020-07-10"
 *      maxDate="2020-07-27"
 *      disableDates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select and dates that are not disabled
 * > `disableDates`, `minDate`, and `maxDate` can take a list of `Date`s, date strings ('yyyy-MM-dd')
 * > On mobile displays, removes the popover and uses the native `date` input
 *  >> NOTE: mobile browsers do not utilize `disableDates`, but will utilize `minDate` and `maxDate`
 *
 * The props `date`, `minDate`, `maxDate`, and `disabledDates` all use the `ParsableDate` type
 * They can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *
 * The prop `dates` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Today, July 19, 2020',
 *      value: '2020-07-19' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Today, July 19, 2020',
 *      start: '2020-07-19' // Can be any `ParsableDate`
 *      end: '2020-07-20' // Can be any `ParsableDate`
 *  }
 */
const DatePicker: BDSForwardRef<DatePickerProps & { ref?: any }> = React.forwardRef<
    DatePickerRef,
    DatePickerProps
>(function DatePicker(
    {
        open: openProp = false,
        openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
        closeKeys = ['Escape'],
        delayClose = 300,
        delayOpen = 10,
        minDate: minDateProp,
        maxDate: maxDateProp,
        date: dateProp,
        dates: datesProp,
        disableDates: disableDatesProp,
        disableFuture: disableFutureProp,
        disablePast: disablePastProp,
        render: renderProp,
        state: stateProp = 'default',
        shape: shapeProp, // = 'rounded',
        onChange,
        onOpen,
        onClose,
        onKeyDown,
        onClear,
        calendarProps,
        popoverProps = {},
        popperProps = {},
        clearButtonProps = {},
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme({
        validate: true,
        name: 'DatePicker',
    })

    const { isDesktop } = theme
    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Calculate memoized props
    const context = React.useMemo(
        () => ({
            render: renderProp,
            open: openProp,
            date: dateProp,
            dates: datesProp,
            disableDates: disableDatesProp,
            disableFuture: disableFutureProp,
            disablePast: disablePastProp,
            minDate: minDateProp,
            maxDate: maxDateProp,
        }),
        [
            renderProp,
            openProp,
            dateProp,
            datesProp,
            disableDatesProp,
            disableFutureProp,
            disablePastProp,
            minDateProp,
            maxDateProp,
        ],
    )

    // Holds date adapter
    const adapter = useAdapter()
    // Parse date
    const parsedDate = adapter.parse(dateProp, 'yyyy-MM-dd')
    // Holds the container ref for picker
    const containerRef = React.useRef(null)
    // Holds the native picker ref for the anchor point of the popover
    const pickerRef = useForwardedRef(ref)
    // Holds the calendar picker ref from the popover
    const calendarRef = React.useRef(null)
    // Holds the current picker element set by the native picker for the anchor
    const [pickerElement, setPickerElement] = React.useState(null)
    // Holds state of the current date
    const [date, setDate] = React.useState(
        parsedDate ? adapter.format(parsedDate, 'yyyy-MM-dd') : null,
    )
    // Holds state of the current state of the native input (either 'error' or 'default')
    const [state, setState] = React.useState(stateProp)

    // Parse the `minDate` and `maxDate` props if given
    const minDate = context.minDate ? adapter.parse(context.minDate) : null
    const maxDate = context.maxDate ? adapter.parse(context.maxDate) : null

    // Use Popover hook for open/close state handling
    const { open, handleOpen, handleClose, handleKeyDown, closeAfterDelay } = usePopover({
        containerRef,
        referenceElement: pickerElement,
        delayClose,
        delayOpen,
        closeKeys,
        openKeys,
        open: openProp,
        onOpen,
        onClose,
        onKeyDown,
    })

    /**
     * Handles the native component change interaction
     *
     * @param event - change event
     * @param info - info object from either `SelectPicker` or `TextPicker`
     */
    const handleNativeChange = (event: React.ChangeEvent, info: DatePickerNativeChangeInfo) => {
        let { value } = info

        // Parse value from text input, or handle select's date if invalid
        // eslint-disable-next-line no-shadow
        let date = adapter.parse(value, 'MM/dd/yyyy')

        if (!date) {
            date = adapter.parse(value, 'yyyy-MM-dd') || (info.date as Date)
        }

        // Check whether or not parsed date was valid
        const isValid = adapter.isValid(date)

        if (isValid) {
            // Reformat value from info into normalized date string
            value = adapter.format(date, 'yyyy-MM-dd')
        }

        // Set new date value
        setDate(value as string)

        // If `onChange` defined and is valid date,
        if (onChange && isValid) {
            // Trigger `onChange`
            onChange(event, {
                ...info,
                value,
            })
        }
    }

    /**
     * Handles the calendar change event interaction
     *
     * @param date - selected date from the `CalendarPicker`
     */
    // eslint-disable-next-line no-shadow
    const handleCalendarChange = (date: Date) => {
        // Format normalized date string from date given
        const value = adapter.format(date, 'yyyy-MM-dd')

        // Set new date value
        setDate(value)

        // If `onChange` defined,
        if (onChange) {
            // Trigger `onChange`
            onChange(null, {
                from: 'CalendarPicker',
                value,
                date,
            })
        }

        // Close picker after selection
        closeAfterDelay()

        // IOS mobile devices render an overlay effect
        // when focused with the native select...
        // If not IOS device,
        if (!isIOS) {
            // Keep focus on picker
            pickerRef.current?.focus()
        }
    }

    /**
     * Handles the clear button click event interaction
     *
     * @param event - click even from clear button
     */
    const handleClear = (event: React.MouseEvent) => {
        // Close picker after selection
        closeAfterDelay()

        // If `onClear` prop defined,
        if (onClear) {
            // Trigger `onClear`
            onClear(event)
        }
    }

    // Side effect to handle when `time` changes externally
    React.useEffect(() => {
        // eslint-disable-next-line no-shadow
        const parsedDate = adapter.parse(dateProp, 'yyyy-MM-dd')

        setDate(parsedDate ? adapter.format(parsedDate) : null)
    }, [dateProp])
    // Side effect to update `pickerElement` ref when desktop/mobile view or native picker changes
    React.useEffect(
        () => setPickerElement(pickerRef.current?.parentElement || pickerRef.current),
        [isDesktop, pickerRef],
    )
    // Side effect for when the `state` prop is updated externally
    React.useEffect(() => setState(stateProp), [stateProp])
    // Side effect to check whether or not a valid date was selected
    React.useEffect(() => {
        // If we are in the desktop view and the date is parsable,
        if (isDesktop && adapter.parse(date, 'yyyy-MM-dd') && calendarRef?.current) {
            // Check whether or not a disabled date was selected
            setTimeout(
                () =>
                    setState(
                        calendarRef.current.querySelector('.selected.disabled')
                            ? 'error'
                            : 'default',
                    ),
                50,
            )
        } else {
            setState('default')
        }
    }, [date, calendarRef])

    // Alters rendered type of component
    const renderType =
        // If render type is not native,
        context.render !== 'native'
            ? {
                  // Calculate whether render is set to custom or if automated switch is triggered
                  disableNative: context.render === 'custom' || isDesktop,
              }
            : {
                  // Don't disable native if native type is given
                  disableNative: false,
              }

    /**
     * Layout:
     *  <div> // click away listener listens for any click outside of this element
     *      <DatePickerNative />
     *      <Popover> // appears open only on desktop
     *          <CalendarPicker />
     *      </Popover>
     *  </div>
     */
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <DatePickerWrapper
                className={classNames(
                    'picker',
                    'datepicker',
                    dateProp ? 'interaction--completed completed' : null,
                )}
                ref={containerRef}
            >
                <DatePickerNative
                    key="picker"
                    withCustom={renderType.disableNative}
                    dates={context.dates}
                    {...renderType}
                    className={classNames({
                        focus: open,
                    })}
                    selectWrapperProps={{
                        className: classNames({
                            'interaction--active': open,
                        }),
                    }}
                    textWrapperProps={{
                        className: classNames({
                            'interactive--active': open,
                        }),
                    }}
                    onClick={handleOpen}
                    onChange={handleNativeChange}
                    onKeyDown={handleKeyDown}
                    state={state}
                    date={date || ''} // When value is null/falsy, just show an empty string
                    min={minDate ? adapter.format(minDate, 'yyyy-MM-dd') : null}
                    max={maxDate ? adapter.format(maxDate, 'yyyy-MM-dd') : null}
                    shape={shape}
                    onClear={handleClear}
                    clearButtonProps={clearButtonProps}
                    {...props}
                    // @todo
                    ref={pickerRef as any}
                />
                {renderType.disableNative && pickerElement ? (
                    <Popover
                        disablePortal
                        keepMounted
                        open={open}
                        anchorEl={pickerElement}
                        offset={[0, 0]}
                        pop={
                            <div className={classNames('datepicker-popover', `shape--${shape}`)}>
                                <CalendarPicker
                                    date={date}
                                    dates={context.dates}
                                    disableDates={context.disableDates}
                                    disableFuture={context.disableFuture}
                                    disablePast={context.disablePast}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    onChange={handleCalendarChange}
                                    disableKeyboardControl={!open}
                                    shape={shape}
                                    {...calendarProps}
                                    ref={calendarRef}
                                />
                            </div>
                        }
                        {...popoverProps}
                        {...popperProps}
                    />
                ) : null}
            </DatePickerWrapper>
        </ClickAwayListener>
    )
})

type DatePickerRef = DatePickerNativeRef

type DatePickerOverrideProps = 'onChange' | 'value'

interface DatePickerChangeInfo extends Omit<DatePickerNativeChangeInfo, 'from'> {
    /**
     * From either 'TextPicker', 'SelectPicker', or 'CalendarPicker'
     */
    from: DatePickerNativeChangeInfo['from'] | 'CalendarPicker'
}

interface DatePickerProps extends Omit<DatePickerNativeProps, DatePickerOverrideProps> {
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][]
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][]
    /**
     * Parsable date for the current date
     * Can be updated externally and given as a default date
     *
     * It can accept the following values
     *  JS Date instance => `new Date(2020, 06, 19)`
     *  String date => `'2020-07-19'`
     *  Number timestamp => `1595116800`
     */
    date?: ParsableDate
    /**
     * List of parsable dates to only allow the user to select from
     *
     * It can accept the following values
     *  JS Date instance => `new Date(2020, 06, 19)`
     *  String date => `'2020-07-19'`
     *  Number timestamp => `1595116800`
     *  ParsableDateObject => {
     *      label: 'Today, July 19, 2020',
     *      value: '2020-07-19' // Can be any `ParsableDate`
     *  }
     *  ParsableDateRange => {
     *      label: 'Today, July 19, 2020',
     *      start: '2020-07-19' // Can be any `ParsableDate`
     *      end: '2020-07-20' // Can be any `ParsableDate`
     *  }
     */
    dates?: ParsableDate[] | ParsableDateObject[]
    /**
     * Amount in milliseconds to delay closing the popover
     * when a value is selected from the list
     */
    delayClose?: number
    /**
     * Amount in milliseconds to delay opening the popover
     */
    delayOpen?: number
    /**
     * List of dates to disable
     */
    disableDates?: CalendarProps['disableDates']
    /**
     * Flag to disable all dates after today
     */
    disableFuture?: CalendarProps['disableFuture']
    /**
     * Flag to disable all dates before today
     */
    disablePast?: CalendarProps['disablePast']
    /**
     * Parsable date to disable all dates before given date
     */
    minDate?: CalendarProps['minDate']
    /**
     * Parsable date to disable all dates after given date
     */
    maxDate?: CalendarProps['maxDate']
    /**
     * `onKeyDown` trigger event for
     * when the user presses a key on the `select`
     */
    onKeyDown?: (event: React.KeyboardEvent<DatePickerNativeRef>) => void
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.ChangeEvent, value: DatePickerChangeInfo) => void
    /**
     * `onOpen` trigger function for when the calendar popover opens
     */
    onOpen?: () => void
    /**
     * `onClose` trigger function for when the calendar popover closes
     */
    onClose?: () => void
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void
    /**
     * Controls the rendered UI/UX of the component
     *
     * Overrides automatically switching
     */
    render?: 'custom' | 'native'
    /**
     * State of the native date picker
     * Either 'error' or 'default'
     */
    state?: DatePickerNativeProps['state']
    /**
     * Shape of the input and popover
     */
    shape?: 'rounded' | 'squared'
    /**
     * Calendar props to extend the calendar with if needed
     */
    calendarProps?: CalendarProps
    /**
     * Popover override props
     */
    popoverProps?: Partial<PopoverProps>
    /**
     * Popover override props
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<PopoverProps>
    /**
     * Props for clear button
     */
    clearButtonProps?: IconButtonProps
}

DatePicker.bdsName = 'DatePicker'

export { DatePicker }

export type { DatePickerRef, DatePickerProps, DatePickerChangeInfo }

export default DatePicker
