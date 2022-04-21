import type { GalleryViewportItemProps } from "../GalleryViewportItem"
import type { GalleryThumbnailProps } from "../GalleryThumbnail"

/**
 * Gallery Item Type
 * 
 * Used as a list of `GalleryItem`s inside of `GalleryProvider`
 */
type GalleryItem = {
    /**
     * The source path of the item, provided to `GalleryViewportItem`
     * 
     * ex. "https://picsum.photos/id/1018/1000/600/"
     */
    original?: string
    /**
     * The alternate text for the original source, provided to `GalleryViewportItem`
     * Defaults to "gallery item X"
     * 
     * ex. "Refrigerator Opened"
     */
    originalAlt?: GalleryViewportItemProps['alt'] // string
    /**
     * Props to extend `GalleryThumbnail` item with
     * 
     * Useful for setting individual `onClick` handlers or `style` props
     * onto the thumbnails that get generated from the list of `GalleryItem`s
     */
    viewportItemProps?: GalleryViewportItemProps
    /**
     * Render a custom item inside of `GalleryViewportItem`
     * 
     * Useful for any needs other than an `img` tag, such as creating a lazyloader,
     * or a video viewer, or a 360 spinner, etc.
     * 
     * (props: GalleryViewportItemProps, ref?: React.Ref<HTMLImageElement>) => React.ForwardRefExoticComponent<GalleryViewportItemProps>
     */
    renderViewportItem?: GalleryViewportItemProps['renderViewportItem'] // forwardRef
    /**
     * The thumbnail path of the item, provided to `GalleryThumbnail`
     * Note: Uses `src` path if not given
     * 
     * ex. "https://picsum.photos/id/1018/250/150/"
     */
    thumbnail?: string
    /**
     * The alternate text for the thumbnails source, provided to `GalleryThumbnail`
     * Defaults to "gallery item thumbnail X"
     * 
     * ex. "Refrigerator Opened Thumbnail"
     */
    thumbnailAlt?: GalleryThumbnailProps['alt'] // string
    /**
     * Props to extend `GalleryThumbnail` item with
     * 
     * Useful for setting individual `onClick` handlers or `style` props
     * onto the thumbnails that get generated from the list of `GalleryItem`s
     */
    thumbnailProps?: GalleryThumbnailProps
    /**
     * Render a custom item inside of `GalleryThumbnail`
     * 
     * Useful for any needs other than an `img` tag, such as creating a lazyloader,
     * or adding an overlay image to the thumbnail `img` tag.
     * 
     * (props: GalleryThumbnailProps, ref?: React.Ref<HTMLImageElement>) => React.ForwardRefExoticComponent<GalleryThumbnailProps>
     */
    renderThumbnail?: GalleryThumbnailProps['renderThumbnail'] // forwardRef
}

export type {
    GalleryItem
}

export default GalleryItem
