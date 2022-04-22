import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps, BDSForwardRef, KeyOf } from '../utils/typings'
import { useBackyardTheme, getShape, dropShadow } from '../ThemeProvider'
import type { BackyardTheme } from '../ThemeProvider'

import TooltipWrapper from './styles/TooltipWrapper'

/**
 * Backyard React Tooltip
 *
 * @todo Comments
 */
const Tooltip: BDSForwardRef<TooltipProps> = React.forwardRef<TooltipRef, TooltipProps>(
    function Tooltip(
        {
            arrow = 'top',
            arrowProps,
            children,
            className,
            icon,
            invisible = false,
            shadow = 'shadow_04',
            title,
            variant = 'low_contrast',
            shape: shapeProp, // = 'rounded',
            width = 'auto',
            style,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme
        const theme = useBackyardTheme({
            validate: true,
            name: 'Tooltip',
        })

        // Backyard Context from Theme
        const { shape: shapeContext } = theme.context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // Tooltip CSS vars
        const tooltipCSSVars = React.useMemo(
            () => ({
                // Tooltip drop shadow
                '--style-tooltip-drop-shadow': dropShadow(theme.shadows[shadow]),
                // Tooltip width
                '--style-tooltip-width': theme.sizes[width] || width,
                // Tooltip font family
                '--style-tooltip-font-family': theme.font.family[theme.context.font],
                // Tooltip font weight
                '--style-tooltip-font-weight':
                    theme.context.font === 'roboto'
                        ? theme.font.weight.medium
                        : theme.font.weight.semibold,
            }),
            [theme.name, width, shadow],
        )

        /**
         * Layout:
         *  <div wrapper>
         *      <span icon />
         *      <span>
         *          <div title />
         *          <div subtitle />
         *      </span>
         *  </div>
         */
        return (
            <TooltipWrapper
                className={classNames(
                    'tooltip',
                    `variant--${variant}`,
                    `shape--${shape}`,
                    {
                        invisible,
                    },
                    className,
                )}
                style={{
                    ...tooltipCSSVars,
                    ...style,
                }}
                {...props}
                ref={ref}
            >
                <span className="tooltip-body">
                    <div className="tooltip-title">
                        {icon ? <span className="tooltip-icon">{icon}</span> : null}
                        {title}
                    </div>
                    <div className="tooltip-subtitle">{children}</div>
                </span>
                <div className="tooltip-background">
                    {arrow !== 'none' ? (
                        <span
                            className={classNames('tooltip-arrow', `placement--${arrow}`)}
                            {...arrowProps}
                        />
                    ) : null}
                </div>
            </TooltipWrapper>
        )
    },
)

type TooltipRef = HTMLDivElement

interface TooltipProps extends BackyardBaseProps<TooltipRef> {
    /**
     * Position of arrow from the center of the tooltip
     * Note: This is opposite of `TooltipPopper`'s `placement` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *    [Tooltip]
     */
    arrow?:
        | 'none'
        | 'top-start'
        | 'top'
        | 'top-end'
        | 'left'
        | 'right'
        | 'bottom-start'
        | 'bottom'
        | 'bottom-end'
    /**
     * Arrow Props to extend arrow with
     */
    arrowProps?: BackyardBaseProps<HTMLSpanElement>
    /**
     * Children of subtitle span
     */
    children?: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Leading icon of tooltip
     */
    icon?: React.ReactElement
    /**
     * Whether or not tooltip is invisible
     */
    invisible?: boolean
    /**
     * Shadow token to use, or none
     *
     * @default 'shadow_04'
     */
    shadow?: 'none' | KeyOf<BackyardTheme['shadows']> | 'string'
    /**
     * Title text of Tooltip
     */
    title?: string
    /**
     * Variant of Tooltip
     */
    variant?: 'low_contrast' | 'high_contrast'
    /**
     * Shape of the tooltip
     */
    shape?: 'rounded' | 'squared'
    /**
     * Width of Tooltip
     * Defaults to auto
     * Limited by a maximum width of 320px (Desktop) and 256px (Mobile)
     */
    width?: string
}

Tooltip.bdsName = 'Tooltip'

export { Tooltip }

export type { TooltipProps, TooltipRef }

export default Tooltip
