import styled, { css } from 'styled-components'

import type { FormHelperTextProps } from '../FormHelperText'

const FormHelperTextBase = css`
    margin: 0;
    padding-top: ${({ theme }) => theme.sizes.size_4};
`

const FormHelperTextWrapper = styled.span<FormHelperTextProps>`
    ${FormHelperTextBase}

    .typography {
        color: ${({ theme }) => theme.color.text_tertiary};

        .icon path {
            fill: ${({ theme }) => theme.color.text_tertiary};
        }
    }

    .icon {
        vertical-align: text-top;
    }

    .helper-text-icon {
        margin-right: ${({ theme }) => theme.sizes.size_8};
    }

    &&.indent {
        .typography {
            padding-left: var(--helper-text-indent);
        }
    }

    &&.disabled {
        .typography {
            color: ${({ theme }) => theme.color.text_disabled};

            .icon path {
                fill: ${({ theme }) => theme.color.text_disabled};
            }
        }
    }

    &.error {
        .typography {
            color: ${({ theme }) => theme.color.text_red};

            .icon path {
                fill: ${({ theme }) => theme.color.text_red};
            }
        }
    }

    &.success {
        .typography {
            color: ${({ theme }) => theme.color.text_green};

            .icon path {
                fill: ${({ theme }) => theme.color.text_green};
            }
        }
    }

    &.warning {
        .typography {
            color: ${({ theme }) => theme.color.text_red};

            .icon path {
                fill: ${({ theme }) => theme.color.text_red};
            }
        }
    }

    &.info {
        .typography {
            color: ${({ theme }) => theme.color.text_interactive};

            .icon path {
                fill: ${({ theme }) => theme.color.text_interactive};
            }
        }
    }
`

export { FormHelperTextBase, FormHelperTextWrapper }

export default FormHelperTextWrapper
