import styled from 'styled-components'

const ListItemWrapper = styled.li`
    font-size: var(--bds-sizes-size-14);
    line-height: var(--bds-sizes-size-20);
    font-family: ${({ theme }) => theme.font.family[theme.context.font]};
    font-weight: ${({ theme }) =>
        theme.context.font === 'roboto'
            ? theme.font.weight.medium
            : theme.font.weight.semibold};

    /** Desktop View */
    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.max}) {
        /** Overrides */
        font-size: var(--bds-sizes-size-16);
        line-height: var(--bds-sizes-size-24);
    }
`

export { ListItemWrapper }

export default ListItemWrapper
