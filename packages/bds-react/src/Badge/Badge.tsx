import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import BadgeWrapper from './styles/BadgeWrapper'

/**
 * Backyard React Badge
 *
 * Simple text component with uppercased text and large letter spacing
 *
 * The `display` prop can be used to change the CSS display of the wrapper
 * This is useful for changing from an `inline-flex` to a blocking `flex` if needed
 *
 *  <Badge>
 *      Placeholder
 *  </Badge>
 */
const Badge: BDSForwardRef<BadgeProps> = React.forwardRef<BadgeRef, BadgeProps>(function Badge(
    {
        children,
        className,
        color = 'dark-blue',
        variant = 'filled',
        size = 'medium',
        bold = false,
        arrow = 'none',
        ...props
    },
    ref,
) {
    // Get Backyard Theme
    const theme = useBackyardTheme()

    // Validate theme
    validateBackyardTheme(theme, 'Badge')

    /**
     * Layout:
     *  <span wrapper>
     *      {children}
     *  </span>
     */
    return (
        <BadgeWrapper
            className={classNames(
                'badge',
                className
            )}
            arrow={arrow}
            ref={ref}
            {...props}
        >
            <span 
                className={classNames(
                    'badge-label',
                    `variant--${variant}`,
                    `size--${size}`,
                    `color--${color}`,
                    `arrow--${arrow}`,
                    (bold) ? 'bold' : '',
                )}
            >
                { children }
            </span>

            {
                (arrow !== 'none' && variant === 'filled') ?
                    <span className={classNames(
                        'arrow',
                        `size--${size}`
                    )} /> : null
            }
        </BadgeWrapper>
    )
})

type BadgeRef = HTMLSpanElement

type BadgeOverrideProps = 'color' | 'size'

interface BadgeProps extends BackyardBaseProps<BadgeRef, BadgeOverrideProps> {
    /**
     * The badge text.
     */
    children: string
    /**
     * DOM Class Name for pill
     */
    className?: string
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: 'dark-blue' | 'blue' | 'light-blue' | 'interactive' | 'green' | 'red' | 'gold' | 'lfp-yellow' | 'neutral'
    /**
     * Variant of badge
     */
    variant?: 'filled' | 'outlined'
    /**
     * If the text should be bold
     */
    bold?: boolean
    /**
     * If the text should be bold
     */
    size?: 'medium' | 'jumbo'
    /**
     * Arrow beak on right or left
     */
     arrow?: 'none' | 'left' | 'right'
}

Badge.bdsName = 'Badge'

export { Badge }

export type { BadgeProps, BadgeRef }

export default Badge
