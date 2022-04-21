import styled from 'styled-components'
import SpinnerBase from './SpinnerBase'

const SpinnerWrapper = styled.span`
    position: relative;
    z-index: ${({ theme }) => theme.zIndex.overlay};
    ${SpinnerBase}
`

export {
    SpinnerWrapper
}

export default SpinnerWrapper
