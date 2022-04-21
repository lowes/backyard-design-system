import styled, { css } from 'styled-components'

import TableCellBase from '../../TableCell/styles/TableCellBase'

const HeadContentOverflow = css`
    .cell-content {
        .header-content {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        &.overflow {
          overflow: hidden;
        }
    }
`

const TableHeaderWrapper = styled.th`
    ${TableCellBase}
    ${HeadContentOverflow}
  
    background-color: var(--bds-color-surface-subdued);
`

export {
    TableHeaderWrapper
}

export default TableHeaderWrapper
