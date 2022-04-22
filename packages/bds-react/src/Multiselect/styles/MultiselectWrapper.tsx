import styled, { css } from 'styled-components'

import type { MultiselectProps } from '../Multiselect'

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

const MultiselectWrapper = styled.div<{ maxHeight?: MultiselectProps['maxHeight'] }>`
    && {
        position: relative;

        label.completed {
            top: -12px;
            left: 16px;
            font-size: var(--bds-sizes-size-14);

            &.size--small {
                top: -12px;
                left: 16px;
                font-size: var(--bds-sizes-size-12);
            }

            &.size--large {
                top: -12px;
            }

            &.size--jumbo {
                font-size: var(--bds-sizes-size-20);
                top: -12px;
            }
        }

        fieldset.open {
            border-color: var(--bds-color-border-interactive);
            border-width: var(--bds-sizes-size-2);
        }

        .popover--wrapper {
            padding: var(--bds-sizes-size-8) 0;
            width: 100%;
            max-height: ${({ theme, maxHeight }) =>
                maxHeight || `calc(${theme.sizes.size_16} * 16.5)`};
            border: 1px solid var(--bds-color-border-subdued);
            background-color: var(--bds-color-elevation-04);
            box-shadow: var(--bds-shadows-shadow-04);
            overflow-x: hidden;

            ${Shapes}
        }

        .select--container {
            .select--value {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        .toggle-button-group {
            flex-direction: column;

            .toggle-button {
                border: none;

                .label {
                    /** Base */
                    justify-content: flex-start;

                    /** Sizing */
                    height: calc(var(--bds-sizes-size-24) - var(--bds-sizes-size-2));

                    /** Font */
                    font-family: ${({ theme }) => theme.font.family[theme.context.paragraph]};
                    font-weight: var(--bds-font-weight-regular);
                    font-size: var(--bds-sizes-size-14);
                    line-height: var(--bds-sizes-size-24);

                    .list-label {
                        margin-left: var(--bds-sizes-size-16);

                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    @media only screen and (min-width: ${({ theme }) =>
                            theme.grid.breakpoint.lg.max}) {
                        font-size: var(--bds-sizes-size-16);
                        line-height: var(--bsd-sizes-size-24);
                    }
                }
            }
        }
    }
`

export { MultiselectWrapper }

export default MultiselectWrapper
