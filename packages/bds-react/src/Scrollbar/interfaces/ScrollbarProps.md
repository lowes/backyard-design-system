# Interface: ScrollbarProps

## Hierarchy

- `BackyardBaseProps`<[`ScrollbarRef`](../README.md#scrollbarref)\>

  ↳ **`ScrollbarProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### className

• `Optional` **className**: `string`

Classname for the ScrollbarWrapper

#### Overrides

BackyardBaseProps.className

___

### id

• `Optional` **id**: `string`

Id for the content the ScrollbarWrapper is wrapping

#### Overrides

BackyardBaseProps.id

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

Additional props for the ScrollbarWrapper

## Methods

### onResize

▸ `Optional` **onResize**(): `void`

#### Returns

`void`

___

### onScroll

▸ `Optional` **onScroll**(): `void`

Used to pass additional functionality to the onScroll event

#### Returns

`void`

#### Overrides

BackyardBaseProps.onScroll
