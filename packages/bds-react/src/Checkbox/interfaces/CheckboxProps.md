# Interface: CheckboxProps

## Hierarchy

- `BackyardBaseProps`<[`CheckboxRef`](../README.md#checkboxref), `CheckboxOverrideProps`\>

  ↳ **`CheckboxProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### checked

• `Optional` **checked**: `boolean`

Checked value for `input`
Uses controlled `checked` when defined

#### Overrides

BackyardBaseProps.checked

___

### checkedIcon

• `Optional` **checkedIcon**: `ComponentClass`<{}, `any`\>

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

Checked value for `input` by default
Uses uncontrolled `checked` when defined

#### Overrides

BackyardBaseProps.defaultChecked

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not `Checkbox` is disabled

#### Overrides

BackyardBaseProps.disabled

___

### id

• `Optional` **id**: `string`

DOM ID for `input`

#### Overrides

BackyardBaseProps.id

___

### indeterminate

• `Optional` **indeterminate**: `boolean`

Whether or not `input` is indeterminate

___

### indeterminateIcon

• `Optional` **indeterminateIcon**: `ComponentClass`<{}, `any`\>

___

### name

• `Optional` **name**: `string`

DOM Name for `input`

#### Overrides

BackyardBaseProps.name

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of `Checkbox`
Rounded -> Medium Border Radius
Squared -> (Default) No Border Radius

#### Overrides

BackyardBaseProps.shape

___

### value

• `Optional` **value**: `string`

Value for `input`

#### Overrides

BackyardBaseProps.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\>

Props to extend `CheckboxWrapper` with
Useful for setting `style` of `CheckboxWrapper` instead of styling the `input`

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `checked`): `void`

`onChange` trigger function

**`argument`** {Event} event - DOM event

**`argument`** {boolean} checked - Whether or not `input` is checked

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `checked` | `boolean` |

#### Returns

`void`
