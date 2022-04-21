import * as React from 'react'
import classnames from 'classnames'

import type { ButtonProps } from '../Button'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import IconButtonBase from './styles/IconButtonBase'

/**
 * Backyard React Icon Button
 *
 * Used for display Icon-only buttons with proper squared spacing and size.
 * Utilizes `ButtonBase` found in `Button` styles for styling.
 */
const IconButton: BDSForwardRef<IconButtonProps> = React.forwardRef<IconButtonRef, IconButtonProps>(
    function IconButton(
        {
            children,
            className,
            variant = 'primary',
            shape: shapeProp, // = 'rounded',
            color = 'interactive',
            disabled = false,
            size = 'medium',
            ariaTitle = 'title',
            type = 'button',
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'IconButton',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        /**
         * Layout:
         *
         *  <IconButtonBase>
         *      ...
         *  </IconButtonBase>
         */
        return (
            <IconButtonBase
                className={classnames('icon-button', className)}
                variant={variant}
                color={color}
                shape={shape}
                disabled={disabled}
                size={size}
                aria-label={ariaTitle}
                type={type}
                {...props}
                ref={ref}
            >
                {children}
            </IconButtonBase>
        )
    },
)

type IconButtonRef = HTMLButtonElement

interface IconButtonProps extends ButtonProps {
    /** See `ButtonProps` */
    ariaTitle?: string
}

IconButton.bdsName = 'IconButton'

export { IconButton }

export type { IconButtonRef, IconButtonProps }

export default IconButton
