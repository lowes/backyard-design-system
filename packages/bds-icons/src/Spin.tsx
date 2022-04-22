import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Spin: React.MemoExoticComponent<React.ForwardRefExoticComponent<SpinProps>> = createPathIcon(
    <path fillRule="evenodd" d="m12.8048 9.5505 1.0942-1.5603c.1963-.2748.103-.5103-.2502-.5103h-.6722c-.265-2.4974-2.419-4.4846-4.9753-4.4846-1.4965 0-2.8458.6771-3.7682 1.7418-.1864.211-.1619.471.0344.6085.1913.1373.422.0932.5838-.0884.7655-.8733 1.894-1.4278 3.15-1.4278 2.1344 0 3.8762 1.5848 4.1313 3.6505h-.731c-.3484 0-.4367.2355-.2503.5054l1.0991 1.5652c.157.2257.3925.2306.5544 0Zm-4.8034 3.4542c1.4965 0 2.8507-.682 3.7731-1.7418.1815-.211.157-.476-.0343-.6134-.1914-.1373-.4269-.0883-.5839.0933-.7605.8782-1.889 1.4278-3.155 1.4278-2.1392 0-3.881-1.5799-4.1362-3.6456h.736c.3484 0 .4367-.2404.2503-.5054L3.7523 6.4544c-.157-.2257-.3925-.2306-.5544 0L2.0988 8.0147c-.1914.2699-.103.5103.2502.5103h.6771c.265 2.4974 2.414 4.4797 4.9753 4.4797Z" clipRule="evenodd" />
, 
    'Spin'
)

type SpinRef = PathIconRef

type SpinProps = PathIconProps

export {
    Spin
}

export type {
    SpinRef,
    SpinProps
}

export default Spin
