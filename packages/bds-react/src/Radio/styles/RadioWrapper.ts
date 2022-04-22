import styled from 'styled-components'
import BaseRadio from './BaseRadio'
import RadioOff from './states/RadioOff'
import RadioOn from './states/RadioOn'

const RadioWrapper = styled.span`
    ${BaseRadio}

    /** Radio Input States */
    input {
        /** Radio Off */
        &:not(:checked) {
            ${RadioOff}
        }

        /** Radio On */
        &:checked {
            ${RadioOn}
        }
    }
`

export default RadioWrapper
