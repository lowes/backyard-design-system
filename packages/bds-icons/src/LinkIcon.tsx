import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const LinkIcon: React.MemoExoticComponent<React.ForwardRefExoticComponent<LinkIconProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M8.936 7.6036c-.075.0734-.1627.11-.2588.11-.2045 0-.3799-.1834-.3799-.375 0-.0856.0418-.1753.117-.2487l3.7279-3.649.7557-.6524-1.9872.0734H9.6708c-.1962 0-.3674-.1631-.3674-.3547 0-.1917.1503-.3588.3841-.3588l3.9201-.0082c.2421 0 .3924.155.3924.3873V6.356c0 .216-.1712.375-.3674.375-.2045 0-.3715-.1711-.3715-.3587V5.0717l.0793-1.8551-.6721.738-3.7322 3.649Z" /><path fillRule="evenodd" d="M3.7969 3.571H8.24v.8997H3.8083c-.5722 0-.887.2962-.887.8774v6.7345c0 .5812.3148.8774.887.8774h6.9185c.5665 0 .8869-.2962.8869-.8774v-4.369h.9214v4.4137c0 1.1513-.5952 1.7325-1.7969 1.7325H3.7968C2.6009 13.8598 2 13.2842 2 12.1273V5.3034c0-1.1568.6009-1.7325 1.7969-1.7325Z" /></React.Fragment>
, 
    'LinkIcon'
)

type LinkIconRef = PathIconRef

type LinkIconProps = PathIconProps

export {
    LinkIcon
}

export type {
    LinkIconRef,
    LinkIconProps
}

export default LinkIcon
