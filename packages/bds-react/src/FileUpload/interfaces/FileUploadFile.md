# Interface: FileUploadFile

`FileUploadFile` defines an extended `File` instance
that provides more UI interactions with them

## Hierarchy

- `File`

  ↳ **`FileUploadFile`**

  ↳↳ [`FileUploadItemProps`](FileUploadItemProps.md)

## Properties

### errors

• `Optional` **errors**: `FileError`[]

List of `FileError`s that define which errors
to notify the user about

They generally have a `message` and a `code` property

Example
`[{ message: 'Error message', code: 'error-code' }]

___

### id

• `Optional` **id**: `string`

Unique ID of the component to distinguish it from other files

___

### state

• `Optional` **state**: ``"accepted"`` \| ``"completed"`` \| ``"rejected"`` \| ``"error"`` \| ``"loading"`` \| ``"created"`` \| ``"enabled"``

State of the file

General life cycle of a file in `FileUpload` is either
- `created` ->
 - `accepted`
 - `rejected`
or
- `created` -> `loading` ->
 - `completed` -> `accepted`
 - `error` -> `rejected`

## Methods

### modify

▸ `Optional` **modify**(`file`): `void`

Function that modifies any part of `FileUploadFile`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`FileUploadFile`](FileUploadFile.md) |

#### Returns

`void`

___

### remove

▸ `Optional` **remove**(): `void`

Removes file from `FileUpload`

#### Returns

`void`

___

### setErrors

▸ `Optional` **setErrors**(`errors?`): `void`

Sets a list of errors when state is not being updated

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors?` | `FileError`[] |

#### Returns

`void`

___

### setState

▸ `Optional` **setState**(`state`, `errors?`): `void`

Sets a new state for the file and can also set a list of errors

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``"accepted"`` \| ``"completed"`` \| ``"rejected"`` \| ``"error"`` \| ``"loading"`` \| ``"created"`` \| ``"enabled"`` |
| `errors?` | `FileError`[] |

#### Returns

`void`
