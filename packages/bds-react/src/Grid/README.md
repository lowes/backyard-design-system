# Grid
This component will give you access to the grid container, grid row, and grid columns.

## Installation

```bash
npm install @lowes-tech/bds-react
```

## Usage

```jsx
import { Grid } from '@lowes-tech/bds-react'

<Grid.Container>
    <Grid.Row>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column></Grid.Column>
    </Grid.Row>
</Grid.Container>
```

## Grid.Container
The container component sets the max width of the container for overall content. This is declared by the container.max token (ie. Lowes.com is set to 1600px) within the Backyard Design System.

## Grid.Row
The row component sets the max width of the row which limits the content width. This is declared by the layout > max_content token (ie. Lowes.com is set to 1356px) within the Backyard Design System. The row component also provides a variety of flex options, passed as classnames, to affect the column layout of the row.

### Flex Classes
Here are a list of the available flex classes that can be passed to the classes prop referenced above

__*Horizontal Alignment*__

| Class | Description |
| :--- | :--- |
| `justify-start` | _items are packed toward the start line_ |
| `justify-center` | _items are packed toward the end line_ |
| `justify-end` | _items are centered along the line_ |
| `justify-around` | _items are evenly distributed in the line with equal space around them_ |
| `justify-between` | _items are evenly distributed in the line; first item is on the start line, last item on the end line_ |
| `justify-evenly` | _items are distributed so that the spacing between any two items (and the space to the edges) is equal_ |

__*Vertical Alignment*__

| Class | Description |
| :--- | :--- |
| `items-stretch` | _stretch to fill the container (still respect min-width/max-width)_ |
| `items-start` | _cross-start margin edge of the items is placed on the cross-start line_ |
| `items-center` | _items are centered in the cross-axis_ |
| `items-end` | _cross-end margin edge of the items is placed on the cross-end line_ |
| `items-baseline` | _items are aligned such as their baselines align_ |

## Grid Column
Grid column is your content container. Each column, unless specifically specified, stretches to fill 100% of the available width divided by the number of columns in the row. (ie. A row with 5 grid columnns would have each grid column take up 20% of the available width.) Each grid column provides you with a 16px padding on the left and right of the column by default. These can be overridden if it does not meet your projects needs.

### Props

| Prop | Type | Description |
| :--- | :--- | :--- |
| `sm` | number | _The number of grid columns the content should span on small (mobile) screens_ |
| `md` | number | _The number of grid columns the content should span on medium (tablets) screens_ |
| `lg` | number | _The number of grid columns the content should span on large (desktop) screens_ |
| `xl` | number | _The number of grid columns the content should span on extra large (large destkop) screens_ |