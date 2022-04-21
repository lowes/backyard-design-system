import { css } from 'styled-components'

const CheckboxOn = css`
    /** Checkbox On:enabled */
    &:enabled,
    &.enabled {
        /** Background */
        & + label::before {
            background-color: var(--bds-color-action-interactive);
        }
    }

    /** Checkbox On:hover */
    &:hover,
    &:focus:hover,
    &.hover {
        /** Background */
        & + label::before {
            /** Background Color */
            background-color: var(--bds-color-action-interactive-hover);

            /** Border */
            border-color: var(--bds-color-action-interactive-hover);
        }
    }

    /** Checkbox On:focus */
    &:focus,
    &.focus {
        /** Background */
        & + label::before {
            /** Outline */
            box-shadow: 0 0 0 2px var(--bds-color-border-default);
        }
    }

    /** Checkbox On:disabled */
    &:disabled,
    &.disabled {
        /** Opacity */
        /** Checkbox */
        &,
        & + label {
            cursor: not-allowed;
            color: var(--bds-color-text-disabled);
        }

        /** Background */
        & + label::before {
            /** Background Color */
            background-color: var(--bds-color-text-disabled);

            /** Border */
            border-color: transparent;
        }
    }

    /** Checkbox On Shared */
    &,
    & + label {
        /** Effects */
        cursor: pointer;
    }

    & + label {
        /** Background */
        &::before {
            /** Background Color */
            background-color: var(--bds-color-action-interactive);

            /** Border */
            border-color: var(--bds-color-action-interactive);
        }
    }
`

export {
    CheckboxOn
}

export default CheckboxOn
