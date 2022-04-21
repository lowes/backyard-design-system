# @lowes-tech/bds-react/FormControlLabel

## Interfaces

- [FormControlLabelProps](interfaces/FormControlLabelProps.md)

## References

### default

Renames and re-exports [FormControlLabel](README.md#formcontrollabel)

## Type aliases

### FormControlLabelRef

Ƭ **FormControlLabelRef**: `HTMLLabelElement`

## Variables

### FormControlLabel

• **FormControlLabel**: `BDSForwardRef`<[`FormControlLabelProps`](interfaces/FormControlLabelProps.md)\>

Backyard React Form Control Label

 <FormControlLabel
     control={<Radio />}
     label="Controlled Radio Label"
 />

Provides Label to inputs such as
 <Checkbox />
 <Radio />
 <Switch />
that allows control over the input for interactions
like hovering, clicking, and focusing.

Can be used in conjunction with <FormControl> to provide
helper text in addition to a controlled label:

```
 <FormControl>
     <FormControlLabel
         control={<Checkbox />}
         label="Controlled Label"
     />
     <FormHelperText>Helper Text for Checkbox</FormHelperText>
 </FormControl>
```
