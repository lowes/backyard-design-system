import * as React from 'react'
import classNames from 'classnames'

import Bullet from '@lowes-tech/bds-icons/Bullet'

import IconButton from '../IconButton'
import Typography from '../Typography'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import { GalleryContext, GalleryProviderProps } from './GalleryProvider'
import GalleryThumbnailWrapper from './styles/GalleryThumbnailWrapper'

/**
 * Backyard React Gallery Default Thumbnail
 *
 * Default thumbnail to be rendered.
 * This can be overridden by the `renderThumbnail` prop.
 */
const GalleryDefaultThumbnail: BDSForwardRef<GalleryThumbnailProps> = React.forwardRef<
    GalleryThumbnailRef,
    GalleryThumbnailProps
>(function GalleryDefaultThumbnail({ src, alt, component, ...props }, ref) {
    // customize component, default to `img`
    const Component = component || 'img'

    /**
     * Layout:
     *  <img />
     */
    return <Component src={src} alt={alt} {...props} ref={ref} />
})

/**
 * Backyard React Product Gallery Thumbnail
 *
 * Handles the render of the thumbnail, and provides a button for the user to click on
 * and set the current selected item with.
 *
 * Example:
 * ```
 *  <GalleryThumbnail
 *      src="http://some.where/img.jpg"
 *      item={0}
 *  />
 * ```
 */
const GalleryThumbnail: BDSForwardRef<GalleryThumbnailProps> = React.forwardRef<
    GalleryThumbnailRef,
    GalleryThumbnailProps
>(function GalleryThumbnail(
    {
        alt: altProp,
        children,
        className,
        item,
        src,
        onClick,
        renderThumbnail = (props, ref) => <GalleryDefaultThumbnail {...props} ref={ref} />,
        variant,
        wrapperProps = {},
        ...props
    },
    ref,
) {
    // Get context from `GalleryProvider`
    const { item: curItem, items, setItem, onExcessClick, shape } = React.useContext(GalleryContext)

    // Provide alternate text if not defined
    const alt = altProp || `gallery thumbnail for item ${item}`

    /**
     * Handle click event
     *
     * Sets current selected item
     *
     * @param event - click event
     */
    const handleClick = (event) => {
        // Set current item
        setItem(item)

        // If excess button, and `onExcessClick` defined,
        if (variant === 'excess' && onExcessClick) {
            // Trigger `onExcessClick`
            onExcessClick(event)
        } else if (onClick) {
            // Else if `onClick` defined,
            // Trigger `onClick`
            onClick(event)
        }
    }

    /**
     * Compute relative content for the thumbnail
     * Depends on the `variant` prop
     */
    const content = (() => {
        switch (variant) {
            // For an `excess` thumbnail,
            case 'excess':
                // Content is the number of thumbnails in excess of current
                return (
                    <Typography variant="body_1" color="text_tertiary">
                        <b>{`+${items.length - item}`}</b>
                    </Typography>
                )

            // For a `dot` thumbnail,
            case 'dot':
                // Display bullet, for mobile
                return <Bullet />

            // For a `content` thumbnail,
            case 'content':
                // Display customized children
                return children

            // By default,
            default:
                // Render the thumbnail as defined by `renderThumbnail`
                return renderThumbnail(
                    {
                        alt,
                        className: classNames('gallery-thumbnail-item', className),
                        src,
                        ...props,
                    },
                    ref,
                )
        }
    })()

    /**
     * Layout:
     *  <div wrapper>
     *      <button icon>
     *          ...
     *      </button>
     *  </div>
     */
    return (
        <GalleryThumbnailWrapper
            {...wrapperProps}
            className={classNames(
                'gallery-thumbnail',
                `shape--${shape}`,
                variant,
                curItem === item ? 'selected' : null,
                wrapperProps?.className,
            )}
        >
            <IconButton variant="secondary" color="neutral" onClick={handleClick} shape={shape}>
                {content}
            </IconButton>
        </GalleryThumbnailWrapper>
    )
})

type GalleryThumbnailRef = HTMLImageElement

interface GalleryThumbnailProps extends BackyardBaseProps<GalleryThumbnailRef> {
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
     * Render a custom item inside of `GalleryThumbnail`
     *
     * Useful for any needs other than an `img` tag, such as creating a lazyloader,
     * or adding an overlay image to the thumbnail `img` tag.
     */
    renderThumbnail?: (
        props: GalleryThumbnailProps,
        ref?: React.Ref<GalleryThumbnailRef>,
    ) => React.ReactElement<GalleryThumbnailProps>
    /**
     * Variant of the thumbnail
     */
    variant?: 'excess' | 'dot' | 'content' | string
    /**
     * Wrapper props to extend thumbnail button wrapper with
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>
}

GalleryDefaultThumbnail.bdsName = 'GalleryDefaultThumbnail'
GalleryThumbnail.bdsName = 'GalleryThumbnail'

export { GalleryThumbnail, GalleryDefaultThumbnail }

export type { GalleryThumbnailProps, GalleryThumbnailRef }

export default GalleryThumbnail
