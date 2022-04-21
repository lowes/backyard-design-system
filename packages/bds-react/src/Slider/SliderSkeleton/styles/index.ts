import styled from 'styled-components'

export const HorizontalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    .skeleton--slider-bar {
        margin-left: ${({ theme }) => theme.sizes.size_16};
        margin-right: ${({ theme }) => theme.sizes.size_16};
    }

    .skeleton--slider-input {
        margin-left: ${({ theme }) => theme.sizes.size_16};
    }
`

export const VerticalWrapper = styled.div`
    display: flex;
    flex-direction: row;

    .skeleton--slider-values {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: ${({ theme }) => theme.sizes.size_12};
    }
`