import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const GridViewFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<GridViewFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.755 7.4623c.8278 0 1.245-.4172 1.245-1.2776V3.271C14 2.4107 13.5828 2 12.755 2H9.7892c-.8343 0-1.2514.4106-1.2514 1.271v2.9137c0 .8604.4171 1.2775 1.2514 1.2775h2.9658Zm-6.5377 0c.8278 0 1.245-.4172 1.245-1.2776V3.271C7.4623 2.4107 7.045 2 6.2172 2H3.245C2.4172 2 2 2.4106 2 3.271v2.9137c0 .8604.4172 1.2775 1.245 1.2775h2.9723Zm0 6.5377c.8278 0 1.245-.4106 1.245-1.271V9.8088c0-.8539-.4172-1.271-1.245-1.271H3.245c-.8278 0-1.245.4171-1.245 1.271v2.9202C2 13.5894 2.4172 14 3.245 14h2.9723Zm6.5377 0c.8278 0 1.245-.4106 1.245-1.271V9.8088c0-.8539-.4172-1.271-1.245-1.271H9.7892c-.8343 0-1.2514.4171-1.2514 1.271v2.9202c0 .8604.4171 1.271 1.2514 1.271h2.9658Z" clipRule="evenodd" />
, 
    'GridViewFilled'
)

type GridViewFilledRef = PathIconRef

type GridViewFilledProps = PathIconProps

export {
    GridViewFilled
}

export type {
    GridViewFilledRef,
    GridViewFilledProps
}

export default GridViewFilled
