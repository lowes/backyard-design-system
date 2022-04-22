import { css } from 'styled-components'

const ReadOnly = css`
    .rating-icon {
        &.filled {
            path {
                fill: var(--bds-color-surface-gold);
            }
        }

        &.empty {
            path {
                fill: var(--bds-color-surface-gold);
            }
        }
    }

    .rating-count {
        color: var(--bds-color-text-interactive);
    }
`

export {
    ReadOnly
}

export default ReadOnly
