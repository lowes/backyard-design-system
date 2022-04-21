import { css } from 'styled-components'
import lightOrDark from '../../../utils/functions/lightOrDark'

const Filled = css`
    /** Colors */
    &.color {
        /** Dark blue */
        &--dark-blue {
            background-color: var(--bds-color-marketing-dark-blue);
            border-color: var(--bds-color-marketing-dark-blue);
            color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-text-primary-inverse)', 'var(--bds-color-text-primary)')};
        }
        /** Blue */
        &--blue {
            background-color: var(--bds-color-marketing-blue);
            border-color: var(--bds-color-marketing-blue);
            color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)')};
        }
        /** Light blue */
        &--light-blue {
            background-color: var(--bds-color-marketing-light-blue);
            border-color: var(--bds-color-marketing-light-blue);
            color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)')};
        }
        /** Interactive */
        &--interactive {
            background-color: var(--bds-color-marketing-interactive);
            border-color: var(--bds-color-marketing-interactive);
            color: var(--bds-color-text-primary-inverse);
        }
        /** Green */
        &--green {
            background-color: var(--bds-color-action-green);
            border-color: var(--bds-color-action-green);
            color: var(--bds-color-text-primary-inverse);
        }
        /** Red */
        &--red {
            background-color: var(--bds-color-action-red);
            border-color: var(--bds-color-action-red);
            color: var(--bds-color-text-primary-inverse);
        }
        /** Gold */
        &--gold {
            background-color: var(--bds-color-marketing-gold);
            border-color: var(--bds-color-marketing-gold);
            color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)')};
        }
        /** LFP Yellow */
        &--lfp-yellow {
            background-color: var(--bds-color-marketing-lfp-yellow);
            border-color: var(--bds-color-marketing-lfp-yellow);
            color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-text-primary)', 'var(--bds-color-text-primary-inverse)')};
        }
        /** Neutral */
        &--neutral {
            background-color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)')};
            border-color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)')};
            color: var(--bds-color-text-primary);
        }
    }
`

export {
    Filled
}

export default Filled
