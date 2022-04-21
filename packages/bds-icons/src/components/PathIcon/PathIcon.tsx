import * as React from 'react'
import classNames from 'classnames'

import useBackyardTheme from '@lowes-tech/bds-react/ThemeProvider/useBackyardTheme'

import type { BackyardBaseProps, BackyardToken } from '../../utils/typings/BackyardProps'

import StyledSVG from './styles'

/**
 * SVG wrapper utility that provides a container for a given icon, svg path.
 * Additionally PathIcon provides some helper props to easily change the color, size, additional classnames
 * and a title for the Icon.
 *
 * ex:
 * ```
 *  <PathIcon
 *      color='interactive'
 *      size='S5'
 *      title='Circle'
 *  >
 *      <circle cx="50" cy="50" r="40" />
 *  </PathIcon>
 * ```
 */
const PathIcon: React.ForwardRefExoticComponent<PathIconProps> = React.forwardRef<
    PathIconRef,
    PathIconProps
>(function PathIcon(
    {
        children,
        color = 'text_solid',
        size = 'size_16',
        viewBox = '0 0 16 16',
        overrideColor = false,
        title,
        className,
        transform,
        style: styleProp,
        ...props
    },
    ref,
) {
    const theme = useBackyardTheme()

    const style = React.useMemo(
        () => ({
            '--style-icon-height': theme?.sizes[size] || size,
            '--style-icon-width': theme?.sizes[size] || size,
            '--style-icon-color': theme?.color[color] || color,
            transform,
            ...styleProp,
        }),
        [theme, transform, styleProp],
    )

    return (
        <StyledSVG
            className={classNames('icon', { 'color-override': overrideColor }, className)}
            viewBox={viewBox}
            aria-hidden={title ? null : true}
            role={title ? 'img' : 'presentation'}
            style={style}
            {...props}
            ref={ref}
        >
            {title ? <title>{title}</title> : null}
            {children}
        </StyledSVG>
    )
})

type PathIconRef = SVGElement

type PathIconOverrideProps = 'size'

interface PathIconProps extends BackyardBaseProps<PathIconRef, PathIconOverrideProps> {
    /**
     * DOM class to be applied directly to the svg.
     */
    className?: string
    /**
     * Sets the fill color of the svg path.
     */
    color?: keyof BackyardToken['color'] | string
    /**
     * Overwrites the default size of the icon.
     * Takes in @lowes-tech/bds-tokens sizing/sizes token.
     */
    size?: keyof BackyardToken['sizes'] | string
    /**
     * Defines the position and dimension, in user space, of an SVG viewport.
     * Should only consist of four numbers: min-x, min-y, width and height separated
     * by whitespace and/or a comma.
     *
     * ex: '0 0 24 24'
     */
    viewBox?: string
    /**
     * Provides a human readable name for the SVG content
     */
    title?: string
    /**
     * Transform override for icon
     * 
     * Shorthand for using `style={{ transform: value }}`
     */
    transform?: React.SVGAttributes<PathIconRef>['transform']
    /**
     * Set true when building custom icons for the bds-icon repo, ie credit card icons, that contains many colors
     * and paths to prevent defaulting the fill for all of the paths to be the same color or overriding a set fill color.
     * NOTE: This attribute is not to be used outside of the bds-icon repo.
     */
    overrideColor?: boolean
}

export { PathIcon }

export type { PathIconProps, PathIconRef }

export default PathIcon
