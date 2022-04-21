import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const MultipleColors: React.MemoExoticComponent<React.ForwardRefExoticComponent<MultipleColorsProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M5.9954 2.1504a.5134.5134 0 0 0 0 .726l.9834.9834a1.4986 1.4986 0 0 0-.384.2785L4.243 6.49c-.5857.5858-.5857 1.5355 0 2.1213l2.3516 2.3516c.5858.5858 1.5356.5858 2.1213 0l2.3516-2.3516c.5858-.5858.5858-1.5355 0-2.1213L8.716 4.1383a1.5143 1.5143 0 0 0-.0871-.0806L6.7216 2.1504a.5134.5134 0 0 0-.7261 0Zm.778 3.2796c.4882-.4882 1.2796-.4882 1.7678 0l2.1205 2.1206H4.6528L6.7734 5.43Z" clipRule="evenodd" /><path fillRule="evenodd" d="M11.7396 12.0234c.596 0 1.078-.4819 1.078-1.0779 0-.6421-.6807-1.5275-.9609-1.8648a.1529.1529 0 0 0-.2356 0c-.2788.3372-.9594 1.2227-.9594 1.8648 0 .596.482 1.0779 1.0779 1.0779ZM12.8176 13.4856a.5146.5146 0 0 0-.5145-.5145H3.6969a.5145.5145 0 0 0 0 1.0289h8.6062a.5145.5145 0 0 0 .5145-.5144Z" /></React.Fragment>
, 
    'MultipleColors'
)

type MultipleColorsRef = PathIconRef

type MultipleColorsProps = PathIconProps

export {
    MultipleColors
}

export type {
    MultipleColorsRef,
    MultipleColorsProps
}

export default MultipleColors
