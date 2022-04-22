# Interface: ListSelectorProps

## Hierarchy

- `Omit`<`ListSelectorExtend`, `ListSelectorOverrideProps`\>

  ↳ **`ListSelectorProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### children

• `Optional` **children**: `ReactElement`<`OptionProps`, `string` \| `JSXElementConstructor`<`any`\>\>[]

Children to define options from

Required is `options` not defined,
Is overridden by `options` if defined

#### Overrides

Omit.children

___

### defaultValue

• `Optional` **defaultValue**: `ListSelectorValue` \| `ListSelectorValue`[]

Default value of the list selector

___

### enableGlobalKeyDown

• `Optional` **enableGlobalKeyDown**: `boolean`

Enables the global key down listener to listen for arrow key interactions

#### Inherited from

Omit.enableGlobalKeyDown

___

### multiple

• `Optional` **multiple**: `boolean`

Whether or not list selector is multiple selection or single selection

#### Overrides

Omit.multiple

___

### onChange

• `Optional` **onChange**: (`event`: `MouseEvent`<`Element`, `MouseEvent`\>, `value`: `string`[]) => `void` \| (`event`: `ChangeEvent`<`Element`\>, `item`: [`ListOptionInfo`](ListOptionInfo.md)) => `void`

`onChange` trigger function for when either
the native component or the custom calendar change interaction occurs

___

### options

• `Optional` **options**: [`ListSelectorOption`](ListSelectorOption.md)[]

List of selector options to render as list items

Is required if `children` are not defined,
Will override `children` if both defined.

#### Inherited from

Omit.options

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the first/last list item

#### Overrides

Omit.shape

___

### value

• `Optional` **value**: `ListSelectorValue` \| `ListSelectorValue`[]

Value of the list selector

___

### width

• `Optional` **width**: `string`

Width override for ListWrapper
Can be given a token (such as `size_128`) or other value (like `15rem`)

#### Inherited from

Omit.width

## Methods

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
