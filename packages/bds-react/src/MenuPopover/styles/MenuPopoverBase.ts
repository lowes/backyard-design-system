import { css } from 'styled-components'

const Shapes = css`
    &.shape {
        &--rounded {
            .menu {
                border-top-left-radius: var(--bds-border-radius-lg);
                border-top-right-radius: var(--bds-border-radius-lg);
                border-bottom-left-radius: var(--bds-border-radius-lg);
                border-bottom-right-radius: var(--bds-border-radius-lg);
            }
        }

        &--squared {
            .menu {
                border-radius: 0;
            }
        }
    }
`

const MergePopover = css`
    &.open {
        .menu-popover-wrapper[data-popper-placement^='bottom'] {
            &[data-popper-placement$='start'] > .menu {
                border-top-left-radius: 0;
            }

            &[data-popper-placement$='end'] > .menu {
                border-top-right-radius: 0;
            }

            & + .popover-reference {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        .menu-popover-wrapper[data-popper-placement^='top'] {
            &[data-popper-placement$='start'] > .menu {
                border-bottom-left-radius: 0;
            }

            &[data-popper-placement$='end'] > .menu {
                border-bottom-right-radius: 0;
            }

            & + .popover-reference {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }

        .menu-popover-wrapper[data-popper-placement^='right'] {
            &[data-popper-placement$='start'] > .menu {
                border-top-left-radius: 0;
            }

            &[data-popper-placement$='end'] > .menu {
                border-bottom-left-radius: 0;
            }

            & + .popover-reference {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        .menu-popover-wrapper[data-popper-placement^='left'] {
            &[data-popper-placement$='start'] > .menu {
                border-top-right-radius: 0;
            }

            &[data-popper-placement$='end'] > .menu {
                border-bottom-right-radius: 0;
            }

            & + .popover-reference {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }
`

const MenuPopoverBase = css`
    transition: 0.3s filter ease-in-out;

    .menu {
        background-color: var(--bds-color-elevation-03);

        padding: var(--bds-sizes-size-16) 0;
    }

    .menu-popover-wrapper {
        opacity: 0;

        transition: 0.2s opacity ease-in-out;
    }

    &.open {
        /** Don't filter submenu references too */
        &:not(.submenu-popover) {
            filter: var(--style-menu-popover-drop-shadow);
        }

        .menu-popover-wrapper {
            opacity: 1;
        }

        .popover-reference.button:not(.submenu-reference) {
            &.variant--ghost,
            &.variant--inverse {
                background-color: var(--bds-color-elevation-03);
            }

            box-shadow: none;
        }
    }

    &.merge-popover {
        ${MergePopover}
    }

    ${Shapes}
`

export { MenuPopoverBase }

export default MenuPopoverBase
