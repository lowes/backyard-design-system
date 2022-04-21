import styled, { css } from 'styled-components'

const Sizes = css`
    &.size--small {
        padding: var(--bds-sizes-size-5) var(--bds-sizes-size-16);
    }

    &.size--medium {
        padding: var(--bds-sizes-size-8) var(--bds-sizes-size-16);
    }

    &.size--large {
        padding: var(--bds-sizes-size-12) var(--bds-sizes-size-16);
    }
`

const DataTablePaginationWrapper = styled.div`
    &.table-pagination {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        ${Sizes};

        .select--container {
            height: 2.375rem;
        }

        .table-pagination-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            .item-count {
                display: flex;
                flex-direction: row;
                align-items: center;

                margin-right: var(--bds-sizes-size-12);
            }
        }

        .table-pagination-rows {
            min-width: 6.5rem;
        }
    }
`

export {
    DataTablePaginationWrapper
}

export default DataTablePaginationWrapper