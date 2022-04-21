# Interface: FileUploadProviderProps

## Hierarchy

- `Omit`<`DropzoneOptions`, `FileUploadProviderOverrideProps`\>

  ↳ **`FileUploadProviderProps`**

  ↳↳ [`FileUploadProps`](FileUploadProps.md)

## Properties

### accept

• `Optional` **accept**: `string`

File MIME type that 'react-dropzone' will use to accept or reject a file on the client.
Always validate files on a server instead of relying on the client.
See https://github.com/react-dropzone/attr-accept for more information.

#### Overrides

Omit.accept

___

### defaultFiles

• `Optional` **defaultFiles**: [`Files`](../README.md#files)

List of default files that are preloaded into the component

Example:
```
 defaultFiles={[
     // Can be any instance of File
     new File([""], 'file-example.png', { type: 'image/png' }),
     // Can be an object with File properties
     {
         name: 'file-example-2.pdf',
         lastModified: 1579187229298,
         size: 1462,
         type: 'application/pdf',
         // Can also include the state of the file
         state: 'error',
         errors: [{ message: 'No PDFs allowed', code: 'an-error' }]
     }
 ]}
```

___

### delayCompleted

• `Optional` **delayCompleted**: `number` \| ``false``

Number of milliseconds to delay file item's animated transition from
`completed` (`<Checkbox />`) state to `accepted` (`<Close />`) state

Set to `false` to disable the transition
Note: The `<Checkbox />` is not interactable for the user

___

### disabled

• `Optional` **disabled**: `boolean`

If true, disable the file upload input (button or dropzone)

#### Overrides

Omit.disabled

___

### label

• `Optional` **label**: `string`

Label of the upload input (`dropzone` or the `button` variant)

Default value depends on `variant` prop
- 'dropzone' => 'Drag and drop files here or click to upload'
- 'button' => 'Upload'

___

### maxFiles

• `Optional` **maxFiles**: `number`

Maximum number of files that can be selected at a time

#### Overrides

Omit.maxFiles

___

### options

• `Optional` **options**: `DropzoneOptions`

Options to customize `react-dropzone` dependency
See https://react-dropzone.js.org/#src for more information

___

### override

• `Optional` **override**: `object`

`FileUploadProvider` override props to provide to children

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the file upload components

___

### variant

• `Optional` **variant**: ``"button"`` \| ``"dropzone"``

Changes the rendered file upload input component
Either a `button` or a `dropzone`
Note: Both can have files dropped onto them

## Methods

### onChange

▸ `Optional` **onChange**(`info`): `void`

Trigger function when component state changes.

Note: Different from `onDrop`, since it will trigger whenever
files are both added or removed via any method.

`function(info: FileUploadChangeInfo) => void`
- info: `{ files: Files }`

#### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`FileUploadChangeInfo`](../README.md#fileuploadchangeinfo) |

#### Returns

`void`

___

### onDrop

▸ `Optional` **onDrop**(`event`, `info`): `void`

Trigger function on drop event or when files are selected via menu.

`function(event: DropEvent, info: FileUploadDropInfo) => void`
- event: The event source of the callback
- info: `{ files: Files, acceptedFiles: Files, rejectedFiles: Files }`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DropEvent` |
| `info` | [`FileUploadDropInfo`](../README.md#fileuploaddropinfo) |

#### Returns

`void`

___

### onError

▸ `Optional` **onError**(`errorFiles`, `successFiles`, `normalFiles`): `void`

Trigger function for when an error is in one or more files.

`function(files: Files) => void`
- files: List of files that contain an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorFiles` | [`Files`](../README.md#files) |
| `successFiles` | [`Files`](../README.md#files) |
| `normalFiles` | [`Files`](../README.md#files) |

#### Returns

`void`

___

### onFileAdd

▸ `Optional` **onFileAdd**(`file`, `allFiles`): `void`

Trigger function for when files are added

`function(files: Files) => void`
- files: List of files that were added
- allFiles: List of all files added to the component

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`FileUploadFile`](FileUploadFile.md)[] |
| `allFiles` | [`FileUploadFile`](FileUploadFile.md)[] |

#### Returns

`void`

___

### onFileRemove

▸ `Optional` **onFileRemove**(`file`, `allFiles`): `void`

Trigger function for when files are removed

`function(files: Files) => void`
- files: List of files that were removed
- allFiles: List of all files added to the component

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`FileUploadFile`](FileUploadFile.md)[] |
| `allFiles` | [`FileUploadFile`](FileUploadFile.md)[] |

#### Returns

`void`

___

### onSuccess

▸ `Optional` **onSuccess**(`successFiles`, `errorFiles`, `normalFiles`): `void`

Trigger function for when no file has an error.
`function(files: Files) => void`
- files: List of files that do not contain an error

#### Parameters

| Name | Type |
| :------ | :------ |
| `successFiles` | [`Files`](../README.md#files) |
| `errorFiles` | [`Files`](../README.md#files) |
| `normalFiles` | [`Files`](../README.md#files) |

#### Returns

`void`
