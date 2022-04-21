import styled from 'styled-components'
import type { UnorderedListSkeletonProps } from '../UnorderedListSkeleton'

const SkeletonWrapper = styled.div<UnorderedListSkeletonProps>`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width};

    &.density--normal {
        .variant--rect {
            margin-top: ${({ theme }) => theme.sizes.size_8};
        }
    }

    &.density--comfort {
        .variant--rect {
            margin-top: ${({ theme }) => theme.sizes.size_12};
        }
    }

    &.density--condensed {
        .variant--rect {
            margin-top: ${({ theme }) => theme.sizes.size_4};
        }
    }
`

export { SkeletonWrapper }
export default SkeletonWrapper