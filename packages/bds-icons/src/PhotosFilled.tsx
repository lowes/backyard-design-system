import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PhotosFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<PhotosFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.402 12.6845c1.0687 0 1.598-.5293 1.598-1.5776V4.8931c0-1.0483-.5293-1.5776-1.598-1.5776H3.598C2.5344 3.3155 2 3.8397 2 4.8931v6.2138c0 1.0534.5343 1.5776 1.598 1.5776h8.804Zm-.005-.8194H3.6082c-.4937 0-.7888-.2951-.7888-.7939v-.3104L4.3817 9.397c.224-.1985.4682-.3003.6921-.3003.2494 0 .509.1018.7329.3104l.972.8753 2.4325-2.1577c.2494-.224.5293-.3257.8194-.3257.2799 0 .5699.1068.8091.3308l2.341 2.1679v.7837c0 .4886-.3003.7837-.7837.7837Z" clipRule="evenodd" />
, 
    'PhotosFilled'
)

type PhotosFilledRef = PathIconRef

type PhotosFilledProps = PathIconProps

export {
    PhotosFilled
}

export type {
    PhotosFilledRef,
    PhotosFilledProps
}

export default PhotosFilled
