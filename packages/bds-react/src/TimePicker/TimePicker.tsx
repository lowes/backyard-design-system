import * as React from 'react'
import classNames from 'classnames'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import TimePickerNative from '../TimePickerNative'
import type {
    TimePickerNativeRef,
    TimePickerNativeProps,
    TimePickerNativeChangeInfo,
} from '../TimePickerNative'
import ClickAwayListener from '../ClickAwayListener'
import Popover, { usePopover } from '../Popover'
import type { PopoverProps } from '../Popover'
import ListPicker from '../Pickers/ListPicker'
import type { ListPickerProps, ListPickerItemInfo } from '../Pickers/ListPicker'
import useAdapter from '../Pickers/hooks/useAdapter'
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from '../Pickers/typings/types'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

const isArrayString = (str: string) => str && str.match(/^\[.*\]$/)

/**
 * Backyard React Time Picker
 *
 * `TimePicker` is used for selecting times from a timepicker through the browser.
 * It provides a list selector popover for the user to select from, or a native time input/select.
 *
 * The text input of the picker uses `type` === 'time'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Time Picker with all times selectable, use the default:
 * ```
 *  <TimePicker />
 * ```
 * > This Time Picker gives the user a text `input` with `type` === 'time'
 * > For browsers that don't support `type` === 'time', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a time picker that only allows the user to select certain times, use the `times` prop:
 * ```
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          { label: '8:00 AM', value: '08:00' },
 *          { label: '9:15 AM', value: '09:15' },
 *          { label: '9:45 AM', value: '09:45' }
 *      ]}
 *  />
 *  // Or...
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          '08:00',
 *          '09:15',
 *          '09:45
 *      ]}
 *  />
 *  // Or...
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          new Date(2020, 06, 19, 8, 0),
 *          new Date(2020, 06, 19, 9, 15),
 *          new Date(2020, 06, 19, 9, 45)
 *      ]}
 *  />
 * ```
 * > This Time Picker gives the user a `select` and a list select popover
 * > `times` can take a list of `Date`s, time strings ('HH:mm' - 24h format), or an option object for custom labels with the value
 *
 * For a less defined time picker that has a min, max, and some disabled times in between, you can also use:
 * ```
 *  <TimePicker
 *      label="Record Time"
 *      min="8:00"
 *      max="12:00"
 *  />
 * ```
 * > This Time Picker gives the user a text `input` and a list selector input
 * > On mobile displays, uses the native `time` input
 *  >> NOTE: mobile browsers will utilize `min` and `max`
 *
 * The prop `time` uses the `ParsableDate` type
 * It can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19, 8, 45)`
 *  String time => `'23:00'`
 *  Number timestamp => `1595116800`
 *
 * The prop `times` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19, 8, 45)`
 *  String time => `'23:00'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Now, 8:00 AM',
 *      value: '08:00' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Afternoon, 12:00 PM - 1:00 PM',
 *      start: '12:00' // Can be any `ParsableDate`
 *      end: '13:00' // Can be any `ParsableDate`
 *  }
 */
const TimePicker: BDSForwardRef<TimePickerProps & { ref?: any }> = React.forwardRef<
    TimePickerRef,
    TimePickerProps
