import { css } from 'styled-components'

import type { CheckboxProps } from '../Checkbox'

const CheckboxBase = css<CheckboxProps>`
    /** Base */
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;

    height: var(--bds-sizes-size-16);
    width: var(--bds-sizes-size-16);

    /** Label Spacing */
    label {
        position: relative;

        display: inline-flex;
        justify-content: center;
        align-items: center;

        height: var(--bds-sizes-size-16);
        width: var(--bds-sizes-size-16);

        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: var(--bds-font-weight-regular);

        pointer-events: none;

        .checkbox-icon {
            z-index: 1;
        }
    }

    /** Checkbox Input */
    input {
        /** Checkbox Size */
        height: 100%;
        width: 100%;
        
        position: absolute;
        opacity: 0;

        margin: 0;

        z-index: 1;

        /** Checked Base */
        &:checked + label::after {
            opacity: 1;
        }

        &:not(:checked) + label::after {
            opacity: 0;
        }

        /** Checkbox Background */
        & + label::before {
            content: "";
            position: absolute;

            top: 0;
            left: 0;
            
            height: var(--bds-sizes-size-14);
            width: var(--bds-sizes-size-14);

            border-width: var(--bds-border-width-sm);
            border-style: solid;
        }

        /** Checkbox Shapes */
        &.shape {
            /** Variant - Rounded */
            &--rounded {
                & + label::before {
                    border-radius: var(--bds-border-radius-md);
                }
            }

            /** Variant - Squared */
            &--squared {
                & + label::before {
                    border-radius: 0;
                }
            }
        }
    }
`

export {
    CheckboxBase,
}

export default CheckboxBase
