import styled from 'styled-components'

const BreadcrumbDesktopBase = styled.nav`
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;

    ol {
        margin: 0;
        padding-left: 0;
        list-style: none;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }

    li {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
    }

    li + li::before {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin: 0 0.5rem;
        transform: rotate(15deg);
        border-right: 0.1rem solid var(--bds-color-text-primary);
        height: 0.8rem;
        content: '';
    }

    a {
        text-decoration: none;
    }

    [aria-current='page'] {
        text-decoration: none;
    }
`

export { BreadcrumbDesktopBase }

export default BreadcrumbDesktopBase
