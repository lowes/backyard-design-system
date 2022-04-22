import styled from 'styled-components'

import AlertBase from './AlertBase'
import DefaultColors from './variants/Default'

const AlertWrapper = styled.div`
    ${AlertBase}

    /** Variants */
    ${DefaultColors}
`

export {
    AlertWrapper
}

export default AlertWrapper
