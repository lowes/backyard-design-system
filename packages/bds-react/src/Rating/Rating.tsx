import * as React from 'react'
import classNames from 'classnames'

import RatingEmpty from '@lowes-tech/bds-icons/RatingEmpty'
import RatingFilled from '@lowes-tech/bds-icons/RatingFull'

import useRandomId from '../utils/hooks/useRandomId'
import useForkRef from '../utils/hooks/useForkRef'
import useControlled from '../utils/hooks/useControlled'
import useIsFocusVisible from '../utils/hooks/useIsFocusVisible'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import RatingWrapper from './styles/RatingWrapper'

function clamp(value, min, max) {
    if (value < min) {
        return min
    }

    if (value > max) {
        return max
    }

    return value
}

function getDecimalPrecision(num) {
    const decimalPart = num.toString().split('.')[1]

    return decimalPart ? decimalPart.length : 0
}

function roundValueToPrecision(value, precision) {
    if (value == null) {
        return value
    }

    const nearest = Math.round(value / precision) * precision

    return Number(nearest.toFixed(getDecimalPrecision(precision)))
}

function IconContainer(props) {
    const { value, ...other } = props

    return <div {...other} />
}

const defaultEmptyIcon = <RatingEmpty />

const defaultIcon = <RatingFilled />

function defaultLabelText(value) {
    return `${value || 'Zero'} Star${value !== 1 ? 's' : ''}`
}

/**
 * Backyard React Rating
 *
 * @todo Comments
 */
const Rating: BDSForwardRef<RatingProps> = React.forwardRef<RatingRef, RatingProps>(function Rating(
    {
        className,
        count,
        defaultValue = null,
        emptyIcon = defaultEmptyIcon,
        emptyLabelText = 'Empty',
        getLabelText = defaultLabelText,
        icon = defaultIcon,
        IconContainerComponent = IconContainer,
        max = 5,
        name: nameProp,
        onChange,
        onChangeHover,
        onMouseLeave,
        onMouseMove,
        interactive = false,
        precision = (interactive) ? 1 : 0.1,
        size = 'medium',
        value: valueProp,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Rating')

    const name = useRandomId(nameProp)

    const [valueDerived, setValueState] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: `Backyard->Rating->[name="${name}"]`,
    })

    const valueRounded = roundValueToPrecision(valueDerived, precision)
    const [{ hover, focus }, setState] = React.useState({
        hover: -1,
        focus: -1,
    })

    let value = valueRounded
    if (hover !== -1) {
        value = hover
    }
    if (focus !== -1) {
        value = focus
    }

    const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible()
    const [focusVisible, setFocusVisible] = React.useState(false)

    const rootRef = React.useRef<RatingRef>()
    const handleFocusRef = useForkRef(focusVisibleRef, rootRef)
    const handleRef = useForkRef(handleFocusRef, ref)

    const handleMouseMove = (event) => {
        if (onMouseMove) {
            onMouseMove(event)
        }

        const rootNode = rootRef.current
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { right, left } = rootNode.getBoundingClientRect()
        const { width } = (rootNode.firstChild as Element).getBoundingClientRect()

        const percent = (event.clientX - left) / (width * max)

        let newHover = roundValueToPrecision(max * percent + precision / 2, precision)
        newHover = clamp(newHover, precision, max)

        setState((prev) =>
            prev.hover === newHover && prev.focus === newHover
                ? prev
                : {
                      hover: newHover,
                      focus: newHover,
                  },
        )

        setFocusVisible(false)

        if (onChangeHover && hover !== newHover) {
            onChangeHover(event, newHover)
        }
    }

    const handleMouseLeave = (event) => {
        if (onMouseLeave) {
            onMouseLeave(event)
        }

        const newHover = -1
        setState({
            hover: newHover,
            focus: newHover,
        })

        if (onChangeHover && hover !== newHover) {
            onChangeHover(event, newHover)
        }
    }

    const handleChange = (event) => {
        const newValue = parseFloat(event.target.value)

        setValueState(newValue)

        if (onChange) {
            onChange(event, newValue)
        }
    }

    const handleClear = (event) => {
        // Ignore keyboard events
        // https://github.com/facebook/react/issues/7407
        if (event.clientX === 0 && event.clientY === 0) {
            return
        }

        setState({
            hover: -1,
            focus: -1,
        })

        setValueState(null)

        if (onChange && parseFloat(event.target.value) === valueRounded) {
            onChange(event, null)
        }
    }

    const handleFocus = (event) => {
        if (isFocusVisible(event)) {
            setFocusVisible(true)
        }

        const newFocus = parseFloat(event.target.value)
        setState((prev) => ({
            hover: prev.hover,
            focus: newFocus,
        }))

        if (onChangeHover && focus !== newFocus) {
            onChangeHover(event, newFocus)
        }
    }

    const handleBlur = (event) => {
        if (hover !== -1) {
            return
        }

        if (focusVisible !== false) {
            setFocusVisible(false)
            onBlurVisible()
        }

        const newFocus = -1
        setState((prev) => ({
            hover: prev.hover,
            focus: newFocus,
        }))

        if (onChangeHover && focus !== newFocus) {
            onChangeHover(event, newFocus)
        }
    }

    const item = (state, labelProps = {}) => {
        const id = `${name}-${String(state.value).replace('.', '-')}`
        const container = (
            <IconContainerComponent
                value={state.value}
                className={classNames('rating-icon', {
                    empty: !state.filled,
                    filled: state.filled,
                    hover: state.hover,
                    focus: state.focus,
                    active: state.active,
                })}
            >
                {emptyIcon && !state.filled ? emptyIcon : icon}
            </IconContainerComponent>
        )

        if (!interactive) {
            return (
                <div key={state.value} className="rating-item" {...labelProps}>
                    {container}
                </div>
            )
        }

        return (
            <React.Fragment key={state.value}>
                <label className="rating-label" htmlFor={id} {...labelProps}>
                    {container}
                    <span className="hidden">{getLabelText(state.value)}</span>
                </label>
                <input
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onClick={handleClear}
                    value={state.value}
                    id={id}
                    type="radio"
                    name={name}
                    checked={state.checked}
                    className="hidden"
                />
            </React.Fragment>
        )
    }

    return (
        <RatingWrapper
            ref={handleRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={classNames(
                'rating',
                `size--${size}`,
                interactive ? 'interactive' : 'read-only',
                {
                    // eslint-disable-next-line no-useless-computed-key
                    ['focus-visible']: focusVisible,
                },
                className,
            )}
            role={!interactive ? 'img' : null}
            aria-label={!interactive ? getLabelText(value) : null}
            {...props}
        >
            {[...new Array(max)].map((_, index) => {
                const itemValue = index + 1

                if (precision < 1) {
                    const items = [...new Array(1 / precision)]

                    return (
                        <div
                            key={itemValue}
                            className={classNames('rating-item', 'decimal', {
                                active:
                                    itemValue === Math.ceil(value) &&
                                    (hover !== -1 || focus !== -1),
                            })}
                        >
                            {items.map(($, indexDecimal) => {
                                const itemDecimalValue = roundValueToPrecision(
                                    itemValue - 1 + (indexDecimal + 1) * precision,
                                    precision,
                                )

                                return item(
                                    {
                                        value: itemDecimalValue,
                                        filled: itemDecimalValue <= value,
                                        hover: itemDecimalValue <= hover,
                                        focus: itemDecimalValue <= focus,
                                        checked: itemDecimalValue === valueRounded,
                                    },
                                    {
                                        style:
                                            items.length - 1 === indexDecimal
                                                ? {}
                                                : {
                                                      width:
                                                          itemDecimalValue === value
                                                              ? `${
                                                                    (indexDecimal + 1) *
                                                                    precision *
                                                                    100
                                                                }%`
                                                              : '0%',
                                                      overflow: 'hidden',
                                                      // zIndex: 1,
                                                      position: 'absolute',
                                                  },
                                    },
                                )
                            })}
                        </div>
                    )
                }

                return item({
                    value: itemValue,
                    active: itemValue === value && (hover !== -1 || focus !== -1),
                    filled: itemValue <= value,
                    hover: itemValue <= hover,
                    focus: itemValue <= focus,
                    checked: itemValue === valueRounded,
                })
            })}
            {interactive && valueRounded == null && (
                <>
                    <input
                        value=""
                        id={`${name}-empty`}
                        type="radio"
                        name={name}
                        defaultChecked
                        className="hidden"
                    />
                    <label className="rating-empty" htmlFor={`${name}-empty`}>
                        <span className="hidden">{emptyLabelText}</span>
                    </label>
                </>
            )}
            {!interactive && count ? <span className="rating-count">{count}</span> : null}
        </RatingWrapper>
    )
})

