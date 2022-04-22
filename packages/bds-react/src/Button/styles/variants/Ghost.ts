import { css } from 'styled-components'

const Ghost = css`
    &:enabled,
    &.enabled {
        background-color: transparent;
        border-color: transparent;

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
        border-color: transparent;
    }

    &:focus,
    &.focus {
        background-color: transparent;
        border-color: transparent;

        box-shadow: 0px 0 0 2px var(--btn-focus);
    }

    &:focus:hover,
    &.focus:hover {
        background-color: var(--btn-hover);
        border-color: transparent;
    }

    &:active,
    &:focus:active,
    &.active {
        background-color: var(--btn-pressed);
        border-color: transparent;
    }

    &:disabled,
    &.disabled {
        background-color: transparent;
        border-color: transparent;

        .btn-label {
            color: var(--btn-disabled);
        }

        .btn-label .icon path {
            fill: var(--btn-disabled);
        }
    }
`

export { Ghost }
export default Ghost