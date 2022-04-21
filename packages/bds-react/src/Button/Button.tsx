import * as React from 'react'
import classnames from 'classnames'

import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import ButtonBase from './styles/ButtonBase'
import { useForwardedRef } from '../utils/hooks'

/**
 * Backyard React Button
 *
 * Button for interacting via text.
 *
 * For Icon only buttons, see `IconButton` instead.
 *
 *  <Button
 *      variant='primary'
 *      color='commerce'
 *      iconAfter={<ChevronRight />}
 *  >
 *      Checkout
 *  </Button>
 */
const Button: BDSForwardRef<ButtonProps> = React.forwardRef<ButtonRef, ButtonProps>(function Button(
    {
        children,
        className,
        variant = 'primary',
        iconAfter: iconAfterProp,
        iconBefore: iconBeforeProp,
        shape: shapeProp, // = 'rounded',
        color = 'interactive',
        disabled = false,
        size = 'medium',
        fullWidth = false,
        elevation = false,
        style,
        type = 'button',
        onClick,
        onKeyDown,
        onFocus,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()
    const { shape: shapeContext } = theme.context

    const innerRef = useForwardedRef(ref)

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext) as ButtonProps['shape']

    // If `iconBefore` defined, insert into <span>
    const iconBefore = iconBeforeProp && <span className='btn-start-icon'>{iconBeforeProp}</span>
    // If `iconAfter` defined, insert into <span>
    const iconAfter = iconAfterProp && <span className='btn-end-icon'>{iconAfterProp}</span>

    /**
     * Handles `onFocus` event of button
     * Triggers defined `onFocus` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleFocus = (event) => {
        // Persist event propagation
        persistSyntheticEvent(event)

        // If not disabled,
        if (!disabled) {
            // If `onFocus` prop defined,
            if (onFocus) {
                // Trigger `onFocus` prop function
                onFocus(event)
            }
        }
    }

    /**
     * Handles `onClick` event of button
     * Triggers defined `onClick` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleClick = (event) => {
        // Persist event propagation
        persistSyntheticEvent(event)

        // If not disabled,
        if (!disabled) {
            // If `onClick` prop defined,
            if (onClick) {
                // Trigger `onClick` prop function
                onClick(event)
            }
        }
    }

    /**
     * Handles `onKeyDown` event of button
     * Triggers defined `onKeyDown` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleKeyDown = (event) => {
        // Persist event propagation
        persistSyntheticEvent(event)

        if (!disabled) {
            // If `onKeyDown` prop defined,
            if (onKeyDown) {
                // Trigger `onKeyDown` prop function
                onKeyDown(event)
            }
        }
    }

    const createVariantStyles = (variant: string, color: string) => {
        switch(variant) {
            case 'secondary':
            case 'tertiary':
            case 'ghost':
            case 'inverse':
                return {
                    '--btn-base': (color === 'neutral') ? theme.color.border_default : theme.color[`action_${color}`],
                    '--btn-base-subdued': (variant === 'inverse') ? theme.color.surface_default : theme.color[`action_${color}_subdued`],
                    '--btn-hover': theme.color[`action_${color}_subdued_hover`],
                    '--btn-pressed': theme.color[`action_${color}_subdued_pressed`],
                    '--btn-focus': (color === 'neutral') ? theme.color.border_default : theme.color[`action_${color}`],
                    '--btn-text': (color === 'neutral') ? theme.color.text_primary : theme.color[`text_${color}`],
                    '--btn-icon': (color === 'neutral') ? theme.color.icon_primary : theme.color[`icon_${color}`],
                    '--btn-disabled': theme.color.text_disabled,
                    '--btn-disabled-subdued': theme.color.surface_subdued
                }

            default:
                return {
                    '--btn-base': theme.color[`action_${color}`],
                    '--btn-hover': theme.color[`action_${color}_hover`],
                    '--btn-pressed': theme.color[`action_${color}_pressed`],
                    '--btn-focus': (color === 'neutral') ? theme.color.border_default : theme.color.focus_inverse,
                    '--btn-text': (color === 'neutral') ? theme.color.text_primary : theme.color.text_solid_inverse,
                    '--btn-icon': (color === 'neutral') ? theme.color.icon_primary : theme.color.icon_solid_inverse,
                    '--btn-disabled': theme.color.text_disabled,
                    '--btn-onDisabled': theme.color.text_disabled_inverse
                }
        }
    }

    // Side effect for when button changes disabled state,
    React.useEffect(() => {
        // If button is disabled,
        if (disabled) {
            // Blur button from focus
            innerRef.current?.blur()
        }
    }, [disabled])

    /**
     * Layout:
     *
     *  <ButtonBase>
     *      <span>
     *          <icon (start) />
     *          ...
     *          <icon (end) />
     *      </span>
     *  </ButtonBase>
     */
    return (
        <ButtonBase
            className={classnames(
                'backyard',
                'button',
                `size--${size}`,
                `variant--${variant}`,
                `color--${color}`,
                `shape--${shape}`,
                fullWidth ? 'full-width' : null,
                (elevation && (variant === 'primary' || variant === 'tertiary' || variant === 'inverse')) ?
                    'elevation' : '',
                className,
                {
                    disabled,
                },
            )}
            variant={variant}
            disabled={disabled}
            color={color}
            size={size}
            ref={innerRef}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            type={type}
            style={{
                ...createVariantStyles(variant, color),
                ...style,
            }}
            {...props}
        >
            <span className='label btn-label'>
                {iconBefore}
                {children}
                {iconAfter}
            </span>
        </ButtonBase>
    )
})

