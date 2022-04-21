import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const SpeechBubblesFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<SpeechBubblesFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M4.6964 12.2505c.1698 0 .2887-.0806.4883-.2675l1.2357-1.1507c-.2378-.1911-.4331-.4926-.4331-1.1847V6.8323c0-1.3036.7898-2.0765 2.0934-2.0765h2.9724l-.0043-.1613c-.0637-.8705-.6369-1.4353-1.6093-1.4353h-5.826C2.6413 3.1592 2 3.741 2 4.7516v4.1698c0 1.0107.6412 1.6603 1.6136 1.6603h.7049v1.2357c0 .2633.1401.4331.3779.4331Zm6.8619.5903c.2421 0 .378-.1741.378-.4332v-1.2399h.4501c.9724 0 1.6136-.6497 1.6136-1.656V6.9299c0-1.0148-.6412-1.5923-1.6136-1.5923H8.1783c-1.0149 0-1.6094.5775-1.6094 1.5923v2.5818c0 1.0063.5945 1.656 1.6094 1.656H9.537L11.07 12.569c.1996.1868.3185.2718.4883.2718Z" clipRule="evenodd" />
, 
    'SpeechBubblesFilled'
)

type SpeechBubblesFilledRef = PathIconRef

type SpeechBubblesFilledProps = PathIconProps

export {
    SpeechBubblesFilled
}

export type {
    SpeechBubblesFilledRef,
    SpeechBubblesFilledProps
}

export default SpeechBubblesFilled
