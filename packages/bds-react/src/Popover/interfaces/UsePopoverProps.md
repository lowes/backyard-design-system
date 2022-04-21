# Interface: UsePopoverProps<R\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `HTMLElement` = `SelectRef` |

## Properties

### closeKeys

• `Optional` **closeKeys**: `string`[]

___

### containerRef

• **containerRef**: `MutableRefObject`<`HTMLDivElement`\>

___

### delayClose

• `Optional` **delayClose**: `number`

___

### delayOpen

• `Optional` **delayOpen**: `number`

___

### disabled

• `Optional` **disabled**: `Boolean`

___

### onClose

• `Optional` **onClose**: () => `void`

#### Type declaration

▸ (): `void`

Callback fired when the component requests to be closed.

##### Returns

`void`

___

### onOpen

• `Optional` **onOpen**: () => `void`

#### Type declaration

▸ (): `void`

Callback fired when the component requests to be open.

##### Returns

`void`

___

### open

• **open**: `boolean`

___

### openKeys

• `Optional` **openKeys**: `string`[]

___

### ref

• `Optional` **ref**: `MutableRefObject`<`R`\>

___

### referenceElement

• **referenceElement**: `R`

## Methods

### onBlur

▸ `Optional` **onBlur**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`R`, `Element`\> |

#### Returns

`void`

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`R`\> |

#### Returns

`void`

___

### onMouseDown

▸ `Optional` **onMouseDown**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`R`, `MouseEvent`\> |

#### Returns

`void`
