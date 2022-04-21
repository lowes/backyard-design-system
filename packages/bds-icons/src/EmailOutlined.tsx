import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const EmailOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<EmailOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.1993 13.4624c1.1413 0 1.8007-.6594 1.8007-1.9656v-7c0-1.2998-.6658-1.9592-1.9909-1.9592H2.8007C1.6594 2.5376 1 3.1906 1 4.4968v7c0 1.3125.6658 1.9656 1.991 1.9656h10.2083Zm-5.1866-4.749c-.2536 0-.501-.1206-.7672-.3932L2.4583 3.5965c.1395-.0571.3044-.0888.4946-.0888h10.0942c.1966 0 .3678.0317.5072.1015l-4.7744 4.711c-.2726.2726-.52.3931-.7672.3931Zm-6.0363 2.8912c-.0063-.0317-.0063-.0697-.0063-.1078V4.4334L5.616 8.0095l-3.6395 3.5951Zm12.0535-.019-3.6205-3.576 3.6205-3.5572v7.1332Zm-.9828.9067H2.9529c-.1775 0-.336-.0254-.4629-.0824l3.7917-3.7473.4121.4058c.4439.4375.8687.6214 1.3189.6214.4438 0 .875-.184 1.3188-.6214l.4122-.4058 3.7853 3.7409c-.1395.0634-.298.0888-.4819.0888Z" clipRule="evenodd" />
, 
    'EmailOutlined'
)

type EmailOutlinedRef = PathIconRef

type EmailOutlinedProps = PathIconProps

export {
    EmailOutlined
}

export type {
    EmailOutlinedRef,
    EmailOutlinedProps
}

export default EmailOutlined
