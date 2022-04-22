import * as React from 'react'

import ProgressStepperContext from './ProgressStepperContext'

/**
 * Hook for accessing progress stepper context
 */
const useProgressStepper = () => {
    return React.useContext(ProgressStepperContext)
}

export { 
    useProgressStepper
}

export default useProgressStepper
