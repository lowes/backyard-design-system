import { css } from 'styled-components'
import type { PVSProps } from '../PVS'

const Badge = css`
    /** position the svg badge on the bottom right corner of the PVS */
    svg {
        position: absolute;
        bottom: -0.25rem;
        right: -0.25rem;

        border: 1px solid var(--bds-color-surface-default);

        /** make sure the checkmark is always filled and isn't transparent */
        border-radius: 100%;
        background-color: var(--bds-color-surface-default);
    }
`

const SwatchBase = css<PVSProps>`
    .swatch {
        /** container for the image/hex value of the PVS */
        width: var(--bds-sizes-size-36);
        height: var(--bds-sizes-size-36);
        border-radius: 100%;
        border: none;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
            display: block;
        }

        ${Badge}
    }
`

export { SwatchBase }

export default SwatchBase
