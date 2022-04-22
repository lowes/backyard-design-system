# Interface: FormControlContextValues

Context values that can be passed to children via

`const context = React.useContext(FormControlContext)`

## Hierarchy

- [`FormContextProps`](FormContextProps.md)

  ↳ **`FormControlContextValues`**

## Properties

### context

• **context**: `FormContexts`

Context map

___

### disabled

• `Optional` **disabled**: `boolean`

Controls the disabled state of the child form elements

#### Inherited from

[FormContextProps](FormContextProps.md).[disabled](FormContextProps.md#disabled)

___

### indent

• `Optional` **indent**: `boolean` \| ``"size_0"`` \| ``"size_1"`` \| ``"size_2"`` \| ``"size_3"`` \| ``"size_4"`` \| ``"size_5"`` \| ``"size_6"`` \| ``"size_7"`` \| ``"size_8"`` \| ``"size_10"`` \| ``"size_12"`` \| ``"size_14"`` \| ``"size_16"`` \| ``"size_18"`` \| ``"size_20"`` \| ``"size_24"`` \| ``"size_28"`` \| ``"size_32"`` \| ``"size_36"`` \| ``"size_40"`` \| ``"size_44"`` \| ``"size_48"`` \| ``"size_52"`` \| ``"size_56"`` \| ``"size_60"`` \| ``"size_64"`` \| ``"size_68"`` \| ``"size_72"`` \| ``"size_76"`` \| ``"size_80"`` \| ``"size_84"`` \| ``"size_88"`` \| ``"size_92"`` \| ``"size_96"`` \| ``"size_100"`` \| ``"size_104"`` \| ``"size_108"`` \| ``"size_112"`` \| ``"size_116"`` \| ``"size_120"`` \| ``"size_124"`` \| ``"size_128"``

Controls the indention of the helper text

#### Inherited from

[FormContextProps](FormContextProps.md).[indent](FormContextProps.md#indent)

___

### setContext

• **setContext**: `Dispatch`<`SetStateAction`<`FormContexts`\>\>

Sets a new form control context from a child

___

### state

• `Optional` **state**: ``"default"`` \| ``"error"`` \| ``"success"`` \| ``"warning"`` \| ``"info"``

Controls the possible states to provide to form elements

#### Inherited from

[FormContextProps](FormContextProps.md).[state](FormContextProps.md#state)

## Methods

### add

▸ **add**(`id`, `newContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `newContext` | `Partial`<[`FormControlContextValues`](FormControlContextValues.md)\> |

#### Returns

`void`

___

### remove

▸ **remove**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`void`

___

### update

▸ **update**(`id`, `newContext`): `void`

Updates context with new values

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `newContext` | `Partial`<[`FormControlContextValues`](FormControlContextValues.md)\> |

#### Returns

`void`
