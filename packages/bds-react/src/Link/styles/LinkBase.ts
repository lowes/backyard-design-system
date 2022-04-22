import styled, { css } from 'styled-components'

import type { LinkProps } from '../Link'

const Sizes = css`
    /** Sizes */
    &.size {
        /** Small */
        &--small {
            /** Small Mobile */
            .link-label {
                font-size: var(--bds-sizes-size-12);
                line-height: var(--bds-sizes-size-16);
            }

            .link-start-icon,
            .link-end-icon {
                width: var(--bds-sizes-size-12);
                height: var(--bds-sizes-size-12);
            }

            /** Small Desktop */
            @media only screen and (min-width: 82rem) {
                /** Overrides */
                && {
                    .link-label {
                        font-size: var(--bds-sizes-size-14);
                        line-height: var(--bds-sizes-size-24);
                    }

                    .link-start-icon,
                    .link-end-icon {
                        width: var(--bds-sizes-size-14);
                        height: var(--bds-sizes-size-14);
                    }
                }
            }
        }

        /** Medium */
        &--medium {
            /** Medium Mobile */
            .link-label {
                font-size: var(--bds-sizes-size-14);
                line-height: var(--bds-sizes-size-24);
            }

            .link-start-icon,
            .link-end-icon {
                width: var(--bds-sizes-size-14);
                height: var(--bds-sizes-size-14);
            }

            /** Medium Desktop */
            @media only screen and (min-width: 82rem) {
                /** Overrides */
                && {
                    .link-label {
                        font-size: var(--bds-sizes-size-16);
                        line-height: var(--bds-sizes-size-24);
                    }

                    .link-start-icon,
                    .link-end-icon {
                        width: var(--bds-sizes-size-16);
                        height: var(--bds-sizes-size-16);
                    }
                }
            }
        }
    }
`

const BrowserCSS = css`
    /** Browser Fixes */
    &&& {
        outline: none;
        vertical-align: bottom;
        white-space: nowrap;

        /** Firefox */
        &::-moz-focus-inner {
            border: 0;
        }
    }
`

const Shared = css<LinkProps>`
    text-decoration: var(--bds-link-style-underline);

    &:hover {
        text-decoration: underline;
    }

    &:focus {
        text-decoration: underline;
    }
`

/** Default Base Link Styles */
const LinkBase = styled.a`
    /** Root Styles */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transition: all 0.2s ease-in-out;

    /** Label */
    .link-label {
        display: inherit;
        align-items: center;
        justify-content: center;

        width: 100%;

        /** Fonts */
        font-family: var(--bds-link-style-font-family);
        font-weight: var(--bds-font-weight-regular);

        &.bold,
        b,
        bold,
        strong {
            font-family: var(--bds-link-style-font-family);
            font-weight: var(--bds-link-style-font-weight);
        }

        /** Icons */
        .link-start-icon,
        .link-end-icon {
            display: flex;
        }

        .link-start-icon {
            margin-right: var(--bds-sizes-size-8);
        }

        .link-end-icon {
            margin-left: var(--bds-sizes-size-8);
        }
    }

    &,
    &:visited,
    &:hover,
    &:active {
        /** Colors */
        color: var(--bds-link-style-color);
        text-decoration-color: var(--bds-link-style-color);

        .icon path,
        .link-start-icon path,
        .link-end-icon path {
            fill: var(--bds-link-style-color);
        }
    }

    ${Sizes}

    ${Shared}

    ${BrowserCSS}
`

export { LinkBase }

export default LinkBase
