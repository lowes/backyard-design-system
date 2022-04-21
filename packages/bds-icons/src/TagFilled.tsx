import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TagFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<TagFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="m10.0134 13.4142 3.3998-3.3944c.7895-.7842.7734-1.579.0054-2.347L8.1658 2.4306c-.4028-.4028-.6284-.4297-1.1923-.4297H4.9272c-.5694 0-.7412.1397-1.1494.5425L2.5425 3.7788C2.1343 4.187 2 4.3642 2 4.9335v2.041c0 .564.0269.7949.4297 1.1977l5.2366 5.2474c.768.768 1.5576.7788 2.3471-.0054Zm-4.184-7.1164c-.4189 0-.7357-.3277-.7357-.7359 0-.4135.3168-.7358.7358-.7358.4243 0 .7358.3223.7358.7358 0 .4082-.3115.7359-.7358.7359Z" clipRule="evenodd" />
, 
    'TagFilled'
)

type TagFilledRef = PathIconRef

type TagFilledProps = PathIconProps

export {
    TagFilled
}

export type {
    TagFilledRef,
    TagFilledProps
}

export default TagFilled
