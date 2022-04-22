import styled from 'styled-components'

export const GridContainer = styled.div`
    max-width: ${({ theme }) => theme.grid.breakpoint.xxl.max};
    margin-left: auto;
    margin-right: auto;

    &.full-width {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        & .row {
            max-width: 100%;
            flex-grow: 1;
        }
    }
`

export const GridRow = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: ${({ direction }) => direction || 'row'};
    -ms-flex-wrap: nowrap;
    flex-wrap: ${({ noWrap }) => (noWrap ? 'nowrap' : 'wrap')};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: ${({ theme }) => theme.grid.breakpoint.xl.max};

    &.justify-start {
        justify-content: flex-start;
    }
    &.justify-center {
        justify-content: center;
    }
    &.justify-end {
        justify-content: flex-end;
    }
    &.justify-around {
        justify-content: space-around;
    }
    &.justify-between {
        justify-content: space-between;
    }
    &.justify-evenly {
        justify-content: space-evenly;
    }

    &.item-start {
        align-items: flex-start;
    }
    &.item-center {
        align-items: center;
    }
    &.item-end {
        align-items: flex-end;
    }
    &.item-stretch {
        align-items: stretch;
    }
    &.item-baseline {
        align-items: baseline;
    }

    @media only screen and (max-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        padding-left: ${({ theme }) => theme.sizes.size_8};
        padding-right: ${({ theme }) => theme.sizes.size_8};
    }
`

export const GridColumn = styled.div`
    padding-left: ${({ theme }) => theme.sizes.size_16};
    padding-right: ${({ theme }) => theme.sizes.size_16};
    flex-grow: 1;
    box-sizing: border-box;

    @media only screen and (max-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) {
        padding-left: ${({ theme }) => theme.sizes.size_8};
        padding-right: ${({ theme }) => theme.sizes.size_8};
    }

    &.sm-1 {
        flex-basis: 8.333%;
        max-width: 8.333%;
    }

    &.sm-2 {
        flex-basis: 16.667%;
        max-width: 16.667%;
    }

    &.sm-3 {
        flex-basis: 25%;
        max-width: 25%;
    }

    &.sm-4 {
        flex-basis: 33.333%;
        max-width: 33.333%;
    }

    &.sm-5 {
        flex-basis: 41.667%;
        max-width: 41.667%;
    }

    &.sm-6 {
        flex-basis: 50%;
        max-width: 50%;
    }

    &.sm-7 {
        flex-basis: 58.333%;
        max-width: 58.333%;
    }

    &.sm-8 {
        flex-basis: 66.667%;
        max-width: 66.667%;
    }

    &.sm-9 {
        flex-basis: 75%;
        max-width: 75%;
    }

    &.sm-10 {
        flex-basis: 83.333%;
        max-width: 83.333%;
    }

    &.sm-11 {
        flex-basis: 91.667%;
        max-width: 91.667%;
    }

    &.sm-12 {
        flex-basis: 100%;
        max-width: 100%;
    }

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.md.min}) and (max-width: ${(props) =>
            props.theme.grid.breakpoint.md.max}) {
        &.md-1 {
            flex-basis: 8.333%;
            max-width: 8.333%;
        }

        &.md-2 {
            flex-basis: 16.667%;
            max-width: 16.667%;
        }

        &.md-3 {
            flex-basis: 25%;
            max-width: 25%;
        }

        &.md-4 {
            flex-basis: 33.333%;
            max-width: 33.333%;
        }

        &.md-5 {
            flex-basis: 41.667%;
            max-width: 41.667%;
        }

        &.md-6 {
            flex-basis: 50%;
            max-width: 50%;
        }

        &.md-7 {
            flex-basis: 58.333%;
            max-width: 58.333%;
        }

        &.md-8 {
            flex-basis: 66.667%;
            max-width: 66.667%;
        }

        &.md-9 {
            flex-basis: 75%;
            max-width: 75%;
        }

        &.md-10 {
            flex-basis: 83.333%;
            max-width: 83.333%;
        }

        &.md-11 {
            flex-basis: 91.667%;
            max-width: 91.667%;
        }

        &.md-12 {
            flex-basis: 100%;
            max-width: 100%;
        }
    }

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.lg.min}) and (max-width: ${(props) =>
            props.theme.grid.breakpoint.lg.max}) {
        &.lg-1 {
            flex-basis: 8.333%;
            max-width: 8.333%;
        }

        &.lg-2 {
            flex-basis: 16.667%;
            max-width: 16.667%;
        }

        &.lg-3 {
            flex-basis: 25%;
            max-width: 25%;
        }

        &.lg-4 {
            flex-basis: 33.333%;
            max-width: 33.333%;
        }

        &.lg-5 {
            flex-basis: 41.667%;
            max-width: 41.667%;
        }

        &.lg-6 {
            flex-basis: 50%;
            max-width: 50%;
        }

        &.lg-7 {
            flex-basis: 58.333%;
            max-width: 58.333%;
        }

        &.lg-8 {
            flex-basis: 66.667%;
            max-width: 66.667%;
        }

        &.lg-9 {
            flex-basis: 75%;
            max-width: 75%;
        }

        &.lg-10 {
            flex-basis: 83.333%;
            max-width: 83.333%;
        }

        &.lg-11 {
            flex-basis: 91.667%;
            max-width: 91.667%;
        }

        &.lg-12 {
            flex-basis: 100%;
            max-width: 100%;
        }
    }

    @media only screen and (min-width: ${({ theme }) => theme.grid.breakpoint.xl.min}) {
        &.xl-1 {
            flex-basis: 8.333%;
            max-width: 8.333%;
        }

        &.xl-2 {
            flex-basis: 16.667%;
            max-width: 16.667%;
        }

        &.xl-3 {
            flex-basis: 25%;
            max-width: 25%;
        }

        &.xl-4 {
            flex-basis: 33.333%;
            max-width: 33.333%;
        }

        &.xl-5 {
            flex-basis: 41.667%;
            max-width: 41.667%;
        }

        &.xl-6 {
            flex-basis: 50%;
            max-width: 50%;
        }

        &.xl-7 {
            flex-basis: 58.333%;
            max-width: 58.333%;
        }

        &.xl-8 {
            flex-basis: 66.667%;
            max-width: 66.667%;
        }

        &.xl-9 {
            flex-basis: 75%;
            max-width: 75%;
        }

        &.xl-10 {
            flex-basis: 83.333%;
            max-width: 83.333%;
        }

        &.xl-11 {
            flex-basis: 91.667%;
            max-width: 91.667%;
        }

        &.xl-12 {
            flex-basis: 100%;
            max-width: 100%;
        }
    }
`
