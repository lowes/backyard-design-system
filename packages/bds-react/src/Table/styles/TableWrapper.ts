import styled, { css } from 'styled-components'

const Shapes = css`
    &.shape {
        &--rounded {
            & > .table-head {
                & > .table-row > .table-cell {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                & > .table-row:first-child {
                    & > .table-cell:first-child {
                        border-top-left-radius: var(--bds-border-radius-lg);
                    }

                    & > .table-cell:last-child {
                        border-top-right-radius: var(--bds-border-radius-lg);
                    }
                }
            }

            & > .table-body {
                & > .table-row > .table-cell {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }

                &:first-child {
                    & > .table-row:first-child {
                        & > .table-cell:first-child {
                            border-top-left-radius: var(--bds-border-radius-lg);
                        }

                        & > .table-cell:last-child {
                            border-top-right-radius: var(--bds-border-radius-lg);
                        }
                    }
                }

                & > .table-row:last-child {
                    & > .table-cell:first-child {
                        border-bottom-left-radius: var(--bds-border-radius-lg);
                    }

                    & > .table-cell:last-child {
                        border-bottom-right-radius: var(--bds-border-radius-lg);
                    }
                }
            }
        }

        &--squared {
            & > .table-head,
            & > .table-body {
                & > .table-row > .table-cell {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }
    }
`

const TableWrapper = styled.table`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
	border-spacing: 0;
    box-sizing: border-box;

    thead, tbody, tfoot, tr, th, td {
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: ${
            ({ theme }) => (theme.context.font === 'roboto')
                ? theme.font.weight.medium
                : theme.font.weight.semibold}
    }

    &.variant--outlined {
        th {
            background-color: var(--bds-color-surface-default);
        }
    }

    &.right-rule-on {
        tr {
            th:not(:last-child),
            td:not(:last-child) {
                border-right: 1px solid var(--bds-color-border-subdued);
            }
        }
    }

    h5 {
        margin: 0;
    }

    ${Shapes}
`

export { TableWrapper }

export default TableWrapper