type RatingRef = HTMLSpanElement

type RatingOverrideProps = 'size' | 'onChange'

interface IconContainerProps extends React.HTMLProps<HTMLSpanElement> {
    value: number
}

interface RatingProps extends BackyardBaseProps<RatingRef, RatingOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Number of ratings, if available
     * Automatically converts `Rating` component to a read-only component
     */
    count?: number
    /**
     * The default value. Use when the component is not controlled.
     */
    defaultValue?: number
    /**
     * The icon to display when empty.
     */
    emptyIcon?: React.ReactNode
    /**
     * Label text when `Rating` component is empty (no stars selected)
     */
    emptyLabelText?: string
    /**
     * Accepts a function which returns a string value that provides a user-friendly name for the current value of the rating.
     *
     * For localization purposes, you can use the provided [translations](/guides/localization/).
     *
     * @param {number} value The rating label's value to format.
     * @returns {string}
     */
    getLabelText?: (value: number) => string
    /**
     * The icon to display.
     */
    icon?: React.ReactNode
    /**
     * The component containing the icon.
     */
    IconContainerComponent?: React.ComponentClass<IconContainerProps>
    /**
     * Maximum rating.
     */
    max?: number
    /**
     * The name attribute of the radio input for forms
     * Required if interactive
     */
    name?: string
    /**
     * Callback fired when the value changes.
     *
     * @param {object} event The event source of the callback.
     * @param {number} value The new value.
     */
    onChange?: (event: React.ChangeEvent, value: number) => void
    /**
     * Callback function that is fired when the hover state changes.
     *
     * @param {object} event The event source of the callback.
     * @param {number} value The new value.
     */
    onChangeHover?: (event: React.MouseEvent, value: number) => void
    /**
     * @ignore
     */
    onMouseLeave?: (event: React.MouseEvent) => void
    /**
     * @ignore
     */
    onMouseMove?: (event: React.MouseEvent) => void
    /**
     * The minimum increment value change allowed.
     */
    precision?: number
    /**
     * Whether or not rating component is interactive
     */
    interactive?: boolean
    /**
     * The size of the rating.
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small'
    /**
     * The rating value.
     */
    value?: number
}

Rating.bdsName = 'Rating'

export { Rating }

export { RatingProps, RatingRef }

export default Rating
