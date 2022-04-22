import styled from 'styled-components'

const SkeletonWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;

    .label-wrapper {
        display: inline-flex;
        flex-direction: row;

        .label--skeleton {
            margin-left: ${({ theme }) => theme.sizes.size_16};
        }
    }

    .helper-text--skeleton {
        margin-top: ${({ theme }) => theme.sizes.size_8};
        margin-left: ${({ theme }) => theme.sizes.size_36};
    }
`

export { SkeletonWrapper }
export default SkeletonWrapper