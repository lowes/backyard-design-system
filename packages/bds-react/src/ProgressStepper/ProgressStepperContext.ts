import * as React from 'react'

import type { FormGroupProps } from '../FormGroup'

const ProgressStepperContext = React.createContext<ProgressStepperContextValue>(null)

interface ProgressStepperContextValue {
    /**
     * The currently selected index within `ProgressIndicator`
     */
    step: number
    /**
     * Sets a new currently selected step
     */
    setStep: (step: number) => void
    /**
     * Defines the connector between progress steps
     */
    connector: React.ReactElement
    /**
     * Whether or not the progress within `ProgressStepper` is nonLinear
     * When progress stepper is non-linear, the completion of each step must be controlled
     */
    nonLinear: boolean
    /**
     * The direction of the progress steps within progress stepper
     */
    direction: FormGroupProps['direction']
}

export {
    ProgressStepperContext
}

export type {
    ProgressStepperContextValue
}

export default ProgressStepperContext
