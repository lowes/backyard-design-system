# @lowes-tech/bds-react/ProgressStepper

## Interfaces

- [ProgressStepConnectorProps](interfaces/ProgressStepConnectorProps.md)
- [ProgressStepContextValue](interfaces/ProgressStepContextValue.md)
- [ProgressStepProps](interfaces/ProgressStepProps.md)
- [ProgressStepperContextValue](interfaces/ProgressStepperContextValue.md)
- [ProgressStepperProps](interfaces/ProgressStepperProps.md)

## References

### default

Renames and re-exports [ProgressStepper](README.md#progressstepper)

## Type aliases

### ProgressStepConnectorRef

Ƭ **ProgressStepConnectorRef**: `HTMLDivElement`

___

### ProgressStepRef

Ƭ **ProgressStepRef**: `IconButtonRef`

___

### ProgressStepperRef

Ƭ **ProgressStepperRef**: `FormGroupRef`

## Variables

### ProgressStep

• **ProgressStep**: `BDSForwardRef`<[`ProgressStepProps`](interfaces/ProgressStepProps.md)\>

Backyard React Progress Step

`ProgressStep` is used as a child of `ProgressStepper` to provide the current step of the stepper to the user.
Note: `ProgressStep` __must__ be a child of `ProgressStepper`

The `ProgressStep` calculates whether or not it is selected through the supplied `step` prop of the parent `ProgressStepper`.

When the `disabled` prop is true, the button and text becomes disabled from the user.

The content of the button is determined by the following in respective order of importance:
 * `icon` prop - ex. <CreditCard />
 * `label` prop - ex. "A"
 * `index + 1` number of the step

Example:
```
 <ProgressStep
     icon={<CreditCard />}
     title="Credit Card"
     caption="Enter your credit card information"
 />
```

___

### ProgressStepContext

• **ProgressStepContext**: `Context`<[`ProgressStepContextValue`](interfaces/ProgressStepContextValue.md)\>

___

### ProgressStepper

• **ProgressStepper**: `BDSForwardRef`<[`ProgressStepperProps`](interfaces/ProgressStepperProps.md)\>

Backyard React Progress Stepper

`ProgressStepper` is used to provide steps to the user to navigate through a wizard-like form.

The `step` prop, or the stepper's current step, must be controlled externally for the stepper to update.
This allows the developer to manage any content that `ProgressStepper` is providing navigation to externally.

By default the stepper is linear, meaning each step behind the current `step` state is counted as completed.
This behavior can be turned off with the `nonLinear` flag prop, then each step's `state` can be set to `complete`
independently of the rest of the steps, so the user can complete each step in any order.

There are two methods to providing steps:

1) Declaratively through `children` with the `ProgressStep` component
2) Structurally through `steps` which takes any `ProgressStepProps` property

Example:
```
 <ProgressStepper
     direction="row"
     step={step}
 >
     <ProgressStep
         title="First Step"
         caption="caption Text for step one"
         onClick={() => setStep(0)}
     />
     <ProgressStep
         state={states[1]}
         title="Second Step"
         caption="caption text for step two"
     />
     <ProgressStep
         state={states[2]}
         title="Third Step"
         caption="caption text for step three"
     />
 </ProgressStepper>
```

Example:
```
 <ProgressStepper
     nonLinear
     direction="row"
     step={step}
     steps={[{
         title: 'First Step',
         caption: 'caption Text for step one',
         onClick: () => setStep(0)
     }, {
         title: 'Second Step',
         caption: 'caption text for step two',
         onClick: () => setStep(1)
     }, {
         disabled: true,
         title: 'Third Step',
         caption: 'caption text for step three (disabled)',
         onClick: () => setStep(2)
     }, {
         title: 'Fourth Step',
         caption: 'caption text for step four',
         onClick: () => setStep(3)
     }]}
 />
```

___

### ProgressStepperContext

• **ProgressStepperContext**: `Context`<[`ProgressStepperContextValue`](interfaces/ProgressStepperContextValue.md)\>

## Functions

### useProgressStepper

▸ `Const` **useProgressStepper**(): [`ProgressStepperContextValue`](interfaces/ProgressStepperContextValue.md)

Hook for accessing progress stepper context

#### Returns

[`ProgressStepperContextValue`](interfaces/ProgressStepperContextValue.md)
