import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const QuickviewFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<QuickviewFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0022 11.7624C11.5478 11.7624 14 8.8941 14 8c0-.8986-2.4567-3.7625-5.9978-3.7625C4.501 4.2375 2 7.1015 2 8c0 .8941 2.501 3.7624 6.0022 3.7624Zm0-1.2969c-1.381 0-2.4743-1.1199-2.4788-2.4655-.0044-1.381 1.0978-2.4655 2.4788-2.4655C9.37 5.5345 10.4766 6.619 10.4766 8c0 1.3456-1.1066 2.4655-2.4744 2.4655Zm0-1.5758c.4914 0 .8986-.4028.8986-.8897 0-.4913-.4072-.8941-.8986-.8941-.4957 0-.903.4028-.903.8941 0 .487.4073.8897.903.8897Z" clipRule="evenodd" />
, 
    'QuickviewFilled'
)

type QuickviewFilledRef = PathIconRef

type QuickviewFilledProps = PathIconProps

export {
    QuickviewFilled
}

export type {
    QuickviewFilledRef,
    QuickviewFilledProps
}

export default QuickviewFilled
