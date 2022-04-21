import styled, { css } from 'styled-components'

const NoScrollbar = css`
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
`

const ScrollbarWrapper = styled.div`
    height: auto;
    width: auto;

    .content-container {
        overflow-x: scroll;

        ${NoScrollbar}

        .scrollbar-content {
            display: flex;
            flex-direction: row;
        }
    }
`

export { ScrollbarWrapper }

export default ScrollbarWrapper
