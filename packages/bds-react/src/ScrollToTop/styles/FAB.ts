import styled from 'styled-components'
import IconButton from '../../IconButton'

const FAB = styled(IconButton)`
    /** IconButton type="interactive" color overrides */
    &&&& {
        /** Interactive:enabled */
        &:enabled,
        &.enabled {
            /** Background */
            background-color: var(--bds-color-neutral-05);
            /** Border */
            border-color: transparent;

            /** Icon */
            .icon path {
                fill: var(--bds-color-icon-solid-inverse);
            }
        }

        /** Interactive:hover */
        &:hover,
        &.hover {
            /** Background */
            background-color: var(--bds-color-action-interactive);
            /** Border */
            border-color: var(--bds-color-action-interactive);

            /** Icon */
            .icon path {
                fill: var(--bds-color-icon-solid-inverse);
            }
        }

        /** Interactive:focus */
        &:focus,
        &.focus {
            /** Background */
            background-color: var(--bds-color-action-interactive);
            /** Border */
            border-color: var(--bds-color-action-interactive);
            /** Inset */
            box-shadow: inset 0 0 0 1px var(--bds-color-action-interactive),
                inset 0px 0 0 2px var(--bds-color-icon-solid-inverse);

            /** Icon */
            .icon path {
                fill: var(--bds-color-icon-solid-inverse);
            }

            /** Interactive:focus:hover */
            &:hover,
            &:hover {
                /** Inset */
                box-shadow: inset 0 0 0 1px var(--bds-color-action-interactive-hover),
                    inset 0px 0 0 2px var(--bds-color-icon-solid-inverse);
            }
        }

        /** Interactive:active */
        &:active,
        &.active {
            /** Background */
            background-color: var(--bds-color-action-interactive-pressed);
            /** Border */
            border-color: var(--bds-color-action-interactive-pressed);

            /** Icon */
            .icon path {
                fill: var(--bds-color-icon-solid-inverse);
            }
        }
    }
`

export { FAB }

export default FAB
