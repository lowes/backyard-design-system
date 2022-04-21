# Interface: MenuProps

## Hierarchy

- `BackyardBaseProps`<[`MenuRef`](../README.md#menuref)\>

  ↳ **`MenuProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactNode`

Children of menu
Optionally, `items` can be given a list data structure instead

#### Overrides

BackyardBaseProps.children

___

### items

• `Optional` **items**: `MenuItemProps`[]

Menu Items to use if data list is provided instead of declarative children

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the component

#### Overrides

BackyardBaseProps.shape

___

### width

• `Optional` **width**: `string`

Width override for ListWrapper
Can be given a token (such as `size_128`) or other value (like `15rem`)

#### Overrides

BackyardBaseProps.width

## Methods

### renderItem

▸ `Optional` **renderItem**(`props`, `ref?`): `ForwardRefExoticComponent`<`MenuItemProps`\>

List item to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `MenuItemProps` |
| `ref?` | `Ref`<`any`\> |

#### Returns

`ForwardRefExoticComponent`<`MenuItemProps`\>
