import { css } from 'styled-components'

const Interactive = css`
    .rating-icon {
        &.filled {
            path {
                fill: var(--bds-color-surface-gold);
            }
        }

        &.empty {
            path {
                fill: var(--bds-color-border-subdued);
            }
        }
    }

    .rating-count {
        color: var(--bds-color-text-interactive);
    }
`

export {
    Interactive
}

export default Interactive 
