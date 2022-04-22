# Interface: BreadcrumbMobileProps

## Hierarchy

- `BackyardBaseProps`<[`BreadcrumbMobileRef`](../README.md#breadcrumbmobileref)\>

  ↳ **`BreadcrumbMobileProps`**

## Properties

### ariaLabel

• `Optional` **ariaLabel**: `string`

Label for aria to speak

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### className

• `Optional` **className**: `string`

React DOM Class

#### Overrides

BackyardBaseProps.className

___

### crumb

• `Optional` **crumb**: `ComponentClass`<{}, `any`\>

Component to render crumb with

Defaults to `MenuItem` component

___

### crumbs

• **crumbs**: `LinkCrumbProps`[]

Crumb items to render

___

### menuPopoverProps

• `Optional` **menuPopoverProps**: `MenuPopoverProps`

`MenuPopover` props override

___

### menuProps

• `Optional` **menuProps**: `MenuProps`

`Menu` props override

___

### toggle

• `Optional` **toggle**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Toggle element for opening/closing the mobile breadcrumb popover

**`default`** `IconButton`