>(function TimePicker(
    {
        open: openProp = false,
        openKeys = [' ', 'ArrowUp', 'ArrowDown', 'Enter'],
        closeKeys = ['Escape'],
        delayClose = 300,
        delayOpen = 10,
        onChange,
        onOpen,
        onClose,
        onKeyDown,
        onClear,
        state: stateProp = 'default',
        shape: shapeProp, // = 'rounded',
        step: stepProp = 3600, // One hour == 3600 seconds
        times: timesProp,
        time: timeProp,
        render: renderProp,
        listPickerProps,
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
        name: 'TimePicker',
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
            time: timeProp,
            times: timesProp,
            step: stepProp,
        }),
        [renderProp, openProp, timeProp, timesProp, stepProp],
    )

    // Holds the date adapter
    const adapter = useAdapter()
    // Parse time from time prop
    const parsedTime = adapter.parse(timeProp, 'HH:mm')
    // Holds the container ref for picker
    const containerRef = React.useRef(null)
    // Holds the native picker ref for the anchor element of the popover
    const pickerRef = useForwardedRef(ref)
    // Holds the list picker ref popover
    const listRef = React.useRef(null)
    // Holds the state of the picker element for the anchor of the popover
    const [pickerElement, setPickerElement] = React.useState(null)
    // Holds the current time state
    const [time, setTime] = React.useState(
        typeof timeProp === 'string' && isArrayString(timeProp)
            ? timeProp
            : timeProp
            ? adapter.format(parsedTime, 'HH:mm')
            : null,
    )
    // Holds the state of the native picker
    const [state, setState] = React.useState(stateProp)

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
     * Parses time from input
     *
     * @param time
     */
    // eslint-disable-next-line no-shadow
    const parseTime = (time: string) => {
        // Parse time in 12h format
        let date = adapter.parse(time, 'hh:mm aa')

        // If invalid,
        if (!date) {
            // Parse time in 24h format
            date = adapter.parse(time, 'HH:mm')
        }

        // Return time in 24h format if valid
        return adapter.isValid(date) ? adapter.format(date, 'HH:mm') : null
    }

    /**
     * Handle times from array of strings or just single string
     *
     * @param time
     */
    // eslint-disable-next-line no-shadow
    const handleTimes = (time: string | string[]) =>
        // Is an array of times?
        Array.isArray(time)
            ? // Range of times
              time.map((val) => parseTime(val))
            : // Single time
              parseTime(time)

    /**
     * Handle native change interaction event
     *
     * Triggers `onChange` if defined
     *
     * @param event
     * @param info - info change object from `SelectPicker` or `TextPicker`
     */
    const handleNativeChange = (event: React.ChangeEvent, info: TimePickerNativeChangeInfo) => {
        // Calculate times from info
        // eslint-disable-next-line no-shadow
        const time = handleTimes(info.time)

        // Check array of times
        const value = time ? (Array.isArray(time) ? JSON.stringify(time) : time) : info.value

        // Set new time
        setTime(value as string)

        // If `onChange` and time valid,
        if (onChange && time) {
            // Trigger `onChange`
            onChange(event, {
                ...info,
                value,
                time,
            })
        }
    }

    /**
     * Handle list picker change interaction event
     *
     * Trigger `onChange` if defined
     *
     * @param event
     * @param info - info change object from `ListPicker`
     */
    const handleListChange = (event: React.ChangeEvent, info: ListPickerItemInfo) => {
        // Set new time
        setTime(info.value)

        // If `onChange` defined,
        if (onChange) {
            // Trigger `onChange`
            onChange(event, {
                ...info,
                from: 'ListPicker',
            })
        }

        // Close list on list change
        closeAfterDelay()
    }

    /**
     * Handles `onClick` event for clear button
     *
     * @param event - click event from clear button
     */
    const handleClear = (event) => {
        // Reset time
        setTime(null)

        // Close picker after selection
        closeAfterDelay()

        if (onClear) {
            onClear(event)
        }
    }

    // Side effect to handle when `time` changes externally
    React.useEffect(() => {
        // eslint-disable-next-line no-shadow
        const parsedTime = adapter.parse(timeProp, 'HH:mm')

        setTime(
            typeof timeProp === 'string' && isArrayString(timeProp)
                ? timeProp
                : timeProp
                ? adapter.format(parsedTime, 'HH:mm')
                : null,
        )
    }, [timeProp])
    // Side effect to handle when `state` changes externally
    React.useEffect(() => setState(stateProp), [stateProp])
    // Side effect for when desktop/mobile view and native picker changes ref
    React.useEffect(() => setPickerElement(pickerRef.current), [isDesktop, pickerRef])
    // Side effect to check for valid time value selected
    React.useEffect(() => {
        // Check desktop view, valid time, and list ref
        if (isDesktop && adapter.parse(time, 'HH:mm') && listRef && listRef.current) {
            setState(listRef.current.querySelector('.selected') ? 'default' : 'error')
        } else {
            setState('default')
        }
    }, [time])

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
     *  <div> // Click away listener listens for any click outside this div
     *      <TimePickerNative />
     *      <Popover> // Removes from DOM on mobile view
     *          <ListPicker />
     *      </Popover>
     *  </div>
     */
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <div className="picker timepicker" ref={containerRef}>
                <TimePickerNative
                    key="picker"
                    withCustom={renderType.disableNative}
                    state={state}
                    shape={shape}
                    step={context.step}
                    {...renderType}
                    className={classNames({ focus: open })}
                    textWrapperProps={{
                        className: open ? 'interaction--active' : '',
                    }}
                    onClick={handleOpen}
                    onKeyDown={handleKeyDown}
                    onChange={handleNativeChange}
                    time={time || ''} // When value is null/falsy, just show an empty string
                    times={context.times}
                    onClear={handleClear}
                    clearButtonProps={clearButtonProps}
                    {...props}
                    // @todo
                    ref={pickerRef as any}
                />
                {context.times && renderType.disableNative && pickerElement ? (
                    <Popover
                        disablePortal
                        keepMounted
                        open={open}
                        anchorEl={pickerElement}
                        offset={[0, 10]}
                        pop={
                            <div className={classNames('timepicker-popover', `shape--${shape}`)}>
                                <ListPicker
                                    type="time"
                                    value={time || ''}
                                    options={context.times}
                                    shape={shape}
                                    onChange={handleListChange}
                                    enableGlobalKeyDown={open}
                                    {...listPickerProps}
                                    ref={listRef}
                                />
                            </div>
                        }
                        {...popoverProps}
                        {...popperProps}
                    />
                ) : null}
            </div>
        </ClickAwayListener>
    )
})

