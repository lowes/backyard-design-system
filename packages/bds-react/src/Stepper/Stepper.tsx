import * as React from 'react'
import classNames from 'classnames'

import Minus from '@lowes-tech/bds-icons/Minus'
import Plus from '@lowes-tech/bds-icons/Plus'

import IconButton from '../IconButton'
import type { IconButtonProps } from '../IconButton'
import TextInput from '../TextInput'
import type { TextInputRef, TextInputProps } from '../TextInput'

import useForwardedRef from '../utils/hooks/useForwardedRef'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import StepperWrapper from './styles/StepperWrapper'

/**
 * Clamps value to a minimum number
 *
 * @param {number} min
 * @param {number} value
 * @returns {number} Minimum-clamped value
 */
const clampMin = (min, value) =>
    isNaN(min) || (!min && min !== 0) || isNaN(value) || (!value && value !== 0)
        ? value
        : Math.max(min, value)

/**
 * Clamps value to a maximum number
 *
 * @param {number} max
 * @param {number} value
 * @returns {number} Maximum-clamped value
 */
const clampMax = (max, value) =>
    isNaN(max) || (!max && max !== 0) || isNaN(value) || (!value && value !== 0)
        ? value
        : Math.min(max, value)

/**
 * Clamps value between a minimum and a maximum
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value value between min and max
 */
const clampBetween = (min, max, value) => clampMin(min, clampMax(max, value))

/**
 * Backyard React Stepper
 *
 * Stepper component consists of a minus and plus button, and a text input
 * along with some useful logic to handle max, mins, and steps.
 * The text input for `Stepper` will only accept numbers.
 *
 *  <Stepper step={2} max={10} label="Qty." />
 *
 * When the `min` value is reached, the minus will become disabled and the user
 * will not be able to type a number that is less than it.
 * The same is vice-versa for `max`
 *
 * The `step` prop allows for increments and decrements from the button clicks to
 * step by the value given.
 *
 * The `roundToStep` prop will use the `min` value as a base and only allow values
 * that `step` factors into with a base of `min`. This includes the user typing.
 * For example, if `min=1`, `step=3`, and `max=12`, then the only possible values the
 * stepper can be are [1, 4, 7, 10]. Max (12) in this case cannot be reached because we are
 * stepping by 3s from a base of 1. If the user attempts to type in a value of 8, then the
 * value will round to the nearest possible step, which is 7 in this case.
 */
