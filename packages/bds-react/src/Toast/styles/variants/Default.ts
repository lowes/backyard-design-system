import { css } from 'styled-components'

const Colors = css`
    /** Base */
    background-color: var(--bds-color-surface-default-inverse);

    .alert,
    .toast {
        &-icon {
            .icon path {
                fill: var(--style-alert-color-icon);
            }
        }

        &-title,
        &-subtitle {
            color: var(--bds-color-text-primary-inverse);
        }

        &-timestamp {
            color: var(--bds-color-text-tertiary-inverse);
        }

        &-action .link-label {
            color: var(--bds-color-text-interactive-inverse);
        }

        &-close {
            .icon path {
                fill: var(--bds-color-icon-primary-inverse) !important;
            }
        }
    }
`

export { Colors }

export default Colors
