# Interface: ListPickerProps

## Hierarchy

- `Omit`<`ListSelectorProps`, `ListPickerOverrideProps`\>

  ↳ **`ListPickerProps`**

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

#### Inherited from

Omit.children

___

### defaultValue

• `Optional` **defaultValue**: `string`

___

### enableGlobalKeyDown

• `Optional` **enableGlobalKeyDown**: `boolean`

Enables the global key down listener to listen for arrow key interactions

#### Inherited from

Omit.enableGlobalKeyDown

___

### format

• `Optional` **format**: `string`

___

### multiple

• `Optional` **multiple**: `boolean`

Whether or not list selector is multiple selection or single selection

#### Inherited from

Omit.multiple

___

### options

• `Optional` **options**: `ParsableDate`[] \| `ParsableDateObject`[] \| `ParsableDateRange`[]

___

### optionsLabel

• `Optional` **optionsLabel**: `string`

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

#### Overrides

Omit.shape

___

### type

• `Optional` **type**: ``"date"`` \| ``"time"``

#### Overrides

Omit.type

___

### value

• `Optional` **value**: `string`

___

### width

• `Optional` **width**: `string`

Width override for ListWrapper
Can be given a token (such as `size_128`) or other value (like `15rem`)

#### Inherited from

Omit.width

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `info`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `info` | [`ListPickerItemInfo`](ListPickerItemInfo.md) |

#### Returns

`void`

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

#### Inherited from

Omit.renderItem
