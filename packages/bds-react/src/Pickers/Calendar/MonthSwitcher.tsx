import * as React from 'react'
import classNames from 'classnames'

import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'

import Typography from '../../Typography'
import IconButton from '../../IconButton'
import type { IconButtonProps } from '../../IconButton'

type MonthSwitcherRef = HTMLDivElement

interface ExportedMonthSwitcherProps {
    /**
     * Left arrow icon
     */
    leftArrowIcon?: React.ReactNode
    /**
     * Right arrow icon
     */
    rightArrowIcon?: React.ReactNode
    /**
     * Left arrow icon aria-label text
     */
    leftArrowButtonText?: string
    /**
     * Right arrow icon aria-label text
     */
    rightArrowButtonText?: string
    /**
     * Props to pass to left arrow button
     * @type {Partial<IconButtonProps>}
     */
    leftArrowButtonProps?: React.PropsWithRef<IconButtonProps>
    /**
     * Props to pass to right arrow button
     * @type {Partial<IconButtonProps>}
     */
    rightArrowButtonProps?: React.PropsWithRef<IconButtonProps>
}

interface MonthSwitcherProps
    extends ExportedMonthSwitcherProps,
        BackyardBaseProps<MonthSwitcherRef> {
    isLeftDisabled: boolean
    isLeftHidden?: boolean
    isRightDisabled: boolean
    isRightHidden?: boolean
    onLeftClick: () => void
    onRightClick: () => void
    text?: string
    disableKeyboardControl?: boolean
    shape?: 'rounded' | 'squared'
}

const MonthSwitcher: React.ForwardRefExoticComponent<MonthSwitcherProps> = React.forwardRef<
    MonthSwitcherRef,
    MonthSwitcherProps
>(function MonthSwitcher(
    {
        className,
        isLeftDisabled,
        isLeftHidden,
        isRightDisabled,
        isRightHidden,
        leftArrowButtonProps,
        leftArrowButtonText,
        leftArrowIcon = <ChevronLeft />,
        onLeftClick,
        onRightClick,
        rightArrowButtonProps,
        rightArrowButtonText,
        rightArrowIcon = <ChevronRight />,
        text,
        shape,
        disableKeyboardControl = false,
        ...props
    },
    ref,
) {
    return (
        <div className={classNames('month-switcher', className)} {...props} ref={ref}>
            <IconButton
                variant="ghost"
                color="neutral"
                size="small"
                aria-label={leftArrowButtonText}
                shape={shape}
                {...leftArrowButtonProps}
                disabled={isLeftDisabled}
                onClick={onLeftClick}
                className={classNames(leftArrowButtonProps?.className, {
                    hidden: Boolean(isLeftHidden),
                    previousMonthButtonMargin: !text,
                })}
                tabIndex={disableKeyboardControl ? -1 : 0}
            >
                {leftArrowIcon}
            </IconButton>
            {text && (
                <Typography variant="body_1" display="inline">
                    {text}
                </Typography>
            )}
            <IconButton
                variant="ghost"
                color="neutral"
                size="small"
                aria-label={rightArrowButtonText}
                shape={shape}
                {...rightArrowButtonProps}
                disabled={isRightDisabled}
                onClick={onRightClick}
                className={classNames(rightArrowButtonProps?.className, {
                    hidden: Boolean(isRightHidden),
                })}
                tabIndex={disableKeyboardControl ? -1 : 0}
            >
                {rightArrowIcon}
            </IconButton>
        </div>
    )
})

export { MonthSwitcher }

export type { MonthSwitcherProps, MonthSwitcherRef, ExportedMonthSwitcherProps }

export default MonthSwitcher
