import { css } from 'styled-components'

const Numbered = css`
    & > ul {
        & > li {
            padding: 0 var(--bds-sizes-size-8);

            &:first-child,
            &:last-child {
                padding: 0;
            }
        }
    }
`

export {
    Numbered
}

export default Numbered
