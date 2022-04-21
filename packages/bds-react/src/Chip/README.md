# @lowes-tech/bds-react/Chip

## Interfaces

- [ChipProps](interfaces/ChipProps.md)

## References

### default

Renames and re-exports [Chip](README.md#chip)

## Type aliases

### ChipRef

Ƭ **ChipRef**: `HTMLInputElement`

## Variables

### Chip

• **Chip**: `BDSForwardRef`<[`ChipProps`](interfaces/ChipProps.md)\>

Backyard React Chip

Chip is used to interact with two different types of values in a form:
     1. Boolean
     2. String Selections

> Note: Requires uniquely assigned `id` prop
> Note: `label` is always required
> Note: `name` is required when `type` is `choice`

 <Chip type="filter" id="filter" label="Filter Chip" />
 <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 <Chip type="input" id="input" label="Input Chip" />

To group `Chip`s horizontally or vertically, use `FormGroup`:

 <FormControl>
     <FormHeading>Here's some Chips</FormHeading>
     <FormGroup
         direction="row"
     >
         <Chip type="filter" id="filter" label="Filter Chip" />
         <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
         <Chip type="input" id="input" label="Input Chip" />
     </FormGroup>
     <FormHelperText>Some Helper Text</FormHelperText>
 </FormControl>
