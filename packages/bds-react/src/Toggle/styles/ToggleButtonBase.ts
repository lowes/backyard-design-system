import styled, { css } from 'styled-components'
import { IconButtonBase } from '../../IconButton/styles/IconButtonBase'

const Unselected = css`
    border-color: transparent;
    border-radius: var(--bds-border-radius-md);

    .btn-label {
        color: var(--bds-color-text-primary);
    }

    /** Icon */
    .btn-label > .icon path {
        fill: var(--bds-color-icon-primary);
    }

    &:enabled,
    &.enabled {
        background-color: transparent;
    }

    /** Unselected:hover */
    &:hover,
    &.hover {
        /** Background */
        background-color: var(--bds-color-action-neutral-hover);

        /** Label */
        .btn-label {
            color: var(--bds-color-text-primary);
        }

        /** Icon */
        .btn-label > .icon path {
            fill: var(--bds-color-icon-primary);
        }
    }

    /** Unselected:focus */
    &:focus,
    &.focus {
        /** Outline */
        box-shadow: 0px 0 0 2px var(--bds-color-border-default);
    }

    /** Unselected:active */
    &:active,
    &:focus:active,
    &.active {
        /** Background */
        background-color: var(--bds-color-action-neutral-pressed);

        /** Label */
        .btn-label {
            color: var(--bds-color-text-primary);
        }

        /** Icon */
        .btn-label > .icon path {
            fill: var(--bds-color-icon-primary);
        }
    }

    /** Unselected:disabled */
    &:disabled,
    &.disabled {
        /** Background */
        background-color: transparent;
        /** Border */
        border-color: transparent;

        /** Label */
        .btn-label {
            color: var(--bds-color-text-disabled);
        }

        /** Icon */
        .btn-label > .icon path {
            fill: var(--bds-color-icon-disabled);
        }
    }
`

const Selected = css`
    /** Border */
    border-color: transparent;
    border-radius: var(--bds-border-radius-md);

    /** Label */
    .btn-label {
        color: var(--bds-color-text-primary);
    }

    /** Icon */
    .btn-label > .icon path {
        fill: var(--bds-color-icon-primary);
    }

    /** Selected:enabled */
    &:enabled,
    &.enabled {
        /** Background */
        background-color: var(--bds-color-neutral-03);
    }

    /** Selected:hover */
    &:hover,
    &.hover {
        /** Background */
        background-color: var(--bds-color-neutral-04);
    }

    /** Selected:focus */
    &:focus,
    &.focus {
        /** Outline */
        box-shadow: 0px 0 0 2px var(--bds-color-border-default);
    }

    /** Selected:active */
    &:active,
    &:focus:active,
    &.active {
        /** Background */
        background-color: var(--bds-color-neutral-05);
    }
`

const ToggleButtonBase = styled(IconButtonBase)`
    &&& {
        &.state {
            &--unselected {
                ${Unselected}
            }

            &--selected {
                ${Selected}
            }
        }
    }
`

export { ToggleButtonBase }

export default ToggleButtonBase
