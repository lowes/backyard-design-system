# Interface: BreadcrumbProps

## Hierarchy

- `Omit`<`BreadcrumbDesktopProps`, `BreadcrumbOverrideProps`\>

- `Omit`<`BreadcrumbMobileProps`, `BreadcrumbOverrideProps`\>

  ↳ **`BreadcrumbProps`**

## Properties

### ariaLabel

• `Optional` **ariaLabel**: `string`

Label for aria to speak

#### Inherited from

Omit.ariaLabel

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

Omit.as

___

### className

• `Optional` **className**: `string`

React DOM Class

#### Inherited from

Omit.className

___

### crumb

• `Optional` **crumb**: `ComponentClass`<{}, `any`\>

Component to render crumb with
Defaults to `Link` component

#### Inherited from

Omit.crumb

___

### crumbs

• **crumbs**: `LinkCrumbProps`[]

List of crumb props to render as crumbs

___

### menuPopoverProps

• `Optional` **menuPopoverProps**: `MenuPopoverProps`

`MenuPopover` props override

#### Inherited from

Omit.menuPopoverProps

___

### menuProps

• `Optional` **menuProps**: `MenuProps`

`Menu` props override

#### Inherited from

Omit.menuProps

___

### render

• `Optional` **render**: ``"auto"`` \| ``"desktop"`` \| ``"mobile"``

Determines the rendered breadcrumb component

**`default`** 'auto'

___

### toggle

• `Optional` **toggle**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Toggle element for opening/closing the mobile breadcrumb popover

**`default`** `IconButton`

#### Inherited from

Omit.toggle
