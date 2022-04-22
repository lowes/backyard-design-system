import styled from 'styled-components'

import PillBase from './PillBase'
import Filled from './variants/Filled'
import Outlined from './variants/Outlined'
import Indicator from './variants/Indicator'

const PillWrapper = styled.span`
    ${PillBase}

    /** Pill */
    .pill {
        /** Variants */
        &.variant {
            /** Filled */
            &--filled {
                ${Filled}
            }

            /** Outlined */
            &--outlined {
                ${Outlined}
            }

            /** Indicator */
            &--indicator {
                ${Indicator}
            }
        }
    }
`

export {
    PillWrapper
}

export default PillWrapper
