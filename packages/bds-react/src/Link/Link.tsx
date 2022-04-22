import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import LinkBase from './styles/LinkBase'

/**
 * Map of colors
 */
const colors = {
    interactive: 'text_interactive',
    primary: 'text_solid',
    inverse: 'text_solid_inverse',
}

/**
 * Maps color to token if available
 *
 * @param {string} color
 */
const mapColor = (color: LinkProps['color']): string => (colors[color] ? colors[color] : color)

/**
 * Backyard React Link
 *
 * Link for interacting via html links
 *
 * If you want a button, see the `ghost` variant of the Button component
 *
 *  <Link
 *      to="https://lowes.com"
 *      type="commerce"
 *      iconAfter={<Bookmark />}
 *  >
 *      Bookmark
 *  </Link>
 */
const Link: BDSForwardRef<LinkProps> = React.forwardRef<LinkRef, LinkProps>(function Link(
    {
        bold,
        children,
        className,
        color = 'interactive',
        href,
        iconAfter: iconAfterProp,
        iconBefore: iconBeforeProp,
        size = 'medium',
        to: toProp,
        underline: underlineProp = 'hover',
        onClick,
        onKeyDown,
        style,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const theme = useBackyardTheme()

    validateBackyardTheme(theme, 'Link')

    // If `iconBefore` defined, insert into <span>
    const iconBefore = iconBeforeProp && <span className="link-start-icon">{iconBeforeProp}</span>
    // If `iconAfter` defined, insert into <span>
    const iconAfter = iconAfterProp && <span className="link-end-icon">{iconAfterProp}</span>

    // Use `to` prop before using `href` prop
    const to = toProp || href

    // Convert link's role into 'button' if no `to` is defined
    const linkProps = !to
        ? {
              role: 'button',
              tabIndex: '0',
          }
        : {
              href: to,
          }

    // Auto-clamp underline when color is 'link'
    const underline = underlineProp

    /**
     * Handles `onClick` event of <a>
     * Triggers defined `onClick` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleClick = (event) => {
        // If `onClick` prop defined,
        if (onClick) {
            // Trigger `onClick` prop function
            onClick(event)
        }
    }

    /**
     * Handles `onKeyDown` event of <a>
     * Triggers defined `onKeyDown` from props if available
     *
     * @param {Event} event - DOM event
     */
    const handleKeyDown = (event) => {
        // Get key from event
        const { key } = event

        // If space or enter key pressed,
        if ([' ', 'Enter'].indexOf(key) !== -1) {
            // Handle click event
            handleClick(event)
        }

        // If `onKeyDown` prop defined,
        if (onKeyDown) {
            // Trigger `onKeyDown` prop function
            onKeyDown(event)
        }
    }

    const styles = React.useMemo(
        () => ({
            '--bds-link-style-color': theme.color[mapColor(color)] || color,
            '--bds-link-style-breakpoint': theme.grid.breakpoint.lg.max,
            '--bds-link-style-font-family': theme.font.family[theme.context.font],
            '--bds-link-style-font-weight':
                theme.context.font === 'roboto'
                    ? theme.font.weight.medium
                    : theme.font.weight.semibold,
            '--bds-link-style-underline': (() => {
                switch (underline) {
                    case 'never':
                        return 'none !important'
                    case 'hover':
                        return 'none'
                    case 'always':
                    default:
                        return 'underline'
                }
            })(),
            ...style,
        }),
        [style, underline],
    )

    /**
     * Layout:
     *
     *  <a (LinkBase)>
     *      <span>
     *          <icon (start) />
     *          ...
     *          <icon (end) />
     *      </span>
     *  </a>
     */
    return (
        <LinkBase
            className={classNames(
                'backyard',
                'link',
                `size--${size}`,
                `color--${color}`,
                className,
            )}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            style={styles}
            ref={ref}
            {...linkProps}
            {...props}
        >
            <span
                className={classNames('label', 'link-label', {
                    bold,
                })}
            >
                {iconBefore}
                {children}
                {iconAfter}
            </span>
        </LinkBase>
    )
})

type LinkRef = HTMLAnchorElement

type LinkOverrideProps = 'size'

interface LinkProps extends BackyardBaseProps<LinkRef, LinkOverrideProps> {
    /**
     * Children
     */
    children?: React.ReactNode
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Whether or not text in link is bold
     */
    bold?: boolean
    /**
     * Color of link text and icon
     */
    color?: string | 'interactive' | 'primary' | 'inverse'
    /**
     * Icon Node to display on right-side of link text
     */
    iconAfter?: React.ReactNode
    /**
     * Icon Node to display on left-side of link text
     */
    iconBefore?: React.ReactNode
    /**
     * Size of Link
     * Small -> Small Height/Spacing Link
     * Medium -> (Default) Medium Height/Spacing Link
     */
    size?: 'small' | 'medium'
    /**
     * Page to link to
     */
    to?: string
    /**
     * Controls when the link should have an underline
     */
    underline?: 'never' | 'hover' | 'always'
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
}

Link.bdsName = 'Link'

export { Link }

export type { LinkProps, LinkRef }

export default Link
