# @lowes-tech/bds-react/Password

## Interfaces

- [PasswordProps](interfaces/PasswordProps.md)

## References

### default

Renames and re-exports [Password](README.md#password)

## Type aliases

### PasswordRef

Ƭ **PasswordRef**: `TextInputRef`

## Variables

### Password

• **Password**: `BDSForwardRef`<[`PasswordProps`](interfaces/PasswordProps.md)\>

Backyard React Password

Password text input that extends on TextInput's API

 <Password />

To include helper text, use `FormControl` and `FormHelperText` to sync states

 <FormControl>
     <Password label="Password" />
     <FormHelperText>Enter a password</FormHelperText>
 </FormControl>
