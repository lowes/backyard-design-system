import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Microphone: React.MemoExoticComponent<React.ForwardRefExoticComponent<MicrophoneProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M7.875 2C6.8395 2 6 2.8395 6 3.875v4.5c0 1.0355.8395 1.875 1.875 1.875 1.0355 0 1.875-.8395 1.875-1.875v-4.5C9.75 2.8395 8.9105 2 7.875 2Z" /><path fillRule="evenodd" d="M11.3083 7.5034a.5.5 0 0 1 .4383.5549c-.2758 2.3498-1.6609 3.7781-3.2466 4.1146V13h.75a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1 0-1h1v-.7599c-1.7793-.1342-3.347-1.6205-3.4991-4.2108a.5.5 0 0 1 .9983-.0586C5.133 10.2525 6.496 11.25 7.765 11.25c1.2816 0 2.7193-1.0159 2.9884-3.3083a.5.5 0 0 1 .5549-.4383Z" /></React.Fragment>
, 
    'Microphone'
)

type MicrophoneRef = PathIconRef

type MicrophoneProps = PathIconProps

export {
    Microphone
}

export type {
    MicrophoneRef,
    MicrophoneProps
}

export default Microphone
