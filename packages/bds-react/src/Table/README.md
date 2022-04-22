# @lowes-tech/bds-react/Table

## Interfaces

- [TableBodyProps](interfaces/TableBodyProps.md)
- [TableCellProps](interfaces/TableCellProps.md)
- [TableHeadProps](interfaces/TableHeadProps.md)
- [TableHeaderProps](interfaces/TableHeaderProps.md)
- [TableProps](interfaces/TableProps.md)
- [TableRowProps](interfaces/TableRowProps.md)

## References

### default

Renames and re-exports [Table](README.md#table)

## Type aliases

### TableBodyRef

Ƭ **TableBodyRef**: `HTMLTableSectionElement`

___

### TableCellRef

Ƭ **TableCellRef**: `HTMLTableCellElement`

___

### TableHeadRef

Ƭ **TableHeadRef**: `HTMLTableSectionElement`

___

### TableHeaderRef

Ƭ **TableHeaderRef**: `HTMLTableHeaderCellElement`

___

### TableRef

Ƭ **TableRef**: `HTMLTableElement`

___

### TableRowRef

Ƭ **TableRowRef**: `HTMLTableRowElement`

## Variables

### Table

• **Table**: `BDSForwardRef`<[`TableProps`](interfaces/TableProps.md)\>

Corresponding html '<table>' tag of the Backyard Design System's table component.
Used with TableRow, TableCell, TableHeader, TableHeader and TableBody to build out various tables.

ex.
<Table>
  <TableHead>
      <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
      </TableRow>
  </TableHead>
  <TableBody>
      <TableRow>
          <TableCell>Data 1.1</TableCell>
          <TableCell>Data 1.2</TableCell>
          <TableCell>Data 1.3</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Data 2.1</TableCell>
          <TableCell>Data 2.2</TableCell>
          <TableCell>Data 2.3</TableCell>
      </TableRow>
  </TableBody>
</Table>

ex.
<Table>
  <TableRow>
      <TableHeader>Header 1</TableHeader>
      <TableCell>Data 1</TableCell>
  </TableRow>
  <TableRow>
      <TableHeader>Header 2</TableHeader>
      <TableCell>Data 2</TableCell>
  </TableRow>
</Table>

___

### TableBody

• **TableBody**: `BDSForwardRef`<[`TableBodyProps`](interfaces/TableBodyProps.md)\>

Corresponding html '<tBody>' tag of the Backyard Design System's table component.
Used with TableRow, TableCell and (optionally) TableHeader to build out the body of a table.

ex.
<Table>
  <TableHead>
      <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
      </TableRow>
  </TableHead>
  <TableBody>
      <TableRow>
          <TableCell>Data 1.1</TableCell>
          <TableCell>Data 1.2</TableCell>
          <TableCell>Data 1.3</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Data 2.1</TableCell>
  ...

ex.
<Table>
  <TableBody>
      <TableRow>
          <TableHeader>Header 1</TableHeader>
          <TableCell>Data 1</TableCell>
      </TableRow>
      <TableRow>
          <TableHeader>Header 2</TableHeader>
          <TableCell>Data 2</TableCell>
      </TableRow>
  </TableBody>
</Table>

___

### TableCell

• **TableCell**: `BDSForwardRef`<[`TableCellProps`](interfaces/TableCellProps.md)\>

Corresponding html '<td>' tag of the Backyard Design System's table component.
Used with TableRow, TableHeader and TableBody to build out the body of a table.

ex.
<Table>
  <TableHead>
      <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader width={30}>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
      </TableRow>
  </TableHead>
  <TableBody>
      <TableRow>
          <TableCell>Data 1.1</TableCell>
          <TableCell>Data 1.2</TableCell>
          <TableCell>Data 1.3</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Data 2.1</TableCell>
  ...

ex.
<Table>
  <TableBody>
      <TableRow>
          <TableHeader>Header 1</TableHeader>
          <TableCell>Data 1</TableCell>
      </TableRow>
      <TableRow>
          <TableHeader>Header 2</TableHeader>
          <TableCell>Data 2</TableCell>
      </TableRow>
  </TableBody>
</Table>

ex.
<Table>
  <TableRow>
      <TableCell>Header 1</TableCell>
      <TableCell>Data 1</TableCell>
  </TableRow>
  <TableRow>
      <TableCell>Header 2</TableCell>
      <TableCell>Data 2</TableCell>
  </TableRow>
</Table>

___

### TableHead

• **TableHead**: `BDSForwardRef`<[`TableHeadProps`](interfaces/TableHeadProps.md)\>

Corresponding html '<thead>' tag of the Backyard Design System's table component.
Used with TableRow and TableHeader to build out the headers for a table.

ex.
<Table>
  <TableHead>
      <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
      </TableRow>
  </TableHead>
  <TableBody>
...

___

### TableHeader

• **TableHeader**: `BDSForwardRef`<[`TableHeaderProps`](interfaces/TableHeaderProps.md)\>

Corresponding html '<th>' tag of the Backyard Design System's table component.
Used with TableRow, TableCell and TableBody to build out the body of a table.
Used with TableRow, and TableHead to build out the header of a table.

ex.
<Table>
  <TableHead>
      <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader width={30}>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
      </TableRow>
  </TableHead>
  <TableBody>
  ...

ex 2.
<Table>
  <TableBody>
      <TableRow>
          <TableHeader variant='outlined' width={30}>Header 1</TableHeader>
          <TableCell>Data 1</TableHeader>
      </TableRow>
      <TableRow>
          <TableHeader variant='outlined'
                       moreInfo='Here is some extra text'>
               Header 2
          </TableHeader>
          <TableCell>Data 2</TableCell>
      </TableRow>
  </TableBody>
</Table>

___

### TableRow

• **TableRow**: `BDSForwardRef`<[`TableRowProps`](interfaces/TableRowProps.md)\>

Corresponding html '<tr>' tag of the Backyard Design System's table component.
Used with TableCell, TableHeader and TableBody to build out the body of a table.
Used with TableHeader and TableHead to build out the header of a table.

ex.
<Table>
  <TableRow>
      <TableHeader>Header 1</TableHeader>
      <TableCell>Data 1</TableCell>
  </TableRow>
  <TableRow>
      <TableHeader>Header 2</TableHeader>
      <TableCell>Data 2</TableCell>
  </TableRow>
</Table>

ex.
<Table>
  <TableHead>
      <TableRow>
          <TableHeader>Column 1</TableHeader>
          <TableHeader>Column 2</TableHeader>
          <TableHeader>Column 3</TableHeader>
      </TableRow>
  </TableHead>
  <TableBody>
      <TableRow>
          <TableCell>Data 1.1</TableCell>
          <TableCell>Data 1.2</TableCell>
          <TableCell>Data 1.3</TableCell>
      </TableRow>
      <TableRow>
          <TableCell>Data 2.1</TableCell>
          <TableCell>Data 2.2</TableCell>
          <TableCell>Data 2.3</TableCell>
      </TableRow>
  </TableBody>
</Table>
