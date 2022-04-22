import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const AddVideoFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<AddVideoFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.7096 10.6982c.8103 0 1.2964-.47 1.2964-1.2802V5.403c0-.8143-.4456-1.2802-1.2559-1.2802H5.3585c-.7778 0-1.2964.4659-1.2964 1.2802V7.206c1.4341 0 2.613 1.179 2.613 2.6131 0 .3079-.0566.6077-.158.8792h3.1925Zm3.7719-.6199c.3119 0 .5185-.2269.5185-.559V5.3017c0-.3322-.2066-.559-.5185-.559-.1459 0-.3079.0729-.4497.1985l-1.4707 1.272v2.3944l1.4707 1.2721c.1418.1216.3038.1985.4497.1985Zm-9.4234 1.7988c1.1181 0 2.058-.9318 2.058-2.058 0-1.1263-.9277-2.0581-2.058-2.0581C2.9318 7.761 2 8.6928 2 9.819c0 1.1344.9318 2.0581 2.058 2.0581Zm.004-.7211c-.1418 0-.2673-.0973-.2673-.2472v-.8426H3.021c-.1378 0-.2512-.1135-.2512-.2472 0-.1337.1134-.247.2512-.247h.7738v-.8387c0-.154.1256-.2512.2673-.2512.1378 0 .2634.0972.2634.2512v.8386h.7738a.2481.2481 0 0 1 .2471.2471.2481.2481 0 0 1-.2471.2472h-.7738v.8426c0 .1499-.1256.2472-.2633.2472Z" clipRule="evenodd" />
, 
    'AddVideoFilled'
)

type AddVideoFilledRef = PathIconRef

type AddVideoFilledProps = PathIconProps

export {
    AddVideoFilled
}

export type {
    AddVideoFilledRef,
    AddVideoFilledProps
}

export default AddVideoFilled
