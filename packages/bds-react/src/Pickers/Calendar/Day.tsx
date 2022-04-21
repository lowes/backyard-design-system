/* eslint-disable react/no-unused-prop-types */
import * as React from 'react'
import classNames from 'classnames'

import useForwardedRef from '../../utils/hooks/useForwardedRef'
import { Button, ButtonProps } from '../../Button'

import useAdapter from '../hooks/useAdapter'
import onSpaceOrEnter from '../functions/onSpaceOrEnter'

const FORCE_FINISH_PICKER = true // Symbol('Force closing picker, useful for accessibility')

const areDayPropsEqual = (prevProps, nextProps) => {
    return (
        prevProps.focused === nextProps.focused &&
        prevProps.focusable === nextProps.focusable &&
        prevProps.today === nextProps.today &&
        prevProps.disabled === nextProps.disabled &&
        prevProps.selected === nextProps.selected &&
        prevProps.disableKeyboardControl === nextProps.disableKeyboardControl &&
        prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth &&
        prevProps.disableHighlightToday === nextProps.disableHighlightToday &&
        prevProps.className === nextProps.className &&
        prevProps.onDayFocus === nextProps.onDayFocus &&
        prevProps.onDaySelect === nextProps.onDaySelect
    )
}

type DayRef = HTMLButtonElement

const Day: React.MemoExoticComponent<React.ForwardRefExoticComponent<DayProps>> = React.memo(
    React.forwardRef<DayRef, DayProps>(function Day(
        {
            className,
            day,
            disabled,
            inCurrentMonth: isInCurrentMonth,
            today: isToday,
            selected,
            shape = 'circle',
            focused = false,
            focusable = false,
            onDayFocus,
            onDaySelect,
            onFocus,
            onClick,
            onKeyDown,
            disableKeyboardControl,
            disableHighlightToday = false,
            disableDaysOutsideCurrentMonth = false,
            showDaysOutsideCurrentMonth = true,
            ...props
        },
        ref,
    ) {
        const innerRef = useForwardedRef(ref)
        const adapter = useAdapter()

        React.useEffect(() => {
            if (
                focused &&
                !disabled &&
                isInCurrentMonth &&
                innerRef.current &&
                !disableKeyboardControl
            ) {
                innerRef.current.focus()
            }
        }, [disableKeyboardControl, disabled, focused, isInCurrentMonth])

        const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
            if (!focused) {
                onDayFocus(day, 'keyboard')
            }

            if (onFocus) {
                onFocus(event)
            }
        }

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!disabled) {
                onDaySelect(day, true)
            }

            if (onClick) {
                onClick(event)
            }
        }

        const handleKeyDown = onSpaceOrEnter(() => {
            if (!disabled) {
                onDaySelect(day, FORCE_FINISH_PICKER)
            }
        }, onKeyDown)

        const dayClassName = classNames(
            'day',
            {
                selected,
                disabled,
                // eslint-disable-next-line no-useless-computed-key
                ['today']: !disableHighlightToday && isToday,
                // eslint-disable-next-line no-useless-computed-key
                ['day-outside-month']: !isInCurrentMonth && showDaysOutsideCurrentMonth,
            },
            className,
        )

        if (!isInCurrentMonth && !showDaysOutsideCurrentMonth) {
            // Do not render button and not attach any listeners for empty days
            return <div aria-hidden className={classNames(dayClassName, 'day-hidden')} />
        }

        return (
            <Button
                variant={selected ? 'primary' : 'ghost'}
                color={selected ? 'interactive' : 'neutral' }
                shape={shape}
                size='extra_small'
                disabled={disabled || (disableDaysOutsideCurrentMonth && !isInCurrentMonth)}
                ref={innerRef}
                aria-label={adapter.format(day, 'fullDate')}
                tabIndex={focused || focusable ? 0 : -1}
                className={dayClassName}
                type="button"
                {...props}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                onMouseDown={handleClick}
            >
                {adapter.format(day, 'dayOfMonth')}
            </Button>
        )
    }),
    areDayPropsEqual,
)

interface DayProps extends ButtonProps {
    /**
     * The date to show.
     */
    day: Date
    /**
     * Is focused by keyboard navigation.
     */
    focused?: boolean
    /**
     * Can be focused by tabbing in.
     */
    focusable?: boolean
    /**
     * Is day in current month.
     */
    inCurrentMonth: boolean
    /**
     * Is today?
     */
    today?: boolean
    /**
     * Disabled?.
     */
    disabled?: boolean
    /**
     * Selected?
     */
    selected?: boolean
    /**
     * Is keyboard control and focus management enabled.
     */
    disableKeyboardControl?: boolean
    /**
     * Disables days outside current month
     */
    disableDaysOutsideCurrentMonth?: boolean
    /**
     * Display disabled dates outside the current month.
     * @default false
     */
    showDaysOutsideCurrentMonth?: boolean
    /**
     * Disable highlighting today date with a circle.
     * @default false
     */
    disableHighlightToday?: boolean
    onDayFocus: (day: Date, eventType: 'keyboard' | 'mouse') => void
    onDaySelect: (day: Date, isFinish: boolean | symbol) => void
}

export { Day, DayRef, DayProps }

export default Day
