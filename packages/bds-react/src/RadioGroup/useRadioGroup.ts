import * as React from 'react'

import RadioGroupContext from './RadioGroupContext'

const useRadioGroup = () => {
    return React.useContext(RadioGroupContext)
}

export {
    useRadioGroup
}

export default useRadioGroup
