import styled from 'styled-components'

import type { PathIconProps } from './PathIcon'

const StyledSVG = styled.svg<PathIconProps>`
    width: var(--style-icon-width);
    height: var(--style-icon-height);

    &:not(.color-override) {
        g,
        path {
            fill: var(--style-icon-color);

            &[stroke-width] {
                stroke: var(--style-icon-color);
                fill: none;

                * {
                    fill: none;
                }
            }
        }
    }

    &.start {
        margin-right: var(--bds-sizes-size-8);
    }

    &.end {
        margin-left: var(--bds-sizes-size-8);
    }
`

export { StyledSVG }

export default StyledSVG
