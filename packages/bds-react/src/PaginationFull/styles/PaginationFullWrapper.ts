import styled from 'styled-components'

import PaginationBase from './PaginationBase'
import Numbered from './variants/Numbered'
import Dotted from './variants/Dotted'

const PaginationFullWrapper = styled.nav`
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
    PaginationFullWrapper
}

export default PaginationFullWrapper
