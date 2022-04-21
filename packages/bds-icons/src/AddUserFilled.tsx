import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const AddUserFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<AddUserFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.5059 13.7747c3.2194 0 5.8874-2.668 5.8874-5.8873C15.3933 4.6738 12.7193 2 9.5 2 6.5355 2 4.0276 4.2826 3.672 7.1581c1.8438.0297 3.3912 1.3814 3.7114 3.1482.6284-.2668 1.3577-.421 2.1225-.421 1.4585 0 2.7451.5455 3.5277 1.3874-.8894.919-2.1403 1.5-3.5336 1.5-.8182 0-1.589-.2075-2.2649-.5573-.1067.3142-.249.6107-.4446.8893.824.4269 1.743.67 2.7154.67Zm-.006-4.8854c-1.1323 0-1.992-.99-1.992-2.2233 0-1.168.8775-2.1818 1.992-2.1818 1.1206 0 2.004 1.0138 1.9981 2.1818 0 1.2332-.8597 2.2233-1.998 2.2233ZM3.6186 14c1.6364 0 3.0119-1.3636 3.0119-3.0119 0-1.6482-1.3577-3.0118-3.0118-3.0118-1.6483 0-3.012 1.3636-3.012 3.0118C.6067 12.6482 1.9704 14 3.6187 14Zm.006-1.0553c-.2075 0-.3913-.1423-.3913-.3676v-1.2273H2.1008c-.2016 0-.3676-.166-.3676-.3617 0-.2015.166-.3675.3676-.3675h1.1324V9.3933c0-.2194.1838-.3617.3913-.3617.2016 0 .3854.1423.3854.3617v1.2273h1.1324c.2015 0 .3616.166.3616.3675 0 .1957-.16.3617-.3616.3617H4.0099v1.2273c0 .2253-.1838.3676-.3854.3676Z" clipRule="evenodd" />
, 
    'AddUserFilled'
)

type AddUserFilledRef = PathIconRef

type AddUserFilledProps = PathIconProps

export {
    AddUserFilled
}

export type {
    AddUserFilledRef,
    AddUserFilledProps
}

export default AddUserFilled
