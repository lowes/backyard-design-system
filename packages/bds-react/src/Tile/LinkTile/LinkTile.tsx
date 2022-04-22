import LinkIcon from '@lowes-tech/bds-icons/LinkIcon'
import classNames from 'classnames'
import * as React from 'react'

import { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

import TileWrapper from '../styles/TileWrapper'

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile contains links to external sites or sections of the page that are navigated to when selected.
 * The entire surface of the tile is selectable, which prevents additional links from being included within the content.
 *
 * note: The 'outlined' variation is to be used when there are pictures being included on the tile(s).
 *
 * example:
 * <LinkTile href='www.lowes.com'>
 *     <span>Hello World</span>
 * </LinkTile>
 */
const LinkTile: BDSForwardRef<LinkTileProps> = React.forwardRef<LinkTileRef, LinkTileProps>(
    function LinkTile(
        {
            children,
            className,
            href,
            disabled = false,
            color = 'surface',
            shape: shapeProp, // = 'rounded',
            icon = <LinkIcon />,
            disableIcon,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'LinkTile',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        // sets href if it exists or the tile isn't disabled
        const getHref = href && !disabled ? href : null

        return (
            <TileWrapper
                as="a"
                className={classNames(
                    className,
                    `color--${color}`,
                    `shape--${shape}`,
                    'type--link',
                    { disabled },
                    className,
                )}
                aria-disabled={disabled}
                type="link"
                href={getHref}
                {...props}
                ref={ref}
            >
                {children}

                {disableIcon ? null : <div className="tile-icon">{icon}</div>}
            </TileWrapper>
        )
    },
)

type LinkTileRef = HTMLAnchorElement

interface LinkTileProps extends BackyardBaseProps<LinkTileRef> {
    /**
     * Sets the link that will be navigated to upon click of tile
     */
    href?: string
    /**
     * Apply disabled styling if 'true'
     */
    disabled?: boolean
    /**
     * Changes card styling to provided variant style
     */
    color?: 'surface' | 'subdued'
    /**
     * Shape of the edges
     */
    shape?: 'rounded' | 'squared'
    /**
     * Replaces the <LinkIcon/> with the provided @lowes-tech/bds-icons icon
     */
    icon?: React.ReactNode
    /**
     * Removes the default <LinkIcon/> from being displayed
     */
    disableIcon?: boolean
}

LinkTile.bdsName = 'LinkTile'

export { LinkTile }

export type { LinkTileProps, LinkTileRef }

export default LinkTile
