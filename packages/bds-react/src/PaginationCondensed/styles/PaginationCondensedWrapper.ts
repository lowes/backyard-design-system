import styled from 'styled-components'

import PaginationCondensedBase from './PaginationCondensedBase'
import Condensed from './variants/Condensed'

const PaginationCondensedWrapper = styled.nav`
    ${PaginationCondensedBase}

    /** Variants */
    &.variant {
        /** Condensed */
        &--condensed {
            ${Condensed}
        }
    }
`

export {
    PaginationCondensedWrapper
}

export default PaginationCondensedWrapper
