import * as React from 'react'
import classNames from 'classnames'

import SuccessFilled from '@lowes-tech/bds-icons/SuccessFilled'
import ErrorFilled from '@lowes-tech/bds-icons/ErrorFilled'
import InfoFilled from '@lowes-tech/bds-icons/InfoFilled'
import WarningFilled from '@lowes-tech/bds-icons/WarningFilled'
import type { PathIconProps } from '@lowes-tech/bds-icons/components/PathIcon'

import useAlert from '../Alert/useAlert'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import type { IconButtonProps } from '../IconButton'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import type { LinkProps } from '../Link'
import type { BackyardTheme } from '../ThemeProvider'

import ToastWrapper from './styles/ToastWrapper'

/**
 * Map of icons
 */
const Icons = {
    info: (props) => <InfoFilled {...props} />,
    error: (props) => <ErrorFilled {...props} />,
    success: (props) => <SuccessFilled {...props} />,
    warning: (props) => <WarningFilled {...props} />,
}

/**
 * Backyard React Toast
 *
 * Component for displaying severity levels of 'success', 'info', 'warning', 'error' with a timestamp
 *
 * This component is similar to `Alert`
 *
 * The toast is closeable by default
 *
 * By default, a local timestamp is created when the toast is created
 * An external pre-computed timestamp and text can be supplied via `timestamp` prop
 * An external pre-computed JS Date can be given via `date` prop as well
 *
 * The toast is always multiline
 *
 *  <Toast
 *      type="info"
 *      title="Note"
 *  >
 *      This is the subtitle of the toast.
 *  </Toast>
 */
