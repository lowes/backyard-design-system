import { css } from 'styled-components'

import type { TooltipProps } from '../../Tooltip'

const LowContrast = css<TooltipProps>`
    /** Tooltip Base */

    /** Tooltip Background */
    .tooltip-background {
        background: var(--bds-color-elevation-04);
    }

    /** Tooltip Icon */
    .tooltip-icon {
        svg path {
            fill: var(--bds-color-icon-primary);
        }
    }

    /** Title */
    .tooltip-title {
        color: var(--bds-color-text-primary);
    }

    /** Subtitle */
    .tooltip-subtitle {
        color: var(--bds-color-text-primary);
    }

    /** Arrow */
    .tooltip-arrow::before {
        /** Color */
        background: var(--bds-color-elevation-04);
    }
`

export {
    LowContrast
}

export default LowContrast
