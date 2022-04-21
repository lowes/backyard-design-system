# @lowes-tech/bds-react/Gallery

## Namespaces

- [GalleryProvider](modules/GalleryProvider.md)

## Interfaces

- [GalleryBaseProps](interfaces/GalleryBaseProps.md)
- [GalleryContextValues](interfaces/GalleryContextValues.md)
- [GalleryProps](interfaces/GalleryProps.md)
- [GalleryProviderProps](interfaces/GalleryProviderProps.md)
- [GalleryThumbnailGroupProps](interfaces/GalleryThumbnailGroupProps.md)
- [GalleryThumbnailProps](interfaces/GalleryThumbnailProps.md)
- [GalleryViewportItemProps](interfaces/GalleryViewportItemProps.md)
- [GalleryViewportProps](interfaces/GalleryViewportProps.md)

## References

### default

Renames and re-exports [Gallery](README.md#gallery)

## Type aliases

### GalleryBaseRef

Ƭ **GalleryBaseRef**: `HTMLDivElement`

___

### GalleryRef

Ƭ **GalleryRef**: [`GalleryBaseRef`](README.md#gallerybaseref)

___

### GalleryThumbnailGroupRef

Ƭ **GalleryThumbnailGroupRef**: `FormGroupRef`

___

### GalleryThumbnailRef

Ƭ **GalleryThumbnailRef**: `HTMLImageElement`

___

### GalleryViewportItemRef

Ƭ **GalleryViewportItemRef**: `HTMLImageElement`

___

### GalleryViewportRef

Ƭ **GalleryViewportRef**: `HTMLDivElement`

## Variables

### Gallery

• **Gallery**: `BDSForwardRef`<[`GalleryProps`](interfaces/GalleryProps.md)\>

Backyard React Gallery

Gallery takes a list of items and render thumbnails and original sources as `img` tags.

It provides functionality to handle clicking on thumbnails and navigation buttons for the
user to navigate through the list of gallery items, via the `GalleryProvider`, to all its children.

Think of each `img` with original src as a Viewport Item,
and each `img` with the thumbnail as a Thumbnail item.

Each Viewport Item and Thumbnail can be customized via
the `renderViewportItem` and `renderThumbnail` props in `GalleryItem`.

This allows the UI/UX of the Gallery itself to be separated from the logic that handles state
as well as the logic that handles rendering individual viewport items or thumbnails.

In special use-cases, instead of using Gallery, it is possible to wrap
`GalleryThumbnailGroup` and `GalleryViewport as children of `GalleryProvider` so that the layout
can be customized, such as in a `Modal`.

See documentation site code examples for more.

Example:
```
 <Gallery
     items={[
         {
             original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
             thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
         },
         {
             original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
             thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
         },
         {
             original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
             thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
         }
     ]}
 />
```

___

### GalleryConsumer

• **GalleryConsumer**: `React.Consumer`<[`GalleryContextValues`](interfaces/GalleryContextValues.md)\> = `GalleryContext.Consumer`

GalleryConsumer

___

### GalleryContext

• **GalleryContext**: `React.Context`<[`GalleryContextValues`](interfaces/GalleryContextValues.md)\>

GalleryContext

___

### GalleryDefaultThumbnail

• **GalleryDefaultThumbnail**: `BDSForwardRef`<[`GalleryThumbnailProps`](interfaces/GalleryThumbnailProps.md)\>

Backyard React Gallery Default Thumbnail

Default thumbnail to be rendered.
This can be overridden by the `renderThumbnail` prop.

___

### GalleryDefaultViewportItem

• **GalleryDefaultViewportItem**: `BDSForwardRef`<[`GalleryViewportItemProps`](interfaces/GalleryViewportItemProps.md)\>

Backyard React Gallery Default ViewportItem

Default viewport item to be rendered.
This can be overridden by the `renderViewportItem` prop.

___

### GalleryProvider

• **GalleryProvider**: `BDSFunctional`<[`GalleryProviderProps`](interfaces/GalleryProviderProps.md)\>

Backyard React Gallery Provider

Provides values to children and handles state management of the `Gallery`.

Use this component to supply your own custom layout.

Example:
```
 <GalleryProvider
     items={[
         {
             original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
             thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
         },
         {
             original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
             thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
         }
     ]}
 >
     <Grid.Row>
         <Grid.Column
             style={{
                 width: '6rem'
             }}
         >
             <GalleryThumbnailGroup
                 disableMobile
                 maxThumbnails={20}
                 direction="column"
                 style={{ maxHeight: '32rem' }}
             />
         </Grid.Column>
         <Grid.Column />
         <Grid.Column sm={8}>
             <GalleryViewport />
         </Grid.Column>
     </Grid.Row>
 </GalleryProvider>
```

___

### GalleryThumbnail

• **GalleryThumbnail**: `BDSForwardRef`<[`GalleryThumbnailProps`](interfaces/GalleryThumbnailProps.md)\>

Backyard React Product Gallery Thumbnail

Handles the render of the thumbnail, and provides a button for the user to click on
and set the current selected item with.

Example:
```
 <GalleryThumbnail
     src="http://some.where/img.jpg"
     item={0}
 />
```

___

### GalleryThumbnailGroup

• **GalleryThumbnailGroup**: `BDSForwardRef`<[`GalleryThumbnailGroupProps`](interfaces/GalleryThumbnailGroupProps.md)\>

Backyard React Product Gallery Thumbnail Group

This component automatically rendered a group of thumbnails that are provided by the `GalleryProvider`
Can be placed anywhere within `GalleryProvider` to provide custom layout

Example:
```
 <GalleryProvider
     items={[
         {
             original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
             thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
         },
         {
             original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
             thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
         }
     ]}
 >
     <Grid.Row>
         <Grid.Column
             style={{
                 width: '6rem'
             }}
         >
             <GalleryThumbnailGroup
                 disableMobile
                 maxThumbnails={20}
                 direction="column"
                 style={{ maxHeight: '32rem' }}
             />
         </Grid.Column>
         <Grid.Column />
         <Grid.Column sm={8}>
             <GalleryViewport />
         </Grid.Column>
     </Grid.Row>
 </GalleryProvider>
```

___

### GalleryViewport

• **GalleryViewport**: `BDSForwardRef`<[`GalleryViewportProps`](interfaces/GalleryViewportProps.md)\>

Backyard React Product Gallery Viewport

This component automatically renders a group of viewport items that are provided by the `GalleryProvider`
Can be placed anywhere within `GalleryProvider` to provide custom layout

Example:
```
 <GalleryProvider
     items={[
         {
             original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
             thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
         },
         {
             original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
             thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
         }
     ]}
 >
     <Grid.Row>
         <Grid.Column
             style={{
                 width: '6rem'
             }}
         >
             <GalleryThumbnailGroup
                 disableMobile
                 maxThumbnails={20}
                 direction="column"
                 style={{ maxHeight: '32rem' }}
             />
         </Grid.Column>
         <Grid.Column />
         <Grid.Column sm={8}>
             <GalleryViewport />
         </Grid.Column>
     </Grid.Row>
 </GalleryProvider>
```

___

### GalleryViewportItem

• **GalleryViewportItem**: `BDSForwardRef`<[`GalleryViewportItemProps`](interfaces/GalleryViewportItemProps.md)\>

Backyard React Product Gallery Viewport Item

Handles the render of the viewport item, and provides navigation buttons
for the user to click on and set the current selected item with.

Example:
```
 <GalleryViewportItem
     src="http://some.where/img.jpg"
     item={0}
 />
```
