import { css, keyframes } from 'styled-components'
import type { SpinnerProps } from '../Spinner'

const spin = keyframes`
  0% {
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const SpinnerBase = css<SpinnerProps>`
    &.inline-spinner {
        margin-left: var(--bds-sizes-size-8);
        display: ${({ show }) => (show ? 'inline-flex' : 'none')};
        justify-content: center;
        align-items: center;
        vertical-align: middle;
    }

    .spinner-overlay {
        display: flex;
        justify-content: center;
        align-items: center;

        .icon-wrapper {
            background-color: var(--bds-color-text-tertiary);
            border-radius: 100%;
            padding: var(--bds-sizes-size-32);

            &.size--small {
                padding: var(--bds-sizes-size-16);
            }
        }

        svg {
            display: block;
        }
    }

    &.inline-spinner,
    .icon-wrapper {
        svg {
            height: var(--bds-sizes-size-64);
            width: var(--bds-sizes-size-64);

            -webkit-animation: ${spin} 1s linear infinite;
            -moz-animation: ${spin} 1s linear infinite;
            animation: ${spin} 1s linear infinite;

            path { fill: ${({ theme, color }) => theme.color[color]}; }
        }

        &.size--small {
            svg {
                height: var(--bds-sizes-size-16);
                width: var(--bds-sizes-size-16);
            }
        }
    }
`

export { SpinnerBase }

export default SpinnerBase
