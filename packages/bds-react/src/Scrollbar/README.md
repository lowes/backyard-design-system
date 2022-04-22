# @lowes-tech/bds-react/Scrollbar

## Interfaces

- [ScrollbarProps](interfaces/ScrollbarProps.md)

## References

### default

Renames and re-exports [Scrollbar](README.md#scrollbar)

## Type aliases

### ScrollbarRef

Ƭ **ScrollbarRef**: `HTMLDivElement`

## Variables

### Scrollbar

• **Scrollbar**: `BDSForwardRef`<[`ScrollbarProps`](interfaces/ScrollbarProps.md)\>

A styled scrollbar for use with the Backyard Design System.

TODO Implement a vertical scrollbar for the Y axis. Currently only provides a horizontal scrollbar for the X axis.

ex:
<Scrollbar>
    Bacon ipsum dolor amet t-bone cow flank tri-tip shankle tenderloin landjaeger rump alcatra capicola chicken
    pork chop. Filet mignon tenderloin drumstick burgdoggen swine shoulder picanha meatball ham venison chislic
    landjaeger andouille beef ribs jerky. Strip steak kevin sirloin cow picanha pork loin jowl chuck short loin
    shoulder sausage flank, brisket drumstick. Landjaeger ham pig meatball chuck ribeye. Kevin filet mignon
    pastrami turducken. Spare ribs pastrami chicken, meatball rump ball tip bacon kevin pork belly shoulder
    venison capicola cow pig ground round. Shank beef turducken, leberkas chuck tri-tip hamburger pork ham spare
    ribs kielbasa.
</Scrollbar>

note:
To override/change the scrollbar styling please target the following css classes:
  - .scrollbar-container
  - .scrollbar-track
  - .scrollbar-knob
To override/change the content styling please target the following css classes:
  - .content-container
