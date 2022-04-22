# @lowes-tech/bds-react/Popover

## Interfaces

- [PopoverProps](interfaces/PopoverProps.md)
- [UsePopoverProps](interfaces/UsePopoverProps.md)

## References

### default

Renames and re-exports [Popover](README.md#popover)

## Type aliases

### PopoverRef

Ƭ **PopoverRef**: `HTMLElement`

## Variables

### Popover

• **Popover**: `BDSForwardRef`<[`PopoverProps`](interfaces/PopoverProps.md)\>

Backyard React Popover

**`todo`** Comments

**`todo`** Additional Tests

## Functions

### usePopover

▸ `Const` **usePopover**<`R`\>(`__namedParameters`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `HTMLElement` = `HTMLSelectElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`UsePopoverProps`](interfaces/UsePopoverProps.md)<`R`\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `clearPopoverTimeout` | (`type`: ``"open"`` \| ``"close"``) => `void` |
| `closeAfterDelay` | () => `void` |
| `handleBlur` | (`event`: `FocusEvent`<`R`, `Element`\>) => `void` |
| `handleClose` | () => `void` |
| `handleKeyDown` | (`event`: `KeyboardEvent`<`R`\>) => `void` |
| `handleMouseDown` | (`event`: `MouseEvent`<`R`, `MouseEvent`\>) => `void` |
| `handleOpen` | () => `void` |
| `open` | `boolean` |
| `openAfterDelay` | () => `void` |
| `setOpen` | `Dispatch`<`SetStateAction`<`boolean`\>\> |
