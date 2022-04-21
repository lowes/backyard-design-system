# Interface: RadioGroupProps

## Hierarchy

- `Omit`<`FormGroupProps`, `RadioGroupOverrideProps`\>

  ↳ **`RadioGroupProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactNode`

Children of `RadioGroup`, which have access to `RadioGroupContext`
Must contain at least one `Radio` child
Does not require `Radio` to be direct children

#### Overrides

Omit.children

___

### className

• `Optional` **className**: `string`

DOM class name

#### Inherited from

Omit.className

___

### defaultValue

• `Optional` **defaultValue**: `string`

Default Value of `RadioGroup`

#### Overrides

Omit.defaultValue

___

### direction

• `Optional` **direction**: ``"column"`` \| ``"row"``

Direction to render children

#### Inherited from

Omit.direction

___

### name

• **name**: `string`

Required
DOM field `name` for all `Radio`s in child tree of `RadioGroup`

#### Overrides

Omit.name

___

### spacing

• `Optional` **spacing**: `string`

Spacing token between form inputs

#### Inherited from

Omit.spacing

___

### value

• `Optional` **value**: `string`

Value of `RadioGroupContext`
Set by current active `Radio` child of `RadioGroup`

#### Overrides

Omit.value

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

`onChange` function to trigger when `value` of `RadioGroupContext` changes

**`argument`** {Event} event - DOM Event of `onChange`

**`argument`** {boolean} value -  Value from DOM Event target

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `value` | `string` |

#### Returns

`void`
