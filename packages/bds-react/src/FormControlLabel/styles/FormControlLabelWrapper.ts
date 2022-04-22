import styled, { css } from 'styled-components'

const FormControlLabelBase = css`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;

    .typography {
        padding-left: var(--bds-sizes-size-16);

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`

const FormControlLabelWrapper = styled.label`
    ${FormControlLabelBase}

    .typography {
        cursor: pointer;

        color: var(--bds-color-text-primary);
    }

    &.disabled {
        .typography {
            cursor: not-allowed;

            color: var(--bds-color-text-disabled);
        }
    }
`

export {
    FormControlLabelBase,
    FormControlLabelWrapper
}

export default FormControlLabelWrapper
