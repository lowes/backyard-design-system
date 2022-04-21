import styled from 'styled-components'

const ScrollbarContainerWrapper = styled.div`
    width: 100%;
    padding-top: var(--bds-sizes-size-4);
    padding-bottom: var(--bds-sizes-size-4);

    :hover {
        cursor: pointer;
    }

    &.hide-scrollbar {
        display: none;
    }
`

export { ScrollbarContainerWrapper }

export default ScrollbarContainerWrapper
