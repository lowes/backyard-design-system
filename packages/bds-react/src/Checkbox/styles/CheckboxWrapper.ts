import styled from 'styled-components'
import CheckboxBase from './CheckboxBase'
import CheckboxOff from './states/CheckboxOff'
import CheckboxOn from './states/CheckboxOn'

const CheckboxWrapper = styled.span`
    ${CheckboxBase}

    /** Checkbox Input States */
    input {
        /** Checkbox Off */
        &:not(:checked) {
            ${CheckboxOff}
        }

        /** Checkbox On */
        &:checked {
            ${CheckboxOn}
        }
    }
`

export {
    CheckboxWrapper
}

export default CheckboxWrapper
