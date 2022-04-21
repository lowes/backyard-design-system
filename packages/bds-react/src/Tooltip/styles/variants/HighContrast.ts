import { css } from 'styled-components'

import type { TooltipProps } from '../../Tooltip'

const HighContrast = css<TooltipProps>`
    /** Tooltip Base */

    /** Tooltip Background */
    .tooltip-background {
        background: var(--bds-color-surface-default-inverse);
    }

    /** Tooltip Icon */
    .tooltip-icon {
        svg path {
            fill: var(--bds-color-icon-primary-inverse);
        }
    }

    /** Title */
    .tooltip-title {
        color: var(--bds-color-text-primary-inverse);
    }

    /** Subtitle */
    .tooltip-subtitle {
        color: var(--bds-color-text-primary-inverse);
    }

    /** Arrow */
    .tooltip-arrow::before {
        /** Color */
        background: var(--bds-color-surface-default-inverse);
    }
`

export {
    HighContrast
}

export default HighContrast
