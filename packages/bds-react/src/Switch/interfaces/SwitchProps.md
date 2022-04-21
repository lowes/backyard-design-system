# Interface: SwitchProps

## Hierarchy

- `BackyardBaseProps`<[`SwitchRef`](../README.md#switchref), `SwitchOverrideProps`\>

  ↳ **`SwitchProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### checked

• `Optional` **checked**: `boolean`

Whether or not `Switch` is checked
Uses controlled `checked` if set

#### Overrides

BackyardBaseProps.checked

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

Whether or not `Switch` is checked by default
Uses uncontrolled `checked` if set

#### Overrides

BackyardBaseProps.defaultChecked

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not `Switch` is disabled

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

DOM Name for `input`

#### Overrides

BackyardBaseProps.name

___

### size

• `Optional` **size**: ``"large"`` \| ``"small"``

Size of the switch

___

### value

• `Optional` **value**: `string`

Value of `Switch`
Useful for forms if something other than a boolean is needed when checked

#### Overrides

BackyardBaseProps.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\>

Props to extend `SwitchWrapper` with
Useful for setting `style` overrides for `SwitchWrapper` instead of `input`

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `checked`): `void`

`onChange` function triggered on `input`'s onChange DOM event

**`argument`** {Event} event - DOM event, `event.target` always set to `input` ref

**`argument`** {boolean} checked - `checked` value from `event.target`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `checked` | `boolean` |

#### Returns

`void`
