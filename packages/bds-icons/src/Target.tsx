import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Target: React.MemoExoticComponent<React.ForwardRefExoticComponent<TargetProps>> = createPathIcon(
    <path fillRule="evenodd" d="M7.7915 2.0035C4.6063 2.113 2 4.7913 2 8c0 3.2824 2.7235 6 6 6h.0023a.5064.5064 0 0 1-.5057-.5064v-.5182c-2.37-.2334-4.2317-2.0989-4.4659-4.469h-.5243a.5064.5064 0 1 1 0-1.0128h.5244c.2401-2.429 2.1914-4.3346 4.651-4.4841V2.318c0-.1189.041-.2282.1097-.3146ZM8.5093 13.4936v-.5188c2.3684-.2359 4.2362-2.1002 4.4667-4.4684h.5176A.5064.5064 0 0 0 14 8c0 3.281-2.7153 5.9977-5.9958 6a.5064.5064 0 0 0 .5051-.5064ZM12.974 7.4936c-.233-2.2997-2.0034-4.1304-4.2794-4.4456v-.7299a.504.504 0 0 0-.0887-.2864C11.6081 2.3446 14 4.9295 14 8a.5064.5064 0 0 0-.5064-.5064h-.5196Z" />
, 
    'Target'
)

type TargetRef = PathIconRef

type TargetProps = PathIconProps

export {
    Target
}

export type {
    TargetRef,
    TargetProps
}

export default Target
