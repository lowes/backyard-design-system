import styled from 'styled-components'

import RatingBase from './RatingBase'
import Interactive from './variants/Interactive'
import ReadOnly from './variants/ReadOnly'

const RatingWrapper = styled.span`
    ${RatingBase}

    /** Variants */
    &.interactive {
        ${Interactive}
    }

    &.read-only {
        ${ReadOnly}
    }


    .rating-count {
        /** Font */
        font-family: ${({ theme }) => theme.font.family[theme.context.font]};
        font-weight: ${
            ({ theme }) => (theme.context.font === 'roboto')
                ? theme.font.weight.medium
                : theme.font.weight.semibold};
    }

    /** Sizes */
    &&&&.size {
        &--small {
            .icon {
                height: var(--bds-sizes-size-16);
                width: var(--bds-sizes-size-16);
            }

            .rating-item {
                height: var(--bds-sizes-size-16);
            }

            .rating-icon {
                margin: 0;
            }

            .rating-count {
                padding-top: var(--bds-sizes-size-2);
                margin-left: var(--bds-sizes-size-8);

                font-size: var(--bds-sizes-size-12);
                line-height: var(--bds-sizes-size-16);
            }
        }

        &--medium {
            .icon {
                height: var(--bds-sizes-size-24);
                width: var(--bds-sizes-size-24);
            }

            .rating-item {
                height: var(--bds-sizes-size-24);
            }

            .rating-icon {
                margin: 0 var(--bds-sizes-size-1);
            }

            .rating-count {
                padding-top: var(--bds-sizes-size-2);
                margin-left: var(--bds-sizes-size-10);

                font-size: var(--bds-sizes-size-14);
                line-height: var(--bds-sizes-size-20);
            }
        }

        &--large {
            .icon {
                height: var(--bds-sizes-size-24);
                width: var(--bds-sizes-size-24);
            }

            .rating-item {
                height: var(--bds-sizes-size-24);
            }

            .rating-icon {
                margin: 0 var(--bds-sizes-size-1);
            }

            .rating-count {
                padding-top: var(--bds-sizes-size-2);
                margin-left: var(--bds-sizes-size-10);

                font-size: var(--bds-sizes-size-16);
                line-height: var(--bds-sizes-size-24);
            }
        }

        &--jumbo {
            .icon {
                height: var(--bds-sizes-size-32);
                width: var(--bds-sizes-size-32);
            }

            .rating-item {
                height:var(--bds-sizes-size-32);
            }

            .rating-icon {
                margin: 0 var(--bds-sizes-size-2);
            }

            .rating-count {
                padding-top: var(--bds-sizes-size-2);
                margin-left: var(--bds-sizes-size-12);

                font-size: var(--bds-sizes-size-20);
                line-height: var(--bds-sizes-size-28);
            }
        }
    }
`

export {
    RatingWrapper
}

export default RatingWrapper
