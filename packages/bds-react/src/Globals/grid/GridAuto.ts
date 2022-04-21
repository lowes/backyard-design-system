import { css } from 'styled-components'

export const AutoFlow = css`
    .grid-flow-row { grid-auto-flow: row; }
    .grid-flow-col { grid-auto-flow: column; }
    .grid-flow-row-dense { grid-auto-flow: row dense; }
    .grid-flow-col-dense { grid-auto-flow: column dense; }
`

export const AutoColumns = css`
    .grid-cols-auto { grid-auto-columns: auto; }
    .grid-cols-min { grid-auto-columns: min-content; }
    .grid-cols-max { grid-auto-columns: max-content; }
    .grid-cols-fr { grid-auto-columns: minmax(0, 1fr); }
`

export const AutoRows = css`
    .grid-rows-auto { grid-auto-rows: auto; }
    .grid-rows-min { grid-auto-rows: min-content; }
    .grid-rows-max { grid-auto-rows: max-content; }
    .grid-rows-fr { grid-auto-rows: minmax(0, 1fr); }
`