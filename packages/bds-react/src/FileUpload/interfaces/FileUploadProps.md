# Interface: FileUploadProps

## Hierarchy

- `Omit`<[`FileUploadBaseProps`](FileUploadBaseProps.md), `FileUploadOverrideProps`\>

- [`FileUploadProviderProps`](FileUploadProviderProps.md)

  ↳ **`FileUploadProps`**

## Properties

### accept

• `Optional` **accept**: `string`

File MIME type that 'react-dropzone' will use to accept or reject a file on the client.
Always validate files on a server instead of relying on the client.
See https://github.com/react-dropzone/attr-accept for more information.

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[accept](FileUploadProviderProps.md#accept)

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### buttonProps

• `Optional` **buttonProps**: `ButtonProps`

Buton override props.

#### Overrides

Omit.buttonProps

___

### caption

• `Optional` **caption**: `string`

Caption text of the component

Add a relevant caption to describe what the user should submit

Defaults to `Caption text of the component above the upload input`

#### Overrides

Omit.caption

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

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[defaultFiles](FileUploadProviderProps.md#defaultfiles)

___

### delayCompleted

• `Optional` **delayCompleted**: `number` \| ``false``

Number of milliseconds to delay file item's animated transition from
`completed` (`<Checkbox />`) state to `accepted` (`<Close />`) state

Set to `false` to disable the transition
Note: The `<Checkbox />` is not interactable for the user

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[delayCompleted](FileUploadProviderProps.md#delaycompleted)

___

### disabled

• `Optional` **disabled**: `boolean`

If true, disable the file upload input (button or dropzone)

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[disabled](FileUploadProviderProps.md#disabled)

___

### dropzoneProps

• `Optional` **dropzoneProps**: `DropzoneRootProps`

`DropzoneRootProps` to extend `react-dropzone` with

See https://react-dropzone.js.org/#src for props

#### Inherited from

Omit.dropzoneProps

___

### errorAlertProps

• `Optional` **errorAlertProps**: `AlertProps`

`AlertProps` to extend error `Alert` with

#### Inherited from

Omit.errorAlertProps

___

### errorText

• `Optional` **errorText**: `ReactNode`

Error text to display to user on an error

#### Inherited from

Omit.errorText

___

### heading

• `Optional` **heading**: `string`

Heading text of the component

Add a relevant title to what the user is submitting for

Defaults to `Upload`

#### Overrides

Omit.heading

___

### inputProps

• `Optional` **inputProps**: `DropzoneInputProps`

`DropzoneInputProps` to extend input component with
See https://react-dropzone.js.org/#src for props

#### Inherited from

Omit.inputProps

___

### label

• `Optional` **label**: `string`

Label of the upload input (`dropzone` or the `button` variant)

Default value depends on `variant` prop
- 'dropzone' => 'Drag and drop files here or click to upload'
- 'button' => 'Upload'

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[label](FileUploadProviderProps.md#label)

___

### maxFiles

• `Optional` **maxFiles**: `number`

Maximum number of files that can be selected at a time

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[maxFiles](FileUploadProviderProps.md#maxfiles)

___

### maxSize

• `Optional` **maxSize**: `number`

Maximum size allowed for the files

#### Overrides

FileUploadProviderProps.maxSize

___

### minSize

• `Optional` **minSize**: `number`

Minimum size allowed for the files

#### Overrides

FileUploadProviderProps.minSize

___

### multiple

• `Optional` **multiple**: `boolean`

Whether or not multiple files can be uploaded

#### Overrides

Omit.multiple

___

### noClick

• `Optional` **noClick**: `boolean`

If true, remove `onClick` handling that will display file selection

#### Overrides

FileUploadProviderProps.noClick

___

### noDrag

• `Optional` **noDrag**: `boolean`

If true, remove drag events handling

#### Overrides

FileUploadProviderProps.noDrag

___

### noKeyboard

• `Optional` **noKeyboard**: `boolean`

If true, remove `onKeyDown` handling that will display file selection

#### Overrides

FileUploadProviderProps.noKeyboard

___

### onChange

• `Optional` **onChange**: (`info`: [`FileUploadChangeInfo`](../README.md#fileuploadchangeinfo)) => `void`

#### Type declaration

▸ (`info`): `void`

Trigger function when component state changes.

Note: Different from `onDrop`, since it will trigger whenever
files are both added or removed via any method.

`function(info: FileUploadChangeInfo) => void`
- info: `{ files: Files }`

##### Parameters

| Name | Type |
| :------ | :------ |
| `info` | [`FileUploadChangeInfo`](../README.md#fileuploadchangeinfo) |

##### Returns

`void`

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[onChange](FileUploadProviderProps.md#onchange)

___

### onDrop

• `Optional` **onDrop**: (`event`: `DropEvent`, `info`: [`FileUploadDropInfo`](../README.md#fileuploaddropinfo)) => `void`

#### Type declaration

▸ (`event`, `info`): `void`

Trigger function on drop event or when files are selected via menu.

`function(event: DropEvent, info: FileUploadDropInfo) => void`
- event: The event source of the callback
- info: `{ files: Files, acceptedFiles: Files, rejectedFiles: Files }`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DropEvent` |
| `info` | [`FileUploadDropInfo`](../README.md#fileuploaddropinfo) |

##### Returns

`void`

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[onDrop](FileUploadProviderProps.md#ondrop)

___

### onDropAccepted

• `Optional` **onDropAccepted**: <T\>(`files`: `T`[], `event`: `DropEvent`) => `void`

#### Type declaration

▸ <`T`\>(`files`, `event`): `void`

Trigger function on drop event when files are accepted by `react-dropzone`

Note: This function only provides raw `File` instances

See https://react-dropzone.js.org/#src for more information

`(files: File[], event: DropEvent) => void`
- files: List of files that were accepted
- event: The event source of the callback

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `File` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `files` | `T`[] |
| `event` | `DropEvent` |

##### Returns

`void`

#### Overrides

FileUploadProviderProps.onDropAccepted

___

### onDropRejected

• `Optional` **onDropRejected**: (`fileRejections`: `FileRejection`[], `event`: `DropEvent`) => `void`

#### Type declaration

▸ (`fileRejections`, `event`): `void`

Trigger function on drop event when files are rejected by `react-dropzone`

Note: This function only provides raw `File` instances

See https://react-dropzone.js.org/#src for more information

`(files: File[], event: DropEvent) => void`
- files: List of files that were accepted
- event: The event source of the callback

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileRejections` | `FileRejection`[] |
| `event` | `DropEvent` |

##### Returns

`void`

#### Overrides

FileUploadProviderProps.onDropRejected

___

### onError

• `Optional` **onError**: (`errorFiles`: [`Files`](../README.md#files), `successFiles`: [`Files`](../README.md#files), `normalFiles`: [`Files`](../README.md#files)) => `void`

#### Type declaration

▸ (`errorFiles`, `successFiles`, `normalFiles`): `void`

Trigger function for when an error is in one or more files.

`function(files: Files) => void`
- files: List of files that contain an error

##### Parameters

| Name | Type |
| :------ | :------ |
| `errorFiles` | [`Files`](../README.md#files) |
| `successFiles` | [`Files`](../README.md#files) |
| `normalFiles` | [`Files`](../README.md#files) |

##### Returns

`void`

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[onError](FileUploadProviderProps.md#onerror)

___

### onFileAdd

• `Optional` **onFileAdd**: (`file`: [`FileUploadFile`](FileUploadFile.md)[], `allFiles`: [`FileUploadFile`](FileUploadFile.md)[]) => `void`

#### Type declaration

▸ (`file`, `allFiles`): `void`

Trigger function for when files are added

`function(files: Files) => void`
- files: List of files that were added
- allFiles: List of all files added to the component

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`FileUploadFile`](FileUploadFile.md)[] |
| `allFiles` | [`FileUploadFile`](FileUploadFile.md)[] |

##### Returns

`void`

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[onFileAdd](FileUploadProviderProps.md#onfileadd)

___

### onFileDialogCancel

• `Optional` **onFileDialogCancel**: () => `void`

#### Type declaration

▸ (): `void`

Trigger function for when user cancels the file selection dialog

`function() => void`

##### Returns

`void`

#### Overrides

FileUploadProviderProps.onFileDialogCancel

___

### onFileRemove

• `Optional` **onFileRemove**: (`file`: [`FileUploadFile`](FileUploadFile.md)[], `allFiles`: [`FileUploadFile`](FileUploadFile.md)[]) => `void`

#### Type declaration

▸ (`file`, `allFiles`): `void`

Trigger function for when files are removed

`function(files: Files) => void`
- files: List of files that were removed
- allFiles: List of all files added to the component

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`FileUploadFile`](FileUploadFile.md)[] |
| `allFiles` | [`FileUploadFile`](FileUploadFile.md)[] |

##### Returns

`void`

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[onFileRemove](FileUploadProviderProps.md#onfileremove)

___

### onSuccess

• `Optional` **onSuccess**: (`successFiles`: [`Files`](../README.md#files), `errorFiles`: [`Files`](../README.md#files), `normalFiles`: [`Files`](../README.md#files)) => `void`

#### Type declaration

▸ (`successFiles`, `errorFiles`, `normalFiles`): `void`

Trigger function for when no file has an error.
`function(files: Files) => void`
- files: List of files that do not contain an error

##### Parameters

| Name | Type |
| :------ | :------ |
| `successFiles` | [`Files`](../README.md#files) |
| `errorFiles` | [`Files`](../README.md#files) |
| `normalFiles` | [`Files`](../README.md#files) |

##### Returns

`void`

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[onSuccess](FileUploadProviderProps.md#onsuccess)

___

### options

• `Optional` **options**: `DropzoneOptions`

Options to customize `react-dropzone` dependency
See https://react-dropzone.js.org/#src for more information

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[options](FileUploadProviderProps.md#options)

___

### override

• `Optional` **override**: `object`

`FileUploadProvider` override props to provide to children

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[override](FileUploadProviderProps.md#override)

___

### preventDropOnDocument

• `Optional` **preventDropOnDocument**: `boolean`

If false, allow dropped items to take over the current browser window

#### Overrides

FileUploadProviderProps.preventDropOnDocument

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the file upload components

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[shape](FileUploadProviderProps.md#shape)

___

### variant

• `Optional` **variant**: ``"button"`` \| ``"dropzone"``

Changes the rendered file upload input component
Either a `button` or a `dropzone`
Note: Both can have files dropped onto them

#### Overrides

[FileUploadProviderProps](FileUploadProviderProps.md).[variant](FileUploadProviderProps.md#variant)
