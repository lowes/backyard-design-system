import styled, { css } from 'styled-components'

import type { FormGroupProps } from '../FormGroup'

const getSpacing = (theme, spacing) => theme.sizes[spacing] || spacing

const FormGroupBase = css`
    display: flex;
    flex-wrap: wrap;
`

const FormGroupDirection = css<FormGroupProps>`
    &.direction {
        &--column {
            flex-direction: column;

            & > * {
                margin: ${({ theme, spacing }) => `${getSpacing(theme, spacing)} 0`};
            }
        }

        &--row {
            flex-direction: row;

            margin-left: -${({ theme, spacing }) => getSpacing(theme, spacing)};

            & > * {
                margin: ${({ theme, spacing }) => getSpacing(theme, spacing)};
            }
        }
    }
`

const FormGroupWrapper = styled.div`
    ${FormGroupBase}

    ${FormGroupDirection}
`

export default FormGroupWrapper
