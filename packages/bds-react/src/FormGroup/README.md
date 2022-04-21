# @lowes-tech/bds-react/FormGroup

## Interfaces

- [FormGroupProps](interfaces/FormGroupProps.md)

## References

### default

Renames and re-exports [FormGroup](README.md#formgroup)

## Type aliases

### FormGroupRef

Ƭ **FormGroupRef**: `HTMLDivElement`

## Variables

### FormGroup

• **FormGroup**: `BDSForwardRef`<[`FormGroupProps`](interfaces/FormGroupProps.md)\>

Backyard React Form Group

`FormGroup` allows for grouping inputs such as
`Checkbox` and `Switch` and align them into columns or rows.

For `Radio` it is recommended to use `RadioGroup` because
it provides extra functionality for handling `radio` inputs.

This component is useful when combined with `FormControl` to
organize the visual structure of the form input. Example:

```
 <FormControl>
     <FormHeading>Heading Above FormGroup</FormHeading>
     <FormGroup>
         <FormControlLabel
             control={<Checkbox id="1" />}
             label="Label 1"
         />
         <FormControlLabel
             control={<Checkbox id="2" />}
             label="Label 2"
         />
         <FormControlLabel
             control={<Checkbox id="3" />}
             label="Label 3"
         />
     </FormGroup>
     <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 </FormControl>
```
