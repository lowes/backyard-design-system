import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ThumbDownFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<ThumbDownFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M6.0106 14c.4164 0 .6304-.2891.856-.7287.8558-1.7001 2.024-3.0649 2.9145-4.2446.7518-1.0005 1.1219-1.8506 1.1393-3.2327.0289-2.1397-1.7002-3.7647-4.4182-3.782l-.8038-.0116c-.7576-.0058-1.3128.052-1.6366.133-.451.1099-.9021.399-.9021.9542 0 .2255.0578.3874.1387.5147.0463.0751.0405.133-.0289.1619-.3643.162-.6708.4915-.6708.9542 0 .266.0752.4973.2024.665.0694.0868.052.162-.0463.2198-.2718.1503-.4452.4857-.4452.8674 0 .2718.0867.561.2486.7055.0868.081.0694.1388-.0289.2198-.1908.1446-.295.4221-.295.7518 0 .5667.4396 1.0293 1.012 1.0293H5.311c.5263 0 .8732.266.8732.6998 0 .7922-.983 2.2264-.983 3.2673 0 .5378.3527.8559.8095.8559Zm5.4418-5.0427c1.3069 0 2.3132-1.4053 2.3132-3.2096 0-1.7348-1.0815-3.1864-2.5272-3.1864h-1.0351c1.0467.7692 1.5267 1.9258 1.5035 3.2443-.0231 1.4688-.5898 2.5155-1.1045 3.1517h.8501Z" clipRule="evenodd" />
, 
    'ThumbDownFilled'
)

type ThumbDownFilledRef = PathIconRef

type ThumbDownFilledProps = PathIconProps

export {
    ThumbDownFilled
}

export type {
    ThumbDownFilledRef,
    ThumbDownFilledProps
}

export default ThumbDownFilled
