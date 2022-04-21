import { css } from 'styled-components'

const SwitchOn = css`
    /** Switch On:enabled */
    &:enabled,
    &.enabled {
        /** Background */
        & + label::before {
            background-color: var(--bds-color-action-interactive);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-surface-default);
        }
    }

    /** Switch On:hover */
    &:hover,
    &:focus:hover,
    &.hover {
        /** Background */
        & + label::before {
            background-color: var(--bds-color-action-interactive-hover);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-surface-default);
        }
    }

    /** Switch On:focus */
    &:focus,
    &.focus {
        /** Background */
        & + label::before {
            /** Outline */
            box-shadow: 0 0 0 2px var(--bds-color-border-default);
        }

        /** Circle */
        & + label::after {
            border-color: var(--bds-color-surface-default);
        }
    }

    /** Switch On:disabled */
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
            border-color: var(--bds-color-text-disabled);
        }
    }

    /** Switch On Shared */
    &,
    & + label {
        cursor: pointer;
    }

    &.size--large + label {
        &::after {
            margin-left: var(--bds-sizes-size-24);
        }
    }

    &.size--small + label {
        &::after {
            margin-left: var(--bds-sizes-size-16);
        }
    }
`

export default SwitchOn
