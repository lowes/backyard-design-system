import { css } from 'styled-components'

const ListOptionSizes = css`
    &.size--normal {
        padding-top: var(--bds-sizes-size-8);
        padding-bottom: var(--bds-sizes-size-8);
    }

    &.size--condensed {
        padding-top: 0;
        padding-bottom: 0;
    }
`

const ListOptionBase = css`
    /** Base */
    position: relative;
    display: flex;
    justify-content: stretch;
    box-sizing: border-box;

    &&& > .button {
        /** Size */
        width: 100%;

        /** Spacing */
        padding-left: var(--bds-sizes-size-16);
        padding-right: var(--bds-sizes-size-48);
        ${ListOptionSizes}

        /** Misc. */
        &.focus,
        &:focus {
            z-index: 1;
        }

        .label {
            /** Base */
            justify-content: flex-start;

            /** Sizing */
            height: calc(var(--bds-sizes-size-24) - var(--bds-sizes-size-2));

            /** Font */
            font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
            font-weight: var(--bds-font-weight-regular);
            font-size: var(--bds-sizes-size-14);
            line-height: var(--bds-sizes-size-24);

            .list-label {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.max}) {
                font-size: var(--bds-sizes-size-14);
                line-height: var(--bds-sizes-size-24);
            }
        }

        .icon {
            margin-right: var(--bds-sizes-size-8);

            width: var(--bds-sizes-size-20);
            height: var(--bds-sizes-size-20);
        }

        &.selected {
            z-index: 0;
            .btn-label {
                font-weight: ${({ theme }) =>
                    theme.context.font === 'roboto'
                        ? theme.font.weight.medium
                        : theme.font.weight.semibold};
                color: var(--bds-color-text-primary) !important;
            }
        }
    }
`

export { ListOptionBase }

export default ListOptionBase
