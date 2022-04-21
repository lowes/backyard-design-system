# Interface: UseFileReducerProps

## Properties

### defaultFiles

• **defaultFiles**: [`Files`](../README.md#files)

List of default files that are preloaded into the component

___

### maxFiles

• **maxFiles**: `number`

Maximum number of files that can be selected at a time

___

### onChange

• **onChange**: (`info`: [`FileUploadChangeInfo`](../README.md#fileuploadchangeinfo)) => `void`

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

___

### onDrop

• **onDrop**: (`event`: `DropEvent`, `info`: [`FileUploadDropInfo`](../README.md#fileuploaddropinfo)) => `void`

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

___

### onError

• **onError**: (`errorFiles`: [`Files`](../README.md#files), `successFiles`: [`Files`](../README.md#files), `normalFiles`: [`Files`](../README.md#files)) => `void`

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

___

### onFileAdd

• **onFileAdd**: (`file`: [`FileUploadFile`](FileUploadFile.md)[], `allFiles`: [`FileUploadFile`](FileUploadFile.md)[]) => `void`

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

___

### onFileRemove

• **onFileRemove**: (`file`: [`FileUploadFile`](FileUploadFile.md)[], `allFiles`: [`FileUploadFile`](FileUploadFile.md)[]) => `void`

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

___

### onSuccess

• **onSuccess**: (`successFiles`: [`Files`](../README.md#files), `errorFiles`: [`Files`](../README.md#files), `normalFiles`: [`Files`](../README.md#files)) => `void`

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
