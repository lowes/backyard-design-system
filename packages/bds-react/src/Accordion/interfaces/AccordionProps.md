# Interface: AccordionProps

## Hierarchy

- `BackyardBaseProps`<[`AccordionRef`](../README.md#accordionref), `AccordionOverrideProps`\>

  ↳ **`AccordionProps`**

## Properties

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

BackyardBaseProps.as

___

### children

• `Optional` **children**: `ReactNode`

Components that will be displayed when the Accordion is opened.

#### Overrides

BackyardBaseProps.children

___

### className

• `Optional` **className**: `string`

Adds a class name to the Accordion.

#### Overrides

BackyardBaseProps.className

___

### color

• `Optional` **color**: ``"transparent"`` \| ``"interactive"`` \| ``"neutral"``

The color of the accordion

#### Overrides

BackyardBaseProps.color

___

### defaultOpen

• `Optional` **defaultOpen**: `boolean`

The default state of the <Accordion /> when it is initially rendered.

___

### keepMounted

• `Optional` **keepMounted**: `boolean`

Keeps the children mounted.

___

### open

• `Optional` **open**: `boolean`

The controlled state of the <Accordidon />.

#### Overrides

BackyardBaseProps.open

___

### size

• `Optional` **size**: ``"small"`` \| ``"medium"`` \| ``"large"``

The size of the Accordion.

___

### subtitle

• `Optional` **subtitle**: `string`

The Accordion subtitle

___

### title

• `Optional` **title**: `string`

The Accordion title.

#### Overrides

BackyardBaseProps.title

___

### variant

• `Optional` **variant**: ``"triangle"`` \| ``"plus"``

Variant of the Accordion icons

## Methods

### onClick

▸ `Optional` **onClick**(`event`, `open`): `void`

Trigger function for onClick.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `AccordionEvents` |
| `open` | `boolean` |

#### Returns

`void`

___

### onClose

▸ `Optional` **onClose**(): ``null``

Trigger function for onClose.

#### Returns

``null``

___

### onOpen

▸ `Optional` **onOpen**(): ``null``

Trigger function for onOpen.

#### Returns

``null``
