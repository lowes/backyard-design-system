# Interface: UseListSelectorProps

## Hierarchy

- `BackyardBaseProps`<[`ListSelectorSingleRef`](../README.md#listselectorsingleref), `ListSelectorOverrideProps`\>

  ↳ **`UseListSelectorProps`**

  ↳↳ [`ListSelectorSingleProps`](ListSelectorSingleProps.md)

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not list item is disabled

#### Overrides

BackyardBaseProps.disabled

___

### innerRef

• `Optional` **innerRef**: `RefObject`<`HTMLUListElement`\>

Forwarded ref from `List`

___

### innerref

• `Optional` **innerref**: `RefObject`<`HTMLUListElement`\>

Ref of the container List

___

### options

• `Optional` **options**: [`ListSelectorOption`](ListSelectorOption.md)[]

List of selector options to render as list items

Is required if `children` are not defined,
Will override `children` if both defined.

___

### value

• `Optional` **value**: `string` \| `number`

Value of the list item

#### Overrides

BackyardBaseProps.value

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
