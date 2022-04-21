# @lowes-tech/bds-react/FormHeading

## Interfaces

- [FormHeadingProps](interfaces/FormHeadingProps.md)

## References

### default

Renames and re-exports [FormHeading](README.md#formheading)

## Type aliases

### FormHeadingRef

Ƭ **FormHeadingRef**: `TypographyRef`

## Variables

### FormHeading

• **FormHeading**: `BDSForwardRef`<[`FormHeadingProps`](interfaces/FormHeadingProps.md)\>

Backyard React Form Heading

`FormHeading` is intended to be used in conjunction with `FormControl`

Use it on top of multiple form inputs inside `FormGroup` to give the
user visual context of the group of inputs. Example:

```
 <FormControl>
     <FormHeading>Heading Above FormGroup</FormHeading>
     <FormGroup>
         <Checkbox id="1" />
         <Checkbox id="2" />
         <Checkbox id="3" />
     </FormGroup>
     <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 </FormControl>
```
