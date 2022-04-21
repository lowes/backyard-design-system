import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import type { GalleryProviderProps } from './GalleryProvider'

/**
 * Backyard React Gallery Default ViewportItem
 *
 * Default viewport item to be rendered.
 * This can be overridden by the `renderViewportItem` prop.
 */
const GalleryDefaultViewportItem: BDSForwardRef<GalleryViewportItemProps> = React.forwardRef<
    GalleryViewportItemRef,
    GalleryViewportItemProps
>(function DefaultViewportItem({ src, alt, component, ...props }, ref) {
    // customize component, default to `img`
    const Component = component || 'img'

    /**
     * Layout:
     *  <img />
     */
    return <Component src={src} alt={alt} {...props} ref={ref} />
})

// Default `src` is an empty pixel
const defaultSrc =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

/**
 * Backyard React Product Gallery Viewport Item
 *
 * Handles the render of the viewport item, and provides navigation buttons
 * for the user to click on and set the current selected item with.
 *
 * Example:
 * ```
 *  <GalleryViewportItem
 *      src="http://some.where/img.jpg"
 *      item={0}
 *  />
 * ```
 */
const GalleryViewportItem: BDSForwardRef<GalleryViewportItemProps> = React.forwardRef<
    GalleryViewportItemRef,
    GalleryViewportItemProps
>(function GalleryViewportItem(
    {
        alt: altProp,
        className,
        renderViewportItem = (props, ref) => <GalleryDefaultViewportItem {...props} ref={ref} />,
        item,
        src = defaultSrc,
        wrapperProps,
        ...props
    },
    ref,
) {
    // Provide alternate text if not defined
    const alt = altProp || `gallery item ${item}`

    /**
     * Layout:
     *  <li wrapper>
     *      <div viewport>
     *          ...
     *      </div>
     *  </li>
     */
    return (
        <li className="gallery-list-item">
            <div className="viewport" {...wrapperProps}>
                {renderViewportItem(
                    {
                        alt,
                        className: classNames('gallery-viewport-item', className),
                        src,
                        ...props,
                    },
                    ref,
                )}
            </div>
        </li>
    )
})

type GalleryViewportItemRef = HTMLImageElement

interface GalleryViewportItemProps extends BackyardBaseProps<GalleryViewportItemRef> {
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Custom component to render in place of `img`
     *
     * Simpler than `renderThumbnail`
     */
    component?: React.ElementType
    /**
     * List of `GalleryItem`s to be rendered
     */
    item?: GalleryProviderProps['item']
    /**
     * Render a custom item inside of `GalleryViewportItem`
     *
     * Useful for any needs other than an `img` tag, such as creating a lazyloader,
     * or a video viewer, or a 360 spinner, etc.
     */
    renderViewportItem?: (
        props: GalleryViewportItemProps,
        ref?: React.Ref<GalleryViewportItemRef>,
    ) => React.ReactElement<GalleryViewportItemProps>
    /**
     * Variant of the thumbnail
     */
    variant?: 'excess' | 'dot' | 'content' | string
    /**
     * Wrapper props to extend thumbnail button wrapper with
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
}

GalleryDefaultViewportItem.bdsName = 'GalleryDefaultViewportItem'
GalleryViewportItem.bdsName = 'GalleryViewportItem'

export { GalleryViewportItem, GalleryDefaultViewportItem }

export type { GalleryViewportItemProps, GalleryViewportItemRef }

export default GalleryViewportItem
