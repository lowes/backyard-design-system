# Interface: RadioProps

## Hierarchy

- `BackyardBaseProps`<[`RadioRef`](../README.md#radioref)\>

  ↳ **`RadioProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### checked

• `Optional` **checked**: `boolean`

Whether or not `Radio` is checked
Use for a controlled component

#### Overrides

BackyardBaseProps.checked

___

### children

• `Optional` **children**: `ReactNode`

Customize a label for the radio input

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

Whether or not the radio is checked by default
Use for an uncontrolled component

#### Overrides

BackyardBaseProps.defaultChecked

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not `Radio` is disabled

#### Overrides

BackyardBaseProps.disabled

___

### id

• `Optional` **id**: `string`

DOM ID of `input`

#### Overrides

BackyardBaseProps.id

___

### name

• `Optional` **name**: `string`

DOM Name of `input`
Note: Required when NOT a child of `RadioGroup`

#### Overrides

BackyardBaseProps.name

___

### value

• `Optional` **value**: `string`

Value of `input`

#### Overrides

BackyardBaseProps.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\>

Props to apply to wrapper
Useful for setting style of wrapper instead of `input`

## Methods

### onChange

▸ `Optional` **onChange**(`event`): `void`

`onChange` function triggered when value of `input` changes
Chained through `RadioGroup` parent if present

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`Element`\> |

#### Returns

`void`

#### Overrides

BackyardBaseProps.onChange
