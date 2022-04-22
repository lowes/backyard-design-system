import styled from 'styled-components'

const SwitchSkeletonWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    .skeleton--label {
        margin-left: ${({ theme }) => theme.sizes.size_16};
    }
`

export { SwitchSkeletonWrapper }
export default SwitchSkeletonWrapper