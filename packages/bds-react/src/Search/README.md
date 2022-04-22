# @lowes-tech/bds-react/Search

## Interfaces

- [SearchProps](interfaces/SearchProps.md)

## References

### default

Renames and re-exports [Search](README.md#search)

## Type aliases

### SearchRef

Ƭ **SearchRef**: `TextInputRef`

## Variables

### Search

• **Search**: `BDSForwardRef`<[`SearchProps`](interfaces/SearchProps.md)\>

Backyard React Search

Search text input that extends on `TextInput`

 <Search placeholder="Search" />

To include helper text, use `FormControl` and `FormHelperText` to sync states

 <FormControl>
     <Search placeholder="Username" />
     <FormHelperText>Search by username</FormHelperText>
 </FormControl>
