import { css } from 'styled-components'

const BaseRadio = css`
    /** Base */
    position: relative;
    display: inline-flex;
    align-items: center;

    /** Label Spacing */
    label {
        display: inline-flex;
        height: var(--bds-sizes-size-16);
        width: var(--bds-sizes-size-16);
        position: relative;
    }

    /** Radio Input */
    input {
        /** Radio Size */
        height: 100%;
        width: 100%;

        position: absolute;
        opacity: 0;

        margin: 0;

        z-index: 1;

        /** Checked Base */
        &:checked + label::after {
            opacity: 1;
        }

        &:not(:checked) + label::after {
            opacity: 0;
        }

        /** Radio Background */
        & + label::before {
            content: "";
            position: absolute;

            box-sizing: border-box;
            padding: 0;
            margin: 0;
            vertical-align: center;

            top: 0;
            left: 0;

            border-width: var(--bds-border-width-sm);
            border-style: solid;
            border-radius: var(--bds-border-radius-circle);

            height: var(--bds-sizes-size-16);
            width: var(--bds-sizes-size-16);

            /** Effects */
            transition: 0.2s all ease-in-out;
        }

        /** Radio Icon (Circle) */
        & + label::after {
            content: "";
            position: absolute;

            left: var(--bds-sizes-size-3);
            top: var(--bds-sizes-size-3);

            opacity: 0;

            border-width: var(--bds-sizes-size-5);
            border-style: solid;
            border-radius: var(--bds-border-radius-circle);

            transition: opacity 0.2s ease-in-out;
        }
    }
`

export default BaseRadio
