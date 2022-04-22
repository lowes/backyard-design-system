# @lowes-tech/bds-react/Switch

## Interfaces

- [SwitchProps](interfaces/SwitchProps.md)

## References

### default

Renames and re-exports [Switch](README.md#switch)

## Type aliases

### SwitchRef

Ƭ **SwitchRef**: `HTMLInputElement`

## Variables

### Switch

• **Switch**: `BDSForwardRef`<[`SwitchProps`](interfaces/SwitchProps.md)\>

Backyard React Switch

Switch for interacting with boolean values in a form.

 <Switch id="switch" />

To give `Switch` a label, use `FormControlLabel`, similar to `Radio` and `Checkbox`:

 <FormControlLabel
     control={<Switch id="switch" />}
     label="Label"
 />

To give `Switch` helper text, use `FormHelperText` inside a `FormControl`:

 <FormControl>
     <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
     <FormGroup>
         <FormControlLabel
             control={<Switch id="check_white" value="white" />}
             label="White"
         />
         <FormControlLabel
             control={<Switch id="check_gray" value="gray" />}
             label="Gray"
         />
         <FormControlLabel
             control={<Switch id="check_black" value="black" />}
             label="Black"
         />
     </FormGroup>
     <FormHelperText>Select all that apply</FormHelperText>
 </FormControl>
