import { css } from 'styled-components'

const Colors = css`
    /** Base */
    background-color: var(--style-alert-color-background);

    .alert,
    .toast {
        &-indicator {
            background-color: var(--style-alert-color-indicator);
            border-radius: var(--bds-border-radius-circle);
        }

        &-icon {
            .icon path {
                fill: var(--style-alert-color-icon);
            }
        }

        &-title,
        &-subtitle,
        &-timestamp {
            color: var(--bds-color-text-primary);
        }

        &-close {
            .icon path {
                fill: var(--style-alert-color-icon);
            }
        }
    }
`

export { Colors }

export default Colors
