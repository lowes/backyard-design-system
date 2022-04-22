# Interface: GalleryProps

## Hierarchy

- [`GalleryBaseProps`](GalleryBaseProps.md)

  ↳ **`GalleryProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

[GalleryBaseProps](GalleryBaseProps.md).[as](GalleryBaseProps.md#as)

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Inherited from

[GalleryBaseProps](GalleryBaseProps.md).[className](GalleryBaseProps.md#classname)

___

### defaultItem

• `Optional` **defaultItem**: `number`

Default selected item number

Use this to let `GalleryProvider` handle state
Default: 0

___

### disableNavigation

• `Optional` **disableNavigation**: `boolean`

Whether or not the navigation buttons are rendered
Default: false

___

### disableThumbnails

• `Optional` **disableThumbnails**: `boolean`

Whether or not the thumbnails are rendered
Default: false

#### Overrides

[GalleryBaseProps](GalleryBaseProps.md).[disableThumbnails](GalleryBaseProps.md#disablethumbnails)

___

### item

• `Optional` **item**: `number`

Selected item number

Use this to control `GalleryProvider`'s `item` state externally

___

### items

• `Optional` **items**: `GalleryItem`[]

List of `GalleryItem`s that are passed to `GalleryProvider`

These will be automatically rendered out from `Gallery`

___

### maxThumbnails

• `Optional` **maxThumbnails**: `number`

The maximum number of thumbnails that will be displayed

Any thumbnails in excess of this will be joined into an `excess` thumbnail
that displays the number of thumbnails still available (ex. "+5")

#### Overrides

[GalleryBaseProps](GalleryBaseProps.md).[maxThumbnails](GalleryBaseProps.md#maxthumbnails)

___

### onExcessClick

• `Optional` **onExcessClick**: (`event`: `MouseEvent`<`HTMLImageElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

`onClick` handler for the excess thumbnail

(event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLImageElement`, `MouseEvent`\> |

##### Returns

`void`

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

#### Overrides

GalleryBaseProps.shape
