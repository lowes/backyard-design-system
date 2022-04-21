import * as React from 'react'
import classNames from 'classnames'

import SuccessFilled from '@lowes-tech/bds-icons/SuccessFilled'
import ErrorFilled from '@lowes-tech/bds-icons/ErrorFilled'
import InfoFilled from '@lowes-tech/bds-icons/InfoFilled'
import WarningFilled from '@lowes-tech/bds-icons/WarningFilled'
import type { PathIconProps } from '@lowes-tech/bds-icons/components/PathIcon'

import { useBackyardTheme, getShape } from '../ThemeProvider'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import type { IconButtonProps } from '../IconButton'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import type { LinkProps } from '../Link'
import type { BackyardTheme } from '../ThemeProvider'

import useAlert from './useAlert'
import AlertWrapper from './styles/AlertWrapper'

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
 * Backyard React Alert
 *
 * Component for displaying severity levels of 'success', 'info', 'warning', 'error'
 *
 * The alert is closeable by default
 *
 * To include an action link, define the `action` prop with the text you want
 * The `actionTo` and `onActionClick` are helper props for accessing the link's `href` and `onClick` handler respectively
 * These can be overridden, along with other props, via defining the `actionProps` prop with an object of props
 *
 * The alert is single line by default: the title and subtitles are on the same line
 * To give the subtitle more room, `multiline` flag can be provided to convert the title and subtitle to block display
 *
 *  <Alert
 *      type="info"
 *      title="Note"
 *  >
 *      This is the subtitle of the alert.
 *  </Alert>
 */
const Alert: BDSForwardRef<AlertProps> = React.forwardRef<AlertRef, AlertProps>(function Alert(
    {
        children,
        className,
        closed: closedProp = false,
        closeDelay = 0,
        autoCloseAfter,
        noClose = false,
        title: titleProp,
        subtitle: subtitleProp,
        action,
        actionTo,
        actionLinkProps,
        elevation = true,
        iconProps: iconPropsProp,
        multiline = false,
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
    // Get Backyard Theme
    const theme = useBackyardTheme({
        validate: true,
        name: 'Alert',
    })

    // Get shape context
    const { shape: shapeContext } = theme.context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Hold ref to get event target
    const innerRef = useForwardedRef(ref)

    // Get relevant icon from icon map
    const Icon = Icons[type]

    const { closed, actionLink, closeButton, title, subtitle, style, iconProps } = useAlert({
        component: 'alert',
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

    /**
     * Layout:
     *  <div wrapper>
     *      <span icon />
     *      <span>
     *          <span title />
     *          <span subtitle />
     *      </span>
     *      <span action />
     *      <span close />
     *  </div>
     */
    return !closed ? (
        <AlertWrapper
            className={classNames(
                'alert',
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
            <div className="alert-indicator" />
            <div className="alert-icon">
                <Icon {...iconProps} />
            </div>
            <div className={classNames('alert-body', { multiline })}>
                {title}
                {subtitle}
                <div className="alert-sub-body">{actionLink}</div>
            </div>
            {closeButton}
        </AlertWrapper>
    ) : null
})

type AlertRef = HTMLDivElement

type AlertOverrideProps = 'action' | 'title' | 'size'

type AlertEvent = { target: AlertRef } & (
    | React.MouseEvent<AlertRef>
    | React.KeyboardEvent<AlertRef>
    | {}
)

interface AlertProps extends BackyardBaseProps<AlertRef, AlertOverrideProps> {
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
     * @default false
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
    onClose?: (event: AlertEvent, target: EventTarget) => void
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

Alert.bdsName = 'Alert'

export { Alert }

export type { AlertProps, AlertRef, AlertEvent }

export default Alert
