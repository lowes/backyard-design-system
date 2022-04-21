import { css } from 'styled-components'
import lightOrDark from '../../../utils/functions/lightOrDark'

const Filled = css`
    /** Colors */
    &.color {
        /** Dark blue */
        &--dark-blue {
            background-color: var(--bds-color-marketing-dark-blue);
            border-color: var(--bds-color-marketing-dark-blue);
        }
        /** Blue */
        &--blue {
            background-color: var(--bds-color-marketing-blue);
            border-color: var(--bds-color-marketing-blue);
        }
        /** Light blue */
        &--light-blue {
            background-color: var(--bds-color-marketing-light-blue);
            border-color: var(--bds-color-marketing-light-blue);
        }
        /** Interactive */
        &--interactive {
            background-color: var(--bds-color-marketing-interactive);
            border-color: var(--bds-color-marketing-interactive);
        }
        /** Green */
        &--green {
            background-color: var(--bds-color-action-green);
            border-color: var(--bds-color-action-green);
        }
        /** Red */
        &--red {
            background-color: var(--bds-color-action-red);
            border-color: var(--bds-color-action-red);
        }
        /** Gold */
        &--gold {
            background-color: var(--bds-color-marketing-gold);
            border-color: var(--bds-color-marketing-gold);
        }
        /** LFP Yellow */
        &--lfp-yellow {
            background-color: var(--bds-color-marketing-lfp-yellow);
            border-color: var(--bds-color-marketing-lfp-yellow);
        }
        /** Neutral */
        &--neutral {
            background-color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)')};
            border-color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)')};
        }
    }
`

export {
    Filled
}

export default Filled
