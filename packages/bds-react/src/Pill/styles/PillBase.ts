import { css } from 'styled-components'

import type { PillProps } from '../Pill'

const Anchors = css`
    /** Anchors */
    &.anchor {
        /** Top Right (Default) */
        &--top-right {
            top: 0;
            right: 0;
            transform: scale(1) translate(50%, -50%);
            transform-origin: 100% 0%;
        }

        /** Bottom Right */
        &--bottom-right {
            bottom: 0;
            right: 0;
            transform: scale(1) translate(50%, 50%);
            transform-origin: 100% 100%;
        }

        /** Top Left */
        &--top-left {
            top: 0;
            left: 0;
            transform: scale(1) translate(-50%, -50%);
            transform-origin: 0% 0%;
        }

        /** Bottom Left */
        &--bottom-left {
            bottom: 0;
            left: 0;
            transform: scale(1) translate(-50%, 50%);
            transform-origin: 0% 100%;
        }
    }
`

const PillBase = css<PillProps>`
    /** Base */
    position: relative;
    display: ${({ display }) => display || 'inline-flex'};
    vertical-align: middle;
    flex-shrink: 0;

    /** Pill */
    .pill {
        /** Display */
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

        /** Invisible Prop */
        &.invisible {
            visibility: hidden;
        }

        /** Position */
        ${Anchors}

        /** Shape */
        width: var(--bds-sizes-size-24);
        height: var(--bds-sizes-size-24);
        border: 1px solid;
        border-radius: var(--bds-border-radius-circle);

        &.shape--dot {
            width: var(--bds-sizes-size-16);
            height: var(--bds-sizes-size-16);
        }

        /** Font */
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-size: var(--bds-sizes-size-14);
        line-height: var(--bds-sizes-size-14);
        font-weight: var(--bds-font-weight-regular);

        /** Misc. */
        pointer-events: none;
        transition: all 0.2s ease-in-out;

        &.over-max {
            font-size: var(--bds-sizes-size-12);
            line-height: var(--bds-sizes-size-12);
        }

        &.size--jumbo {
            width: var(--bds-sizes-size-40);
            height: var(--bds-sizes-size-40);
            font-size: var(--bds-sizes-size-20);
            line-height: var(--bds-sizes-size-20);

            &.shape--dot {
                width: var(--bds-sizes-size-32);
                height: var(--bds-sizes-size-32);
            }

            &.over-max {
                font-size: var(--bds-sizes-size-16);
                line-height: var(--bds-sizes-size-16);
            }
        }
    }
`

export {
    PillBase
}

export default PillBase
