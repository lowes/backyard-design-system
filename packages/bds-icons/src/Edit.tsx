import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Edit: React.MemoExoticComponent<React.ForwardRefExoticComponent<EditProps>> = createPathIcon(
    <path fillRule="evenodd" d="m12.9371 4.4175.7609-.7458c.3842-.3841.3992-.7985.0602-1.145l-.2561-.2561c-.339-.339-.7533-.3013-1.1375.0678l-.7608.7533 1.3333 1.3258ZM2.3155 13.9468l1.7401-.6704 8.2186-8.211-1.3183-1.3259-8.2261 8.2186-.7157 1.6724c-.0677.1808.1206.3917.3014.3163Z" clipRule="evenodd" />
, 
    'Edit'
)

type EditRef = PathIconRef

type EditProps = PathIconProps

export {
    Edit
}

export type {
    EditRef,
    EditProps
}

export default Edit
