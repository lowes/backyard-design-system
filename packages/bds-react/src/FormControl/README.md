# @lowes-tech/bds-react/FormControl

## Interfaces

- [FormContextProps](interfaces/FormContextProps.md)
- [FormControlContextValues](interfaces/FormControlContextValues.md)
- [FormControlProps](interfaces/FormControlProps.md)
- [FormControlProviderProps](interfaces/FormControlProviderProps.md)

## References

### default

Renames and re-exports [FormControl](README.md#formcontrol)

## Type aliases

### FormControlRef

Ƭ **FormControlRef**: `HTMLDivElement`

## Variables

### FormControl

• **FormControl**: `BDSForwardRef`<[`FormControlProps`](interfaces/FormControlProps.md)\>

Backyard React Form Control

Allows control over form components.
Passes `state` through form components and helper text, to sync visually.
Uses component's 'bdsName' metadata to configure helper text.

Combine with `FormHeading`, `FormGroup` and `FormHelperText` to construct form heirarchy

```
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
```
or
```
 <FormControl>
     <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
     <Multiselect
         options={[
             { label: 'White', value: 'white' },
             { label: 'Gray', value: 'gray' },
             { label: 'Black', value: 'black' },
         ]}
     />
     <FormHelperText>Select all that apply</FormHelperText>
 </FormControl>
```

___

### FormControlConsumer

• **FormControlConsumer**: `React.Consumer`<[`FormControlContextValues`](interfaces/FormControlContextValues.md)\> = `FormControlContext.Consumer`

Form Control Consumer

___

### FormControlContext

• **FormControlContext**: `React.Context`<[`FormControlContextValues`](interfaces/FormControlContextValues.md)\>

Form Control Context

## Functions

### useFormControl

▸ **useFormControl**(`props?`): [`FormControlContextValues`](interfaces/FormControlContextValues.md) & { `id?`: `string`  } \| [`FormContextProps`](interfaces/FormContextProps.md)

Hook to add

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `props` | `UseFormControlProps` | context props to initialize input with |

#### Returns

[`FormControlContextValues`](interfaces/FormControlContextValues.md) & { `id?`: `string`  } \| [`FormContextProps`](interfaces/FormContextProps.md)
