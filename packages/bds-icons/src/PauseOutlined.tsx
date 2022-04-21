import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PauseOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<PauseOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm0-1c-2.7765 0-4.9941-2.2235-4.9941-5 0-2.7706 2.2117-5 4.9882-5s5 2.2294 5.0059 5c.0059 2.7765-2.2235 5-5 5Zm-1.053-2.7706c.2824 0 .4118-.1529.4118-.3765v-3.7c0-.2235-.1294-.3764-.4117-.3764h-.5589c-.2823 0-.4117.153-.4117.3764v3.7c0 .2236.1294.3765.4117.3765h.5589Zm2.6648 0c.2764 0 .4058-.1529.4058-.3765v-3.7c0-.2235-.1294-.3764-.4058-.3764h-.5589c-.2823 0-.4117.153-.4117.3764v3.7c0 .2236.1294.3765.4117.3765h.5589Z" clipRule="evenodd" />
, 
    'PauseOutlined'
)

type PauseOutlinedRef = PathIconRef

type PauseOutlinedProps = PathIconProps

export {
    PauseOutlined
}

export type {
    PauseOutlinedRef,
    PauseOutlinedProps
}

export default PauseOutlined
