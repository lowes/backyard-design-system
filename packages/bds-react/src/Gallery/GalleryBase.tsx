import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import GalleryWrapper from './styles/GalleryWrapper'
import GalleryViewport from './GalleryViewport'
import GalleryThumbnailGroup from './GalleryThumbnailGroup'

/**
 * Backyard React Product Gallery Base
 *
 * @internal
 *
 * This component is for the `Gallery` component to auto render with our base layout
 *
 * It is not needed for the functionality of the `Gallery
 */
const GalleryBase: BDSForwardRef<GalleryBaseProps> = React.forwardRef<
    GalleryBaseRef,
    GalleryBaseProps
>(function GalleryBase(
    { children, className, disableThumbnails = false, maxThumbnails, ...props },
    ref,
) {
    /**
     * Layout:
     *  <div wrapper>
     *      ...
     *  </div>
     */
    return (
        <GalleryWrapper className={classNames('gallery', className)} {...props} ref={ref}>
            <GalleryViewport />
            {!disableThumbnails ? <GalleryThumbnailGroup maxThumbnails={maxThumbnails} /> : null}
        </GalleryWrapper>
    )
})

type GalleryBaseRef = HTMLDivElement

interface GalleryBaseProps extends BackyardBaseProps<GalleryBaseRef> {
    /**
     * DOM Class Name
     */
    className?: string
    disableThumbnails?: boolean
    maxThumbnails?: number
}

GalleryBase.bdsName = 'GalleryBase'

export { GalleryBase }

export type { GalleryBaseProps, GalleryBaseRef }

export default GalleryBase
