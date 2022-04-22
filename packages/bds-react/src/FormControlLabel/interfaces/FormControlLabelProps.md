# Interface: FormControlLabelProps

## Hierarchy

- `BackyardBaseProps`<`HTMLLabelElement`\>

  ↳ **`FormControlLabelProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### className

• `Optional` **className**: `string`

DOM Class Name

#### Overrides

BackyardBaseProps.className

___

### control

• **control**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Required
Input Node for <FormControlLabel> to control and add label to

___

### disabled

• `Optional` **disabled**: `boolean`

Whether or not <FormControlLabel> is disabled

This will also disabled any input in the `control` prop
There is no need to disable both

#### Overrides

BackyardBaseProps.disabled

___

### label

• `Optional` **label**: `string`

Text for <FormControlLabel> to use

#### Overrides

BackyardBaseProps.label
