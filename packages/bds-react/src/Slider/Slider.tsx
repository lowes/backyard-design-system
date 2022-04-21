import classNames from 'classnames'
import * as React from 'react'

import Stepper from '../Stepper'
import Tooltip from '../Tooltip'
import type { TooltipProps } from '../Tooltip'
import TooltipPopper from '../TooltipPopper'
import type { TooltipPopperProps } from '../TooltipPopper'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import Typography from '../Typography'
import { ownerDocument } from '../utils/functions'
import { useControlled, useEventCallback, useForkRef, useIsFocusVisible } from '../utils/hooks'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import {
    axisProps,
    clamp,
    focusThumb,
    percentToValue,
    roundValueToStep,
    trackFinger,
    valueToPercent,
} from './SliderUtils'
import SliderInputWrapper from './style/SliderInputWrapper'
import SliderLayoutWrapper from './style/SliderLayoutWrapper'
import SliderWrapper from './style/SliderWrapper'

const Slider: BDSForwardRef<SliderProps> = React.forwardRef<SliderRef, SliderProps>(function Slider(
    {
        className,
        defaultValue = 1,
        disabled = false,
        showInput = false,
        max: maxProp = 10,
        min: minProp = 1,
        step = 1,
        thumbClassName,
        tooltip,
        onFocus,
        onBlur,
        onChange,
        onChangeCommitted,
        onMouseDown,
        orientation = 'horizontal',
        shape: shapeProp, // = 'rounded',
        popoverProps = {},
        popperProps = {},
        tooltipProps = {},
        value: valueProp,
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Slider',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    /**
     * Different states of the thumb.
     */
    const [focusVisible, setFocusVisible] = React.useState(-1)
    const [active, setActive] = React.useState(false)

    const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible()

    // the component that recieved touch event
    const touchId = React.useRef(null)
    const sliderRef = React.useRef(null)
    const handleFocusRef = useForkRef(focusVisibleRef, sliderRef)
    const handleRef = useForkRef(ref, handleFocusRef)

    // the state of the slider's value
    const [valueDerived, setValueState] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'Slider',
    })

    // the slider's visual orientation
    // 'vertical' or 'horizontal'
    const axis = orientation

    /**
     * Calculates the position of the thumb and the width of the track.
     *
     * @param finger - the position of the pointer event
     */
    function getFingerNewValue(finger) {
        if (disabled) return undefined

        const { current: slider } = sliderRef

        const { width, height, bottom, left } = slider.getBoundingClientRect()

        const percent =
            axis.indexOf('vertical') === 0
                ? (bottom - finger.y) / height
                : (finger.x - left) / width

        let newValue = percentToValue(percent, minProp, maxProp)

        newValue = roundValueToStep(newValue, step, minProp, maxProp)

        newValue = clamp(newValue, minProp, maxProp)

        return newValue
    }

    /**
     * Handles the touchMove events on the thumb.
     * Triggers the `onChange` from props if available.
     */
    const handleTouchMove = useEventCallback(function handleTouchMove(event) {
        if (disabled) return

        const finger = trackFinger(event, touchId)

        if (!finger) {
            return
        }

        const newValue = getFingerNewValue(finger)

        focusThumb(sliderRef, setActive)

        setValueState(newValue)
        if (onChange && valueDerived !== newValue) {
            onChange(event, String(newValue))
        }
    })

    /**
     * Handles the touchEnd event on the thumb.
     * Triggers the `onChangeCommitted` prop if available.
     */
    const handleTouchEnd = useEventCallback(function handleTouchEnd(event: React.TouchEvent) {
        if (disabled) return

        const finger = trackFinger(event, touchId)

        if (!finger) {
            return
        }

        // const newValue = getFingerNewValue(finger)

        setActive(false)

        touchId.current = undefined

        const doc = ownerDocument(sliderRef.current)
        doc.removeEventListener('mousemove', handleTouchMove)
        doc.removeEventListener('mouseup', handleTouchEnd)
        doc.removeEventListener('touchmove', handleTouchMove)
        doc.removeEventListener('touchend', handleTouchEnd)
    })

    /**
     * Handles the touchStart event on the thumb.
     * Triggers the `onChange` prop if available.
     */
    const handleTouchStart = useEventCallback(function handleTouchStart(event) {
        event.preventDefault()

        if (disabled) return

        const touch = event.changedTouches[0]

        if (touch != null) {
            touchId.current = touch.identifier
        }

        // get the position of the pointer event
        const finger = trackFinger(event, touchId)
        // get the new calculated thumb position
        const newValue = getFingerNewValue(finger)
        // focus the thumb
        focusThumb(sliderRef, setActive)

        setValueState(newValue)
        if (onChange && valueDerived !== newValue) {
            onChange(event, String(newValue))
        }

        const doc = ownerDocument()
        doc.addEventListener('touchmove', handleTouchMove)
        doc.addEventListener('touchend', handleTouchEnd)
    })

    /**
     *
     * @param newValue
     * @param step
     * @param minProp
     * @param maxProp
     */
    const setCalculatedValue = (
        newValue: number,
        stepArg: number,
        minArg: number,
        maxArg: number,
    ) => {
        // rounds the value the thumb was dropped at to the nearest step
        const roundedValue = roundValueToStep(newValue, stepArg, minArg, maxArg)

        // clamps the thumb value to the correct value
        const clampedValue = clamp(roundedValue, minArg, maxArg)

        setValueState(clampedValue)
        
        return clampedValue
    }

    /**
     * Handles the mouseDown event on the thumb.
     * Triggers the `onChange` prop if available.
     */
    const handleMouseDown = useEventCallback(function handleMouseDown(event) {
        event.preventDefault()

        if (disabled) return

        if (onMouseDown) {
            onMouseDown(event)
        }

        const finger = trackFinger(event, touchId)

        const newValue = getFingerNewValue(finger)

        focusThumb(sliderRef, setActive)

        setValueState(newValue)
        if (onChange && valueDerived !== newValue) {
            onChange(event, String(newValue))
        }

        const doc = ownerDocument(sliderRef.current)
        doc.addEventListener('mousemove', handleTouchMove)
        doc.addEventListener('mouseup', handleTouchEnd)
    })

    /**
     * Handles the keyDown event on the thumb and the input field.
     * Triggers the `onChange` and `onChangeCommitted` prop if available.
     */
    const handleKeyDown = useEventCallback(function handleKeyDown(
        event,
        isInput = false,
    ) {
        if (disabled) return

        if (
            event.key === 'Home' ||
            event.key === 'End' ||
            event.key === 'ArrowUp' ||
            event.key === 'ArrowDown' ||
            event.key === 'PageUp' ||
            event.key === 'PageDown'
        ) {
            event.preventDefault()

            let newValue = valueDerived

            switch (event.key) {
                case 'Home':
                    newValue = setCalculatedValue(minProp, step, minProp, maxProp)
                    break

                case 'End':
                    newValue = setCalculatedValue(maxProp, step, minProp, maxProp)
                    break

                // eslint-disable-next-line no-fallthrough
                case 'ArrowUp':
                case 'PageUp':
                    newValue = setCalculatedValue(valueDerived + step, step, minProp, maxProp)
                    break

                // eslint-disable-next-line no-fallthrough
                case 'ArrowDown':
                case 'PageDown':
                    // eslint-disable-next-line no-case-declarations
                    const nearestFactor =
                        (valueDerived - minProp) % step === 0
                            ? valueDerived - step
                            : valueDerived - (valueDerived % step)

                    newValue = setCalculatedValue(nearestFactor, step, minProp, maxProp)
                    break

                default:
                    return
            }

            if (onChange) {
                onChange(event, String(newValue))
            }

            if (!isInput) {
                const index = Number(event.currentTarget.getAttribute('data-index')[0])
                setFocusVisible(index)
            }
        } else {
            persistSyntheticEvent(event)
        }
    })

    /**
     * Handles the `onFocus` event on the thumb.
     * Triggers the `onFocus` prop if available.
     */
    const handleFocus = useEventCallback(function handleFocus(event: React.FocusEvent) {
        if (!disabled) {
            const index = Number(event.currentTarget.getAttribute('data-index')[0])

            if (isFocusVisible(event)) {
                setFocusVisible(index)
            }

            if (onFocus) {
                onFocus(event)
            }
        }
    })

    /**
     * Handles the `onBlur` event on the thumb.
     * Triggers the `onBlur` prop if available.
     */
    const handleBlur = useEventCallback((event: React.FocusEvent) => {
        if (disabled) return

        if (focusVisible !== -1) {
            setFocusVisible(-1)
            onBlurVisible()
        }

        if (onBlur) {
            onBlur(event)
        }
    })

    /**
     * Handles the `onInput` event on the input field.
     */
    const handleInput = useEventCallback(function handleInputChange(event: React.ChangeEvent<any>) {
        if (disabled) return

        // parse the event value
        const eventValue = parseInt(event.currentTarget.value, 10)

        // if the current value of the thumb is less than or equal to the max prop value
        // and is greater than or equal to the min prop value
        // set the new value of the thumb
        if (eventValue && eventValue <= maxProp && eventValue >= minProp) {
            setValueState(eventValue)
        }
    })

    type StepperValueInfo = {
        action?: 'increment' | 'decrement'
        current: string
        previous: string
    }

    /**
     * Handles the `onChange` event on the input field.
     * Triggers the `onChange` prop if available.
     */
    const handleChange = (
        event: React.ChangeEvent,
        info: StepperValueInfo
    ) => {
        if (onChange && minProp <= Number(info.current) && Number(info.current) <= maxProp) {
            onChange(event, info.current)
        }

        if (onChangeCommitted) {
            onChangeCommitted(event)
        }
    }

    /**
     * Use effect is triggered whenever the values for handleTouchEnd, handleTouchMove, or handleTouchStart
     * change.
     */
    React.useEffect(() => {
        if (disabled) return undefined

        const { current: slider } = sliderRef
        slider.addEventListener('touchstart', handleTouchStart)

        const doc = ownerDocument(slider)

        return () => {
            slider.removeEventListener('touchstart', handleTouchStart)
            doc.removeEventListener('mousemove', handleTouchMove)
            doc.removeEventListener('mouseup', handleTouchEnd)
            doc.removeEventListener('touchmove', handleTouchMove)
            doc.removeEventListener('touchend', handleTouchEnd)
        }
    }, [disabled, handleTouchEnd, handleTouchMove, handleTouchStart])

    // determines if min, max, and step are valid values
    React.useEffect(() => {
        if ((maxProp - minProp) % step !== 0) {
            if (process.env.NODE_ENV !== 'production') {
                // eslint-disable-next-line no-console
                console.error(
                    `Error: The Slider component's max prop value ${maxProp} is not divisible by it's step prop value of ${step}.`,
                )
            }
        }
    }, [minProp, maxProp, step])

    // the values used to calculate the width of the track
    const trackOffset = valueToPercent(minProp, minProp, maxProp)
    const trackLeap = valueToPercent(valueDerived, minProp, maxProp) - trackOffset

    // the values used to calculate the position the thumb
    const offset = axisProps[orientation].offset(trackOffset)
    const leap = axisProps[orientation].leap(trackLeap)

    // the css used for the thumb's position
    const thumbPos =
        orientation === 'horizontal'
            ? { left: leap.width, transform: `translateX(-50%)` }
            : { bottom: leap.height, transform: `translateY(50%)` }

    // the minimum value label
    const minLabel = (
        <Typography
            color={!disabled ? 'text_primary' : 'text_disabled'}
            className={classNames('slider-min-label', orientation)}
            variant="body_1"
        >
            {minProp}
        </Typography>
    )

    // the maximum value label
    const maxLabel = (
        <Typography
            color={!disabled ? 'text_primary' : 'text_disabled'}
            className={classNames('slider-max-label', orientation)}
            variant="body_1"
        >
            {maxProp}
        </Typography>
    )

    // the thumb component
    const thumb = (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <span
            className={classNames(
                'thumb',
                disabled ? 'disabled' : '',
                orientation,
                active ? 'active' : '',
                thumbClassName,
            )}
            tabIndex={disabled ? null : 0}
            role="slider"
            aria-label="thumb"
            id="thumb"
            aria-valuenow={valueDerived}
            data-index="0"
            onKeyDown={(event) => handleKeyDown(event)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
                ...thumbPos,
            }}
        />
    )

    // the minimum and maximum labels for the vertical orientation of the slider
    const verticalLabels = (
        <div className="labels">
            {orientation === 'vertical' && minLabel}
            {orientation === 'vertical' && maxLabel}
        </div>
    )

    /**
     * Layout:
     *
     * Thumb: the circular component that the user can click on and move across the slider.
     *
     * Track: the line to the left of the thumb.
     *
     * Rail: the line the thumb slides across.
     *
     * <SliderLayoutWrapper>
     *   <minLabel />
     *   <SliderWrapper>
     *     <span rail />
     *     <span track />
     *     <span thumb />
     *   </SliderWrapper>
     *   <maxLabel />
     *   <verticalLabels />
     *   <SliderInputWrapper>
     *     <Stepper />
     *   </SliderInputWrapper
     * </SliderLayoutWrapper>
     */
    return (
        <SliderLayoutWrapper className={classNames('slider-layout-wrapper', orientation)}>
            <div className="slider-wrapper">
                {orientation === 'horizontal' && minLabel}
                <SliderWrapper
                    className={classNames(
                        'slider',
                        orientation,
                        disabled ? 'disabled' : '',
                        className,
                    )}
                    onMouseDown={handleMouseDown}
                    ref={handleRef}
                >
                    <span className={classNames('rail', disabled ? 'disabled' : '', orientation)} />
                    <span
                        className={classNames('track', disabled ? 'disabled' : '', orientation)}
                        style={{ ...leap, ...offset }}
                    />

                    {tooltip ? (
                        <TooltipPopper
                            popperOptions={{
                                placement: orientation === 'horizontal' ? 'bottom' : 'right',
                                modifiers: [
                                    {
                                        name: 'offset',
                                        enabled: true,
                                        options: {
                                            offset: () => {
                                                return [0, 8]
                                            },
                                        },
                                    },
                                ],
                                strategy: 'absolute',
                            }}
                            tooltip={
                                <Tooltip shape={shape} {...tooltipProps}>
                                    {valueDerived}
                                </Tooltip>
                            }
                            {...popoverProps}
                            {...popperProps}
                        >
                            {thumb}
                        </TooltipPopper>
                    ) : (
                        thumb
                    )}
                </SliderWrapper>
                {orientation === 'horizontal' && maxLabel}
                {orientation === 'vertical' && verticalLabels}
            </div>
            <SliderInputWrapper
                className={
                    !showInput || orientation === 'vertical'
                        ? 'slider-input--hidden'
                        : 'slider-input--visible'
                }
            >
                <Stepper
                    disabled={disabled}
                    hideButtons
                    value={Number(valueDerived)}
                    min={minProp}
                    max={maxProp}
                    step={step}
                    onInput={handleInput}
                    onChange={handleChange}
                    onKeyDown={(event) => handleKeyDown(event, true)}
                />
            </SliderInputWrapper>
        </SliderLayoutWrapper>
    )
})

