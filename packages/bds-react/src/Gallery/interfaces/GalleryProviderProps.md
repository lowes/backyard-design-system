# Interface: GalleryProviderProps

## Properties

### children

• **children**: `ReactNode`

React Children to provide context to

___

### defaultItem

• `Optional` **defaultItem**: `number`

Default item to be selected

___

### disableNavigation

• `Optional` **disableNavigation**: `boolean`

Whether or not the navigation buttons are disabled within the `GalleryViewport`

___

### item

• `Optional` **item**: `number`

Current selected item

___

### items

• `Optional` **items**: `GalleryItem`[]

List of `GalleryItem`s to be rendered

___

### maxThumbnails

• `Optional` **maxThumbnails**: `number`

The maximum number of thumbnails to be displayed

Any thumbnails more than this are joined into an `excess` thumbnail

___

### override

• `Optional` **override**: `object`

Override props for `GalleryProvider` to either override current functionality
or provide new context to children.

Useful if your custom `GalleryViewportItem` needs more external data

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the gallery components

## Methods

### onExcessClick

▸ `Optional` **onExcessClick**(`event`): `void`

`onClick` handler for the excess thumbnail

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLImageElement`, `MouseEvent`\> |

#### Returns

`void`
