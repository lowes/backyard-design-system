import { css } from 'styled-components'

const Inverse = css`
    &:enabled,
    &.enabled {
        background-color: var(--btn-base-subdued);
        border-color: var(--btn-base-subdued);

        .btn-label {
            color: var(--btn-text);
        }

        .btn-label .icon path {
            fill: var(--btn-icon);
        }
    }

    &:hover,
    &.hover {
        background-color: var(--btn-hover);
        border-color: var(--btn-hover);
    }

    &:focus,
    &.focus {
        background-color: var(--btn-base-subdued);
        box-shadow: 0px 0 0 2px var(--btn-focus);
    }

    &:focus:hover,
    &.focus:hover {
        background-color: var(--btn-hover);
        border-color: var(--btn-focus);
    }

    &:active,
    &.active {
        background-color: var(--btn-pressed);
        border-color: var(--btn-pressed);
    }

    &:disabled,
    &.disabled {
        background-color: var(--btn-base-subdued);
        border-color: var(--btn-base-subdued);

        /** Label */
        .btn-label {
            color: var(--btn-disabled);
        }

        /** Icon */
        .btn-label .icon path {
            fill: var(--btn-disabled);
        }
    }
`

export { Inverse }

export default Inverse