const Stepper: BDSForwardRef<StepperProps> = React.forwardRef<StepperRef, StepperProps>(
    function Stepper(
        {
            className,
            disabled = false,
            incrementNumLabel,
            decrementNumLabel,
            incrementProps,
            decrementProps,
            iconDescription = 'Increment or Decrement Number',
            id,
            label,
            max = 999,
            min = 0,
            hideButtons = false,
            onBlur,
            onFocus,
            onChange,
            step = 1,
            roundToStep = false,
            value: valueProp,
            defaultValue = 0,
            ariaLabel = 'Stepper number input field with increment and decrement buttons',
            shape: shapeProp, // = 'rounded',
            size = 'large',
            state = 'default',
            style,
            wrapperProps,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme
        const theme = useBackyardTheme({
            validate: true,
            name: 'Stepper',
        })

        // Get backyard shape from context
        const { shape: shapeContext } = theme.context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Inner Ref of `input`
        const innerRef = useForwardedRef(ref)

        // Controlled value of Stepper
        const [value, setValue] = React.useState(valueProp || Number(clampMin(min, defaultValue)))
        // Manage state of previous value
        const [previous, setPrevious] = React.useState(Number(clampMin(min, defaultValue)))

        // Value prop side effects...
        React.useEffect(() => {
            // Set new controlled value
            if (valueProp !== value) {
                setValue(valueProp || Number(clampMin(min, defaultValue)))
            }
        }, [valueProp])

        /**
         * Handles `onChange` event of `input`
         * Triggers defined `onChange` from props if available
         *
         * @param {Event} event - DOM event
         */
        const handleChange = (event) => {
            // If `input` not disabled,
            if (!disabled) {
                // Don't bubble up event
                persistSyntheticEvent(event)

                // New Value, unclamped until blur
                const newValue = event.target.value

                // Set previous state value and new value
                setPrevious(value)
                setValue(newValue)

                // Force target to `input`
                // eslint-disable-next-line no-param-reassign
                event.target = {
                    ...innerRef.current,
                    value: newValue,
                }

                // If `onChange` prop defined,
                if (onChange) {
                    // Trigger `onChange` function
                    // Provides `Event` type and object containing current and previous values
                    onChange(event, {
                        current: String(newValue),
                        previous: String(value),
                    })
                }
            }
        }

        /**
         * Handles `onFocus` event for `input`
         * Selects full number on focus
         *
         * @param event
         */
        const handleFocus = (event) => {
            if (!disabled) {
                // Select all text in input
                innerRef?.current?.select()

                // If `onFocus` defined,
                if (onFocus) {
                    // Fire custom `onFocus`
                    onFocus(event)
                }
            }
        }

        /**
         * Handles `onBlur` event of `input`
         * Triggers defined `onBlur` from props if available
         *
         * @param {Event} event - DOM event
         */
        const handleBlur = (event) => {
            // If `input` not disabled,
            if (!disabled) {
                // Don't bubble up event
                persistSyntheticEvent(event)

                // Clamp new value to be between min and max
                let newValue = clampBetween(min, max, event.target.value)

                // If rounding to step enabled,
                if (roundToStep) {
                    // Get factor from factoring step from new value
                    const factor = (newValue - min) / step

                    // If factor is not an integer,
                    if (!Number.isInteger(factor)) {
                        // Get distance from integer (0.0 - 1.0)
                        const distance = ((factor * 10) % 10) / 10

                        // Calculate new step up and step down, base min
                        const stepUp = newValue + step - ((newValue - min) % step)
                        const stepDown = newValue - ((newValue - min) % step)

                        // If closer to next integer,
                        if (distance >= 0.5 && stepUp <= max) {
                            // Round new value to step up
                            newValue = stepUp
                        } else {
                            // Else, closer to previous integer,
                            // Round new value to step down
                            newValue = stepDown
                        }
                    }
                }

                // Set previous state value and new value
                setPrevious(value)
                setValue(newValue)

                // Force target to `input`
                // eslint-disable-next-line no-param-reassign
                event.target = {
                    ...innerRef.current,
                    value: newValue,
                }

                // If `onBlur` prop defined,
                if (onBlur) {
                    // Trigger `onBlur` function
                    // Provides `Event` type and object containing current and previous values
                    onBlur(event, {
                        current: String(newValue),
                        previous: String(value),
                    })
                }

                // If `onChange` prop defined,
                if (onChange) {
                    // Trigger `onChange` function
                    // Provides `Event` type and object containing current and previous values
                    onChange(event, {
                        current: String(newValue),
                        previous: String(value),
                    })
                }
            }
        }

        /**
         * Handles `onClick` event of `IconButton`
         * Triggers defined `onChange` from props if available
         *
         * @param {Event} event - DOM event
         * @param {string} action - 'increment' or 'decrement'
         */
        const handleButtonClick = (event, action) => {
            // Convert value to number if string
            let newValue = typeof value === 'string' ? Number(value) : value

            // Determine whether or not value is between min and max
            const isBetweenMinAndMax =
                action === 'increment'
                    ? (max !== undefined && newValue < max) || max === undefined
                    : (min !== undefined && newValue > min) || min === undefined

            // If `input` is not disabled and value is between min and max,
            if (!disabled && isBetweenMinAndMax) {
                // Perform increment or decrement action on value
                newValue = clampBetween(
                    min,
                    max,
                    action === 'increment' ? newValue + step : newValue - step,
                )

                // If rounding to step enabled,
                if (roundToStep) {
                    // Get factor from factoring step from new value
                    const factor = (newValue - min) / step

                    // If factor is not an integer,
                    if (!Number.isInteger(factor)) {
                        // Get distance from integer (0.0 - 1.0)
                        const distance = ((factor * 10) % 10) / 10

                        const stepUp = newValue + step - ((newValue - min) % step)
                        const stepDown = newValue - ((newValue - min) % step)

                        // If closer to next integer,
                        if (distance >= 0.5 && stepUp <= max) {
                            // Round new value to step up
                            newValue = stepUp
                        } else {
                            // Else, closer to previous integer,
                            // Round new value to step down
                            newValue = stepDown
                        }
                    }
                }

                // Don't bubble event
                persistSyntheticEvent(event)

                // Force target to `input` instead of `IconButton`
                // eslint-disable-next-line no-param-reassign
                event.target = {
                    ...innerRef.current,
                    value: newValue,
                }

                // Set previous value and current value states
                setPrevious(value)
                setValue(newValue)

                // If `onChange` prop defined,
                if (onChange) {
                    // Trigger `onChange` function
                    // Provides `Event` type and object containing the action, current, and previous values
                    onChange(event, {
                        action,
                        current: String(newValue),
                        previous: String(value),
                    })
                }
            }
        }

        // Stepper styles
        const stepperStyles = React.useMemo(
            () => ({
                // Length (width/height) of the stepper text input
                '--style-stepper-length': {
                    jumbo: 'var(--bds-sizes-size-64)',
                    large: 'var(--bds-sizes-size-56)',
                    medium: 'var(--bds-sizes-size-48)',
                    small: 'var(--bds-sizes-size-40)',
                }[size],
                '--style-stepper-font-family': theme.font.family[theme.context.font],
            }),
            [theme.name, size],
        )

        const buttonSize = React.useMemo(
            () =>
                ({
                    jumbo: 'large',
                    large: 'medium',
                    medium: 'small',
                    small: 'extra_small',
                }[size]),
            [size],
        ) as IconButtonProps['size']

        /**
         * Layout:
         *
         *  <StepperWrapper>
         *      <div>
         *          <IconButton minus />
         *          <input />
         *          <IconButton plus />
         *      </div>
         *      <label />
         *  </StepperWrapper>
         */
        return (
            <StepperWrapper
                className="stepper--wrapper"
                {...wrapperProps}
                style={{
                    ...stepperStyles,
                    ...style,
                    ...wrapperProps?.style,
                }}
            >
                <div
                    className={classNames(
                        'stepper--fields',
                        `shape--${shape}`,
                        `size--${size}`,
                        `state--${state}`,
                        {
                            disabled,
                        },
                    )}
                >
                    {!hideButtons ? (
                        <IconButton
                            className="stepper--decrement"
                            variant="ghost"
                            color="interactive"
                            size={buttonSize}
                            shape="circle"
                            disabled={
                                disabled || value <= min || (roundToStep && value - step < min)
                            }
                            onClick={(event) => handleButtonClick(event, 'decrement')}
                            aria-label={incrementNumLabel || iconDescription}
                            aria-live="polite"
                            aria-atomic="true"
                            {...decrementProps}
                        >
                            <Minus />
                        </IconButton>
                    ) : null}
                    <TextInput
                        key={`stepper__${state}`}
                        aria-label={ariaLabel}
                        label={ariaLabel}
                        hiddenLabel
                        className={classNames('backyard', 'stepper', className)}
                        data-value-current={typeof value !== 'undefined' ? value : ''}
                        data-value-previous={typeof value !== 'undefined' ? previous : ''}
                        disabled={disabled}
                        id={id}
                        max={max}
                        min={min}
                        step={step}
                        type="number"
                        pattern="[0-9]*"
                        ref={innerRef}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={typeof value !== 'undefined' ? value : ''}
                        size={size}
                        role="spinbutton"
                        {...props}
                    />
                    {!hideButtons ? (
                        <IconButton
                            className="stepper--increment"
                            variant="ghost"
                            color="interactive"
                            size={buttonSize}
                            shape="circle"
                            disabled={
                                disabled || value >= max || (roundToStep && value + step > max)
                            }
                            onClick={(event) => handleButtonClick(event, 'increment')}
                            aria-label={incrementNumLabel || iconDescription}
                            aria-live="polite"
                            aria-atomic="true"
                            {...incrementProps}
                        >
                            <Plus />
                        </IconButton>
                    ) : null}
                </div>
                {label ? (
                    <label htmlFor={id} className="stepper--label">
                        {label}
                    </label>
                ) : null}
            </StepperWrapper>
        )
    },
)

type StepperValueInfo = {
    action?: 'increment' | 'decrement'
    current: string
    previous: string
}

type StepperRef = TextInputRef

type StepperOverrideProps = 'onBlur' | 'onChange' | 'defaultValue'

interface StepperProps extends Omit<TextInputProps, StepperOverrideProps> {
    /**
     * DOM Class Name of `input` in `Stepper`
     */
    className?: string
    /**
     * Whether or not `Stepper` is disabled
     */
    disabled?: boolean
    /**
     * Description for Aria to read on increment `IconButton`
     */
    incrementNumLabel?: string
    /**
     * Description for Aria to read on decrement `IconButton`
     */
    decrementNumLabel?: string
    /**
     * Props to override increment button with
     */
    incrementProps?: IconButtonProps
    /**
     * Props to override decrement button with
     */
    decrementProps?: IconButtonProps
    /**
     * Description for Aria to read on both `IconButton`s
     */
    iconDescription?: string
    /**
     * DOM ID of `input` in `Stepper`
     */
    id?: string
    /**
     * Label for the `Stepper`
     */
    label?: string
    /**
     * Max value to clamp and allow
     */
    max?: number
    /**
     * Min value to clamp and allow
     */
    min?: number
    /**
     * Whether or not buttons are included with the stepper input
     */
    hideButtons?: boolean
    /**
     * `onBlur` trigger function
     * @argument {Event} event - DOM Event of onBlur event
     * @argument {object<string, value>} object - { action, current, previous } value
     */
    onBlur?: (event: React.FocusEvent, info: StepperValueInfo) => void
    /**
     * `onFocus` trigger function
     * @argument {Event} event
     */
    onFocus?: (event: React.FocusEvent) => void
    /**
     * `onChange` trigger function
     * @argument {Event} event - DOM Event of onChange event
     * @argument {object<string, value>} object - { action, current, previous } value
     */
    onChange?: (event: React.ChangeEvent, info: StepperValueInfo) => void
    /**
     * Number to step by for each increment and decrement
     */
    step?: number
    /**
     * Whether or not when user types number to clamp to the nearest possible step, based on minimum value
     */
    roundToStep?: boolean
    /**
     * Value of `input` in `Stepper`
     */
    value?: number
    /**
     * Default value of an uncontrolled `Stepper`
     */
    defaultValue?: number
    /**
     * Aria Label for `input` of `Stepper` to read out
     */
    ariaLabel?: string
    /**
     * Shape of `input` and `IconButton`s
     */
    shape?: 'rounded' | 'squared'
    /**
     * Size of the input and buttons
     *
     * Default: 'large'
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small'
    /**
     * State of `Stepper`
     * Allows redraw when pushing 'error' to this prop
     */
    state?: 'default' | 'error'
    /**
     * Props to extend `StepperWrapper`
     * Useful for setting `style` overrides for the wrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
}

Stepper.bdsName = 'Stepper'

export { Stepper }

export type { StepperProps, StepperRef, StepperValueInfo }

export default Stepper
