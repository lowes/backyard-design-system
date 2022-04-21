import { css } from 'styled-components'

const RatingBase = css`
    /** Base */
    display: inline-flex;
    position: relative;
    align-items: center;

    border: 1px solid transparent;

    /** Misc. */
    * {
        cursor: pointer;
    }

    &.focus-visible {
        border: 1px solid var(--bds-color-border-subdued);
    }

    input:focus + .rating-empty {
        top: 0;
        width: 100%;
        bottom: 0;
        border: 1px solid var(--bds-color-border-subdued);
        position: absolute;
    }

    .hidden {
        position: absolute;
        top: var(--bds-sizes-size-20);
        border: 0;
        padding: 0px;
        margin: -1px;
        clip: rect(0 0 0 0);
        height: var(--bds-sizes-size-1);
        width: var(--bds-sizes-size-1);
        overflow: hidden;
    }

    .decimal {
        position: relative;
    }

    &.read-only {
        pointer-events: none;
    }

    transition: 0.2s all ease-in-out;
`

export {
    RatingBase
}

export default RatingBase
