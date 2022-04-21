import * as React from 'react'

import type { ProgressStepProps } from './ProgressStep'

const ProgressStepContext = React.createContext<ProgressStepContextValue>(null)

interface ProgressStepContextValue { 
    /**
     * Index of the progress step within the `ProgressStepper`
     */
    index: number
    /**
     * Whether or not the progress step is the last index within `ProgressStepper`
     */
    last: boolean
    /**
     * Label number of the progress step
     * Defaults to calculating `index + 1`
     */
    label: number
    /**
     * Whether or not the progress step is disable
     */
    disabled: boolean
    /**
     * The current state of the progress step
     */
    state: ProgressStepProps['state']
}

export {
    ProgressStepContext
}

export type {
    ProgressStepContextValue
}

export default ProgressStepContext
