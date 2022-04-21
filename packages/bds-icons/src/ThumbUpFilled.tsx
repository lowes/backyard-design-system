import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ThumbUpFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<ThumbUpFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.9381 13.8666c.4511-.1041.9022-.399.9022-.9542 0-.2255-.0578-.3817-.1388-.5147-.0463-.0752-.0347-.133.0289-.1619.3643-.1619.6708-.4858.6708-.9542 0-.2602-.0751-.4973-.2024-.665-.0694-.0868-.052-.1562.0521-.2198.266-.1503.4395-.4857.4395-.8674 0-.266-.0868-.561-.2487-.7055-.0867-.081-.0694-.1388.0347-.2198.1851-.1446.2892-.4221.2892-.7518 0-.5667-.4395-1.0235-1.0121-1.0235H10.689c-.5262 0-.8732-.2718-.8732-.6998 0-.798.9831-2.2322.9831-3.2673 0-.5379-.3527-.8617-.8096-.8617-.4164 0-.6303.2891-.8559.7287-.8559 1.7001-2.024 3.0707-2.9146 4.2446C5.467 7.9796 5.097 8.824 5.0796 10.2118c-.029 2.1339 1.7002 3.7589 4.4181 3.782l.8039.0058c.7575.0058 1.3127-.052 1.6365-.133Zm-6.1414-.4279c-1.0468-.7634-1.5267-1.92-1.5036-3.2443.0231-1.4688.5899-2.5156 1.1045-3.1517h-.85c-1.307 0-2.3132 1.411-2.3132 3.2096 0 1.7348 1.0814 3.1864 2.5271 3.1864h1.0352Z" clipRule="evenodd" />
, 
    'ThumbUpFilled'
)

type ThumbUpFilledRef = PathIconRef

type ThumbUpFilledProps = PathIconProps

export {
    ThumbUpFilled
}

export type {
    ThumbUpFilledRef,
    ThumbUpFilledProps
}

export default ThumbUpFilled
