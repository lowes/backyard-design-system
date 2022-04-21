# @lowes-tech/bds-react/ListSelector

## Interfaces

- [ListOptionInfo](interfaces/ListOptionInfo.md)
- [ListSelectorMultipleProps](interfaces/ListSelectorMultipleProps.md)
- [ListSelectorOption](interfaces/ListSelectorOption.md)
- [ListSelectorProps](interfaces/ListSelectorProps.md)
- [ListSelectorSingleProps](interfaces/ListSelectorSingleProps.md)
- [UseListSelectorProps](interfaces/UseListSelectorProps.md)

## References

### default

Renames and re-exports [ListSelector](README.md#listselector)

## Type aliases

### ListSelectorMultipleRef

Ƭ **ListSelectorMultipleRef**: `ToggleRef`

___

### ListSelectorRef

Ƭ **ListSelectorRef**: [`ListSelectorMultipleRef`](README.md#listselectormultipleref) & [`ListSelectorSingleRef`](README.md#listselectorsingleref)

___

### ListSelectorSingleRef

Ƭ **ListSelectorSingleRef**: `HTMLUListElement`

## Variables

### List

• **List**: `BDSForwardRef`<[`ListSelectorProps`](interfaces/ListSelectorProps.md)\> = `ListSelector`

___

### ListSelector

• **ListSelector**: `BDSForwardRef`<[`ListSelectorProps`](interfaces/ListSelectorProps.md)\>

Backyard React List Selector (List)

`List` provides a method for selecting a single or multiple option out of a list of options.

It functions similarly to a `Select` or `Multiselect` but offers a different, more customized presentation to the user.

For a non-selected list of options for a user to trigger actions from, use `Menu`.

Example:
```
 <List>
     <ListOption
         icon={<Location />}
     >
         New York
     </ListOption>
     <ListOption
         icon={<Location />}
     >
         New Jersey
     </ListOption>
     <ListOption
         icon={<Location />}
     >
         Charlotte
     </ListOption>
     <ListOption
         icon={<Location />}
     >
         Atlanta
     </ListOption>
 </List>
```

## Functions

### useListSelector

▸ `Const` **useListSelector**(`__namedParameters`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`UseListSelectorProps`](interfaces/UseListSelectorProps.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `as?` | `ElementType`<`any`\> | - |
| `innerref?` | `RefObject`<`HTMLUListElement`\> | Ref of the container List |
| `items` | { `aria-current`: `string` ; `data-selected`: `string` ; `disabled`: `boolean` ; `index`: `number` ; `onClick`: (`event`: `any`) => `void` ; `ref`: `RefObject`<`HTMLButtonElement`\> ; `selected`: `boolean` = isSelected; `value`: `string` \| `number` = itemValue }[] | - |
| `refs` | `MutableRefObject`<`RefObject`<`HTMLButtonElement`\>[]\> | - |