const Toast: BDSForwardRef<ToastProps> = React.forwardRef<ToastRef, ToastProps>(function Toast(
    {
        children,
        className,
        closed: closedProp = false,
        closeDelay = 0,
        autoCloseAfter,
        noClose = false,
        noTimestamp = false,
        date: dateProp,
        timestamp: timestampProp = 'Just Now',
        title: titleProp,
        subtitle: subtitleProp,
        action,
        actionTo,
        actionLinkProps,
        elevation = true,
        multiline = true,
        iconProps: iconPropsProp,
        size = 'standard',
        type = 'info',
        shape: shapeProp, // = 'rounded',
        onClose,
        onActionClick,
        style: styleProp,
        closeButtonProps,
        width,
        height,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Toast',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Hold ref to get event target
    const innerRef = useForwardedRef(ref)

    // Current date
    // Maintains current date even when other states change, like the theme
    const date = React.useMemo(() => dateProp || new Date(), [dateProp])

    // Get relevant icon from icon map
    const Icon = Icons[type]

    // Create local timestamp
    const timestamp = React.useMemo(() => {
        if (dateProp) {
            const hours = `${date.getHours()}`.padStart(2, '0')
            const minutes = `${date.getMinutes()}`.padStart(2, '0')
            const seconds = `${date.getSeconds()}`.padStart(2, '0')

            return `${hours}:${minutes}:${seconds}`
        }

        return timestampProp
    }, [dateProp, timestampProp])

    const { closed, actionLink, closeButton, title, subtitle, style, iconProps } = useAlert({
        component: 'toast',
        innerRef,
        onClose,
        closeDelay,
        onActionClick,
        autoCloseAfter,
        closed: closedProp,
        action,
        actionTo,
        actionLinkProps,
        noClose,
        size,
        closeButtonProps,
        title: titleProp,
        children,
        subtitle: subtitleProp,
        type,
        multiline,
        width,
        elevation,
        height,
        style: styleProp,
        iconProps: iconPropsProp,
    })

    // Memoize timestamp render
    const timestampText = React.useMemo(
        () =>
            !noTimestamp && timestamp ? <div className="toast-timestamp">{timestamp}</div> : null,
        [noTimestamp, timestamp],
    )

    /**
     * Layout:
     *  <div wrapper>
     *      <span icon />
     *      <span>
     *          <div title />
     *          <div subtitle />
     *          <div timestamp />
     *      </span>
     *      <span close />
     *  </div>
     */
    return !closed ? (
        <ToastWrapper
            className={classNames(
                'toast',
                `type--${type}`,
                `size--${size}`,
                `shape--${shape}`,
                { multiline },
                className,
            )}
            multiline={multiline}
            style={style}
            {...props}
            ref={innerRef}
        >
            <div className="toast-icon">
                <Icon {...iconProps} />
            </div>
            <div className={classNames('toast-body', { multiline })}>
                {title}
                {subtitle}
                <div className="toast-sub-body">
                    {timestampText}
                    {actionLink}
                </div>
            </div>
            {closeButton}
        </ToastWrapper>
    ) : null
})

type ToastRef = HTMLDivElement

type ToastEvent = { target: ToastRef } & (
    | React.MouseEvent<ToastRef>
    | React.KeyboardEvent<ToastRef>
    | {}
)

type ToastOverrideProps = 'action' | 'title' | 'size'

interface ToastProps extends BackyardBaseProps<ToastRef, ToastOverrideProps> {
    /**
     * Children of subtitle span
     */
    children?: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Close `IconButton` prop overrides
     */
    closeButtonProps?: IconButtonProps
    /**
     * Whether or not alert is closed by default
     */
    closed?: boolean
    /**
     * Milliseconds of delay until deletion from DOM after close clicked
     *
     * Useful for allowing animations to play before removal
     */
    closeDelay?: number
    /**
     * Milliseconds to auto close in, if defined
     */
    autoCloseAfter?: number
    /**
     * Whether or not close is present
     */
    noClose?: boolean
    /**
     * Date helper to override timestamp with
     */
    date?: Date
    /**
     * Timestamp string
     *
     * @default 'Just Now'
     */
    timestamp?: string
    /**
     * Whether or not to display timestamp
     *
     * @default false
     */
    noTimestamp?: boolean
    /**
     * Icon props to override with
     */
    iconProps?: PathIconProps
    /**
     * Title text of alert
     */
    title?: React.ReactNode
    /**
     * Subtitle text of alert
     *
     * Alternative to using `children`
     */
    subtitle?: React.ReactNode
    /**
     * Action text of alert, if defined
     */
    action?: React.ReactNode
    /**
     * `to` helper prop of action `Link`
     */
    actionTo?: string
    /**
     * Exposes props of `Link` action
     *
     * Useful if you need more customizability than the helper props `actionTo` and `onActionClick`
     */
    actionLinkProps?: LinkProps
    /**
     * Whether or not to make the title and subtitle on separate lines
     * @default true
     */
    multiline?: boolean
    /**
     * Elevations to assign to alert
     * @default 'true'
     */
    elevation?: boolean | keyof BackyardTheme['shadows']
    /**
     * Type of Alert
     */
    type?: 'info' | 'error' | 'success' | 'warning'
    /**
     * Size of alert
     */
    size?: 'standard' | 'medium' | 'jumbo'
    /**
     * Outer shape of the component.
     */
    shape?: 'rounded' | 'squared'
    /**
     * Width of the alert.
     */
    height?: keyof BackyardTheme['sizes'] | string
    /**
     * Width of the alert.
     */
    width?: keyof BackyardTheme['sizes'] | string
    /**
     * `onClose` trigger function
     *
     * Helper prop for `onClick` handler on close
     *
     * @argument {Event} event - DOM event
     */
    onClose?: (event: ToastEvent, target: EventTarget) => void
    /**
     * `onActionClick` trigger function
     *
     * Helper prop for `onClick` handler on `Link`
     * Can be overridden from `actionProps`
     *
     * @argument {Event} event - DOM event
     */
    onActionClick?: (event: React.MouseEvent, target: EventTarget) => void
}

Toast.bdsName = 'Toast'

export { Toast }

export type { ToastProps, ToastRef, ToastEvent }

export default Toast
