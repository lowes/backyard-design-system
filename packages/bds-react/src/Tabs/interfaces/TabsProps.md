# Interface: TabsProps

## Hierarchy

- `BackyardBaseProps`<[`TabsRef`](../README.md#tabsref)\>

  ↳ **`TabsProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>[]

The Tab components.

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

Adds a class name to the Tab component's wrapper.

#### Overrides

BackyardBaseProps.className

___

### defaultSelected

• `Optional` **defaultSelected**: `number`

The tab that is selected by default.

___

### isOnLayer

• `Optional` **isOnLayer**: `boolean`

Iverses the field color token. This should be used when the Tabs component is on a layer color.

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

If false, the TabContent for each tab is not attached to the DOM.

If true, the TabContent for each tab is attached to the DOM. This
option is best if you need the content in the DOM for SEO purposes.

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"``

Shape of the edges of the tabs

#### Overrides

BackyardBaseProps.shape

## Methods

### handleOnChange

▸ `Optional` **handleOnChange**(`event`): `void`

Sends a mouse or keyboard event based on how the change occurred.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> \| `KeyboardEvent`<`Element`\> |

#### Returns

`void`
