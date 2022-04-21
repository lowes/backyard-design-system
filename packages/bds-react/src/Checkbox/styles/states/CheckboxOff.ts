import { css } from 'styled-components'

const CheckboxOff = css`
    /** Checkbox Off:enabled */
    &:enabled,
    &.enabled {
        /** Border */
        & + label::before {
            border-color: var(--bds-color-border-default);
        }
    }

    /** Checkbox Off:hover */
    &:hover,
    &.hover {
        /** Border */
        & + label::before {
            /** Border */
            border-color: var(--bds-color-action-interative-hover);
        }
    }

    /** Checkbox Off:focus */
    &:focus,
    &.focus {
        /** Outline */
        & + label::before {
            /** Border */
            border-color: var(--bds-color-action-interactive);

            /** Outline */
            box-shadow: 0 0 0 2px var(--bds-color-action-interactive);
        }
    }

    /** Checkbox Off:disabled */
    &:disabled,
    &.disabled {
        /** Checkbox */
        &,
        & + label {
            cursor: not-allowed;
            color: var(--bds-color-text-disabled);
        }

        /** Border */
        & + label::before {
            border-color: var(--bds-color-text-disabled);
        }
    }

    /** Checkbox Off Shared */
    &,
    & + label {
        cursor: pointer;
    }

    & + label {
        /** Background */
        &::before {
            /** Background Color */
            background-color: transparent;

            /** Border */
            border-color: var(--bds-color-border-default);
        }
    }
`

export {
    CheckboxOff
}

export default CheckboxOff