type SliderRef = HTMLSpanElement

interface SliderProps {
    className?: string
    /**
     * The default value for the slider.
     */
    defaultValue?: number
    /**
     * Wether or not the slider is disabled.
     */
    disabled?: boolean
    /**
     * If the input should be rendered.
     */
    showInput?: boolean
    /**
     * The max value of the slider.
     */
    max?: number
    /**
     * The min value of the slider.
     */
    min?: number
    /**
     * The value the slider will increment and decrement.
     */
    step?: number
    /**
     * Adds a className to the thumb component.
     */
    thumbClassName?: String
    /**
     * The tooltip being displayed.
     */
    tooltip?: Boolean
    /**
     * `onChange` trigger function
     *  @argument {Event} event
     */
    onChange?: (event: React.ChangeEvent, currentValue: String) => void
    /**
     * `onChangeCommitted` trigger function
     *  @argument {Event} event
     */
    onChangeCommitted?: (event: React.ChangeEvent) => void
    /**
     * `onFocus` trigger function
     *  @argument {Event} event
     */
    onFocus?: (event: React.FocusEvent) => void
    /**
     * `onBlur` trigger function
     *  @argument {Event} event
     */
    onBlur?: (event: React.FocusEvent) => void
    /**
     * `onMouseDown` trigger function
     *  @argument {Event} event
     */
    onMouseDown?: (event: React.MouseEvent) => void
    /**
     * The orientation of the slider.
     */
    orientation?: 'horizontal' | 'vertical'
    /**
     * Shape of the tooltip
     */
    shape?: 'rounded' | 'squared'
    /**
     * The tooltip popper's prop overrides
     */
    popoverProps?: Partial<TooltipPopperProps>
    /**
     * The tooltip popper's prop overrides
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<TooltipPopperProps>
    /**
     * Tooltip prop overrides
     */
    tooltipProps?: TooltipProps
    /**
     * The value of the slider.
     */
    value?: number
}

Slider.bdsName = 'Slider'

export { Slider }

export type { SliderProps, SliderRef }

export default Slider
