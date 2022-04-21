import styled from 'styled-components'

import TooltipBase from './TooltipBase'
import LowContrast from './variants/LowContrast'
import HighContrast from './variants/HighContrast'

const TooltipWrapper = styled.div`
    ${TooltipBase}

    /** Variants */
    &.variant {
        /** Low Contrast */
        &--low_contrast {
            ${LowContrast}
        }

        /** High Contrast */
        &--high_contrast {
            ${HighContrast}
        }
    }
`

export {
    TooltipBase,
    TooltipWrapper
}

export default TooltipWrapper
