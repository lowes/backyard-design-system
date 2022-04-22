import { css } from 'styled-components'

const Orientation = css`
    &&.orientation {
        &--vertical {
            height: 100%;

            max-height: 100%;
            max-width: 100%;

            &.size {
                &--large {
                    width: 31.3125rem;
                }

                &--medium {
                    width: 28.25rem;
                }

                &--small {
                    width: 23.4375rem;
                }
            }
        }

        &--horizontal {
            width: 100%;

            max-height: 100%;
            max-width: 100%;
        }
    }
`

const DrawerBase = css`
    & {
        ${Orientation}
    }
`

export { DrawerBase }

export default DrawerBase
