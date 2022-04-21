# Interface: GalleryContextValues

Context values that can be passed to children via

`const context = React.useContext(GalleryContext)`

## Properties

### disableNavigation

• **disableNavigation**: `boolean`

Whether or not the navigation buttons are disabled in the `GalleryViewport`

___

### item

• **item**: `number`

Current selected item number
Default: 0

___

### items

• **items**: `GalleryItem`[]

List of `GalleryItem`s to be rendered/managed

___

### maxThumbnails

• **maxThumbnails**: `number`

The maximum number of thumbnails to be displayed

Any thumbnails more than this are joined into an `excess` thumbnail

___

### onExcessClick

• `Optional` **onExcessClick**: (`event`: `MouseEvent`<`HTMLImageElement`, `MouseEvent`\>) => `void`

#### Type declaration

▸ (`event`): `void`

`onClick` handler for the excess thumbnail

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`HTMLImageElement`, `MouseEvent`\> |

##### Returns

`void`

___

### setItem

• **setItem**: `Dispatch`<`SetStateAction`<`number`\>\>

Set the current selected item number

___

### shape

• **shape**: ``"rounded"`` \| ``"squared"``

Shape of the gallery components
