import { css } from 'styled-components'

/**
 * Size class and modifier styles.
 */
const Sizes = css`
    &.size {
        &--large {
            .accordion-header {
                height: var(--bds-sizes-size-56);
            }
        }

        &--medium {
            .accordion-header {
                height: var(--bds-sizes-size-48);
            }
        }

        &--small {
            .accordion-header {
                height: var(--bds-sizes-size-40);
            }
        }
    }
`

const Colors = css`
    &.color {
        &--transparent {
            .accordion-header {
                background-color: transparent;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                border-bottom: var(--bds-sizes-size-1) solid var(--bds-color-border-subdued);

                &:hover {
                    background-color: var(--bds-color-action-interactive-subdued-hover);
                }
            }
        }

        &--interactive {
            .accordion-header {
                background-color: var(--bds-color-action-interactive-subdued);
                border-bottom: none;

                &:hover {
                    background-color: var(--bds-color-action-interactive-subdued-hover);
                }
            }
        }

        &--neutral {
            .accordion-header {
                background-color: var(--bds-color-action-neutral);
                border-bottom: none;

                &:hover {
                    background-color: var(--bds-color-action-neutral-hover);
                }
            }
        }
    }
`

/**
 * Base class styles.
 */
const AccordionBase = css`
    /* Base */
    width: 100%;
    box-sizing: border-box;

    h3,
    h4 {
        margin: 0;
    }

    .accordion-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border: none;
        background-color: transparent;
        width: 100%;
        cursor: pointer;
        border-radius: var(--bds-border-radius-lg);
        padding: 0 var(--bds-sizes-size-16);
        box-sizing: border-box;

        &:focus {
            box-shadow: 0 0 0 2px var(--bds-color-border-interactive);
        }

        .accordion-icon {
            svg {
                display: block;
                width: var(--bds-sizes-size-20);
                height: var(--bds-sizes-size-20);
                margin: auto;
            }
        }
    }

    .accordion-content {
        display: none;
        padding: var(--bds-sizes-size-16);

        &.opened {
            display: block;
        }
    }

    .accordion-title {
        font-size: var(--bds-sizes-size-16);
        line-height: var(--bds-sizes-size-24);
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: ${({ theme }) =>
            theme.context.font === 'roboto'
                ? theme.font.weight.medium
                : theme.font.weight.semibold};
        color: var(--bds-color-text-primary);
    }

    .accordion-title-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: var(--bds-sizes-size-14);
        line-height: var(--bds-sizes-size-20);
    }

    ${Sizes}
    ${Colors}
`

export { AccordionBase }

export default AccordionBase
