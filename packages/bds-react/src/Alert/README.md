# @lowes-tech/bds-react/Alert

## Interfaces

- [AlertProps](interfaces/AlertProps.md)

## References

### default

Renames and re-exports [Alert](README.md#alert)

## Type aliases

### AlertEvent

Ƭ **AlertEvent**: { `target`: [`AlertRef`](README.md#alertref)  } & `React.MouseEvent`<[`AlertRef`](README.md#alertref)\> \| `React.KeyboardEvent`<[`AlertRef`](README.md#alertref)\> \| {}

___

### AlertRef

Ƭ **AlertRef**: `HTMLDivElement`

## Variables

### Alert

• **Alert**: `BDSForwardRef`<[`AlertProps`](interfaces/AlertProps.md)\>

Backyard React Alert

Component for displaying severity levels of 'success', 'info', 'warning', 'error'

The alert is closeable by default

To include an action link, define the `action` prop with the text you want
The `actionTo` and `onActionClick` are helper props for accessing the link's `href` and `onClick` handler respectively
These can be overridden, along with other props, via defining the `actionProps` prop with an object of props

The alert is single line by default: the title and subtitles are on the same line
To give the subtitle more room, `multiline` flag can be provided to convert the title and subtitle to block display

 <Alert
     type="info"
     title="Note"
 >
     This is the subtitle of the alert.
 </Alert>