type TimePickerRef = TimePickerNativeRef

type TimePickerOverrideProps = 'onChange' | 'value'

interface TimePickerChangeInfo {
    /**
     * From either `ListPicker`, `SelectPicker`, or `TextPicker`
     */
    from: 'ListPicker' | 'SelectPicker' | 'TextPicker'
    /**
     * Value of change info
     */
    value: string | number
    /**
     * Time of change info
     * Either 24h string format ('HH:mm') or range of 24h formats as array
     */
    time: string | string[]
}

interface TimePickerProps extends Omit<TimePickerNativeProps, TimePickerOverrideProps> {
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][]
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][]
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
     * Current parsable time
     * Can be used as a default and changed externally
     */
    time?: ParsableDate
    /**
     * List of parsable times
     * Can be in the format of a timestamp, a Date instance, a 24h string, or a `TimeItem` for list selection
     */
    times?: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[]
    /**
     * Minimum time allowed in time picker
     * Must be 24h format string ('HH:mm')
     */
    minTime?: string
    /**
     * Maximum time allowed in time picker
     * Must be 24h format string ('HH:mm')
     */
    maxTime?: string
    /**
     * `onKeyDown` trigger event for
     * when the user presses a key on the `select`
     */
    onKeyDown?: (event: React.KeyboardEvent<TimePickerNativeRef>) => void
    /**
     * `onChange` trigger function
     */
    onChange?: (event: React.ChangeEvent, info: TimePickerChangeInfo) => void
    /**
     * `onOpen` trigger function
     * Triggers when `Popover` opens
     */
    onOpen?: () => void
    /**
     * `onClose` trigger function
     * Triggers when `Popover` closes
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
     * List Picker override props
     */
    listPickerProps?: ListPickerProps
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
}

TimePicker.bdsName = 'TimePicker'

export { TimePicker }

export type { TimePickerRef, TimePickerProps, TimePickerChangeInfo }

export default TimePicker
