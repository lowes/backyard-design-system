import * as React from 'react'
import classNames from 'classnames'
import InputMask from 'react-input-mask'
import type { InputState, Props as InputMaskProps } from 'react-input-mask'

import ClockIcon from '@lowes-tech/bds-icons/HistoryOutlined'
import CalendarIcon from '@lowes-tech/bds-icons/Calendar'
import CloseCircleFilledIcon from '@lowes-tech/bds-icons/CloseCircleFilled'

import IconButton from '../IconButton'
import type { IconButtonProps } from '../IconButton'
import TextInput from '../TextInput'
import type { TextInputProps, TextInputRef } from '../TextInput'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import useAdapter from './hooks/useAdapter'
import TextPickerWrapper from './styles/TextPickerWrapper'
import type BackyardBaseProps from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useForwardedRef } from '../utils/hooks'

const getTimeMaskProps = (step) =>
    ({
        // One Hour (60m) == 3600 seconds
        3600: {
            mask: [/[01]/, /[0-9]/, ':', '0', '0', ' ', /[AP]/, /[M]/],
            maskPlaceholder: '--:00 --',
        },
        // Half Hour (30m) == 1800 seconds
        1800: {
            mask: [/[01]/, /[0-9]/, ':', /[03]/, '0', ' ', /[AP]/, /[M]/],
            maskPlaceholder: '--:-- --',
        },
        // Qarter Hour (15m) == 900 seconds
        900: {
            mask: [/[01]/, /[0-9]/, ':', /[0134]/, /[05]/, ' ', /[AP]/, /[M]/],
            maskPlaceholder: '--:-- --',
        },
        // Sixth Hour (10m) == 600 seconds
        600: {
            mask: [/[01]/, /[0-9]/, ':', /[0-5]/, '0', ' ', /[AP]/, /[M]/],
            maskPlaceholder: '--:-- --',
        },
        // Twelth Hour (5m) == 300 seconds
        300: {
            mask: [/[01]/, /[0-9]/, ':', /[0-5]/, /[05]/, ' ', /[AP]/, /[M]/],
            maskPlaceholder: '--:-- --',
        },
    }[step] || getTimeMaskProps(3600))

/**
 * Backyard React Text Picker
 *
 * @todo Comments
 */
