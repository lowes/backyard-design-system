import classNames from 'classnames'
import * as React from 'react'

import BackyardBaseProps from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../../ThemeProvider'

import TileWrapper from '../styles/TileWrapper'

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * Since this component is just a wrapper you can place interactive elements within like
 * buttons and links if you so desire.
 *
 * note: The white background variation is to be used when there are pictures being included on the tile(s). If it
 * is part of a set, all the tiles should be of the same variation.
 *
 * example:
 * <CardTile>
 *     <span>Hello World</span>
 *     <Button>Button</Button>
 * </CardTile>
 */
const CardTile: BDSForwardRef<CardTileProps> = React.forwardRef<CardTileRef, CardTileProps>(
    function CardTile(
        {
            className,
            children,
            color = 'surface',
            shape: shapeProp, // = 'rounded',
            disabled = false,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'CardTile',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        return (
            <TileWrapper
                as="div"
                className={classNames(
                    className,
                    `color--${color}`,
                    `shape--${shape}`,
                    'type--card',
                    { disabled },
                    className,
                )}
                aria-disabled={disabled}
                type="card"
                {...props}
                ref={ref}
            >
                {children}
            </TileWrapper>
        )
    },
)

type CardTileRef = HTMLDivElement

interface CardTileProps extends BackyardBaseProps<CardTileRef> {
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
}

CardTile.bdsName = 'CardTile'

export { CardTile }

export type { CardTileProps, CardTileRef }

export default CardTile
