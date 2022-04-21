import * as React from 'react'
import classNames from 'classnames'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import CardTile from './CardTile'
import type { CardTileProps } from './CardTile'
import LinkTile from './LinkTile'
import type { LinkTileProps } from './LinkTile'
import RadioTile from './RadioTile'
import type { RadioTileProps } from './RadioTile'

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should be
 * placed on them in a way that clearly indicates hierarchy.
 *
 * Tiles may be links to external sites, if selected, or used as a static element on the page that functions
 * like a radio button.
 *
 * The entire surface of the tile is selectable, which prevents additional links from being included within the content.
 * Unless however, you make use of the type:'card' tile or CardTile in which case its a simple wrapper that gives you
 * a styled div with the same Tile styles as link or radio.
 *
 * The white background variation is to be used when there are pictures being included on the tile(s).
 * If it is part of a set, all the tiles should be of the same variation.
 *
 * card examples:
 * <Tile>
 *     <span>Hello World</span>
 * </Tile>
 * <Tile type='card'>
 *     <span>Hello World</span>
 * </Tile>
 *
 * radio examples:
 * <RadioGroup name={'test2'}
 *             direction={'row'}
 *             defaultValue={'2'}
 *             onChange={() => {}}>
 *      <Tile type='radio'
 *            inputId={'1'}
 *            value={'1'}
 *            variant='filled'>
 *          <span>Item 1</span>
 *      </Tile>
 *      <Tile type='radio'
 *            inputId={'2'}
 *            value={'2'}
 *            variant='filled'>
 *          <span>Item 2</span>
 *      </Tile>
 *      <Tile type='radio'
 *            inputId={'3'}
 *            value={'3'}
 *            variant='filled'
 *            disabled>
 *          <span>Item 3</span>
 *      </Tile>
 * </RadioGroup>
 *
 *
 * <Tile type='radio'
 *       id={'4'}
 *       inputId={'input_4'}
 *       value={'4'}
 *       disabled>
 *     <span>Item 4</span>
 * </Tile>
 *
 * link example:
 * <Tile type='link'
 *       href='www.lowes.com'>
 *     <span>Hello World</span>
 * </Tile>
 */
const Tile: BDSForwardRef<TileProps & { ref?: any }> = React.forwardRef<TileRef, TileProps>(
    function Tile(
        {
            variant = 'card',
            shape: shapeProp, // = 'rounded',
            className,
            children,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme Context
        const { shape: shapeContext } = useBackyardTheme({
            validate: true,
            name: 'Tile',
        }).context

        // Calculate shape
        const shape = getShape(shapeProp, shapeContext)

        const tileVariants = {
            card: CardTile,
            link: LinkTile,
            radio: RadioTile,
        }

        const ComponentName = tileVariants[variant || 'card']

        return (
            <ComponentName
                className={classNames('tile', className)}
                shape={shape}
                {...props}
                ref={ref as any}
            >
                {children}
            </ComponentName>
        )
    },
)

type TileRef = HTMLDivElement | HTMLAnchorElement | HTMLInputElement

type TileTypeProps = CardTileProps & LinkTileProps & RadioTileProps

interface TileProps extends TileTypeProps {
    /**
     * Changes the tile in to the respective tile type.
     */
    variant?: 'link' | 'radio' | 'card'
    /**
     * Shape of the edges
     */
    shape?: 'rounded' | 'squared'
}

Tile.bdsName = 'Tile'

export { Tile }

export type { TileProps, TileRef }

export default Tile
