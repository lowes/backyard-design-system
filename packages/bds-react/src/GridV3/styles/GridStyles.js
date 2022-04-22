import styled from 'styled-components'

export const GridContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    
    &.container--xs { 
        margin: 0 auto;
        max-width: ${({ theme }) => theme.grid.breakpoint.xs.max};
    }
    &.container--sm {
        margin: 0 auto;
        max-width: ${({ theme }) => theme.grid.breakpoint.sm.max};
    }
    &.container--md {
        margin: 0 auto;
        max-width: ${({ theme }) => theme.grid.breakpoint.md.max};
    }
    &.container--lg {
        margin: 0 auto;
        max-width: ${({ theme }) => theme.grid.breakpoint.lg.max};
    }
    &.container--xl {
        margin: 0 auto;
        max-width: ${({ theme }) => theme.grid.breakpoint.xl.max};
    }
    &.container--xxl { 
        margin: 0 auto;
        max-width: ${({ theme }) => theme.grid.breakpoint.xxl.max};
    }
`

export const GridRow = styled.div`
    display: grid;
    grid-template-columns: repeat(var(--cols-default), 1fr);
    grid-column-gap: var(--gap-default);
    box-sizing: border-box;
    margin-left: var(--gutter-default);
    margin-right: var(--gutter-default);

    @media only screen and (max-width: ${({ theme }) => theme.grid.breakpoint.xs.max}) {
        grid-template-columns: repeat(var(--cols-xs), 1fr);
        grid-column-gap: var(--gap-xs);
        margin-left: var(--gutter-xs);
        margin-right: var(--gutter-xs);
    }

    @media only screen 
        and (min-width: ${({ theme }) => theme.grid.breakpoint.sm.min}) 
        and (max-width: ${(props) => props.theme.grid.breakpoint.sm.max}) {
            grid-template-columns: repeat(var(--cols-sm), 1fr);
            grid-column-gap: var(--gap-sm);
            margin-left: var(--gutter-sm);
            margin-right: var(--gutter-sm);
    }

    @media only screen 
        and (min-width: ${({ theme }) => theme.grid.breakpoint.md.min}) 
        and (max-width: ${(props) => props.theme.grid.breakpoint.md.max}) {
            grid-template-columns: repeat(var(--cols-md), 1fr);
            grid-column-gap: var(--gap-md);
            margin-left: var(--gutter-md);
            margin-right: var(--gutter-md);
    }

    @media only screen 
        and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) 
        and (max-width: ${(props) => props.theme.grid.breakpoint.lg.max}) {
            grid-template-columns: repeat(var(--cols-lg), 1fr);
            grid-column-gap: var(--gap-lg);
            margin-left: var(--gutter-lg);
            margin-right: var(--gutter-lg);
    }

    @media only screen 
        and (min-width: ${({ theme }) => theme.grid.breakpoint.xl.min}) 
        and (max-width: ${(props) => props.theme.grid.breakpoint.xl.max}) {
            grid-template-columns: repeat(var(--cols-xl), 1fr);
            grid-column-gap: var(--gap-xl);
            margin-left: var(--gutter-xl);
            margin-right: var(--gutter-xl);
    }

    @media only screen 
        and (min-width: ${({ theme }) => theme.grid.breakpoint.xxl.min}) 
        and (max-width: ${(props) => props.theme.grid.breakpoint.xxl.max}) {
            grid-template-columns: repeat(var(--cols-xxl), 1fr);
            grid-column-gap: var(--gap-xxl);
            margin-left: var(--gutter-xxl);
            margin-right: var(--gutter-xxl);
    }
`

export const GridColumn = styled.div`
    box-sizing: border-box;
    width: 100%;
    grid-column-start: var(--col-start);
    grid-column-end: var(--col-end);
    display: flex;
    justify-content: var(--justify-content);
    justify-items: var(--justify-items);
    align-content: var(--align-content);
    align-items: var(--align-items);
`
