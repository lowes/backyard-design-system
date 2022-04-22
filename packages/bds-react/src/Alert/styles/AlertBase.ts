import { css } from 'styled-components'

import type { AlertProps } from '../Alert'

const Shapes = css`
    &.shape {
        &--rounded {
            /** Base */
            border-top-left-radius: var(--bds-border-radius-lg);
            border-top-right-radius: var(--bds-border-radius-lg);
            border-bottom-left-radius: var(--bds-border-radius-lg);
            border-bottom-right-radius: var(--bds-border-radius-lg);
        }

        &--squared {
            /** Base */
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
    }
`

const Sizes = css`
    /** Shape */
    min-width: var(--style-alert-width);
    width: var(--style-alert-width);
    max-width: var(--style-alert-width);
    min-height: var(--style-alert-height);
    height: var(--style-alert-height);
    max-height: var(--style-alert-height);

    &.size {
        &--medium,
        &--standard {
            padding-top: var(--bds-sizes-size-4);
            padding-left: var(--bds-sizes-size-4);
            padding-right: var(--bds-sizes-size-4);
            padding-bottom: var(--bds-sizes-size-4);

            &.multiline {
                .alert,
                .toast {
                    &-icon,
                    &-body,
                    &-close {
                        padding-top: var(--bds-sizes-size-12);
                        padding-bottom: var(--bds-sizes-size-6);
                    }

                    &-title + .alert-subtitle,
                    &-title + .toast-subtitle {
                        padding-top: var(--bds-sizes-size-8);
                    }

                    &-action,
                    &-timestamp {
                        padding-top: var(--bds-sizes-size-12);
                    }

                    &-close {
                        margin-top: calc(-1 * var(--bds-sizes-size-8));
                    }
                }
            }

            &:not(.multiline) {
                padding-right: 0;
            }

            .alert,
            .toast {
                &-title,
                &-subtitle {
                    font-size: var(--bds-sizes-size-16);
                    line-height: var(--bds-sizes-size-24);
                }

                &-action .link-label,
                &-timestamp {
                    font-size: var(--bds-sizes-size-14);
                    line-height: var(--bds-sizes-size-24);
                }

                &-close {
                    margin-left: var(--bds-sizes-size-4);
                }
            }
        }

        &--jumbo {
            padding-top: var(--bds-sizes-size-4);
            padding-left: var(--bds-sizes-size-4);
            padding-right: var(--bds-sizes-size-12);
            padding-bottom: var(--bds-sizes-size-4);

            &.multiline {
                .alert,
                .toast {
                    &-icon,
                    &-body,
                    &-close {
                        padding-top: var(--bds-sizes-size-20);
                        padding-bottom: var(--bds-sizes-size-6);
                    }

                    &-title {
                        font-size: var(--bds-sizes-size-28);
                        line-height: var(--bds-sizes-size-40);
                    }

                    &-title + .alert-subtitle,
                    &-title + .toast-subtitle {
                        padding-top: var(--bds-sizes-size-8);
                    }

                    &-action,
                    &-timestamp {
                        padding-top: var(--bds-sizes-size-20);
                    }

                    &-close {
                        margin-top: calc(-1 * var(--bds-sizes-size-12));
                    }
                }
            }

            .alert,
            .toast {
                &-title,
                &-subtitle,
                &-action .link-label,
                &-timestamp {
                    font-size: var(--bds-sizes-size-20);
                    line-height: var(--bds-sizes-size-32);
                }

                &-close {
                    margin-left: var(--bds-sizes-size-12);
                }
            }
        }
    }
`

const AlertBase = css<AlertProps>`
    /** Base */
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: stretch;

    box-shadow: var(--style-alert-elevation);

    .alert,
    .toast {
        &-indicator {
            /** Base */
            align-items: stretch;
        }

        &-icon,
        &-body,
        &-action,
        &-close {
            /** Base */
            display: flex;
            align-items: center;
        }
    }

    &.multiline {
        .alert,
        .toast {
            &-icon,
            &-body,
            &-action,
            &-close {
                align-items: flex-start;
            }
        }
    }

    .alert,
    .toast {
        &-indicator {
            /** Base */
            min-width: var(--bds-sizes-size-4);

            /** Spacing */
            margin-right: var(--bds-sizes-size-16);
        }

        &-icon {
            /** Spacing */
            margin-right: var(--bds-sizes-size-16);

            &.toast-icon {
                /** Toast adds 4px margin left */
                margin-left: var(--bds-sizes-size-4);
            }
        }

        &-body {
            /** Base */
            flex-grow: 1;
            justify-content: space-between;

            &.multiline {
                flex-direction: column;
                align-items: flex-start;
            }

            .alert,
            .toast {
                &-title,
                &-subtitle,
                &-timestamp {
                    /** Base */
                    display: var(--style-alert-multiline-display);

                    /** Font */
                    font-family: var(--style-alert-font-family);
                    letter-spacing: 0.3px;
                }

                &-title {
                    /** Font */
                    font-weight: var(--style-alert-title-font-weight);

                    /** Spacing */
                    margin-right: var(--bds-sizes-size-8);
                }

                &-subtitle {
                    /** Font */
                    font-weight: var(--bds-font-weight-regular);

                    /** Spacing */
                    margin-right: var(--bds-sizes-size-8);
                }

                &-sub-body {
                    display: flex;
                    
                    .alert,
                    .toast {
                        &-timestamp {
                            /** Font */
                            font-weight: var(--bds-font-weight-regular);

                            /** Spacing */
                            margin-right: var(--bds-sizes-size-16);
                        }

                        &-action {
                            /** Font */
                            text-underline-offset: var(--bds-sizes-size-2);

                            .link-label {
                                /** Spacing */
                                padding: var(--bds-sizes-size-1);
                            }
                        }
                    }
                }
            }
        }

        &-close {
            button.close-button.close-button {
                /** Button has no background */
                background-color: transparent;
            }
        }
    }

    ${Shapes}
    ${Sizes}

    /** Misc. */
    transition: all 0.2s ease-in-out;
`

export { AlertBase }

export default AlertBase
