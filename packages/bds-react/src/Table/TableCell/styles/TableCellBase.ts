import { css } from 'styled-components'

import type { TableHeaderProps } from '../../TableHeader'
import type { TableCellProps } from '../TableCell'

const TableCellBase = css<TableCellProps | TableHeaderProps>`
    padding: var(--bds-sizes-size-14) var(--bds-sizes-size-36) var(--bds-sizes-size-14) var(--bds-sizes-size-16);
    width: ${({ width }) => (width ? `${width}%` : 'auto')};
    font-size: var(--bds-sizes-size-16);

    svg {
        vertical-align: middle;
    }

    .td-container, 
    .th-container {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        .more-info {
            margin-left: var(--bds-sizes-size-4);
            flex-shrink: 0; /* prevents the icon from scaling down and thus stays at its designed size */
            cursor: pointer;
        }
    }

    h6 {
        margin: 0;
    }
    
    .td-container > .cell-content {
        display: block; /* Fallback for non-webkit */
        display: -webkit-box;
        max-height: var(--bds-sizes-size-48); /* allows for two lines, at 14px font, before overflow */
        margin: 0;

        /* clamps line and hides overflow with appended '...' */
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        /* IE11+ specific style */
        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            /* 
             * sets max-height to match the cell max so tooltip doesn't
             * get pushed down the page into another cell 
             */
            * {
                max-height: var(--bds-sizes-size-40);
            }
        }
    }
`

export {
    TableCellBase
}

export default TableCellBase
