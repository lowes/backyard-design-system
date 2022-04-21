import styled, { css } from 'styled-components'

import type { TabsProps } from '../Tabs'

const Shapes = css`
    &.shape {
        &--rounded {
            .tablist {
                & > .tab {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }

        &--squared {
            .tablist {
                border-radius: 0;

                & > .tab {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
            }
        }
    }
`

const BaseTabsWrapper = styled.div<TabsProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${Shapes}

    .tabs {
        position: relative;
        width: 100%;
        z-index: 1;
        padding: 0;

        .tablist {
            display: flex;
            flex-direction: row;
            width: 100%;
            background-color: trasparent;
            margin: 0;
            padding: 0;
            list-style: none;
        }
    }

    .content-container {
        width: 100%;
    }

    .tabs .carousel-item {
        margin: 0;
        flex-grow: 1;
        flex-shrink: 0;
    }

    .tabs .carousel-button-left.carousel-button-left.carousel-button-left.carousel-button-left,
    .tabs .carousel-button-right.carousel-button-right.carousel-button-right.carousel-button-right {
        background-color: transparent;
        width: 2.375rem;
        height: 2.375rem;
        padding: auto;

        &:hover {
            border-bottom-color: var(--bds-color-action-interactive-hover);
        }

        &:focus {
            box-shadow: inset 0 0 0 var(--bds-sizes-size-2) var(--bds-color-action-interactive);
        }

        & .icon path {
            fill: ${({ theme }) => theme.color.action_interactive};
        }
    }

    .tabs .carousel-content {
        width: 100%;
        padding: 0;
        flex-wrap: nowrap;
    }
`

export { BaseTabsWrapper }

export default BaseTabsWrapper
