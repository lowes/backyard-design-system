import { css } from 'styled-components'

const Secondary = css`
    &:enabled,
    &.enabled {
        background-color: transparent;
        border-color: var(--btn-base);

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
        border-color: var(--btn-base);
    }

    &:focus,
    &.focus {
        background-color: transparent;
        box-shadow: 0px 0 0 2px var(--btn-focus);
    }

    &:active,
    &:focus:active,
    &.active {
        background-color: var(--btn-pressed);
        border-color: var(--btn-focus);
    }

    &:disabled,
    &.disabled {
        background-color: transparent;
        border-color: var(--btn-disabled);

        .btn-label {
            color: var(--btn-disabled);
        }

        .btn-label .icon path {
            fill: var(--btn-disabled);
        }
    }
`

export { Secondary }
export default Secondary