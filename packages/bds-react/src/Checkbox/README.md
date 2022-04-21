# @lowes-tech/bds-react/Checkbox

## Interfaces

- [CheckboxProps](interfaces/CheckboxProps.md)

## References

### default

Renames and re-exports [Checkbox](README.md#checkbox)

## Type aliases

### CheckboxRef

Ƭ **CheckboxRef**: `HTMLInputElement`

## Variables

### Checkbox

• **Checkbox**: `BDSForwardRef`<[`CheckboxProps`](interfaces/CheckboxProps.md)\>

Backyard React Checkbox

Checkbox for interacting with boolean values in a form.

 <Checkbox id="checkbox" />

To give `Checkbox` a label, use `FormControlLabel`, similar to `Radio` and `Switch`:

 <FormControlLabel
     control={<Checkbox id="checkbox" />}
     label="Label"
 />

To give `Checkbox` helper text, use `FormHelperText` inside a `FormControl`:

 <FormControl>
     <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
     <FormGroup>
         <FormControlLabel
             control={<Checkbox id="check_white" value="white" />}
             label="White"
         />
         <FormControlLabel
             control={<Checkbox id="check_gray" value="gray" />}
             label="Gray"
         />
         <FormControlLabel
             control={<Checkbox id="check_black" value="black" />}
             label="Black"
         />
     </FormGroup>
     <FormHelperText>Select all that apply</FormHelperText>
 </FormControl>
