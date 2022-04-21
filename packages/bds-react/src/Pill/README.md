# @lowes-tech/bds-react/Pill

## Interfaces

- [PillProps](interfaces/PillProps.md)

## References

### default

Renames and re-exports [Pill](README.md#pill)

## Type aliases

### PillRef

Ƭ **PillRef**: `HTMLSpanElement`

## Variables

### Pill

• **Pill**: `BDSForwardRef`<[`PillProps`](interfaces/PillProps.md)\>

Backyard React Pill

Wraps a child and renders a colored number at the anchor position
Wrapped component should be a single element, such as an icon

Can be used without children for further customizability

If `value` prop is not defined, forces to 'dot' shape
If `value` prop is defined, defaults to `circle` shape
It is possible to set `shape` to 'dot' and still give a number

If `invisible` flag is set, pill will still render, but not be visible
     Note: `children` will still be visible

 <Pill
     color="red"
 >
     <Account />
 </Pill>

 <Pill
     color="green"
     value={23}
 />
