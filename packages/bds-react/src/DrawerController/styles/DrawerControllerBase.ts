import { css } from 'styled-components'

const Anchors = css`
    /**
     * Removes border radius along edges of viewport
     */
    &.anchor {
        &--left {
            .drawer {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }

        &--right {
            .drawer {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }
        }

        &--top {
            .drawer {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }
        }

        &--bottom {
            .drawer {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }
`

const DrawerControllerBase = css`
    ${Anchors}
`

export {
    DrawerControllerBase
}

export default DrawerControllerBase
