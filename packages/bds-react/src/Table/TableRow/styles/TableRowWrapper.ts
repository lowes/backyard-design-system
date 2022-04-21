import styled from 'styled-components'

const TableRowWrapper = styled.tr`

  /** adds bottom border to all rows except the last one */
  border-bottom: var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);
`

export {
    TableRowWrapper
}

export default TableRowWrapper