type ButtonRef = HTMLButtonElement

type ButtonOverrideProps = 'size' | 'color'

interface ButtonProps extends BackyardBaseProps<ButtonRef, ButtonOverrideProps> {
    /**
     * React Children
     */
    children?: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Variant of button
     * - Primary -> (Default) Solid Button w/ Background w/o Borders
     * - Secondary -> Outlined Button w/o Background w/ Borders
     * - Ghost -> No Background, No Borders
     */
    variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'inverse'
    /**
     * Icon Node to display on right-side of button text
     *
     * Note: Do not use for an icon-only button, use `IconButton` for that
     */
    iconAfter?: React.ReactNode
    /**
     * Icon Node to display on left-side of button text
     *
     * Note: Do not use for an icon-only button, use `IconButton` for that
     */
    iconBefore?: React.ReactNode
    /**
     * Type of button
     * - Interactive -> (Default) Lowe's Primary Color Palette
     * - Commerce -> Lowe's Commerce Color Palette
     * - Contrast -> High Contrast Black/White Color Palette
     */
    color?: 'interactive' | 'green' | 'red' | 'neutral'
    /**
     * Shape of button
     * - Rounded -> Medium Border Radius
     * - Squared -> (Default) Zero Border Radius
     * - Circle -> Maximum Border Radius (FAB Button)
     */
    shape?: 'rounded' | 'squared' | 'circle' | 'custom'
    /**
     * Whether or not button is disabled
     */
    disabled?: boolean
    /**
     * Size of Button
     * - Small -> Small Height/Spacing Button
     * - Medium -> (Default) Medium Height/Spacing Button
     * - Large -> Large Height/Spacing Button
     */
    size?: 'small' | 'medium' | 'large' | 'jumbo' | 'full-width' | 'extra_small'
    /**
     *
     */
    type?: 'button' | 'submit' | 'reset'
    /**
     * Makes button 100% the width of the container
     */
    fullWidth?: boolean
    /**
     * Adds elevation to the button
     */
    elevation?: boolean
    /**
     * `onClick` trigger function
     * @argument {Event} event - DOM event
     */
    onClick?: (event: React.MouseEvent) => void
    /**
     * `onKeyDown` trigger function
     * @argument {Event} event - DOM event
     */
    onKeyDown?: (event: React.KeyboardEvent) => void
    /**
     * `onFocus` trigger function
     * @argument {Event} event - DOM event
     */
    onFocus?: (event: React.FocusEvent) => void
}

Button.bdsName = 'Button'

export { Button }

export type { ButtonProps, ButtonRef }

export default Button
