import { css } from 'styled-components'
import type { TileProps } from '../Tile'
import lightOrDark from '../../utils/functions/lightOrDark'

const Shapes = css`
    &.shape {
        &--rounded {
            border-radius: var(--bds-border-radius-lg);

            input + label {
                border-radius: var(--bds-border-radius-lg);
            }
        }

        &--squared {
            border-radius: 0;
        }
    }
`

const DisabledStyles = css`
    /** Shared:disabled */
    &:disabled,
    &.disabled {
        cursor: not-allowed;

        /** Drop Shadow */
        box-shadow: none;

        /** Font color */
        * {
            color: var(--bds-color-text-disabled);
        }

        /** Icon color */
        path {
            fill: var(--bds-color-icon-disabled);
        }

        /** 'Turn off' focus border when disabled */
        &:focus,
        &.focus,
        &.interaction--focus {
        }

        &.color--surface {
            border: 1px solid var(--bds-color-border-subdued);
        }
    }
`

const ColorStyles = css`
    &.color--surface {
        background-color: var(--bds-color-elevation-03);
    }

    &.color--subdued {
        background-color: ${({ theme }) =>
            lightOrDark(theme, theme.color.surface_subdued, theme.color.elevation_03)};
        background-color: var(--bds-color-surface-subdued);
    }
`

const StateStyles = css`
    /** Shared:hover */
    &:hover,
    &.hover {
        cursor: pointer;
        box-shadow: 0 0 0 1px var(--bds-color-border-interactive), var(--bds-shadows-shadow-03);
    }

    /** Shared:focus */
    &:focus,
    &.focus,
    &.interaction--focus {
        outline: none;
        border: 1px solid var(--bds-color-border-interactive);
        box-shadow: 0 0 0 2px var(--bds-color-border-default), var(--bds-shadows-shadow-03);
    }

    ${DisabledStyles}
`

const TileVariants = css`
    /** Tile Types */
    &.type {
        /** Link */
        &--link {
            ${StateStyles};
        }

        /** Radio */
        &--radio {
            ${StateStyles};

            .tile-icon {
                display: none;
            }

            &&& {
                background: transparent;
            }

            input + label {
                z-index: 0;
            }

            input:checked + label {
                box-shadow: 0 0 0 1px var(--bds-color-border-interactive);

                .tile-icon {
                    display: inline-block;
                }
            }

            input:focus + label {
                outline: none;
                box-shadow: 0 0 0 1px var(--bds-color-border-interactive),
                    0 0 0 3px var(--bds-color-border-default), var(--bds-shadows-shadow-03);
            }

            /** Hide Radio input from user */
            input + label:before,
            input + label:after {
                display: none;
            }
        }

        /** Card */
        &--card {
            ${DisabledStyles};
        }
    }
`

const TileBase = css<TileProps>`
    /** Shared Tile styling */

    /** Positioning */
    display: inline-block;
    position: relative;
    min-width: 3rem;
    min-height: 3rem;
    box-sizing: border-box;

    ${Shapes}

    /** Drop Shadow */
    box-shadow: ${({ theme }) => theme.shadows.shadow_03};

    /** Font Color */
    color: ${({ theme }) => theme.color.text_primary};

    .tile-input {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        input {
            top: 0;
        }

        label {
            height: 100%;
            width: 100%;
        }
    }

    /** SVG styles */
    .tile-icon {
        position: absolute;
        bottom: ${({ theme, type }) => (type === 'link' ? theme.sizes.size_16 : undefined)};
        top: ${({ theme, type }) => (type === 'link' ? undefined : theme.sizes.size_16)};
        right: ${({ theme }) => theme.sizes.size_16};

        svg {
            display: block;
        }
        /** Icon Color */
        path {
            fill: ${({ theme, type }) =>
                type === 'link' ? theme.color.text_tertiary : theme.color.text_interactive};
        }
    }

    ${TileVariants}
    ${ColorStyles}
`

export { TileBase }

export default TileBase
