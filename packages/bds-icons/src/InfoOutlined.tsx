import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const InfoOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<InfoOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm-.053-7.0941c.4295 0 .7648-.3412.7648-.7647 0-.4294-.3353-.7706-.7647-.7706-.4236 0-.7648.3412-.7648.7706 0 .4235.3412.7647.7648.7647Zm1.4177 5.3294c.2412 0 .4294-.1706.4294-.4118 0-.2294-.1882-.4117-.4294-.4117h-.7294V7.4177c0-.3177-.1588-.5295-.4588-.5295h-1.106c-.241 0-.4293.1824-.4293.4118 0 .2412.1882.4118.4294.4118H7.7v2.7h-.7294c-.2412 0-.4294.1823-.4294.4117 0 .2412.1882.4118.4294.4118h2.3941Z" clipRule="evenodd" />
, 
    'InfoOutlined'
)

type InfoOutlinedRef = PathIconRef

type InfoOutlinedProps = PathIconProps

export {
    InfoOutlined
}

export type {
    InfoOutlinedRef,
    InfoOutlinedProps
}

export default InfoOutlined
