import { css } from 'styled-components'
import lightOrDark from '../../../utils/functions/lightOrDark'

const Outlined = css`
    /** Variants */
    &.variant {
        /** Outlined */
        &--outlined {
            /** Shapes */
            &.shape {
                /** Dot Shape */
                &--dot {
                    /** Hide Dot Outlined Variants */
                    visibility: hidden;
                }
            }
        }
    }

    /** Colors */
    &.color {
        /** Dark blue */
        &--dark-blue {
            background-color: transparent;
            border-color: var(--bds-color-marketing-dark-blue);
            color: ${({ theme }) => lightOrDark(
                theme, 
                'var(--bds-color-marketing-dark-blue)', 
                'var(--bds-color-text-primary)'
            )};
        }
        /** Blue */
        &--blue {
            background-color: transparent;
            border-color: var(--bds-color-marketing-blue);
            color: var(--bds-color-text-primary);
        }
        /** Light blue */
        &--light-blue {
            background-color: transparent;
            border-color: var(--bds-color-marketing-light-blue);
            color: var(--bds-color-text-primary);
        }
        /** Interactive */
        &--interactive {
            background-color: transparent;
            border-color: var(--bds-color-marketing-interactive);
            color: var(--bds-color-text-interactive);
        }
        /** Green */
        &--green {
            background-color: transparent;
            border-color: var(--bds-color-action-green);
            color: var(--bds-color-text-green);
        }
        /** Red */
        &--red {
            background-color: transparent;
            border-color: var(--bds-color-action-red);
            color: var(--bds-color-text-red);
        }
        /** Gold */
        &--gold {
            background-color: transparent;
            border-color: var(--bds-color-marketing-gold);
            color: var(--bds-color-text-primary);
        }
        /** LFP Yellow */
        &--lfp-yellow {
            background-color: transparent;
            border-color: var(--bds-color-marketing-lfp-yellow);
            color: var(--bds-color-text-primary);
        }
        /** Neutral */
        &--neutral {
            background-color: transparent;
            border-color: ${({ theme }) => lightOrDark(theme, 'var(--bds-color-neutral-02)', 'var(--bds-color-elevation-02)')};
            color: var(--bds-color-text-primary);
        }
    }
`

export {
    Outlined
}

export default Outlined
