# Interface: ListOptionProps

## Hierarchy

- `BackyardBaseProps`<[`ListOptionRef`](../README.md#listoptionref), `ListOptionOverrideProps`\>

  ↳ **`ListOptionProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### component

• `Optional` **component**: `any`

Component wrapper of the list item
Can be an HTML tag (`li`) or component

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not the list item is disabled for selecting

#### Overrides

BackyardBaseProps.disabled

___

### icon

• `Optional` **icon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon Component to place in list item

___

### selected

• `Optional` **selected**: `boolean`

Whether or not the list item is selected

#### Overrides

BackyardBaseProps.selected

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

The shape of the list option

#### Overrides

BackyardBaseProps.shape

___

### size

• `Optional` **size**: ``"normal"`` \| ``"condensed"`` \| ``"small"`` \| ``"medium"`` \| ``"large"`` \| ``"jumbo"`` \| ``"full-width"`` \| ``"extra_small"``

The size of component

___

### value

• `Optional` **value**: `string`

Value of list item

#### Overrides

BackyardBaseProps.value

## Methods

### onDeselect

▸ `Optional` **onDeselect**(`option`): `void`

Triggers when the list option is deselected

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`ListOptionValues`](ListOptionValues.md) |

#### Returns

`void`

___

### onSelect

▸ `Optional` **onSelect**(`option`): `void`

Triggers when the list option is selected

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`ListOptionValues`](ListOptionValues.md) |

#### Returns

`void`
