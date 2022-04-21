# Row
The row component sets the max width of the row which limits the content width. This is declared by the layout > max_content token (ie. Lowes.com is set to 1356px) within the Backyard Design System. The row component also provides a variety of flex options, passed as classnames, to affect the column layout of the row.

## Installation

```bash
npm install @lowes-tech/bds-react
```

## Usage

```jsx
import { Row } from '@lowes-tech/bds-react'

<Row></Row>
```

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