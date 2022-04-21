# @lowes-tech/bds-react/Select

## Namespaces

- [Option](modules/Option.md)
- [OptionGroup](modules/OptionGroup.md)

## Interfaces

- [OptionGroupProps](interfaces/OptionGroupProps.md)
- [OptionProps](interfaces/OptionProps.md)
- [SelectOption](interfaces/SelectOption.md)
- [SelectProps](interfaces/SelectProps.md)

## References

### default

Renames and re-exports [Select](README.md#select)

## Type aliases

### SelectOptionInfo

Ƭ **SelectOptionInfo**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disabled` | [`OptionProps`](interfaces/OptionProps.md)[``"disabled"``] |
| `index` | `number` |
| `label` | [`OptionProps`](interfaces/OptionProps.md)[``"children"``] |
| `text` | [`OptionProps`](interfaces/OptionProps.md)[``"children"``] |
| `value` | [`OptionProps`](interfaces/OptionProps.md)[``"value"``] |

___

### SelectRef

Ƭ **SelectRef**: `HTMLSelectElement`

## Variables

### Option

• **Option**: `BDSFunctional`<[`OptionProps`](interfaces/OptionProps.md)\>

___

### OptionGroup

• **OptionGroup**: `BDSFunctional`<[`OptionGroupProps`](interfaces/OptionGroupProps.md)\>

___

### Select

• **Select**: `BDSForwardRef`<[`SelectProps`](interfaces/SelectProps.md)\>

Backyard React Select

Select component that uses native option selection; see `Dropdown` for a custom selector...

```
 <Select>
     <Option value="1">Option 1</Option>
     <Option value="2">Option 2</Option>
     <Option value="3">Option 3</Option>
 </Select>
```

Can group options via `OptionGroup` and allow native selection to handle visuals

```
 <Select>
     <OptionGroup
         label="Group 1"
     >
         <Option value="11">Option 1</Option>
         <Option value="12">Option 2</Option>
         <Option value="13">Option 3</Option>
     </OptionGroup>
     <OptionGroup
         label="Group 2"
     >
         <Option value="21">Option 1</Option>
         <Option value="22">Option 2</Option>
         <Option value="23">Option 3</Option>
     </OptionGroup>
 </Select>
```

To include helper text, wrap in `FormControl` and use `FormHelperText` to sync visual states

```
 <FormControl>
     <Select>
         <Option value="1">Option 1</Option>
         <Option value="2">Option 2</Option>
         <Option value="3">Option 3</Option>
     </Select>
     <FormHelperText>Helper Text</FormHelperText>
 </FormControl>
```
