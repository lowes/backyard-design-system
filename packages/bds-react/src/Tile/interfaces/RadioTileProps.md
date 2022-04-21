# Interface: RadioTileProps

## Hierarchy

- `Omit`<`RadioProps`, `RadioTileOverrideProps`\>

  ↳ **`RadioTileProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### checked

• `Optional` **checked**: `boolean`

Whether or not `RadioTile` is checked

#### Overrides

Omit.checked

___

### children

• `Optional` **children**: `ReactNode`

Customize a label for the radio input

#### Inherited from

Omit.children

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Inherited from

Omit.className

___

### color

• `Optional` **color**: ``"surface"`` \| ``"subdued"``

Changes card styling to provided variant style

#### Overrides

Omit.color

___

### defaultChecked

• `Optional` **defaultChecked**: `boolean`

Whether or not the radio is checked by default

#### Overrides

Omit.defaultChecked

___

### disabled

• `Optional` **disabled**: `boolean`

Apply disabled styling if 'true'

#### Overrides

Omit.disabled

___

### id

• `Optional` **id**: `string`

DOM ID of `input`

#### Inherited from

Omit.id

___

### name

• `Optional` **name**: `string`

DOM Name of the internal `input`
Note: Required when NOT a child of `RadioGroup`

#### Overrides

Omit.name

___

### onChange

• `Optional` **onChange**: (`event`: `FormEvent`<`Element`\>) => `void`

#### Type declaration

▸ (`event`): `void`

`onChange` function triggered when value of `input` changes
Chained through `RadioGroup` parent if present

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FormEvent`<`Element`\> |

##### Returns

`void`

#### Overrides

Omit.onChange

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the edges

#### Overrides

Omit.shape

___

### value

• `Optional` **value**: `string`

Value of the internal `input`

#### Overrides

Omit.value

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLLabelElement`, ``""``\>

Used to apply props on the radio wrapper
