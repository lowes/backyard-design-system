import { css } from 'styled-components'

const MenuItemBase = css`
    /** Base */
    position: relative;
    display: flex;
    justify-content: stretch;

    &&& > .button {
        /** Size */
        width: 100%;

        /** Spacing */
        padding-left: var(--bds-sizes-size-16);
        padding-right: var(--bds-sizes-size-16);

        /** Misc. */
        z-index: 1;

        .label {
            /** Base */
            justify-content: flex-start;

            /** Font */
            font-size: var(--bds-sizes-size-14);
            line-height: var(--bds-sizes-size-24);

            .list-label {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .menu-item-icon-before {
            margin-right: var(--bds-sizes-size-8);

            width: var(--bds-sizes-size-14);
            height: var(--bds-sizes-size-14);
        }

        .menu-item-icon-after {
            position: absolute;

            right: var(--bds-sizes-size-16);
        }

        &.selected {
            z-index: 0;
        }
    }
`

export { MenuItemBase }

export default MenuItemBase
