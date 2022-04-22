import styled, { css } from 'styled-components'

import type { GalleryViewportProps } from '../GalleryViewport'

const Shapes = css`
    &.shape {
        &--rounded {
            border-radius: var(--bds-border-radius-lg);
        }

        &--squared {
            border-radius: 0;
        }
    }
`

const GalleryViewportWrapper = styled.div<GalleryViewportProps>`
    position: relative;
    display: flex;
    align-items: center;

    height: var(--style-gallery-viewport-height);
    width: var(--style-gallery-viewport-width);

    overflow: hidden;

    background-color: var(--bds-color-surface-default);
    border: var(--bds-sizes-size-1) solid var(--bds-color-border-default);

    ${Shapes}

    .viewport {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        padding: var(--style-gallery-viewport-padding);
    }

    img {
        position: relative;

        max-width: 100%;
        max-height: 100%;

        @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
            position: absolute;

            padding: var(--style-gallery-viewport-padding);

            transform: translate(-50%, -50%);
        }
    }

    .gallery-list {
        display: flex;
        width: 100%;
        height: 100%;

        padding: 0;
        margin: 0;

        transition: 1s ease-in-out;

        .gallery-list-item {
            position: relative;
            display: flex;
            min-width: 100%;
            align-items: center;
            justify-content: center;
        }
    }

    &&& .viewport-button {
        position: absolute;

        z-index: 1;

        top: 50%;

        transform: translateY(-50%);

        border: none;

        &.prev {
            left: var(--bds-sizes-size-16);
        }

        &.next {
            right: var(--bds-sizes-size-16);
        }
    }
`

export { GalleryViewportWrapper }

export default GalleryViewportWrapper
