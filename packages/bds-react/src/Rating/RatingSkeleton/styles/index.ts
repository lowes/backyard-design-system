import styled from 'styled-components'

const RatingSkeletonWrapper = styled.span`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    &.size--jumbo {
        .variant--circle { margin-right: ${({ theme }) => theme.sizes.size_4}; }
        .variant--rect { margin-left: ${({ theme }) => theme.sizes.size_10}; }
    }

    &.size--large {
        .variant--circle { margin-right: ${({ theme }) => theme.sizes.size_2}; }
        .variant--rect { margin-left: ${({ theme }) => theme.sizes.size_6}; }
    }

    &.size--medium {
        .variant--rect { margin-left: ${({ theme }) => theme.sizes.size_2}; }
    }

    &.size--small {
        .variant--rect { margin-left: ${({ theme }) => theme.sizes.size_2}; }
    }
`

export { RatingSkeletonWrapper }
export default RatingSkeletonWrapper