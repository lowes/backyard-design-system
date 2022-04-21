import styled, { css } from 'styled-components'

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

const GalleryThumbnailWrapper = styled.div`
    position: relative;

    ${Shapes}

    &&& {
        img {
            width: 100%;
            height: 100%;
        }

        button {
            position: relative;
        }

        &.image button,
        &.excess button {
            padding: var(--bds-sizes-size-4);

            height: var(--bds-sizes-size-72);
            width: var(--bds-sizes-size-72);

            background-color: var(--bds-color-surface-default);
            border: var(--bds-sizes-size-1) solid var(--bds-color-border-default);

            .label {
                width: 100%;
                height: 100%;
            }

            &:hover,
            &.hover {
                border: var(--bds-sizes-size-1) solid var(--bds-color-border-hover);
            }

            &:active,
            &.active,
            &.selected {
                border: var(--bds-sizes-size-1) solid var(--bds-color-border-pressed);
            }

            &:focus,
            &.focus {
                box-shadow: 0px 0 0 2px var(--bds-color-border-subdued);
            }
        }

        &&&.image.selected button,
        &&&.excess.selected button {
            border: var(--bds-sizes-size-1) solid var(--bds-color-border-interactive);
        }

        &&&.dot.selected button {
            svg path {
                fill: var(--bds-color-action-interactive);
            }

            &:focus,
            &.focus {
                svg path {
                    stroke: var(--bds-color-border-subdued);
                    stroke-width: var(--bds-sizes-size-2);
                }
            }
        }

        &.dot button {
            background: transparent;
            border: none;

            padding: 0;

            svg path {
                fill: var(--bds-color-border-subdued);
            }

            &.selected {
                svg path {
                    fill: var(--bds-color-action-interactive);
                }

                &:focus,
                &.focus {
                    svg path {
                        stroke: var(--bds-color-border-subdued);
                        stroke-width: var(--bds-sizes-size-2);
                    }
                }
            }

            &:focus,
            &.focus {
                box-shadow: none;

                svg path {
                    stroke: var(--bds-color-border-subdued);
                    stroke-width: var(--bds-sizes-size-2);
                }
            }

            &:hover:not(.selected),
            &.hover {
                svg path {
                    fill: var(--bds-color-action-neutral-subdued-hover);
                }
            }

            &.size {
                &--medium {
                    .label {
                        height: var(--bds-sizes-size-16);
                    }

                    svg {
                        width: var(--bds-sizes-size-16);
                        height: var(--bds-sizes-size-16);
                        min-width: var(--bds-sizes-size-16);
                        min-height: var(--bds-sizes-size-16);
                    }
                }

                &--small {
                    .label {
                        height: var(--bds-sizes-size-12);
                    }

                    svg {
                        width: var(--bds-sizes-size-12);
                        height: var(--bds-sizes-size-12);
                        min-width: var(--bds-sizes-size-12);
                        min-height: var(--bds-sizes-size-12);
                    }
                }
            }
        }
    }
`

export { GalleryThumbnailWrapper }

export default GalleryThumbnailWrapper
