import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ErrorFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<ErrorFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8 14c3.2824 0 6-2.7176 6-6 0-3.2765-2.7235-6-6.0059-6C4.7176 2 2 4.7235 2 8c0 3.2824 2.7235 6 6 6Zm2.4824-5.4765H5.5118c-.347 0-.5883-.1823-.5883-.5117 0-.3353.2294-.5236.5883-.5236h4.9706c.3588 0 .5823.1883.5823.5236 0 .3294-.2353.5117-.5823.5117Z" clipRule="evenodd" />
, 
    'ErrorFilled'
)

type ErrorFilledRef = PathIconRef

type ErrorFilledProps = PathIconProps

export {
    ErrorFilled
}

export type {
    ErrorFilledRef,
    ErrorFilledProps
}

export default ErrorFilled
