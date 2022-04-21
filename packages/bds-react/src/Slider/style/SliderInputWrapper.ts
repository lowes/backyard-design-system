import styled from 'styled-components'

const SliderInputWrapper = styled.div`
    &.slider-input {
        background: red;

        &--visible {
            width: 48px;
            padding: 14px 0px;
        }
    }

    &.slider-input--hidden.slider-input--hidden {
        display: none;
    }
`

export default SliderInputWrapper