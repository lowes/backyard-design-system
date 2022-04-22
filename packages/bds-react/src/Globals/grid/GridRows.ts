import { css } from 'styled-components'

export const GridRows = css`
    .row-auto { grid-row: auto; }
    .row-span-1 { grid-row: span 1 / span 1; }
    .row-span-2 { grid-row: span 2 / span 2; }
    .row-span-3 { grid-row: span 3 / span 3; }
    .row-span-4 { grid-row: span 4 / span 4; }
    .row-span-5 { grid-row: span 5 / span 5; }
    .row-span-6 { grid-row: span 6 / span 6; }
    .row-span-7 { grid-row: span 7 / span 7; }
    .row-span-8 { grid-row: span 8 / span 8; }
    .row-span-full { grid-row: 1 / -1; }
`

export const GridRowsStart = css`
    .cols-start-1 { grid-row-start: 1; }
    .cols-start-2 { grid-row-start: 2; }
    .cols-start-3 { grid-row-start: 3; }
    .cols-start-4 { grid-row-start: 4; }
    .cols-start-5 { grid-row-start: 5; }
    .cols-start-6 { grid-row-start: 6; }
    .cols-start-7 { grid-row-start: 7; }
    .cols-start-8 { grid-row-start: 8; }
    .cols-start-auto { grid-row-start: auto; }
`

export const GridRowsEnd = css`
    .cols-end-1 { grid-row-end: 1; }
    .cols-end-2 { grid-row-end: 2; }
    .cols-end-3 { grid-row-end: 3; }
    .cols-end-4 { grid-row-end: 4; }
    .cols-end-5 { grid-row-end: 5; }
    .cols-end-6 { grid-row-end: 6; }
    .cols-end-7 { grid-row-end: 7; }
    .cols-end-8 { grid-row-end: 8; }
    .cols-end-auto { grid-row-end: auto; }
`