import styled, { css } from 'styled-components'

import DataTableCellBase from '../../DataTableBody/styles/DataTableCellBase'

const Shapes = css`
    &.shape {
        &--rounded {
            & > .data-table-row:last-child {
                & > .data-table-cell {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                & > .data-table-cell:first-child {
                    border-bottom-left-radius: var(--bds-border-radius-lg);
                }

                & > .data-table-cell:last-child {
                    border-bottom-right-radius: var(--bds-border-radius-lg);
                }
            }
        }

        &--squared > .data-table-row > .data-table-cell {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`

const DataTableFooterSizes = css`
    .data-table-row.size {
        &--small {
            .data-table-cell {
                padding-top: var(--bds-sizes-size-2);
                padding-bottom: var(--bds-sizes-size-2);
                padding-left: var(--bds-sizes-size-0);
                padding-right: var(--bds-sizes-size-0);
            }
        }

        &--medium {
            .data-table-cell {
                padding-top: var(--bds-sizes-size-4);
                padding-bottom: var(--bds-sizes-size-4);
                padding-left: var(--bds-sizes-size-0);
                padding-right: var(--bds-sizes-size-0);
            }
        }

        &--large {
            .data-table-cell {
                padding-top: var(--bds-sizes-size-8);
                padding-bottom: var(--bds-sizes-size-8);
                padding-left: var(--bds-sizes-size-0);
                padding-right: var(--bds-sizes-size-0);
            }
        }
    }
`

const DataTableFooterWrapper = styled.div`
    .data-table-row:first-child {
        .data-table-cell {
            border-top: 0;
            
            width: 100%;
        }
    }

    .data-table-row:last-child {
        .data-table-cell {
            border-bottom: 0;
        }

        .data-table-cell:first-child {
            border-left: 0;
        }

        .data-table-cell:last-child {
            border-right: 0;
        }
    }

    ${DataTableCellBase}

    ${DataTableFooterSizes}

    ${Shapes}
`

export { DataTableFooterWrapper }

export default DataTableFooterWrapper
