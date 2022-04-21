# @lowes-tech/bds-react/Toast

## Interfaces

- [ToastProps](interfaces/ToastProps.md)

## References

### default

Renames and re-exports [Toast](README.md#toast)

## Type aliases

### ToastEvent

Ƭ **ToastEvent**: { `target`: [`ToastRef`](README.md#toastref)  } & `React.MouseEvent`<[`ToastRef`](README.md#toastref)\> \| `React.KeyboardEvent`<[`ToastRef`](README.md#toastref)\> \| {}

___

### ToastRef

Ƭ **ToastRef**: `HTMLDivElement`

## Variables

### Toast

• **Toast**: `BDSForwardRef`<[`ToastProps`](interfaces/ToastProps.md)\>

Backyard React Toast

Component for displaying severity levels of 'success', 'info', 'warning', 'error' with a timestamp

This component is similar to `Alert`

The toast is closeable by default

By default, a local timestamp is created when the toast is created
An external pre-computed timestamp and text can be supplied via `timestamp` prop
An external pre-computed JS Date can be given via `date` prop as well

The toast is always multiline

 <Toast
     type="info"
     title="Note"
 >
     This is the subtitle of the toast.
 </Toast>
