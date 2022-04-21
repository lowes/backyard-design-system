# Interface: GalleryThumbnailProps

## Hierarchy

- `BackyardBaseProps`<[`GalleryThumbnailRef`](../README.md#gallerythumbnailref)\>

  ↳ **`GalleryThumbnailProps`**

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

### renderThumbnail

▸ `Optional` **renderThumbnail**(`props`, `ref?`): `ReactElement`<[`GalleryThumbnailProps`](GalleryThumbnailProps.md), `string` \| `JSXElementConstructor`<`any`\>\>

Render a custom item inside of `GalleryThumbnail`

Useful for any needs other than an `img` tag, such as creating a lazyloader,
or adding an overlay image to the thumbnail `img` tag.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`GalleryThumbnailProps`](GalleryThumbnailProps.md) |
| `ref?` | `Ref`<`HTMLImageElement`\> |

#### Returns

`ReactElement`<[`GalleryThumbnailProps`](GalleryThumbnailProps.md), `string` \| `JSXElementConstructor`<`any`\>\>
