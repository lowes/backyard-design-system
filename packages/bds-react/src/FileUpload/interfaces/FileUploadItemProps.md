# Interface: FileUploadItemProps

## Hierarchy

- `BackyardBaseProps`<[`FileUploadItemRef`](../README.md#fileuploaditemref), `FileUploadItemOverrideProps`\>

- [`FileUploadFile`](FileUploadFile.md)

  ↳ **`FileUploadItemProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### errors

• `Optional` **errors**: `FileError`[]

List of `FileError`s that define which errors
to notify the user about

They generally have a `message` and a `code` property

Example
`[{ message: 'Error message', code: 'error-code' }]

#### Inherited from

[FileUploadFile](FileUploadFile.md).[errors](FileUploadFile.md#errors)

___

### id

• `Optional` **id**: `string`

Unique ID of the file

#### Overrides

[FileUploadFile](FileUploadFile.md).[id](FileUploadFile.md#id)

___

### name

• **name**: `string`

Name of the file

#### Overrides

FileUploadFile.name

___

### state

• `Optional` **state**: ``"accepted"`` \| ``"completed"`` \| ``"rejected"`` \| ``"error"`` \| ``"loading"`` \| ``"created"`` \| ``"enabled"``

State of the file

#### Overrides

[FileUploadFile](FileUploadFile.md).[state](FileUploadFile.md#state)

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

#### Inherited from

[FileUploadFile](FileUploadFile.md).[modify](FileUploadFile.md#modify)

___

### remove

▸ `Optional` **remove**(): `void`

Removes file from `FileUpload`

#### Returns

`void`

#### Inherited from

[FileUploadFile](FileUploadFile.md).[remove](FileUploadFile.md#remove)

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

#### Inherited from

[FileUploadFile](FileUploadFile.md).[setErrors](FileUploadFile.md#seterrors)

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

#### Inherited from

[FileUploadFile](FileUploadFile.md).[setState](FileUploadFile.md#setstate)
