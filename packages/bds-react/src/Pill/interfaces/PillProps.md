# Interface: PillProps

## Hierarchy

- `BackyardBaseProps`<[`PillRef`](../README.md#pillref), `PillOverrideProps`\>

  ↳ **`PillProps`**

## Properties

### anchor

• `Optional` **anchor**: (``"top"`` \| ``"bottom"`` \| ``"left"`` \| ``"right"``)[]

The anchor of the pill [y-pos, x-pos]
top-left, top-right, bottom-left, bottom-right

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactNode`

The pill will be added relative to this node.

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

DOM Class Name for pill

#### Overrides

BackyardBaseProps.className

___

### color

• `Optional` **color**: ``"dark-blue"`` \| ``"blue"`` \| ``"light-blue"`` \| ``"interactive"`` \| ``"green"`` \| ``"red"`` \| ``"gold"`` \| ``"lfp-yellow"`` \| ``"neutral"``

The color of the component. It supports those theme colors that make sense for this component.

#### Overrides

BackyardBaseProps.color

___

### display

• `Optional` **display**: `string`

Display type of wrapper
Useful if you need a blocking 'flex'

___

### invisible

• `Optional` **invisible**: `boolean`

Whether or not the pill is invisible
If invisible, still renders children; only the pill is invisible

___

### max

• `Optional` **max**: `number`

Maximum value of pill number

#### Overrides

BackyardBaseProps.max

___

### shape

• `Optional` **shape**: ``"circle"`` \| ``"dot"``

Shape of pill
Useful if you still want to provide a `value`, but force a dot

#### Overrides

BackyardBaseProps.shape

___

### size

• `Optional` **size**: ``"medium"`` \| ``"jumbo"``

Change the size of the pill

___

### value

• `Optional` **value**: `number`

Value of pill

#### Overrides

BackyardBaseProps.value

___

### variant

• `Optional` **variant**: ``"filled"`` \| ``"outlined"`` \| ``"indicator"``

Variant of pill

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLSpanElement`, ``""``\> & { `display?`: `string`  }

Wrapper props of pill and children
Useful for if you want to set the `style` prop of the wrapper
