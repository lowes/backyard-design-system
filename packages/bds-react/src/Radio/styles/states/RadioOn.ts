import { css } from 'styled-components'

const RadioOn = css`
    /** Radio On:enabled */
    &.enabled,
    &:enabled {
        /** Background */
        & + label::before {
            border-color: var(--bds-color-action-interactive);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-action-interactive);
        }
    }

    /** Radio On:hover */
    &.hover,
    &:hover,
    &:focus:hover {
        /** Background */
        & + label::before {
            /** Border */
            border-color: var(--bds-color-action-interactive-hover);
        }
    }

    /** Radio On:focus */
    &.focus,
    &:focus {
        /** Background */
        & + label::before {
            /** Outline */
            box-shadow: 0 0 0 2px var(--bds-color-border-default);
        }
    }

    /** Radio On:disabled */
    &.disabled,
    &:disabled {
        /** Radio */
        &,
        & + label {
            cursor: not-allowed;
        }

        /** Background */
        & + label::before {
            /** Border */
            border-color: var(--bds-color-border-disabled);
        }

        /** Circle */
        & + label::after {
            /** Circle Color */
            border-color: var(--bds-color-border-disabled);
        }
    }

    /** Radio On Shared */
    &,
    & + label {
        /** Effects */
        cursor: pointer;
    }
`

export default RadioOn
