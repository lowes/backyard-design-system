# Interface: ProgressStepContextValue

## Properties

### disabled

• **disabled**: `boolean`

Whether or not the progress step is disable

___

### index

• **index**: `number`

Index of the progress step within the `ProgressStepper`

___

### label

• **label**: `number`

Label number of the progress step
Defaults to calculating `index + 1`

___

### last

• **last**: `boolean`

Whether or not the progress step is the last index within `ProgressStepper`

___

### state

• **state**: ``"disabled"`` \| ``"enabled"`` \| ``"active"`` \| ``"complete"`` \| ``"success"`` \| ``"error"``

The current state of the progress step
