import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const WeeklyAd: React.MemoExoticComponent<React.ForwardRefExoticComponent<WeeklyAdProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M4.7774 7.662h3.5188v.7031H4.7773v-.703ZM8.2962 9.0712H4.7773v.7031h3.5189v-.7031Z" /><path fillRule="evenodd" d="M12.5876 10.4803v2.1123H4.8047v-2.1123h7.7829Zm-.7031.7032H5.5079v.706h6.3766v-.706Z" clipRule="evenodd" /><path fillRule="evenodd" d="M8.2962 6.2528H4.7773v.7031h3.5189v-.703ZM9.1017 7.662h3.5262v.7031H9.1017v-.703ZM12.6279 6.2528H9.1017v.7031h3.5262v-.703ZM9.1017 9.0712h3.5262v.7031H9.1017v-.7031Z" /><path fillRule="evenodd" d="M6.6073 5.5468h4.1778v-1.688h-.5013V3.69H9.678c-.0654-.0294-.1736-.0765-.2922-.1282-.2228-.0972-.4825-.2103-.5643-.2516l-.1253-.0422-.1253.0422c-.0818.0413-.3415.1544-.5643.2516a35.827 35.827 0 0 0-.2922.1282h-.6058v.1688h-.5013v1.688Zm3.798-.3798H6.9871v-.9573h.4942v-.1665h.3294l.0412-.0208c.048-.0209.1396-.0625.2464-.111.2135-.0972.488-.222.5979-.2636.1098.0416.3844.1664.5979.2636.1068.0485.1983.0901.2463.111l.0412.0208h.3295v.1665h.4942v.9573Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.4033 2v2.8565H1.999v8.0898c0 .5807.4722 1.0531 1.0528 1.0537h9.8945c.5816 0 1.0547-.4731 1.0547-1.0547V2H3.4033Zm-.7012 10.9463V5.5597h.7012v7.3856a.352.352 0 0 1-.351.3516.351.351 0 0 1-.3501-.3506Zm10.2442.3506a.352.352 0 0 0 .3515-.3516l.0001-10.2422H4.1065v10.2422l-.0002.0065a1.053 1.053 0 0 1-.0237.2168l-.0014.0061a1.0417 1.0417 0 0 1-.035.1222h8.9001Z" clipRule="evenodd" /></React.Fragment>
, 
    'WeeklyAd'
)

type WeeklyAdRef = PathIconRef

type WeeklyAdProps = PathIconProps

export {
    WeeklyAd
}

export type {
    WeeklyAdRef,
    WeeklyAdProps
}

export default WeeklyAd
