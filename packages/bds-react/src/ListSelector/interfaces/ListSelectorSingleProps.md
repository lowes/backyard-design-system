# Interface: ListSelectorSingleProps

## Hierarchy

- `BackyardBaseProps`<[`ListSelectorSingleRef`](../README.md#listselectorsingleref), `ListSelectorSingleOverrideProps`\>

- [`UseListSelectorProps`](UseListSelectorProps.md)

  ↳ **`ListSelectorSingleProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

[UseListSelectorProps](UseListSelectorProps.md).[as](UseListSelectorProps.md#as)

___

### defaultValue

• `Optional` **defaultValue**: `string` \| `number`

Default value of the list selector

#### Overrides

BackyardBaseProps.defaultValue

___

### enableGlobalKeyDown

• `Optional` **enableGlobalKeyDown**: `boolean`

Enables the global key down listener to listen for arrow key interactions

___

### innerRef

• `Optional` **innerRef**: `RefObject`<`HTMLUListElement`\>

Forwarded ref from `List`

#### Inherited from

[UseListSelectorProps](UseListSelectorProps.md).[innerRef](UseListSelectorProps.md#innerref)

___

### innerref

• `Optional` **innerref**: `RefObject`<`HTMLUListElement`\>

Ref of the container List

#### Inherited from

[UseListSelectorProps](UseListSelectorProps.md).[innerref](UseListSelectorProps.md#innerref)

___

### options

• `Optional` **options**: [`ListSelectorOption`](ListSelectorOption.md)[]

List of selector options to render as list items

Is required if `children` are not defined,
Will override `children` if both defined.

#### Inherited from

[UseListSelectorProps](UseListSelectorProps.md).[options](UseListSelectorProps.md#options)

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the list

#### Overrides

BackyardBaseProps.shape

___

### value

• `Optional` **value**: `string` \| `number`

Value of the list selector

#### Overrides

[UseListSelectorProps](UseListSelectorProps.md).[value](UseListSelectorProps.md#value)

___

### width

• `Optional` **width**: `string`

Width override for ListWrapper
Can be given a token (such as `size_128`) or other value (like `15rem`)

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `item`): `void`

`onChange` function to trigger

**`argument`** {React.ChangeEvent} event - DOM Event of `onChange`

**`argument`** {ListOptionIfno} info -  Selected list item info

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `item` | [`ListOptionInfo`](ListOptionInfo.md) |

#### Returns

`void`

#### Inherited from

[UseListSelectorProps](UseListSelectorProps.md).[onChange](UseListSelectorProps.md#onchange)

___

### renderItem

▸ `Optional` **renderItem**(`props`, `ref?`): `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

List item to render

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ListOptionProps` |
| `ref?` | `Ref`<`any`\> |

#### Returns

`ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>
