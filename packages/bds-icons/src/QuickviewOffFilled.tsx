import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const QuickviewOffFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<QuickviewOffFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.924 11.9362c.1417-.1461.1328-.3453 0-.4825L4.523 4.0572c-.1327-.1328-.354-.1328-.4868 0-.1284.1283-.1284.354 0 .4824l7.4053 7.3966c.1328.1372.3453.146.4825 0Zm-.0619-1.2793C13.1546 9.8026 14 8.6296 14 8.1029c0-.8986-2.4567-3.7625-5.9978-3.7625a6.6872 6.6872 0 0 0-2.1025.3409l1.1508 1.1509a2.4216 2.4216 0 0 1 .9517-.1948c1.3678 0 2.4744 1.0845 2.4744 2.4655 0 .3364-.0753.6595-.2081.9428l1.5936 1.6112Zm-3.8599 1.2085c.8189 0 1.5802-.1505 2.2486-.3984l-1.1597-1.1597a2.3808 2.3808 0 0 1-1.0889.2611c-1.381 0-2.4744-1.1199-2.4788-2.4655 0-.3984.093-.7746.2568-1.1066L4.2662 5.4736C2.872 6.3456 2 7.5717 2 8.103c0 .8941 2.501 3.7625 6.0022 3.7625ZM9.401 8.1826a2.1418 2.1418 0 0 0 .0089-.1727c0-.7746-.6241-1.4031-1.4076-1.4031a2.031 2.031 0 0 0-.1682.0088l1.567 1.567Zm-1.3943 1.226c.062 0 .1196-.0043.1815-.0088l-1.589-1.589a2.7355 2.7355 0 0 0-.009.1903c0 .779.642 1.4076 1.4165 1.4076Z" clipRule="evenodd" />
, 
    'QuickviewOffFilled'
)

type QuickviewOffFilledRef = PathIconRef

type QuickviewOffFilledProps = PathIconProps

export {
    QuickviewOffFilled
}

export type {
    QuickviewOffFilledRef,
    QuickviewOffFilledProps
}

export default QuickviewOffFilled
