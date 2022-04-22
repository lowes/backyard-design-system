import { css } from 'styled-components'

import type { PaginationProps } from '../../Pagination'

const Dotted = css<PaginationProps>`
    &&& > ul {
        & > li {
            display: flex;
            align-items: center;
            
            padding: ${({ theme }) => `0 ${theme.sizes.size_4}`};

            &:first-child {
                padding-left: 0;
            }

            &:last-child {
                padding-right: 0;
            }
        }

        .button {
            background: transparent;
            border: none;

            padding: 0;

            svg path {
                fill: ${({ theme }) => theme.color.border_subdued};
            }

            &.selected {
                svg path {
                    fill: ${({ theme, color }) => theme.color[`${color}_01`] || theme.color[color]};
                }

                &:focus,
                &.focus {
                    svg path {
                        stroke: ${({ theme }) => theme.color.border_subdued};
                        stroke-width: ${({ theme }) => theme.sizes.size_2};
                    }
                }
            }

            &:focus,
            &.focus {
                box-shadow: none;

                svg path {
                    stroke: ${({ theme, color }) => theme.color[`${color}_01`] || theme.color[color]};
                    stroke-width: ${({ theme }) => theme.sizes.size_2};
                }
            }

            &:hover:not(.selected),
            &.hover {
                svg path {
                    fill: ${({ theme }) => theme.color.border_default};
                }
            }

            &.size {
                &--medium {
                    .label {
                        height: ${({ theme }) => theme.sizes.size_16};
                    }

                    svg {
                        width: ${({ theme }) => theme.sizes.size_16};
                        height: ${({ theme }) => theme.sizes.size_16};
                        min-width: ${({ theme }) => theme.sizes.size_16};
                        min-height: ${({ theme }) => theme.sizes.size_16};
                    }
                }

                &--small {
                    .label {
                        height: ${({ theme }) => theme.sizes.size_12};
                    }

                    svg {
                        width: ${({ theme }) => theme.sizes.size_12};
                        height: ${({ theme }) => theme.sizes.size_12};
                        min-width: ${({ theme }) => theme.sizes.size_12};
                        min-height: ${({ theme }) => theme.sizes.size_12};
                    }
                }
            }
        }
    }
`

export {
    Dotted
}

export default Dotted
