# @lowes-tech/bds-react/RadioGroup

## Interfaces

- [RadioGroupProps](interfaces/RadioGroupProps.md)
- [RadioGroupValue](interfaces/RadioGroupValue.md)

## References

### default

Renames and re-exports [RadioGroup](README.md#radiogroup)

## Type aliases

### RadioGroupRef

Ƭ **RadioGroupRef**: `FormGroupRef`

## Variables

### RadioGroup

• **RadioGroup**: `BDSForwardRef`<[`RadioGroupProps`](interfaces/RadioGroupProps.md)\>

Backyard React Radio Group

`RadioGroup` allows for grouping radio inputs and syncing them together.
It extends from `FormGroup` to provide extra functionality for `Radio` components.

For `Checkbox` or `Switch` it is recommended to use `FormGroup`.

This component is useful when combined with `FormControl` to
organize the visual structure of the form input. Example:

```
 <FormControl>
     <FormHeading>Heading</FormHeading>
     <RadioGroup
         name="radios"
         defaultValue="2"
         direction="row"
     >
         <FormControlLabel
             control={<Radio value="1" />}
             label="Label 1"
         />
         <FormControlLabel
             control={<Radio value="2" />}
             label="Label 2"
         />
         <FormControlLabel
             control={<Radio value="3" />}
             label="Label 3"
         />
     </FormGroup>
     <FormHelperText>Helper Text</FormHelperText>
 </FormControl>
```

___

### RadioGroupContext

• **RadioGroupContext**: `Context`<[`RadioGroupValue`](interfaces/RadioGroupValue.md)\>

## Functions

### useRadioGroup

▸ `Const` **useRadioGroup**(): [`RadioGroupValue`](interfaces/RadioGroupValue.md)

#### Returns

[`RadioGroupValue`](interfaces/RadioGroupValue.md)
