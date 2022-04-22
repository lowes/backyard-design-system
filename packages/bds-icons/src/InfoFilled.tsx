import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const InfoFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<InfoFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm-.053-8.0941a.7632.7632 0 0 1-.7647-.7647c0-.4294.3412-.7706.7648-.7706.4294 0 .7647.3412.7647.7706 0 .4235-.3353.7647-.7647.7647Zm1.4177 5.3294H6.9706c-.2412 0-.4294-.1706-.4294-.4118 0-.2294.1882-.4117.4294-.4117H7.7v-2.7h-.6294c-.2412 0-.4294-.1706-.4294-.4118 0-.2294.1882-.4118.4294-.4118h1.1059c.3 0 .4588.2118.4588.5294v2.9942h.7294c.2412 0 .4294.1823.4294.4117 0 .2412-.1882.4118-.4294.4118Z" clipRule="evenodd" />
, 
    'InfoFilled'
)

type InfoFilledRef = PathIconRef

type InfoFilledProps = PathIconProps

export {
    InfoFilled
}

export type {
    InfoFilledRef,
    InfoFilledProps
}

export default InfoFilled
