import styled from 'styled-components'

const BreadcrumbMobileBase = styled.nav`
    display: inline-flex;
    flex-direction: row;
    align-items: center;

    & > .crumb-current {
        margin-left: var(--bds-sizes-size-8);
    }

    .crumb {
        border: none;

        .label > .menu-item-label {
            font-weight: var(--bds-font-weight-medium);
        }
    }
`

export { BreadcrumbMobileBase }

export default BreadcrumbMobileBase
