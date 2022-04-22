import { css } from 'styled-components'

const SwitchOff = css`
    /** Switch Off:enabled */
    &:enabled,
    &.enabled {
        /** Backround */
        & + label::before {
            background-color: var(--bds-color-neutral-04);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-surface-default);
        }
    }

    /** Switch Off:hover */
    &:hover,
    &.hover {
        /** Background */
        & + label::before {
            background-color: var(--bds-color-border-hover);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-surface-default);
        }
    }

    /** Switch Off:focus */
    &:focus,
    &.focus {
        /** Background */
        & + label::before {
            /** Outline */
            box-shadow: 0 0 0 2px var(--bds-color-action-interactive);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-surface-default);
        }
    }

    /** Switch Off:disabled */
    &:disabled,
    &.disabled {
        /** Switch */
        &,
        & + label {
            cursor: not-allowed;
        }

        /** Backround */
        & + label::before {
            background-color: var(--bds-color-text-disabled);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-icon-disabled);
        }
    }

    /** Switch Off Shared */
    &,
    & + label {
        cursor: pointer;
    }
`

export default SwitchOff
