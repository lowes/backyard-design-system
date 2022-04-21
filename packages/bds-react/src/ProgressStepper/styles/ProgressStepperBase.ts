import { css } from 'styled-components'

import type { ProgressStepperProps } from '../ProgressStepper'

const ProgressStepperBase = css<ProgressStepperProps>`
    position: relative;
    display: flex;

    min-width: ${({ stretch }) => (stretch ? '100%' : 'auto')};
    min-height: ${({ stretch }) => (stretch ? '100%' : 'auto')};

    .progress-stepper {
        &.direction--row {
            min-width: ${({ width }) => width || '100%'};
        }

        &.direction--column {
            min-height: ${({ height }) => height || '100%'};
        }
    }
`

export {
    ProgressStepperBase
}

export default ProgressStepperBase
