import { css } from 'styled-components'

const RadioOff = css`
    /** Radio Off:enabled */
    &.enabled,
    &:enabled {
        /** Border */
        & + label::before {
            border-color: var(--bds-color-border-default);
        }
    }

    /** Radio Off:hover */
    &.hover,
    &:hover {
        /** Border */
        & + label::before {
            /** Border */
            border-color: var(--bds-color-action-interactive-hover);
        }
    }

    /** Radio Off:focus */
    &.focus,
    &:focus {
        /** Outline */
        & + label::before {
            /** Border */
            border-color: var(--bds-color-action-interactive);

            /** Outline */
            box-shadow: 0 0 0 2px var(--bds-color-border-default);
        }
    }

    /** Radio Off:disabled */
    &.disabled,
    &:disabled {
        /** Radio */
        &,
        & + label {
            cursor: not-allowed;
        }

        /** Border */
        & + label::before {
            border-color: var(--bds-color-border-disabled);
        }
    }

    /** Radio Off Shared */
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

export default RadioOff
