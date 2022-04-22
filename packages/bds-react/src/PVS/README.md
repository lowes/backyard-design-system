# @lowes-tech/bds-react/PVS

## Interfaces

- [PVSProps](interfaces/PVSProps.md)

## References

### default

Renames and re-exports [PVS](README.md#pvs)

## Type aliases

### PVSRef

Ƭ **PVSRef**: `RadioRef`

## Variables

### PVS

• **PVS**: `BDSForwardRef`<[`PVSProps`](interfaces/PVSProps.md)\>

Backyard PVS component
Also known as a swatch selector.

The PVS component allows the user to choose between various textures or colors offered for a particular item.
It provides a quick view of what options are available, and typically changes the relevant images to reflect
the changes made from the PVS selector.

Only one option in a PVS may be selected at a time. Essentially, the swatches function as a radio button but
with images/color swatches included for a quick preview.

The name of the swatch is visible on hover through a tooltip.

ex.
<RadioGroup
     direction="row"
     defaultValue="crema-oak">
    <PVS
         value="natural-oak"
         title="Natural Oak"
         fill="https://lda.lowes.com/is/image/Lowes/7391753008645_swatch"
         color="green"
    />
    <PVS
         value="cambridge-abbey-oak"
         title="Cambridge Abbey Oak"
         fill="https://lda.lowes.com/is/image/Lowes/1000128595_swatch"
         color="green"
    />
    <PVS
         value="crema-oak"
         title="Crema Oak"
         fill="https://lda.lowes.com/is/image/Lowes/7391753349960_swatch"
         color="green"
    />
    <PVS
         value="black"
         fill="#000"
         unavailable
         title="Black"
         color="green"
    />
    <PVS
         value="white"
         fill="#ffffff"
         title="White"
         color="green" />
</RadioGroup>