const TextPicker: BDSForwardRef<TextPickerProps> = React.forwardRef<TextPickerRef, TextPickerProps>(
    function TextPicker(
        {
            disableNative = false,
            label,
            mask: maskProp,
            maskPlaceholder: maskPlaceholderProp,
            beforeMaskedStateChange = (state) => state,
            min,
            max,
            onChange,
            onClear,
            pattern, // = '[0-9]{2}:[0-9]{2}',
            step,
            type = 'date',
            shape: shapeProp, // = 'rounded',
            value: valueProp,
            defaultValue,
            selectWrapperProps, // Unused
            textWrapperProps = {},
            wrapperProps = {},
            clearButtonProps = {},
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme({
            validate: true,
            name: 'TextPicker',
        })

        const { isDesktop } = theme
        const { shape: shapeContext } = theme.context

        const innerRef = useForwardedRef(ref)

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        const adapter = useAdapter()

        const [value, setValue] = React.useState(valueProp || defaultValue)

        const isDate = type === 'date'

        /**
         * Force event.target to `innerRef`, the text `input`
         *
         * @param {Event} event - DOM Event
         */
        function getEvent<E>(event: E) {
            return event
        }

        // eslint-disable-next-line no-shadow
        const handleChange = (event: React.ChangeEvent, value: string) => {
            setValue(value)

            if (onChange) {
                onChange(event, value)
            }
        }

        /**
         * Handles clear button `onClick` event
         *
         * @param event - click even from clear button
         */
        const handleClearClick = (event: React.MouseEvent) => {
            // Trigger change event
            handleChange(getEvent<React.ChangeEvent>((event as unknown) as React.ChangeEvent), '')

            if (onClear) {
                onClear(event)
            }
        }

        // eslint-disable-next-line no-shadow
        const valueFromMask = (value) => {
            const matchesMask = isDate ? value.match(/[/]/g) : value.match(/[-]/g)

            if (!matchesMask) {
                let date = adapter.parse(value, isDate ? 'MM/dd/yyyy' : 'hh:mmaa')

                if (!date) {
                    date = adapter.parse(value, isDate ? 'yyyy-MM-dd' : 'HH:mm')
                }

                if (adapter.isValid(date)) {
                    return adapter.format(date, isDate ? 'MM/dd/yyyy' : 'hh:mm aa')
                }

                return null
            }

            return null
        }

        // Default icon for text pickers
        const defaultIcon = isDate ? (
            <CalendarIcon className="no-interaction" />
        ) : (
            <ClockIcon className="no-interaction" />
        )
        // If value defined, use clear button instead
        const icon = value ? (
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
        ) : (
            defaultIcon
        )

        const mask = maskProp || (isDate ? '99/99/9999' : getTimeMaskProps(step).mask)
        const maskPlaceholder =
            maskPlaceholderProp || (isDate ? 'mm/dd/yyyy' : getTimeMaskProps(step).maskPlaceholder)
        const handleMaskedStateChange = ({ nextState }) => {
            // eslint-disable-next-line no-shadow
            const { value } = nextState

            const newValue = valueFromMask(value)

            return beforeMaskedStateChange({
                ...nextState,
                value: newValue || value,
            })
        }

        const nativeProps = disableNative
            ? {
                  component: InputMask,
                  mask,
                  maskPlaceholder,
                  beforeMaskedStateChange: handleMaskedStateChange,
                  type: 'text',
              }
            : {
                  component: 'input',
                  type,
              }

        React.useEffect(() => {
            if (disableNative) {
                // eslint-disable-next-line no-shadow
                const value = valueFromMask(valueProp)

                if (value) {
                    setValue(value)
                }
            } else {
                setValue(valueProp)
            }
        }, [valueProp])

        return (
            <TextPickerWrapper
                {...wrapperProps}
                disableNative={disableNative}
                isDesktop={isDesktop}
                className={classNames('datepicker-text', `shape--${shape}`, wrapperProps.className)}
            >
                <TextInput
                    required // Removes Firefox clear button
                    value={value || ''}
                    onChange={handleChange}
                    label={label}
                    itemAfter={icon}
                    step={step}
                    min={min}
                    max={max}
                    pattern={pattern}
                    wrapperProps={textWrapperProps}
                    shape={shape}
                    {...props}
                    {...nativeProps}
                    ref={innerRef}
                />
            </TextPickerWrapper>
        )
    },
)

interface TextPickerInfo {
    value: string
    date: Date
    time: string
}

type TextPickerRef = TextInputRef

type TextPickerOverrideProps = 'min' | 'max'

interface TextPickerProps extends Omit<TextInputProps, TextPickerOverrideProps> {
    /**
     * Whether or not native browser functionality is disabled
     */
    disableNative?: boolean
    value?: string
    defaultValue?: string
    mask?: InputMaskProps['mask']
    maskPlaceholder?: InputMaskProps['maskChar']
    beforeMaskedStateChange?: (nextState?: InputState) => InputState
    min?: string
    max?: string
    onChange?: (event: React.ChangeEvent, value: string) => void
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void
    onDateChange?: (event: React.ChangeEvent, info: TextPickerInfo) => void
    type?: 'date' | 'time' | 'datetime-local' | 'week' | 'month'
    shape?: 'rounded' | 'squared'
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
    textWrapperProps?: TextInputProps['wrapperProps']
    selectWrapperProps?: object
    clearButtonProps?: IconButtonProps
}

TextPicker.bdsName = 'TextPicker'

export { TextPicker }

export type { TextPickerProps, TextPickerRef }

export default TextPicker
