# Interface: ProgressStepProps

## Hierarchy

- `IconButtonProps`

  ↳ **`ProgressStepProps`**

## Properties

### ariaTitle

• `Optional` **ariaTitle**: `string`

See `ButtonProps`

#### Inherited from

IconButtonProps.ariaTitle

___

### as

• `Optional` **as**: `ElementType`<`any`\>

#### Inherited from

IconButtonProps.as

___

### caption

• `Optional` **caption**: `string`

Caption of the progress step

___

### children

• `Optional` **children**: `ReactNode`

`ProgressStepContent` can be passed to give context to
`ProgressStepContext` and `ProgressStepperContext`

#### Overrides

IconButtonProps.children

___

### className

• `Optional` **className**: `string`

DOM Class names

#### Overrides

IconButtonProps.className

___

### color

• `Optional` **color**: ``"interactive"`` \| ``"green"`` \| ``"red"`` \| ``"neutral"``

Type of button
- Interactive -> (Default) Lowe's Primary Color Palette
- Commerce -> Lowe's Commerce Color Palette
- Contrast -> High Contrast Black/White Color Palette

#### Inherited from

IconButtonProps.color

___

### completeIcon

• `Optional` **completeIcon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default icon to use on step complete

___

### disabled

• `Optional` **disabled**: `boolean`

Mark the step as disabled,
will also disable the button

#### Overrides

IconButtonProps.disabled

___

### elevation

• `Optional` **elevation**: `boolean`

Adds elevation to the button

#### Inherited from

IconButtonProps.elevation

___

### errorIcon

• `Optional` **errorIcon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default error icon to use on step error

___

### fullWidth

• `Optional` **fullWidth**: `boolean`

Makes button 100% the width of the container

#### Inherited from

IconButtonProps.fullWidth

___

### icon

• `Optional` **icon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Icon of the progress step button,
will override the `label` prop and any default icon
set by `completeIcon`, `errorIcon`, and `successIcon`

___

### iconAfter

• `Optional` **iconAfter**: `ReactNode`

Icon Node to display on right-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

#### Inherited from

IconButtonProps.iconAfter

___

### iconBefore

• `Optional` **iconBefore**: `ReactNode`

Icon Node to display on left-side of button text

Note: Do not use for an icon-only button, use `IconButton` for that

#### Inherited from

IconButtonProps.iconBefore

___

### index

• `Optional` **index**: `number`

The position of the progress step within the progress stepper

___

### label

• `Optional` **label**: `string`

Label text of the button for the progress step

#### Overrides

IconButtonProps.label

___

### last

• `Optional` **last**: `boolean`

Whether or not the progress step is rendered last

___

### selected

• `Optional` **selected**: `boolean`

Whether or not the progress step is selected

#### Overrides

IconButtonProps.selected

___

### shape

• `Optional` **shape**: ``"rounded"`` \| ``"squared"`` \| ``"circle"`` \| ``"custom"``

Shape of button
- Rounded -> Medium Border Radius
- Squared -> (Default) Zero Border Radius
- Circle -> Maximum Border Radius (FAB Button)

#### Inherited from

IconButtonProps.shape

___

### size

• `Optional` **size**: ``"small"`` \| ``"large"``

Size of the progress step

#### Overrides

IconButtonProps.size

___

### state

• `Optional` **state**: ``"disabled"`` \| ``"enabled"`` \| ``"active"`` \| ``"complete"`` \| ``"success"`` \| ``"error"``

State of the progress step

___

### successIcon

• `Optional` **successIcon**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Default success icon to use on step success

___

### title

• `Optional` **title**: `string`

Title of the progress step

#### Overrides

IconButtonProps.title

___

### type

• `Optional` **type**: ``"button"`` \| ``"submit"`` \| ``"reset"``

#### Inherited from

IconButtonProps.type

___

### variant

• `Optional` **variant**: ``"primary"`` \| ``"secondary"`` \| ``"tertiary"`` \| ``"ghost"`` \| ``"inverse"``

Variant of button
- Primary -> (Default) Solid Button w/ Background w/o Borders
- Secondary -> Outlined Button w/o Background w/ Borders
- Ghost -> No Background, No Borders

#### Inherited from

IconButtonProps.variant

___

### wrapperProps

• `Optional` **wrapperProps**: `BackyardBaseProps`<`HTMLDivElement`, ``""``\>

Progress Step wrapper props

## Methods

### onClick

▸ `Optional` **onClick**(`event`): `void`

`onClick` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<`Element`, `MouseEvent`\> |

#### Returns

`void`

#### Inherited from

IconButtonProps.onClick

___

### onComplete

▸ `Optional` **onComplete**(): `void`

Trigger function for when step is completed

#### Returns

`void`

___

### onError

▸ `Optional` **onError**(): `void`

Trigger function for when step encounters error

#### Returns

`void`

#### Overrides

IconButtonProps.onError

___

### onFocus

▸ `Optional` **onFocus**(`event`): `void`

`onFocus` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `FocusEvent`<`Element`, `Element`\> |

#### Returns

`void`

#### Inherited from

IconButtonProps.onFocus

___

### onKeyDown

▸ `Optional` **onKeyDown**(`event`): `void`

`onKeyDown` trigger function

**`argument`** {Event} event - DOM event

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `KeyboardEvent`<`Element`\> |

#### Returns

`void`

#### Inherited from

IconButtonProps.onKeyDown

___

### onSelected

▸ `Optional` **onSelected**(): `void`

Trigger function for when the step is selected

#### Returns

`void`

___

### onSuccess

▸ `Optional` **onSuccess**(): `void`

Trigger function for when step resolves an error

#### Returns

`void`
