# @lowes-tech/bds-react/TextField

## Interfaces

- [TextFieldProps](interfaces/TextFieldProps.md)

## References

### default

Renames and re-exports [TextField](README.md#textfield)

## Type aliases

### TextFieldRef

Ƭ **TextFieldRef**: `TextInputRef`

## Variables

### TextField

• **TextField**: `BDSForwardRef`<[`TextFieldProps`](interfaces/TextFieldProps.md)\>

Backyard React Text Field

Standard text input that extends `TextInput` for functionality

 <TextField label="Label" />

To include helper text, use `FormControl` and `FormHelperText` to sync states

 <FormControl>
     <TextField label="Username" />
     <FormHelperText>Enter a username</FormHelperText>
 </FormControl>
