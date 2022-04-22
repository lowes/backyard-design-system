import styled, { css } from 'styled-components'

const Shapes = css`
    &.shape {
        &--rounded {
            border-top-left-radius: var(--bds-border-radius-lg);
            border-top-right-radius: var(--bds-border-radius-lg);
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

const Sizes = css`
    &.size {
        &--large {
            /* 64 */
            padding: var(--bds-sizes-size-12) 0;
        }

        &--medium {
            /* 52 */
            padding: var(--bds-sizes-size-7) 0;
        }

        &--small {
            /* 48 */
            padding: var(--bds-sizes-size-5) 0;
        }
    }
`

const DataTableToolbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: var(--bds-color-surface-subdued);
    margin-bottom: var(--bds-sizes-size-8);

    z-index: 100;

    ${Sizes}

    ${Shapes}

    && {
        .table-toolbar-action-buttons {
            display: flex;
            flex-direction: row;
            align-items: center;

            margin-left: var(--bds-sizes-size-8);

            .button-group {
                padding: 0;
                border: 0;
            }

            & > .button,
            & > .button-group {
                margin: 0 var(--bds-sizes-size-8);
            }
        }
    }

    .menu-popover {
        padding-right: var(--bds-sizes-size-16);
    }

    .toolbar-tools {
        display: flex;
        flex-grow: 1;
        align-items: center;

        padding-left: var(--bds-sizes-size-16);
        padding-right: var(--bds-sizes-size-16);

        & > *:not(:last-child) {
            margin-right: var(--bds-sizes-size-8);
        }

        & > *:not(:first-child) {
            margin-left: var(--bds-sizes-size-8);
        }
    }
`

export { DataTableToolbarWrapper }

export default DataTableToolbarWrapper
