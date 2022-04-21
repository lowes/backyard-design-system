import { css } from 'styled-components'

const BrowserCSS = css`
    /** Focus Outline */
    outline: none;

    -moz-appearance: textfield;

    /** Increment and Decrement */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
    }
`

const StepperBase = css`
    position: relative;

    div.stepper--fields {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;

        input.textinput.textinput {
            /** Display */
            display: inline-flex;
            justify-content: center;
            align-items: center;

            /** Size */
            width: var(--style-stepper-length);

            padding: var(--bds-sizes-size-4);

            /** Effects */
            transition: 0.2s all ease-in-out;

            text-align: center;

            ${BrowserCSS}
        }

        button {
            z-index: 1;
        }

        button:first-child {
            margin-right: var(--bds-sizes-size-4);
        }

        button:last-child {
            margin-left: var(--bds-sizes-size-4);
        }
    }

    .stepper--label {
        /** Display */
        display: block;

        /** Text */
        text-align: center;

        /** Spacing */
        padding-top: var(--bds-sizes-size-4);

        /** Spacing alignment */
        margin-top: var(--bds-sizes-size-1);
        margin-right: var(--bds-sizes-size-1);

        /** Font */
        font-size: var(--bds-sizes-size-12);
        font-family: var(--style-stepper-font-family);
        font-weight: var(--bds-font-weight-regular);
        line-height: var(--bds-sizes-size-20);

        /** Color */
        color: var(--bds-color-text-tertiary);
    }
`

export {
    StepperBase
}

export default StepperBase
