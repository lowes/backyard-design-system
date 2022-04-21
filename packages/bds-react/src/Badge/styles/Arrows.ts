import { css } from 'styled-components'

const Arrows = css`
    &.arrow--right {

        &+.arrow {
            margin-left: -0.75rem;

            &.size--jumbo {
                margin-left: -1.1rem;
            }
        }
    }

    &.arrow--left {
    }
`

export { Arrows }
export default Arrows