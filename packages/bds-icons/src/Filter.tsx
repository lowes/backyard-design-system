import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Filter: React.MemoExoticComponent<React.ForwardRefExoticComponent<FilterProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.5492 5.8586c.2491 0 .4508-.1957.4508-.4449a.4506.4506 0 0 0-.4508-.4508H2.4449c-.2492 0-.4449.2017-.4449.4508 0 .2492.1957.445.4449.445h11.1043ZM10.4124 8.445c.1814 0 .3283-.1958.3283-.4449 0-.255-.1469-.4568-.3283-.4568H2.324C2.1426 7.5432 2 7.745 2 8c0 .2491.1426.4449.324.4449h8.0884ZM7.7746 11.037c.1246 0 .2254-.2017.2254-.4568 0-.2491-.1008-.4449-.2254-.4449H2.2224c-.1245 0-.2224.1958-.2224.4449 0 .2551.0979.4568.2224.4568h5.5522Z" clipRule="evenodd" />
, 
    'Filter'
)

type FilterRef = PathIconRef

type FilterProps = PathIconProps

export {
    Filter
}

export type {
    FilterRef,
    FilterProps
}

export default Filter
