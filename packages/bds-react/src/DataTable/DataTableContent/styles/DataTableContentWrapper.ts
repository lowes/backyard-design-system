import styled, { css } from 'styled-components'

const Shapes = css`
    &.shape {
        &--rounded {
            &.no-toolbar {
                border-top-left-radius: var(--bds-border-radius-lg);
                border-top-right-radius: var(--bds-border-radius-lg);
            }

            &.no-footer {
                .data-table-body > .data-table-row:last-child {
                    & > .data-table-cell:first-child {
                        border-bottom-left-radius: var(--bds-border-radius-lg);
                    }

                    & > .data-table-cell:last-child {
                        border-bottom-right-radius: var(--bds-border-radius-lg);
                    }
                }
            }

            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        &--squared {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`

const DataTableWrapper = styled.div`
    display: flex;
    flex-direction: column;

    border-collapse: separate;
    border-spacing: 0;

    width: 100%;
    max-height: 100%;

    ${Shapes}

    .data-table-content-scrollable {
        position: relative;
        display: flex;
        flex-direction: column;

        max-height: 100%;

        border: var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);

        ${Shapes}

        .data-table-body {
            width: fit-content;
            min-width: 100%;
        }
    }

    &:not(.disable-scrollbar) .data-table-content-scrollable {
        overflow-y: hidden;
        overflow-x: auto;

        .data-table-body {
            overflow-y: auto;
            overflow-x: hidden;
        }
    }

    .data-table-row {
        display: flex;
        flex-direction: row;
    }

    .data-table-row {
        & > .data-table-cell {
            border-bottom: 0;
        }
    }

    .data-table-cell:not(:last-child) {
        border-right: 0;
    }
`

export { DataTableWrapper }

export default DataTableWrapper
