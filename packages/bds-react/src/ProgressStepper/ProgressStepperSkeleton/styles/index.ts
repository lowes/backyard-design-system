import styled from 'styled-components'

export const HorizontalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    .progress-step-connector {
        position: absolute;
        left: calc(-50% + var(--bds-sizes-size-24));
        right: calc(50% + var(--bds-sizes-size-24));
        top: var(--bds-sizes-size-36);
        bottom: 0;
    }
`

export const VerticalWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    .progress-step-connector {
        position: absolute;
        top: calc(-50% + var(--bds-sizes-size-12));
        bottom: calc(50% + var(--bds-sizes-size-48));
        left: var(--bds-sizes-size-20);
    }

    &.size--small {
        .progress-step-connector {
            left: var(--bds-sizes-size-18);
            top: calc(-50% + var(--bds-sizes-size-12));
        }

        .skeleton--step {
            min-height: 4.75rem !important;
        }
    }
`

export const StepSkeleton = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: ${({ theme }) => `${theme.sizes.size_8} 0px`};
    margin: ${({ theme }) => theme.sizes.size_8};

    .indicator { 
        margin-bottom: ${({ theme }) => theme.sizes.size_8};
    }

    .heading {
        margin-top: ${({ theme }) => theme.sizes.size_4};
        margin-bottom: ${({ theme }) => theme.sizes.size_4};
    }

    .caption {
        margin-top: ${({ theme }) => theme.sizes.size_5};
        margin-bottom: ${({ theme }) => theme.sizes.size_5};
    }

    &&&.skeleton--step {
        flex-direction: row;
        align-items: start;
        position: relative;
        padding: ${({ theme }) => `${theme.sizes.size_8} 0`};
        margin: ${({ theme }) => `${theme.sizes.size_4} 0`};
        min-height: 5.25rem;

        .label-group {
            margin-left: ${({ theme }) => theme.sizes.size_24};
            margin-top: ${({ theme }) => theme.sizes.size_12};
        }
    }
`