import * as React from 'react'
import classNames from 'classnames'

import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'

import IconButton from '../IconButton'
import useBackyardTheme from '../ThemeProvider/useBackyardTheme'
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import GalleryViewportWrapper from './styles/GalleryViewportWrapper'
import { GalleryContext } from './GalleryProvider'
import GalleryViewportItem from './GalleryViewportItem'

/**
 * Backyard React Product Gallery Viewport
 *
 * This component automatically renders a group of viewport items that are provided by the `GalleryProvider`
 * Can be placed anywhere within `GalleryProvider` to provide custom layout
 *
 * Example:
 * ```
 *  <GalleryProvider
 *      items={[
 *          {
 *              original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
 *          },
 *          {
 *              original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
 *              thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
 *          }
 *      ]}
 *  >
 *      <Grid.Row>
 *          <Grid.Column
 *              style={{
 *                  width: '6rem'
 *              }}
 *          >
 *              <GalleryThumbnailGroup
 *                  disableMobile
 *                  maxThumbnails={20}
 *                  direction="column"
 *                  style={{ maxHeight: '32rem' }}
 *              />
 *          </Grid.Column>
 *          <Grid.Column />
 *          <Grid.Column sm={8}>
 *              <GalleryViewport />
 *          </Grid.Column>
 *      </Grid.Row>
 *  </GalleryProvider>
 * ```
 */
const GalleryViewport: BDSForwardRef<GalleryViewportProps> = React.forwardRef<
    GalleryViewportRef,
    GalleryViewportProps
>(function GalleryViewport(
    { children, className, height, width, padding, style: styleProp, ...props },
    ref,
) {
    // Get Backyard theme context
    const theme = useBackyardTheme()

    // Get gallery context from `GalleryProvider`
    const { item, items, disableNavigation, setItem, shape } = React.useContext(GalleryContext)

    // Render previous button
    const previousButton =
        // If current item isn't first item, and navigation not disabled
        item > 0 && !disableNavigation ? (
            <IconButton
                className="viewport-button prev"
                variant="inverse"
                shape="circle"
                color="interactive"
                elevation
                onClick={() => setItem((i) => i - 1)}
            >
                <ChevronLeft />
            </IconButton>
        ) : null

    // Render next button
    const nextButton =
        // If last item isn't selected, and navigation not disabled
        item < items.length - 1 && !disableNavigation ? (
            <IconButton
                className="viewport-button next"
                variant="inverse"
                shape="circle"
                color="interactive"
                elevation
                onClick={() => setItem((i) => i + 1)}
            >
                <ChevronRight />
            </IconButton>
        ) : null

    // Memoize original `GalleryViewportItem`s to re-render if
    // `items` changes, given by `GalleryProvider`
    const originals = React.useMemo(
        () =>
            items.map(({ original, renderViewportItem, viewportItemProps }, index) => (
                <GalleryViewportItem
                    key={index}
                    item={index}
                    src={original}
                    renderViewportItem={renderViewportItem}
                    {...viewportItemProps}
                />
            )),
        [items],
    )

    // Memoize style prop and css vars
    const style = React.useMemo(
        () => ({
            '--style-gallery-viewport-height': theme.sizes[height] || height || '25.875rem',
            '--style-gallery-viewport-width': theme.sizes[width] || width || '100%',
            '--style-gallery-viewport-padding':
                theme.sizes[padding] || padding || 'var(--bds-sizes-size-8)',
            ...styleProp,
        }),
        [theme, styleProp],
    )

    /**
     * Layout:
     *  <div wrapper>
     *      <button prev />
     *      <button next />
     *      <ul gallery-list>
     *          ...
     *      </ul>
     *  </div>
     */
    return (
        <GalleryViewportWrapper
            className={classNames('gallery-viewport', `shape--${shape}`, className)}
            style={style}
            {...props}
            ref={ref}
        >
            {previousButton}
            {nextButton}
            <ul
                className="gallery-list"
                style={{
                    marginLeft: `${-1 * item * 100}%`,
                }}
            >
                {originals}
            </ul>
        </GalleryViewportWrapper>
    )
})

type GalleryViewportRef = HTMLDivElement

interface GalleryViewportProps extends BackyardBaseProps<GalleryViewportRef> {
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Height of the viewport
     */
    height?: string
    /**
     * Width of the viewport
     */
    width?: string
    /**
     * Padding inside the viewport
     */
    padding?: keyof BackyardToken['sizes'] | string
}

GalleryViewport.bdsName = 'GalleryViewport'

export { GalleryViewport }

export type { GalleryViewportProps, GalleryViewportRef }

export default GalleryViewport
