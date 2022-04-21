import * as React from 'react'

import { BDSFunctional } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import type GalleryItem from './types/GalleryItem'
import type { GalleryThumbnailRef } from './GalleryThumbnail'

/**
 * GalleryContext
 */
const GalleryContext: React.Context<GalleryContextValues> = React.createContext(null)

/**
 * GalleryConsumer
 */
const GalleryConsumer: React.Consumer<GalleryContextValues> = GalleryContext.Consumer

/**
 * Clamps a number between a maximum and a minimum number
 *
 * @param num - number to clamp
 * @param a - minumum number
 * @param b - maximum number
 */
const clamp = (num: number, a: number, b: number) =>
    Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b))

/**
 * Backyard React Gallery Provider
 *
 * Provides values to children and handles state management of the `Gallery`.
 *
 * Use this component to supply your own custom layout.
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
const GalleryProvider: BDSFunctional<GalleryProviderProps> = ({
    children,
    item: itemProp,
    items: itemsProp = [],
    defaultItem = 0,
    disableNavigation = false,
    maxThumbnails,
    onExcessClick,
    shape: shapeProp, // = 'rounded',
    ...override
}) => {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({ validate: true, name: 'Gallery' }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    const [item, setItemState] = React.useState(itemProp || defaultItem)

    // Memoize context value with external changes
    const context = React.useMemo(
        () => ({
            items: itemsProp || [],
            disableNavigation,
            maxThumbnails,
            onExcessClick,
            shape,
        }),
        [itemsProp, disableNavigation, maxThumbnails, onExcessClick, shape],
    )

    const setItem = (newState) => {
        setItemState((prevState) => {
            if (typeof newState === 'function') {
                return clamp(newState(prevState), 0, context.items.length - 1)
            }

            return clamp(newState, 0, context.items.length - 1)
        })
    }

    React.useEffect(() => {
        if (itemProp >= 0 && itemProp !== item) {
            setItem(itemProp)
        }
    }, [itemProp])

    return (
        <GalleryContext.Provider
            value={{
                item,
                setItem,
                ...context,
                ...override,
            }}
        >
            {children}
        </GalleryContext.Provider>
    )
}

/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(GalleryContext)`
 */
interface GalleryContextValues {
    /**
     * Current selected item number
     * Default: 0
     */
    item: GalleryProviderProps['item']
    /**
     * Set the current selected item number
     */
    setItem: React.Dispatch<React.SetStateAction<GalleryProviderProps['item']>>
    /**
     * List of `GalleryItem`s to be rendered/managed
     */
    items: GalleryProviderProps['items']
    /**
     * Whether or not the navigation buttons are disabled in the `GalleryViewport`
     */
    disableNavigation: GalleryProviderProps['disableNavigation']
    /**
     * The maximum number of thumbnails to be displayed
     *
     * Any thumbnails more than this are joined into an `excess` thumbnail
     */
    maxThumbnails: GalleryProviderProps['maxThumbnails']
    /**
     * `onClick` handler for the excess thumbnail
     */
    onExcessClick?: GalleryProviderProps['onExcessClick']
    /**
     * Shape of the gallery components
     */
    shape: GalleryProviderProps['shape']
}

interface GalleryProviderProps {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode
    /**
     * Default item to be selected
     */
    defaultItem?: number
    /**
     * Whether or not the navigation buttons are disabled within the `GalleryViewport`
     */
    disableNavigation?: boolean
    /**
     * Current selected item
     */
    item?: number
    /**
     * List of `GalleryItem`s to be rendered
     */
    items?: GalleryItem[]
    /**
     * The maximum number of thumbnails to be displayed
     *
     * Any thumbnails more than this are joined into an `excess` thumbnail
     */
    maxThumbnails?: number
    /**
     * `onClick` handler for the excess thumbnail
     */
    onExcessClick?: (event: React.MouseEvent<GalleryThumbnailRef>) => void
    /**
     * Shape of the gallery components
     */
    shape?: 'rounded' | 'squared'
    /**
     * Override props for `GalleryProvider` to either override current functionality
     * or provide new context to children.
     *
     * Useful if your custom `GalleryViewportItem` needs more external data
     */
    override?: object
}

GalleryProvider.bdsName = 'GalleryProvider'

export { GalleryProvider, GalleryContext, GalleryConsumer }

export type { GalleryContextValues, GalleryProviderProps }

export default GalleryProvider
