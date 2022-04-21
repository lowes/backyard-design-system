# Interface: GalleryViewportItemProps

## Hierarchy

- `BackyardBaseProps`<[`GalleryViewportItemRef`](../README.md#galleryviewportitemref)\>

  ↳ **`GalleryViewportItemProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### component

• `Optional` **component**: `ElementType`<`any`\>

Custom component to render in place of `img`

Simpler than `renderThumbnail`

___

### item

• `Optional` **item**: `number`

List of `GalleryItem`s to be rendered

___

### variant

• `Optional` **variant**: `string`

Variant of the thumbnail

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

Wrapper props to extend thumbnail button wrapper with

## Methods

### renderViewportItem

▸ `Optional` **renderViewportItem**(`props`, `ref?`): `ReactElement`<[`GalleryViewportItemProps`](GalleryViewportItemProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

Render a custom item inside of `GalleryViewportItem`

Useful for any needs other than an `img` tag, such as creating a lazyloader,
or a video viewer, or a 360 spinner, etc.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GalleryViewportItemProps`](GalleryViewportItemProps.md) |
| `ref?` | `Ref`<`HTMLImageElement`\> |

#### Returns

`ReactElement`<[`GalleryViewportItemProps`](GalleryViewportItemProps.md), `string` \| `JSXElementConstructor`<`any`\>\>
