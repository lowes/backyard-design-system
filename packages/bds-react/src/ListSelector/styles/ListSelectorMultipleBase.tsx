import { css } from 'styled-components'

const Shapes = css`
    &.shape {
        &--rounded {
            .toggle-button {
                border-radius: 0;
            }
        }

        &--squared {
            .toggle-button {
                border-radius: 0;
            }
        }
    }
`

const ListSelectorMultipleBase = css`
    &&& {
        position: relative;
        flex-direction: column;
        padding: var(--bds-sizes-size-8) var(--bds-sizes-size-0);

        width: 100%;

        background-color: var(--bds-color-surface-default);
    
        ${Shapes}

        .toggle-button {
            border: none;
            
            margin-left: calc(-1 * var(--bds-sizes-size-1));
            margin-right: calc(-1 * var(--bds-sizes-size-1));

            .label.btn-label {
                /** Base */
                justify-content: flex-start;

                /** Sizing */
                height: calc(var(--bds-sizes-size-24) - var(--bds-sizes-size-2));
                max-width: 100%;
                /** Font */
                font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
                font-weight: var(--bds-font-weight-regular);
                font-size: var(--bds-sizes-size-14);
                line-height: var(--bds-sizes-size-24);

                .list-label {
                    margin-left: var(--bds-sizes-size-16);
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.max}) {
                    font-size: var(--bds-sizes-size-16);
                    line-height: var(--bds-sizes-size-24);
                }
            }
        }
    }

    .list-selector-list {
        display: flex;
        flex-direction: column;
        margin: 0;
        padding-left: 0;
        width: 99%;
    }

    .list-options-level {
        display: flex;
        flex-direction: column;

        margin: 0;
        padding: 0;
    }
`

export { ListSelectorMultipleBase }

export default ListSelectorMultipleBase
