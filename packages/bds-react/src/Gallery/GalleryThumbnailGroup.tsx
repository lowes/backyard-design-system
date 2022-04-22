import * as React from 'react'
import classNames from 'classnames'

import FormGroup, { FormGroupRef, FormGroupProps } from '../FormGroup'
import { ThemeContext } from '../ThemeProvider'

import useForwardedRef from '../utils/hooks/useForwardedRef'

import { GalleryContext } from './GalleryProvider'
import GalleryThumbnail from './GalleryThumbnail'
import GalleryThumbnailGroupWrapper from './styles/GalleryThumbnailGroupWrapper'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

/**
 * Backyard React Product Gallery Thumbnail Group
 *
 * This component automatically rendered a group of thumbnails that are provided by the `GalleryProvider`
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
const GalleryThumbnailGroup: BDSForwardRef<GalleryThumbnailGroupProps> = React.forwardRef<
    GalleryThumbnailGroupRef,
    GalleryThumbnailGroupProps
>(function GalleryThumbnailGroup(
    {
        children,
        className,
        maxThumbnails: maxThumbnailsProp = 5,
        hideExcessThumbnails = false,
        disableMobile = false,
        ...props
    },
    ref,
) {
    // Get the theme context
    const theme = React.useContext(ThemeContext)
    // Store the forwarded ref
    const innerRef = useForwardedRef(ref)

    // Get the Gallery context from `GalleryProvider`
    const { items, maxThumbnails: maxThumbnailsContext } = React.useContext(GalleryContext)

    // State of the maximum number of thumbnails to be rendered
    // Provided by `GalleryProvider` before using defined prop
    const [maxThumbnails, setMaxThumbnails] = React.useState(
        maxThumbnailsContext || maxThumbnailsProp,
    )

    // Side effect to update `maxThumbnails` if it changes externally
    React.useEffect(() => {
        if (maxThumbnails !== maxThumbnailsProp) {
            setMaxThumbnails(maxThumbnailsProp)
        }
    }, [maxThumbnailsProp])

    // Each thumbnail renders up to `maxThumbnails`
    // On mobile, all thumbnails are shown by default
    const thumbnails = items
        // Limit number of thumbnails
        .slice(
            0,
            // If is desktop and mobile not disabled,
            !theme.isMobile || disableMobile
                ? // If number of thumbnails is greater than max thumbnails,
                  items.length > maxThumbnails
                    ? // Remove last thumbnail
                      maxThumbnails - 1
                    : // Else, render all thumbnails
                      maxThumbnails
                : // Else, use all thumbnails
                  items.length,
        )
        // For each rendered thumbnail, render a `GalleryThumbnail`
        .map(({ thumbnail, thumbnailAlt, original, renderThumbnail, thumbnailProps }, index) => (
            <GalleryThumbnail
                key={index}
                variant={theme.isMobile && !disableMobile ? 'dot' : 'image'}
                src={thumbnail || original}
                alt={thumbnailAlt}
                item={index}
                renderThumbnail={renderThumbnail}
                {...thumbnailProps}
            />
        ))

    // If not hiding excess thumbnails, and
    // total number of thumbnails is greater than rendered number, and
    // desktop view, and
    // mobile view not disabled
    if (
        !hideExcessThumbnails &&
        items.length > thumbnails.length &&
        (
            !theme.isMobile ||
            disableMobile
        )
    ) {
        // Push excess thumbnail to rendered group
        thumbnails.push(
            <GalleryThumbnail key={thumbnails.length} variant="excess" item={thumbnails.length} />,
        )
    }

    /**
     * Layout:
     *  <div wrapper formgroup>
     *      ...
     *  </div>
     */
    return (
        <GalleryThumbnailGroupWrapper>
            <FormGroup
                className={classNames(
                    'gallery-thumbnail-group',
                    theme.isMobile ? 'mobile' : 'desktop',
                    className,
                )}
                direction="row"
                {...props}
                ref={innerRef}
            >
                {thumbnails}
            </FormGroup>
        </GalleryThumbnailGroupWrapper>
    )
})

type GalleryThumbnailGroupRef = FormGroupRef

interface GalleryThumbnailGroupProps extends FormGroupProps {
    /**
     * DOM Class Name
     */
    className?: string
    /**
     * Direction of the thumbnails to be rendered
     */
    direction?: FormGroupProps['direction']
    /**
     * Whether or not mobile render of thumbnails will be transitioned to automatically
     *
     * Useful if you still need the thumbnails to be images instead of dots in mobile
     */
    disableMobile?: boolean
    /**
     * Whether or not the `excess` thumbnail will be rendered
     */
    hideExcessThumbnails?: boolean
    /**
     * The maximum number of thumbnails to be displayed
     *
     * Any thumbnails more than this are joined into an `excess` thumbnail
     */
    maxThumbnails?: number
}

GalleryThumbnailGroup.bdsName = 'GalleryThumbnailGroup'

export { GalleryThumbnailGroup }

export type { GalleryThumbnailGroupProps, GalleryThumbnailGroupRef }

export default GalleryThumbnailGroup
