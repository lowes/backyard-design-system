# @lowes-tech/bds-react/Tile

## Interfaces

- [CardTileProps](interfaces/CardTileProps.md)
- [LinkTileProps](interfaces/LinkTileProps.md)
- [RadioTileProps](interfaces/RadioTileProps.md)
- [TileProps](interfaces/TileProps.md)

## References

### default

Renames and re-exports [Tile](README.md#tile)

## Type aliases

### CardTileRef

Ƭ **CardTileRef**: `HTMLDivElement`

___

### LinkTileRef

Ƭ **LinkTileRef**: `HTMLAnchorElement`

___

### RadioTileRef

Ƭ **RadioTileRef**: `RadioRef`

___

### TileRef

Ƭ **TileRef**: `HTMLDivElement` \| `HTMLAnchorElement` \| `HTMLInputElement`

## Variables

### CardTile

• **CardTile**: `BDSForwardRef`<[`CardTileProps`](interfaces/CardTileProps.md)\>

Tiles are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should
be placed on them in a way that clearly indicates hierarchy.

Since this component is just a wrapper you can place interactive elements within like
buttons and links if you so desire.

note: The white background variation is to be used when there are pictures being included on the tile(s). If it
is part of a set, all the tiles should be of the same variation.

example:
<CardTile>
    <span>Hello World</span>
    <Button>Button</Button>
</CardTile>

___

### LinkTile

• **LinkTile**: `BDSForwardRef`<[`LinkTileProps`](interfaces/LinkTileProps.md)\>

Tiles are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should
be placed on them in a way that clearly indicates hierarchy.

This type of Tile contains links to external sites or sections of the page that are navigated to when selected.
The entire surface of the tile is selectable, which prevents additional links from being included within the content.

note: The 'outlined' variation is to be used when there are pictures being included on the tile(s).

example:
<LinkTile href='www.lowes.com'>
    <span>Hello World</span>
</LinkTile>

___

### RadioTile

• **RadioTile**: `BDSForwardRef`<[`RadioTileProps`](interfaces/RadioTileProps.md)\>

Tiles are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should
be placed on them in a way that clearly indicates hierarchy.

This type of Tile is to be used as a static element on the page that functions like a radio button.
The entire surface of the tile is selectable, which prevents additional links or call to actions from being
included within the content.

note: The outlined variation is to be used when there are pictures being included on the tile(s).
If it is part of a radio group or set, all the tiles should be of the same variation.

example:
 <RadioTile
     value='test1'
     name='test'
     checked
 >
    <span>Hello World</span>
 </RadioTile>

example 2:
 <RadioGroup
     name={'test2'}
     direction={'row'}
     defaultValue={'2'}
     onChange={() => {}}
 >
     <RadioTile
         inputId={'1'}
         value={'1'}
         variant='filled'
     >
         <span>Item 1</span>
     </RadioTile>
     <RadioTile
         inputId={'2'}
         value={'2'}
         variant='filled'
     >
         <span>Item 2</span>
     </RadioTile>
     <RadioTile
         inputId={'3'}
         value={'3'}
         variant='filled'
         disabled
     >
         <span>Item 3</span>
     </RadioTile>
 </RadioGroup>

___

### Tile

• **Tile**: `BDSForwardRef`<[`TileProps`](interfaces/TileProps.md) & { `ref?`: `any`  }\>

Tiles are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should be
placed on them in a way that clearly indicates hierarchy.

Tiles may be links to external sites, if selected, or used as a static element on the page that functions
like a radio button.

The entire surface of the tile is selectable, which prevents additional links from being included within the content.
Unless however, you make use of the type:'card' tile or CardTile in which case its a simple wrapper that gives you
a styled div with the same Tile styles as link or radio.

The white background variation is to be used when there are pictures being included on the tile(s).
If it is part of a set, all the tiles should be of the same variation.

card examples:
<Tile>
    <span>Hello World</span>
</Tile>
<Tile type='card'>
    <span>Hello World</span>
</Tile>

radio examples:
<RadioGroup name={'test2'}
            direction={'row'}
            defaultValue={'2'}
            onChange={() => {}}>
     <Tile type='radio'
           inputId={'1'}
           value={'1'}
           variant='filled'>
         <span>Item 1</span>
     </Tile>
     <Tile type='radio'
           inputId={'2'}
           value={'2'}
           variant='filled'>
         <span>Item 2</span>
     </Tile>
     <Tile type='radio'
           inputId={'3'}
           value={'3'}
           variant='filled'
           disabled>
         <span>Item 3</span>
     </Tile>
</RadioGroup>

<Tile type='radio'
      id={'4'}
      inputId={'input_4'}
      value={'4'}
      disabled>
    <span>Item 4</span>
</Tile>

link example:
<Tile type='link'
      href='www.lowes.com'>
    <span>Hello World</span>
</Tile>
