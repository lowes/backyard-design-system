import styled from 'styled-components'

const SearchButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    align-items: center;

    .button .btn-label .icon.icon-search-icon,
    .button .btn-label .icon.icon-close {
        path {
            fill: var(--bds-color-icon-tertiary);
        }
    }

    .divider {
        height: 32px;
        border-style: solid;
        border-width: 1px;
        border-color: var(--bds-color-border-subdued);
        margin: 0 2px;
    }

    &.size--small {
        .divider {
            height: 24px;
        }
    }

    &.size--jumbo {
        .divider {
            height: 40px;
        }
    }
`

export { SearchButtonGroup }
export default SearchButtonGroup