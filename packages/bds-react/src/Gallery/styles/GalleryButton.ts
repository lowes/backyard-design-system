import styled from 'styled-components'
import IconButton from '../../IconButton'

// @todo delete when not referenced by `Carousel`
const GalleryButton = styled(IconButton)`
    &&&& {
        z-index: 1;

        /** Interactive:enabled */
        &:enabled,
        &.enabled {
            /** Background */
            background-color: var(--bds-color-surface-default);
            /** Border */
            border-color: var(--bds-color-border-default);

            /** Icon */
            .icon path {
                fill: var(--bds-color-text-tertiary);
            }
        }

        /** Interactive:hover */
        &:hover,
        &.hover {
            /** Background */
            background-color: var(--bds-color-action-neutral-subdued-hover);
            /** Border */
            border-color: var(--bds-color-border-hover);
        }

        /** Interactive:focus */
        &:focus,
        &.focus {
            /** Inset */
            box-shadow: inset 0 0 0 1px var(--bds-color-border-subdued),
                inset 0px 0 0 2px var(--bds-color-surface-default);
        }

        /** Interactive:focus:hover */
        &:focus:hover,
        &.focus:hover {
            /** Inset */
            box-shadow: inset 0 0 0 1px var(--bds-color-border-hover),
                inset 0px 0 0 2px var(--bds-color-surface-default);
        }

        /** Interactive:active */
        &:active,
        &.active {
            /** Background */
            background-color: var(--bds-color-action-neutral-pressed);
            /** Border */
            border-color: var(--bds-color-border-pressed);
        }
    }
`

export { GalleryButton }

export default GalleryButton
