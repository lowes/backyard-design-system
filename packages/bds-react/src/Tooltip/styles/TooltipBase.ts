import { css } from 'styled-components'

import type { TooltipProps } from '../Tooltip'

const Shapes = css`
    &.shape {
        &--rounded {
            .tooltip-background {
                border-top-left-radius: var(--bds-border-radius-lg);
                border-top-right-radius: var(--bds-border-radius-lg);
                border-bottom-left-radius: var(--bds-border-radius-lg);
                border-bottom-right-radius: var(--bds-border-radius-lg);
            }
        }

        &--squared {
            .tooltip-background {
                border-radius: 0;
            }
        }
    }
`

const ArrowPlacement = css`
    &.placement {
        /** Top */
        &--top,
        &--top-start,
        &--top-end {
            /** Position */
            top: calc(-1 * var(--bds-sizes-size-7));
        }

        &--top-start {
            left: var(--bds-sizes-size-16);
        }

        &--top {
            left: calc(50% - var(--bds-sizes-size-6));
        }

        &--top-end {
            left: calc(100% - var(--bds-sizes-size-32));
        }

        /** Left */
        &--left,
        &--left-start,
        &--left-end {
            /** Position */
            left: calc(-1 * var(--bds-sizes-size-7));
        }

        &--left-start {
            top: var(--bds-sizes-size-16);
        }

        &--left {
            top: calc(50% - var(--bds-sizes-size-6));
        }

        &--left-end {
            top: calc(100% - var(--bds-sizes-size-32));
        }

        /** Right */
        &--right,
        &--right-start,
        &--right-end {
            /** Position */
            right: calc(-1 * var(--bds-sizes-size-7));
        }

        &--right-start {
            top: var(--bds-sizes-size-16);
        }

        &--right {
            top: calc(50% - var(--bds-sizes-size-6));
        }

        &--right-end {
            top: calc(100% - var(--bds-sizes-size-32));
        }

        /** Bottom */
        &--bottom,
        &--bottom-start,
        &--bottom-end {
            /** Position */
            bottom: calc(-1 * var(--bds-sizes-size-6));
        }

        &--bottom-start {
            left: var(--bds-sizes-size-16);
        }

        &--bottom {
            left: calc(50% - var(--bds-sizes-size-6));
        }

        &--bottom-end {
            left: calc(100% - var(--bds-sizes-size-32));
        }
    }
`

const TooltipBase = css<TooltipProps>`
    /** Base */
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-content: stretch;

    /** Size */
    width: var(--style-tooltip-width);
    max-width: calc(var(--bds-sizes-size-128) * 2);

    /** Position */
    z-index: var(--bds-z-index-tooltip);

    /** Shape */
    padding: var(--bds-sizes-size-12) var(--bds-sizes-size-16);

    ${Shapes}

    &.invisible {
        display: none;
    }

    /** Tooltip Background */
    .tooltip-background {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        /** Elevation */
        filter: var(--style-tooltip-drop-shadow);
    }

    .tooltip-icon {
        /** Base */
        display: inline-flex;
        align-items: center;

        /** Spacing */
        margin-right: var(--bds-sizes-size-2);

        z-index: 1;
    }

    .tooltip-body {
        /** Base */
        flex-grow: 1;

        z-index: 1;

        .tooltip-title {
            /** Base */
            display: flex;

            /** Font */
            font-family: var(--style-tooltip-font-family);
            font-weight: var(--style-tooltip-font-weight);

            font-size: var(--bds-sizes-size-14);
            line-height: var(--bds-sizes-size-24);
        }

        .tooltip-subtitle {
            /** Base */
            display: block;

            /** Font */
            font-family: var(--style-tooltip-font-family);
            font-weight: var(--bds-font-weight-regular);

            font-size: var(--bds-sizes-size-12);
            line-height: var(--bds-sizes-size-16);

            /** Padding Fixes */
            padding-bottom: var(--bds-sizes-size-1);
            padding-left: var(--bds-sizes-size-1);
        }
    }

    .tooltip-arrow {
        &,
        &::before {
            /** Base */
            position: absolute;

            /** Sizing */
            width: var(--bds-sizes-size-14);
            height: var(--bds-sizes-size-14);

            /** Misc */
            z-index: var(--bds-z-index-tooltip);
        }

        &::before {
            /** Base */
            content: '';

            /** Shape */
            transform: rotate(45deg);
        }

        /** Arrow Placement */
        ${ArrowPlacement}

        /** Misc. */
        transition: opacity 0.2s ease-in-out, top 0s, left 0s, transform 0s;
    }

    /** Misc. */
    transition: opacity 0.2s ease-in-out, top 0s, left 0s, transform 0s;
`

export { TooltipBase }

export default TooltipBase
