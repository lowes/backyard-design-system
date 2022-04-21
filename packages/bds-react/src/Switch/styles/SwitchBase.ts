import { css } from 'styled-components'

const Sizes = css`
    &.size {
        /** Large sized switch */
        &--large {
            /** Label Spacing */
            label {
                height: var(--bds-sizes-size-24);
                width: var(--bds-sizes-size-48);
            }

            /** Switch Input */
            input {
                /** Switch Background */
                & + label::before {
                    height: var(--bds-sizes-size-24);
                    width: var(--bds-sizes-size-48);
                }

                /** Switch Circle */
                & + label::after {

                    left: var(--bds-sizes-size-2);
                    top: var(--bds-sizes-size-2);
                    border-width: var(--bds-sizes-size-10);
                }
            }
        }

        /** Small sized switch */
        &--small {
            /** Label Spacing */
            label {
                height: var(--bds-sizes-size-16);
                width: var(--bds-sizes-size-32);
            }

            /** Switch Input */
            input {
                /** Switch Background */
                & + label::before {
                    height: var(--bds-sizes-size-16);
                    width: var(--bds-sizes-size-32);
                }

                /** Switch Circle */
                & + label::after {

                    left: var(--bds-sizes-size-2);
                    top: var(--bds-sizes-size-2);
                    border-width: var(--bds-sizes-size-6);
                }
            }
        }
    }
`

const SwitchBase = css`
    /** Base */
    position: relative;
    display: inline-flex;
    align-items: center;

    /** Label Spacing */
    label {
        display: inline-flex;
        position: relative;
    }

    /** Switch Input */
    input {
        /** Switch Size */
        height: 100%;
        width: 100%;

        position: absolute;
        opacity: 0;

        margin: 0;

        z-index: 1;

        /** Switch Background */
        & + label::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            border-radius: var(--bds-border-radius-circle);
            transition: background-color 0.2s ease-in-out;
        }

        /** Switch Circle */
        & + label::after {
            content: '';
            position: absolute;
            border-style: solid;
            border-radius: var(--bds-border-radius-circle);
            transition: margin-left 0.2s ease-in-out;
        }
    }

    ${Sizes}
`

export {
    SwitchBase
}

export default SwitchBase
