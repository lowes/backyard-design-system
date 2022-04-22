# Interface: AutocompleteProps

## Hierarchy

- `BackyardBaseProps`<[`AutocompleteRef`](../README.md#autocompleteref), `AutocompleteOverrideProps`\>

  ↳ **`AutocompleteProps`**

## Properties

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

Whether or not the autocomplete is a search input

___

### open

• `Optional` **open**: `boolean`

Whether or not the popover is open

#### Overrides

BackyardBaseProps.open

___

### openKeys

• `Optional` **openKeys**: `string`[]

Event keys that will trigger open when focused on

___

### options

• `Optional` **options**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

React element to render as popover content

___

### popoverProps

• `Optional` **popoverProps**: `Partial`<`PopoverProps`\>

Popover props to override Popover component with

___

### popperProps

• `Optional` **popperProps**: `Partial`<`PopoverProps`\>

Popover props to override Popover component with

Alias of `popoverProps`

___

### renderInput

• **renderInput**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

React element to render as popover input

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the input and the popover

#### Overrides

BackyardBaseProps.shape

___

### value

• `Optional` **value**: `string`

Value of the autocomplete

#### Overrides

BackyardBaseProps.value

## Methods

### onChange

▸ `Optional` **onChange**(`event`, `value`): `void`

Callback triggered when value of autocomplete changes

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

Callback triggered when popover closed

#### Returns

`void`

___

### onFocus

▸ `Optional` **onFocus**(`event`, `value`): `void`

Callback triggered when input focused

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

Callback triggered when key pressed with focus on input

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

___

### onOpen

▸ `Optional` **onOpen**(): `void`

Callback triggered when popover opens

#### Returns

`void`
