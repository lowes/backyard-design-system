# Interface: FileUploadContextValues

Context values that can be passed to children via

`const context = React.useContext(FileUploadContext)`

## Hierarchy

- `DropzoneOptions`

- `DropzoneState`

  ↳ **`FileUploadContextValues`**

## Properties

### delayCompleted

• **delayCompleted**: `number` \| ``false``

Number of milliseconds to delay file item's animated transition from
`completed` (`<Checkbox />`) state to `accepted` (`<Close />`) state

Set to `false` to disable the transition
Note: The `<Checkbox />` is not interactable for the user

___

### fileReducer

• **fileReducer**: `Dispatch`<[`FileUploadAction`](../README.md#fileuploadaction)\>

State reducer for the files managed by `FileUpload`

See `FileUploadAction` definition and `useFileReducer` file for more information

___

### files

• **files**: [`Files`](../README.md#files)

List of files currently managed by the component

___

### hasError

• **hasError**: `boolean`

Whether or not the current list of files contain any errors

___

### hasSuccess

• **hasSuccess**: `boolean`

Whether or not *all* current files contain no error

___

### label

• **label**: `string`

Label of the upload input (`dropzone` or the `button` variant)

Default value depends on `variant` prop
- 'dropzone' => 'Drag and drop files here or click to upload'
- 'button' => 'Upload'

___

### shape

• **shape**: ``"rounded"`` \| ``"squared"``

Shape of the file upload components

___

### state

• **state**: [`FileUploadState`](../README.md#fileuploadstate)

State of the file provider reducer

___

### variant

• **variant**: ``"button"`` \| ``"dropzone"``

Changes the rendered file upload input component
Either a `button` or a `dropzone`
Note: Both can have files dropped onto them

## Methods

### addFile

▸ `Optional` **addFile**(`file`): `void`

Function to add a single file to the managed files

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `File` |

#### Returns

`void`

___

### removeFile

▸ `Optional` **removeFile**(`id`): `void`

Function to remove a single file from the managed files

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`
