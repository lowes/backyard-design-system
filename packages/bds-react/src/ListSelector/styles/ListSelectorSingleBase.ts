import { css } from 'styled-components'

import type { ListSelectorProps } from '../ListSelector'

const Shapes = css`
    &.shape {
        li > button {
            border-radius: 0;
        }
    }
`

const ListBase = css<ListSelectorProps>`
    /** Base */
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    /** Sizing */
    width: ${({ theme, width }) => theme.sizes[width] || width};

    padding: 0;

    /** Misc. */
    list-style: none;
    /* overflow: auto; */

    ${Shapes}
`

export { ListBase }

export default ListBase
