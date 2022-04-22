# Interface: PopProps

## Hierarchy

- `BackyardBaseProps`<[`PopRef`](../README.md#popref), `PopOverrideProps`\>

  ↳ **`PopProps`**

## Properties

### anchor

• **anchor**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### closeKeys

• `Optional` **closeKeys**: `string`[]

Event keys that will trigger close when focused on

___

### delayClose

• `Optional` **delayClose**: `number`

Amount in milliseconds to delay closing the popover
when a value is selected from the list

___

### delayOpen

• `Optional` **delayOpen**: `number`

Amount in milliseconds to delay opening the popover

___

### isSearch

• `Optional` **isSearch**: `boolean`

___

### open

• `Optional` **open**: `boolean`

#### Overrides

BackyardBaseProps.open

___

### openKeys

• `Optional` **openKeys**: `string`[]

Event keys that will trigger open when focused on

___

### pop

• `Optional` **pop**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

___

### popoverProps

• `Optional` **popoverProps**: `Partial`<`PopoverProps`\>

___

### popperProps

• `Optional` **popperProps**: `Partial`<`PopoverProps`\>

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the input and the popover.

#### Overrides

BackyardBaseProps.shape

___

### value

• `Optional` **value**: `string`

#### Overrides

BackyardBaseProps.value

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `ChangeEvent`<`Element`\> |
| `value` | `string` |

#### Returns

`void`

___

### onClose

▸ `Optional` **onClose**(): `void`

#### Returns

`void`

___

### onFocus

▸ `Optional` **onFocus**(`event`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |
| `value` | `string` |

#### Returns

`void`

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

___

### onOpen

▸ `Optional` **onOpen**(): `void`

#### Returns

`void`
