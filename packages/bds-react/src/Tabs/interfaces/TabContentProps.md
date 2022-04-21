# Interface: TabContentProps

## Hierarchy

- `BackyardBaseProps`<[`TabContentRef`](../README.md#tabcontentref)\>

  ↳ **`TabContentProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• **children**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

The content displayed within the tab content area.

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

Adds a class name to the TabContent component's wrapper.

#### Overrides

BackyardBaseProps.className

___

### id

• **id**: `string`

Required for accessability.

This is the id that the Tab component's `aria-controls` property must point to.
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role

#### Overrides

BackyardBaseProps.id

___

### selected

• `Optional` **selected**: `boolean`

If the current Tab associated with this TabContent is selected. This is used to
change the value for the hidden property on TabContent.

#### Overrides

BackyardBaseProps.selected
