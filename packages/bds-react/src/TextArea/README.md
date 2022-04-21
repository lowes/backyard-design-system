# @lowes-tech/bds-react/TextArea

## Interfaces

- [TextAreaProps](interfaces/TextAreaProps.md)

## References

### default

Renames and re-exports [TextArea](README.md#textarea)

## Type aliases

### TextAreaRef

Ƭ **TextAreaRef**: `TextInputRef`

## Variables

### TextArea

• **TextArea**: `BDSForwardRef`<[`TextAreaProps`](interfaces/TextAreaProps.md)\>

Backyard React Text Area

Standard text area that extends `TextInput` for functionality.
TextArea is different from `TextField`, `Search`, etc. because it is wrapper in `FormControl`
in order to place the helper text on the same line as the counter.

 <TextArea label="Label" max={500} />

To include helper text, use `helperText` prop

 <TextArea
     label="Comment"
     rows={10}
     max={2000}
     helperText="Type a comment here"
 />
