# @lowes-tech/bds-react/Stepper

## Interfaces

- [StepperProps](interfaces/StepperProps.md)

## References

### default

Renames and re-exports [Stepper](README.md#stepper)

## Type aliases

### StepperRef

Ƭ **StepperRef**: `TextInputRef`

___

### StepperValueInfo

Ƭ **StepperValueInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | ``"increment"`` \| ``"decrement"`` |
| `current` | `string` |
| `previous` | `string` |

## Variables

### Stepper

• **Stepper**: `BDSForwardRef`<[`StepperProps`](interfaces/StepperProps.md)\>

Backyard React Stepper

Stepper component consists of a minus and plus button, and a text input
along with some useful logic to handle max, mins, and steps.
The text input for `Stepper` will only accept numbers.

 <Stepper step={2} max={10} label="Qty." />

When the `min` value is reached, the minus will become disabled and the user
will not be able to type a number that is less than it.
The same is vice-versa for `max`

The `step` prop allows for increments and decrements from the button clicks to
step by the value given.

The `roundToStep` prop will use the `min` value as a base and only allow values
that `step` factors into with a base of `min`. This includes the user typing.
For example, if `min=1`, `step=3`, and `max=12`, then the only possible values the
stepper can be are [1, 4, 7, 10]. Max (12) in this case cannot be reached because we are
stepping by 3s from a base of 1. If the user attempts to type in a value of 8, then the
value will round to the nearest possible step, which is 7 in this case.
