import styled from 'styled-components'

const TabContentWrapper = styled.div`
    display: none;
    padding: 0;

    &.selected {
        display: block;
    }

    @media only screen and (min-width: var(--bds-grid-breakpoint-md-max)) {
        padding-top: var(--bds-sizes-size-16);
    }
`

export { TabContentWrapper }

export default TabContentWrapper
