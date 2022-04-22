import { css } from 'styled-components'

const Condensed = css`
    & > ul {
        & > li {
            padding: 0 var(--bds-sizes-size-8);

            &.pagination-select {
                padding-right: 0;
            }

            &:first-child,
            &:last-child {
                padding: 0;
            }
        }
    }
`

export {
    Condensed
}

export default Condensed
