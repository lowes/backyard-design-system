import { css } from 'styled-components'

const PaginationCondensedBase = css`
    & > ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .popover-wrapper {
        height: calc(var(--bds-sizes-size-100) + var(--bds-sizes-size-60));
        width: calc(100% + var(--bds-sizes-size-16));
    }

    .pagination-condensed-selector {
        display: flex;

        flex-direction: row;
        align-items: center;

        .condensed-label {
            padding-left: var(--bds-sizes-size-16);
        }

        .condensed-selector {
            & > li {
                width: 100%;

                button.button {
                    width: 100%;
                    padding: 0;

                    .label {
                        display: flex;

                        justify-content: center;
                        align-items: center;
                    }
                }
            }
        }
    }
`

export {
    PaginationCondensedBase
}

export default PaginationCondensedBase
