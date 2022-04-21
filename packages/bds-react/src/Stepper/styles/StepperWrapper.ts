import styled, { css } from 'styled-components'

import StepperBase from './StepperBase'

const Shared = css`
    div.stepper--fields {
        /** Stepper:disabled */
        input:disabled {
            cursor: not-allowed;
        }

        /** Stepper Label */
        &.disabled + label {
            /** Label */
            color: var(--bds-color-text-disabled);
        }
    }
`

const StepperWrapper = styled.div`
    ${StepperBase}

    &&& {
        ${Shared}
    }
`

export {
    StepperWrapper
}

export default StepperWrapper
