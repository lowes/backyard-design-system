import { css } from 'styled-components'

const DataTableCellSizes = css`
    .data-table-row.size {
        &--small {
            .data-table-cell:not(.scrollbar) {
                & > div.cell-content,
                & > div.cell-filter {
                    padding-top: var(--bds-sizes-size-8);
                    padding-bottom: var(--bds-sizes-size-8);
                    padding-left: var(--bds-sizes-size-8);
                    padding-right: var(--bds-sizes-size-8);
                }
            }
        }

        &--medium {
            .data-table-cell:not(.scrollbar) {
                & > div.cell-content,
                & > div.cell-filter {
                    padding-top: var(--bds-sizes-size-12);
                    padding-bottom: var(--bds-sizes-size-12);
                    padding-left: var(--bds-sizes-size-8);
                    padding-right: var(--bds-sizes-size-8);
                }
            }
        }

        &--large {
            .data-table-cell:not(.scrollbar) {
                & > div.cell-content,
                & > div.cell-filter {
                    padding-top: var(--bds-sizes-size-16);
                    padding-bottom: var(--bds-sizes-size-16);
                    padding-left: var(--bds-sizes-size-8);
                    padding-right: var(--bds-sizes-size-8);
                }
            }
        }
    }
`

const DataTableCellBase = css`
    .data-table-row {
        position: relative;
    }

    .data-table-cell {
        position: relative;

        border: var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);
        background-color: var(--bds-color-surface-default);

        margin: 0;
        padding: 0;

        text-align: start;
        vertical-align: middle;

        & > div.cell-content {
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
    }

    &.zebra-stripes {
        & > .data-table-row.zebra {
            & > .data-table-cell {
                background-color: var(--bds-color-surface-subdued);
            }
        }
    }

    .data-table-row.sub-row {
        & > .data-table-body-cell {
            border-top-width: 0;
            border-left-width: 0;
            border-right-width: 0;

            &:first-child {
                border-left-width: var(--bds-sizes-size-1);

                box-shadow: inset var(--bds-sizes-size-8) 0 0 0 var(--bds-color-highlight);
            }

            &:last-child {
                border-right-width: var(--bds-sizes-size-1);
            }
        }

        & > .data-table-subrow-cell {
            flex: 1 auto;

            border-left: 0;
            border-top: 0;

            & > .cell-content {
                padding: var(--bds-sizes-size-16);
            }
        }
    }

    .data-table-row.expanded > .data-table-body-cell {
        &:not(:first-child) {
            border-left: 0;
        }

        &:not(:last-child) {
            border-right: 0;
        }

        &:first-child {
            box-shadow: inset var(--bds-sizes-size-8) 0 0 0 var(--bds-color-highlight);
        }
    }

    .data-table-row {
        & > .data-table-cell:first-child {
            border-left: 0;
        }

        & > .data-table-cell:last-child {
            border-right: 0;
        }
    }

    &&& {
        .selection,
        .expansion {
            .icon-button {
                padding: 0;
            }
        }

        .scrollbar {
            border-left: 0;
        }
    }

    ${DataTableCellSizes}
`

export { DataTableCellBase }

export default DataTableCellBase
