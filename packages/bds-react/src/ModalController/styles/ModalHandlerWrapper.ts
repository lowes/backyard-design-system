import styled from 'styled-components'

const ModalHandlerWrapper = styled.div`
    &.keep-mounted {
        &.closed {
            display: none;
            pointer-events: none;
        }
    }
`

export {
    ModalHandlerWrapper
}

export default ModalHandlerWrapper
