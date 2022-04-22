# Column
Grid column is your content container. Each column, unless specifically specified, stretches to fill 100% of the available width divided by the number of columns in the row. (ie. A row with 5 grid columnns would have each grid column take up 20% of the available width.) Each grid column provides you with a 16px padding on the left and right of the column by default. These can be overridden if it does not meet your projects needs.

## Installation

```bash
npm install @lowes-tech/bds-react
```

## Usage

```jsx
import { Column } from '@lowes-tech/bds-react'

<Column></Column>
```

### Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `sm` | number | _The number of grid columns the content should span on small (mobile) screens_ |
| `md` | number | _The number of grid columns the content should span on medium (tablets) screens_ |
| `lg` | number | _The number of grid columns the content should span on large (desktop) screens_ |
| `xl` | number | _The number of grid columns the content should span on extra large (large destkop) screens_ |