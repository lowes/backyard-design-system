import { css } from 'styled-components'

import type { MenuProps } from '../Menu'

const Shapes = css`
    &.shape {
        &--rounded {
            border-radius: var(--bds-border-radius-lg);

            li > button {
                border-radius: 0;
            }

            li:first-of-type > button {
                border-top-left-radius: var(--bds-border-radius-lg);
                border-top-right-radius: var(--bds-border-radius-lg);
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }

            li:last-of-type > button {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-left-radius: var(--bds-border-radius-lg);
                border-bottom-right-radius: var(--bds-border-radius-lg);
            }
        }

        &--squared {
            border-radius: 0;

            li > button {
                border-radius: 0;
            }
        }
    }
`

const MenuBase = css<MenuProps>`
    /** Base */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    ${Shapes}

    /** Sizing */
    width: var(--style-menu-width);
    height: var(--style-menu-height);

    /** Misc. */
    & > ul {
        list-style: none;

        padding: 0;
        margin: 0;
    }
`

export { MenuBase }

export default MenuBase
