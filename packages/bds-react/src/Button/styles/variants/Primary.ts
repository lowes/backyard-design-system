import { css } from 'styled-components'

const Primary = css`
    &:enabled,
    &.enabled {
        background-color: var(--btn-base);
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
        border-color: var(--btn-hover);
    }

    &:focus,
    &.focus {
        box-shadow: inset 0 0 0 1px var(--btn-base), inset 0px 0 0 2px var(--btn-focus);
    }

    &:focus:hover,
    &.focus:hover {
        box-shadow: inset 0 0 0 1px var(--btn-hover), inset 0px 0 0 2px var(--btn-focus);
    }

    &:active,
    &.active {
        background-color: var(--btn-pressed);
        border-color: var(--btn-pressed);
    }

    &:disabled,
    &.disabled {
        background-color: var(--btn-disabled);
        border-color: transparent;

        .btn-label {
            color: var(--btn-disabled);
        }

        .btn-label .icon path {
            fill: var(--btn-disabled);
        }
    }

    /** Primary Shared */
    && {
        &.size--jumbo {
            /** Interactive:focus */
            &:focus,
            &.focus {
                /** Inset */
                box-shadow: inset 0 0 0 2px var(--btn-base), inset 0px 0 0 4px var(--btn-focus);
            }
        }
    }
`

export { Primary }
export default Primary
