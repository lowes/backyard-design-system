import styled, { css } from 'styled-components'

import AlertBase from '../../Alert/styles/AlertBase'

import DefaultColors from './variants/Default'

const SizeOverrides = css`
    &.size {
        &--medium,
        &--standard {
            padding-top: var(--bds-sizes-size-4);
            padding-left: var(--bds-sizes-size-4);
            padding-right: var(--bds-sizes-size-4);
            padding-bottom: var(--bds-sizes-size-4);

            &.multiline {
                .toast {
                    &-icon,
                    &-body,
                    &-close {
                        padding-top: var(--bds-sizes-size-4);
                        padding-bottom: 0;
                    }

                    &-body {
                        transform: translate(-1px, 1px);
                    }

                    &-sub-body {
                        transform: translate(0px, -1px);
                    }

                    &-action .link-label {
                        transform: translate(-3px, -2px);
                    }

                    &-action,
                    &-timestamp {
                        padding-top: var(--bds-sizes-size-12);
                    }

                    &-close {
                        transform: translate(4px, 0);
                    }
                }
            }

            .toast {
                &-subtitle {
                    font-size: var(--bds-sizes-size-12);
                    line-height: var(--bds-sizes-size-16);
                }

                &-action .link-label,
                &-timestamp {
                    font-size: var(--bds-sizes-size-10);
                    line-height: var(--bds-sizes-size-16);
                }
            }
        }

        &--jumbo {
            padding-left: var(--bds-sizes-size-10);
            padding-bottom: var(--bds-sizes-size-16);

            &.multiline {
                .alert,
                .toast {
                    &-icon,
                    &-body,
                    &-close {
                        padding-top: var(--bds-sizes-size-12);
                        padding-bottom: var(--bds-sizes-size-6);
                    }

                    &-icon svg.icon {
                        height: var(--bds-sizes-size-24);
                        width: var(--bds-sizes-size-24);

                        transform: translate(2px, 8px);
                    }

                    &-title {
                        font-size: var(--bds-sizes-size-28);
                        line-height: var(--bds-sizes-size-40);
                    }

                    &-title + .alert-subtitle,
                    &-title + .toast-subtitle {
                        padding-top: var(--bds-sizes-size-4);
                    }

                    &-sub-body {
                        padding-top: var(--bds-sizes-size-12);
                    }

                    &-action .link-label {
                        transform: translate(-2px, 0px);
                    }

                    &-close {
                        margin-top: calc(-1 * var(--bds-sizes-size-12));
                        
                        transform: translate(8px, 0px);
                    }
                }
            }

            .alert,
            .toast {
                &-title,
                &-subtitle {
                    font-size: var(--bds-sizes-size-20);
                    line-height: var(--bds-sizes-size-32);
                }

                &-action .link-label,
                &-timestamp {
                    font-size: var(--bds-sizes-size-16);
                    line-height: var(--bds-sizes-size-24);
                }

                &-close {
                    margin-left: var(--bds-sizes-size-12);
                }
            }
        }
    }
`

const ToastOverrides = css`
    /** Base Overrides */
    &&& {
        .toast {
            &-icon {
                margin-right: var(--bds-sizes-size-10);
            }

            /** @todo fix these in Link? */
            &-action {
                a {
                    text-decoration: none;
                    text-decoration-color: var(--bds-color-border-interactive-inverse);

                    &:hover {
                        text-decoration: underline;
                    }

                    &:focus {
                        text-decoration: underline;
                    }
                }
            }
        }

        /** Size Overrides */
        ${SizeOverrides}
    }
`

const ToastWrapper = styled.div`
    /**
     * See \`AlertBase\` for styles
     */
    ${AlertBase}

    /** Toast Specific AlertBase Overrides */
    ${ToastOverrides}

    /** Variants */
    ${DefaultColors}
`

export { ToastWrapper }

export default ToastWrapper
