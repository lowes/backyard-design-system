import * as React from 'react'
import classNames from 'classnames'

import Close from '@lowes-tech/bds-icons/Close'
import type { PathIconProps } from '@lowes-tech/bds-icons/components/PathIcon'

import Link from '../Link'
import IconButton from '../IconButton'
import { useBackyardTheme } from '../ThemeProvider'

import type { AlertProps, AlertRef, AlertEvent } from './Alert'

const useAlert = ({
    component = 'alert',
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
}) => {
    const theme = useBackyardTheme()

    // State of whether or not <Alert> is closed
    const [closed, setClosed] = React.useState(closedProp)

    /**
     * Force event.target to `innerRef`, the text `input`
     *
     * @param {Event} event - DOM Event
     */
    function getEvent<E>(event: any): E {
        return event
    }

    /**
     * Handles `onClick` event of the close icon
     * Triggers defined `onClose` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleClose = (event: AlertEvent) => {
        // If not closed,
        if (!closed) {
            // If `onClose` prop defined,
            if (onClose) {
                // Trigger `onClose` prop function
                onClose(getEvent<AlertEvent>(event), event.target)
            }

            // Close alert after delay
            if (closeDelay) {
                setTimeout(() => setClosed(true), closeDelay)
            } else {
                setClosed(true)
            }
        }
    }

    /**
     * Handles `onClick` event of action link
     * Triggers defined `onActionClick` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleActionClick = (event: React.MouseEvent<AlertRef>) => {
        // If not closed,
        if (!closed) {
            // If `onActionClick` prop defined,
            if (onActionClick) {
                // Trigger `onActionClick` prop function
                onActionClick(getEvent<React.MouseEvent>(event), event.target)
            }
        }
    }

    /**
     * Handles `onKeyDown` event of `input`
     * Triggers defined `onKeyDown` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleCloseKeyDown = (event: React.KeyboardEvent<AlertRef>) => {
        // If not closed,
        if (!closed) {
            // Get key from event
            const { key } = event

            // If space or enter key pressed,
            if (['Enter'].includes(key)) {
                // Prevent default
                event.preventDefault()

                // Close
                handleClose(getEvent<AlertEvent>(event))
            }
        }
    }

    // Side effect for when component mounts...
    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
        // If auto close after defined and set to a time,
        if (autoCloseAfter > 0) {
            // Set auto close timeout...
            const autoClose = setTimeout(() => {
                // Handle close
                handleClose({
                    target: innerRef.current,
                })
            }, autoCloseAfter)

            // When component unmounts...
            return () => {
                // If auto close timeout defined,
                if (autoClose) {
                    // Clear timeout
                    clearTimeout(autoClose)
                }
            }
        }
    }, [])

    // Side effect for when closedProp changes externally...
    React.useEffect(() => {
        // If closedProp is true and not closed,
        if (closedProp && !closed) {
            // Handle close
            handleClose({
                target: innerRef.current,
            })
        }

        // If closedProp is false and is closed,
        if (!closedProp && closed) {
            // Set not closed
            setClosed(false)
        }
    }, [closedProp])

    // If action defined, include link
    const actionLink = React.useMemo(
        () =>
            action ? (
                <div className={`${component}-action`}>
                    <Link
                        underline={component === 'toast' ? 'never' : 'always'}
                        to={actionTo}
                        size="medium"
                        onClick={handleActionClick}
                        {...actionLinkProps}
                    >
                        {action}
                    </Link>
                </div>
            ) : null,
        [action, actionTo, actionLinkProps],
    )

    // If noClose is not true, include close
    const closeButton = React.useMemo(
        () =>
            !noClose ? (
                <div className={`${component}-close`}>
                    <IconButton
                        variant="ghost"
                        color="neutral"
                        size={size === 'jumbo' ? 'medium' : 'small'}
                        aria-label={`Close ${component}`}
                        {...closeButtonProps}
                        className={classNames('close-button', closeButtonProps?.className)}
                        onClick={(event) => {
                            handleClose(getEvent(event))

                            if (closeButtonProps?.onClick) {
                                closeButtonProps.onClick(getEvent(event))
                            }
                        }}
                        onKeyDown={(event) => {
                            handleCloseKeyDown(getEvent(event))

                            if (closeButtonProps?.onKeyDown) {
                                closeButtonProps.onKeyDown(getEvent(event))
                            }
                        }}
                    >
                        <Close />
                    </IconButton>
                </div>
            ) : null,
        [noClose, size, closeButtonProps],
    )

    // Memoize title render
    const title = React.useMemo(
        () => (titleProp ? <div className={`${component}-title`}>{titleProp}</div> : null),
        [titleProp],
    )

    // Memoize subtitle render
    const subtitle = React.useMemo(
        () =>
            // Subtitle defined by either `children` or `subtitle` prop
            children || subtitleProp ? (
                <div className={`${component}-subtitle`}>{children || subtitleProp}</div>
            ) : null,
        [children, subtitleProp],
    )

    // Memoize colors
    const colors = React.useMemo(
        () =>
            ({
                info: {
                    surface: 'var(--bds-color-surface-blue)',
                    surface_subdued: 'var(--bds-color-surface-blue-subdued)',
                },
                warning: {
                    surface: 'var(--bds-color-surface-gold)',
                    surface_subdued: 'var(--bds-color-surface-gold-subdued)',
                },
                success: {
                    surface: 'var(--bds-color-surface-green)',
                    surface_subdued: 'var(--bds-color-surface-green-subdued)',
                },
                error: {
                    surface: 'var(--bds-color-surface-red)',
                    surface_subdued: 'var(--bds-color-surface-red-subdued)',
                },
            }[type]),
        [type],
    )

    // Memoize sizes
    const sizes = React.useMemo(
        () =>
            ({
                standard: {
                    // Height of the alert
                    height: multiline ? 'auto' : 'var(--bds-sizes-size-56)',
                    // Size of the icon
                    icon: 'size_24',
                },
                medium: {
                    // Height of the alert
                    height: multiline ? 'auto' : 'var(--bds-sizes-size-56)',
                    // Size of the icon
                    icon: 'size_24',
                },
                jumbo: {
                    // Height of the alert
                    height: multiline ? 'auto' : 'var(--bds-sizes-size-64)',
                    // Size of the icon
                    icon: 'size_32',
                },
            }[size]),
        [size, multiline],
    )

    // Memoize style cssvars
    const style = React.useMemo(
        () => ({
            // Fonts
            '--style-alert-font-family': theme.font.family[theme.context.font],
            '--style-alert-title-font-weight':
                theme.context.font === 'roboto'
                    ? 'var(--bds-font-weight-medium)'
                    : 'var(--bds-font-weight-semibold)',
            // Colors
            '--style-alert-color-icon': colors.surface,
            '--style-alert-color-indicator': colors.surface,
            '--style-alert-color-background': colors.surface_subdued,
            // Misc.
            '--style-alert-multiline-display': multiline ? 'block' : 'inline-block',
            '--style-alert-width': theme.sizes[width] || width || 'auto',
            '--style-alert-height': theme.sizes[height] || height || sizes.height,
            '--style-alert-elevation': elevation
                ? // If elevation is true,
                  elevation === true
                    ? // Use default elevation
                      'var(--bds-shadows-shadow-03)'
                    : // Else, use defined elevation
                      theme.shadows[elevation] || elevation
                : 'none',
            ...styleProp,
        }),
        [styleProp, theme, colors, multiline, elevation],
    )

    // Memoize icon props
    const iconProps = React.useMemo<React.PropsWithoutRef<PathIconProps>>(
        () => ({
            size: sizes.icon,
            ...iconPropsProp,
        }),
        [sizes, iconPropsProp],
    )

    return {
        getEvent,
        handleClose,
        handleActionClick,
        handleCloseKeyDown,
        actionLink,
        closeButton,
        title,
        subtitle,
        colors,
        sizes,
        style,
        iconProps,
        closed,
    }
}

interface UseAlertProps {
    component: 'alert' | 'toast'
    innerRef: React.MutableRefObject<AlertRef>
    onClose: AlertProps['onClose']
    closeDelay: AlertProps['closeDelay']
    onActionClick: AlertProps['onActionClick']
    autoCloseAfter: AlertProps['autoCloseAfter']
    closed: AlertProps['closed']
    action: AlertProps['action']
    actionTo: AlertProps['actionTo']
    actionLinkProps: AlertProps['actionLinkProps']
    noClose: AlertProps['noClose']
    size: AlertProps['size']
    closeButtonProps: AlertProps['closeButtonProps']
    title: AlertProps['title']
    children: AlertProps['children']
    subtitle: AlertProps['subtitle']
    type: AlertProps['type']
    multiline: AlertProps['multiline']
    width: AlertProps['width']
    elevation: AlertProps['elevation']
    height: AlertProps['height']
    style: AlertProps['style']
    iconProps: AlertProps['iconProps']
}

export { useAlert }

export type { UseAlertProps }

export default useAlert
