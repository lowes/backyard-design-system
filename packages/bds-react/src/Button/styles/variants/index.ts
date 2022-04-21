import { css } from 'styled-components'
import Primary from './Primary'
import Secondary from './Secondary'
import Tertiary from './Teritary'
import Ghost from './Ghost'
import Inverse from './Inverse'

const Variants = css`
    &.variant {
        &--primary {
            ${Primary}
        }

        &--secondary {
            ${Secondary}
        }

        &--tertiary {
            ${Tertiary}
        }

        &--ghost {
            ${Ghost}
        }

        &--inverse {
            ${Inverse}
        }
    }
`

export { Variants }
export default Variants