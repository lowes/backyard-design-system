# Interface: TabProps

## Hierarchy

- `BackyardBaseProps`<[`TabRef`](../README.md#tabref)\>

  ↳ **`TabProps`**

## Properties

### ariaControls

• `Optional` **ariaControls**: `string`

The id of the TabContent associated with the tab.

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### className

• `Optional` **className**: `string`

Adds a class to the tab

#### Overrides

BackyardBaseProps.className

___

### disabled

• `Optional` **disabled**: `boolean`

Wether or not the tab is disabled

#### Overrides

BackyardBaseProps.disabled

___

### id

• `Optional` **id**: `string`

Adds an id to the tab

#### Overrides

BackyardBaseProps.id

___

### index

• `Optional` **index**: `number`

The index of the tab

___

### label

• `Optional` **label**: `string`

The text within a tab.

#### Overrides

BackyardBaseProps.label

___

### role

• `Optional` **role**: ``"tab"`` \| ``"presentation"``

The role for the tab.

#### Overrides

BackyardBaseProps.role

___

### selected

• `Optional` **selected**: `boolean`

Wether or not the tab is selected

#### Overrides

BackyardBaseProps.selected

## Methods

### onClick

▸ `Optional` **onClick**(`event`): `void`

Trigger function for onClick.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Overrides

BackyardBaseProps.onClick

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

Trigger function for onKeyDown.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

#### Overrides

BackyardBaseProps.onKeyDown
