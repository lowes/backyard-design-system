import styled from 'styled-components'

const FormControlWrapper = styled.div`
    display: flex;
    flex-direction: column;

    &.error {
        input { border-color: ${({ theme }) => theme.color.text_red}; }
        input:focus + label, input:active + label { color: ${({ theme }) => theme.color.text_red}; }
        label { color: ${({ theme }) => theme.color.text_red}; }
        .helper-text { color: ${({ theme }) => theme.color.text_red}; }
    }

    &.success {
        input { border-color: ${({ theme }) => theme.color.text_green}; }
        input:focus + label, input:active + label { color: ${({ theme }) => theme.color.text_green}; }
        label { color: ${({ theme }) => theme.color.text_green}; }
        .helper-text { color: ${({ theme }) => theme.color.text_green}; }
    }

    &.warning {
        input { border-color: ${({ theme }) => theme.color.text_red}; }
        input:focus + label, input:active + label { color: ${({ theme }) => theme.color.text_primary}; }
        label { color: ${({ theme }) => theme.color.text_primary}; }
        .helper-text { color: ${({ theme }) => theme.color.text_primary}; }
    }
`

export {
    FormControlWrapper
}

export default FormControlWrapper
