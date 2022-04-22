# @lowes-tech/bds-react/Spinner

## Interfaces

- [SpinnerProps](interfaces/SpinnerProps.md)

## References

### default

Renames and re-exports [Spinner](README.md#spinner)

## Type aliases

### SpinnerRef

Ƭ **SpinnerRef**: `HTMLSpanElement`

## Variables

### Spinner

• **Spinner**: `BDSForwardRef`<[`SpinnerProps`](interfaces/SpinnerProps.md)\>

Backyard React Spinner

To be used when retrieving data or performing slow computations.
They notify to the user that their request is being processed.

<Spinner show={true}
         color={'commerce'}
         invisible/>

Loading spinners may be scaled down by adding the `inline` attribute if the loading experience is contextual
to a certain item on the page.

 <Spinner
     show
     small
     inline
 />
