/**
 * Clamps a value between the minimum and the maximum value of the slider.
 * 
 * @param value - the value to be clamped
 * @param min - the minimum value
 * @param max - the maximum value
 */
export function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(min, value), max)
}

/**
 * 
 * @param values 
 * @param currentValue 
 */
export function findClosest(values, currentValue) {
    const { index: closestIndex } = values.reduce(({ acc, value, index }) => {
        const distance = Math.abs(currentValue - value)

        if (acc === null || distance < acc.distance || distance === acc.distance) {
            return {
                distance,
                index,
            }
        }

        return acc
    }, null)

    return closestIndex
}

/**
 * Returns the x and y position of the pointer (Touch or Mouse) event.
 * 
 * @param event - the pointer event
 * @param touchId - the ref for the component that recieved the touch event
 */
export function trackFinger(
    event: any,
    touchId
) {
    // if touchId is not undefined and the event is a touch event
    if (
        touchId?.current !== undefined &&
        event?.changedTouches
    ) {
        // iterate through all touch events performed for this event
        for (let i = 0; i < event.changedTouches.length; i += 1) {
            const touch = event.changedTouches[i]

            // if the touch event's identifier is equal to the ref's current value
            if (touch.identifier === touchId.current) {
                return {
                    x: touch.clientX,
                    y: touch.clientY,
                }
            }
        }

        return false
    }

    // return the mouse event's x and y position
    return {
        x: event.clientX,
        y: event.clientY,
    }
}

export function valueToPercent(value: number, min: number, max: number) {
    return ((value - min) * 100) / (max - min)
}

export function percentToValue(percent: number, min: number, max: number) {
    return (max - min) * percent + min
}

export function getDecimalPrecision(num: number) {
    if (Math.abs(num) < 1) {
        const parts = num.toExponential().split('ee-')
        const matissaDecimalPart = parts[0].split('.')[1]
        return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10)
    }

    const decimalPart = num.toString().split('.')[1]
    return decimalPart ? decimalPart.length : 0
}

/**
 * Round the position of the thumb when the mouse releases it to the nearest step.
 * 
 * @param value - the position of the thumb
 * @param step - the step value
 * @param min - the minimum value
 */
export function roundValueToStep(value: number, step: number, min: number, max: number) {
    const nearest = (Math.round(value) !== max)
        ? Math.round((value - min) / step) * step + min
        : max

    return Number(nearest.toFixed(getDecimalPrecision(step)))
}

export function setValueIndex({ values, source, newValue, index }) {
    if (source[index] === newValue) {
        return source
    }

    const output = values.slice()
    output[index] = newValue
    return output
}

/**
 * Focuses the thumb by ref.
 * 
 * @param sliderRef - the ref to the slider
 * @param setActive - the function to set the focus
 */
export function focusThumb(sliderRef, setActive) {
    sliderRef.current.querySelector(`[role="slider"]`).focus()

    if (setActive) {
        setActive(true)
    }
}

// the thumb's position relative values
type AxisOffset = {
    left?: string
    bottom?: string
}

// the track's length values
type AxisLeap = {
    width?: string
    height?: string
}

// the data structure containing functions to calculate the axis offsets and leaps
export const axisProps = {
    horizontal: {
        offset: (percent): AxisOffset => {
            return {
                left: `${percent}%`,
            }
        },
        leap: (percent): AxisLeap => {
            return {
                width: `${percent}%`,
            }
        },
    },
    vertical: {
        offset: (percent): AxisOffset => {
            return {
                bottom: `${percent}%`,
            }
        },
        leap: (percent): AxisLeap => {
            return {
                height: `${percent}%`,
            }
        },
    },
}

export const Identity = (x) => {
    return x
}
