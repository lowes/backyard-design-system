import styled from 'styled-components'

import PaginationBase from './PaginationBase'
import Numbered from './variants/Numbered'
import Dotted from './variants/Dotted'

const PillWrapper = styled.nav`
    ${PaginationBase}

    /** Variants */
    &.variant {
        /** Numbered */
        &--numbered {
            ${Numbered}
        }

        /** Dotted */
        &--dotted {
            ${Dotted}
        }
    }
`

export {
    PillWrapper
}

export default PillWrapper
