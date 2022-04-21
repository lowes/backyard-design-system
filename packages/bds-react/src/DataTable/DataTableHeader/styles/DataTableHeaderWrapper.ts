import styled, { css } from 'styled-components'

import DataTableCellBase from '../../DataTableBody/styles/DataTableCellBase'

const Shapes = css`
    &.shape {
        &--rounded {
            & > .data-table-row:first-child {
                & > .data-table-cell {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                & > .data-table-cell:first-child {
                    border-top-left-radius: var(--bds-border-radius-lg);
                }

                & > .data-table-cell:last-child,
                & > .data-table-cell:nth-last-child(2) {
                    border-top-right-radius: var(--bds-border-radius-lg);
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

const DataTableHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;

    min-height: fit-content;

    .data-table-row:first-child {
        .data-table-cell {
            border-top: 0;
        }

        .data-table-cell:first-child {
            border-left: 0;
        }

        .data-table-cell:last-child {
            border-right: 0;
        }
    }

    .data-table-row:nth-last-child(2) {
        .data-table-cell.data-table-cell {
            border-bottom: var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);
        }
    }

    &.zebra-stripes {
        & > .data-table-row {
            & > .data-table-cell {
                background-color: var(--bds-color-surface-subdued);
            }
        }
    }

    &&.inverse-header {
        & > .data-table-row {
            & > .data-table-cell:not([class*='selection']):not([class*='expansion']) {
                background-color: var(--bds-color-surface-default-inverse);
            }

            & > .data-table-cell {
                background-color: var(--bds-color-surface-default);
            }
        }
    }

    &&& {
        .data-table-row.data-table-header-filters {
            & > .data-table-cell {
                background-color: var(--bds-color-surface-dark-blue-subdued);

                border: none;
            }

            &.hidden {
                display: none;
            }
        }

        .custom,
        .expansion,
        .selection {
            .data-table-header-cell-content {
                margin-left: 0;
            }
        }

        .data-table-header-cell-content {
            margin-left: var(--bds-sizes-size-20);

            &.hover,
            &:hover,
            &.sorted {
                .sort-icon {
                    opacity: 1;
                }
            }

            .sort-icon {
                position: absolute;

                display: inline-flex;
                align-items: center;

                opacity: 0;

                transform: translateX(calc(-1 * var(--bds-sizes-size-20)));
            }
        }
    }

    ${DataTableCellBase}

    ${Shapes}
`

export { DataTableHeaderWrapper }

export default DataTableHeaderWrapper
