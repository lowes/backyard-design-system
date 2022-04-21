import styled, { css } from 'styled-components'

interface SliderStyleProps {
    readonly offset?: any
    readonly leap?: any
}

const Rail = css`
    .rail {
        display: inline-block;
        position: absolute;
        background: var(--bds-color-surface-subdued);
        overflow: visible;
        cursor: pointer;

        &.disabled {
            background: var(--bds-color-text-disabled);
            cursor: not-allowed;
        }
        
        &.horizontal {
            left: 0;
            top: 50%;
            width: 12.5rem;
            height: var(--bds-sizes-size-2);
        }

        &.vertical {
            bottom: 0;
            left: 50%;
            width: var(--bds-sizes-size-2);
            height: 12.5rem;
        }
    }
`

const Thumb = css`
    .thumb {
        display: block;
        background: var(--bds-color-action-interactive);
        border: var(--bds-color-action-interactive);
        width: var(--bds-sizes-size-16);
        height: var(--bds-sizes-size-16);
        border-radius: 50%;

        &.disabled {
            background: var(--bds-color-neutral-04);
            cursor: not-allowed;
        }

        &:not(.disabled):hover, &:not(.disabled).hovered {
            background: var(--bds-color-action-interactive-pressed);
            width: var(--bds-sizes-size-20);
            height: var(--bds-sizes-size-20);
            border: var(--bds-sizes-size-1) solid var(--bds-color-action-interactive-hover);
            outline: none;
            cursor: pointer;
        }

        &.active, &:focus, &:not(.disabled).focused {
            background: ${({theme}) => theme.color.action_interactive_hover};
            width: var(--bds-sizes-size-20);
            height: var(--bds-sizes-size-20);
            border: var(--bds-sizes-size-1) solid var(--bds-color-action-interactive);
            outline: none;
            /** Inset */
            box-shadow: inset 0 0 0 1px var(--bds-color-action-interactive),
                inset 0px 0 0 2px var(--bds-color-white);
        }
    }

    .tooltip-span {
        display: block;
        width: var(--bds-sizes-size-16);
        height: var(--bds-sizes-size-16);
        border-radius: 50%;

        &:hover {
            width: var(--bds-sizes-size-20);
            height: var(--bds-sizes-size-20);
        }
    }
`

const SliderWrapper = styled.span<SliderStyleProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: var(--bds-sizes-size-16);

    &.horizontal {
        flex-direction: row;
        width: 12.5rem;
        height: var(--bds-sizes-size-20);
    }

    &.vertical {
        flex-direction: column-reverse;
        width: var(--bds-sizes-size-20);
        height: 12.5rem;
        margin-bottom: var(--bds-sizes-size-20);
    }

    ${Rail}

    ${Thumb}

    .track {
        position: absolute;
        background: var(--bds-color-action-interactive-pressed);
        cursor: pointer;

        &.disabled {
            background: var(--bds-color-text-disabled);
            cursor: not-allowed;
        }

        &.horizontal {
            height: var(--bds-sizes-size-2);
            top: 50%;
        }

        &.vertical {
            width: var(--bds-sizes-size-2);
            left: 50%;
        }
    }

    .thumb {
        position: absolute;

        &.horizontal {
            top: var(--bds-sizes-size-3);

            &:not(.disabled):hover, &:not(.disabled).hovered {
                top: var(--bds-sizes-size-1);
            }

            &.active,
            &:focus {
                top: var(--bds-sizes-size-1);
            }
        }

        &.vertical {
            left: 0.6875rem;

            &:not(.disabled):hover, &:not(.disabled).hovered {
                left: var(--bds-sizes-size-9);
            }

            &.active,
            &:focus {
                left: var(--bds-sizes-size-9);
            }
        }
    }

    p.slider-min-label,
    p.slider-max-label {
        margin: 0 !important;
    }
`

export default SliderWrapper
