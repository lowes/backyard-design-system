import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SpeechBubblesOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<SpeechBubblesOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.6267 12.7779c.2883 0 .4513-.2048.4513-.5223v-1.0028h.1755c1.0487 0 1.7465-.6309 1.7465-1.7256V7.0578c0-1.0947-.6978-1.7256-1.7465-1.7256h-.656v-.3176c0-1.1365-.6727-1.7924-1.8092-1.7924H3.8092C2.7187 3.2222 2 3.8782 2 5.0145v3.8482c0 1.1365.7187 1.7925 1.8092 1.7925h.5515v1.1407c0 .3217.163.5139.4596.5139.2215 0 .3719-.0752.6393-.3092l1.3997-1.2535c.3009.3301.7563.5056 1.337.5056H9.638l1.3955 1.195c.2549.2172.3928.3301.5933.3301Zm-6.635-1.2117v-1.1909c0-.2381-.1421-.3509-.326-.3509H3.851c-.7395 0-1.1782-.4011-1.1782-1.1825V5.0355c0-.7771.4387-1.1866 1.1783-1.1866h5.8955c.7395 0 1.1783.4095 1.1783 1.1866v.2967H8.1964c-1.0948 0-1.7424.6309-1.7424 1.7256v2.4694c0 .2256.025.4303.0794.6183l-1.5418 1.4207Zm6.4595.4554L10.11 10.8182c-.1671-.1462-.2674-.1922-.4972-.1922H8.2382c-.6978 0-1.1156-.3802-1.1156-1.1197l.0041-2.4276c0-.7354.4137-1.1198 1.1115-1.1198h3.9777c.6936 0 1.1114.3844 1.1114 1.1198v2.4276c0 .7395-.4178 1.1197-1.1114 1.1197h-.4429c-.1797 0-.3218.1045-.3218.3427v1.0529Z" clipRule="evenodd" />
, 
    'SpeechBubblesOutlined'
)

type SpeechBubblesOutlinedRef = PathIconRef

type SpeechBubblesOutlinedProps = PathIconProps

export {
    SpeechBubblesOutlined
}

export type {
    SpeechBubblesOutlinedRef,
    SpeechBubblesOutlinedProps
}

export default SpeechBubblesOutlined
