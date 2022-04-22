import { css } from 'styled-components'

const PaginationFullBase = css`
    & > ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }
`

export {
    PaginationFullBase
}

export default PaginationFullBase
