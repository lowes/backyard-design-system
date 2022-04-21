import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const IDOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<IDOutlinedProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M5 7c0-.5525.4475-1 1-1s1 .4475 1 1-.4475 1-1 1-1-.4475-1-1ZM4 9.25c0-.665 1.3325-1 2-1s2 .335 2 1V10H4v-.75ZM12 6H8.9v.75H12V6ZM8.9 7.5H12v.75H8.9V7.5ZM12 9H8.9v.75H12V9Z" /><path fillRule="evenodd" d="M12.8 4H3.2c-.666 0-1.194.445-1.194 1L2 11c0 .555.534 1 1.2 1h9.6c.666 0 1.2-.445 1.2-1V5c0-.555-.534-1-1.2-1Zm.4687 6.0483c0 .6904-.5597 1.25-1.25 1.25H3.9813c-.6903 0-1.25-.5596-1.25-1.25V5.9517c0-.6904.5597-1.25 1.25-1.25h8.0374c.6903 0 1.25.5596 1.25 1.25v4.0966Z" clipRule="evenodd" /></React.Fragment>
, 
    'IDOutlined'
)

type IDOutlinedRef = PathIconRef

type IDOutlinedProps = PathIconProps

export {
    IDOutlined
}

export type {
    IDOutlinedRef,
    IDOutlinedProps
}

export default IDOutlined
