import styled from 'styled-components'
import SwitchBase from './SwitchBase'
import SwitchOff from './states/SwitchOff'
import SwitchOn from './states/SwitchOn'

const SwitchWrapper = styled.span`
    ${SwitchBase}

    /** Switch Input */
    input {
        /** Switch Off */
        &:not(:checked) {
            ${SwitchOff}
        }

        /** Switch On */
        &:checked {
            ${SwitchOn}
        }
    }
`

export {
    SwitchWrapper
}

export default SwitchWrapper
