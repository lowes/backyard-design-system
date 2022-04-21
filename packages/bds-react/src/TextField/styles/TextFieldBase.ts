import { css } from 'styled-components'

/**
 * Extend `TextInput` and apply `TextField` styles
 */
const TextFieldBase = css`
    & + div:before {
        content: "";
        display: inline-block;
        box-sizing: content-box;

        padding: ${({ theme }) => theme.sizes.size_16} 0;
        height: ${({ theme }) => theme.sizes.size_18};

        border-top: 1px solid;
        border-bottom: 1px solid;
    }
`

export {
    TextFieldBase
}

export default TextFieldBase
