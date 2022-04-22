# Interface: ProgressStepperContextValue

## Properties

### connector

• **connector**: `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

Defines the connector between progress steps

___

### direction

• **direction**: ``"column"`` \| ``"row"``

The direction of the progress steps within progress stepper

___

### nonLinear

• **nonLinear**: `boolean`

Whether or not the progress within `ProgressStepper` is nonLinear
When progress stepper is non-linear, the completion of each step must be controlled

___

### step

• **step**: `number`

The currently selected index within `ProgressIndicator`

## Methods

### setStep

▸ **setStep**(`step`): `void`

Sets a new currently selected step

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | `number` |

#### Returns

`void`
