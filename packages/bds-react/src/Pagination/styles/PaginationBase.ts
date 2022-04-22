import { css } from 'styled-components'

const PillBase = css`
    & > ul {
        display: flex;
        flexWrap: wrap;
        alignItems: center;
        padding: 0;
        margin: 0;
        listStyle: none;
    }
`

export {
    PillBase
}

export default PillBase
