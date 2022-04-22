import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const WarningOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<WarningOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.8728 14c1.0765 0 1.7478-.7726 1.7478-1.7478 0-.2913-.076-.5889-.2343-.8612L9.5039 2.8865C9.1746 2.3103 8.5921 2 8.0031 2c-.5952 0-1.1778.3103-1.507.8865l-4.8824 8.5109c-.1583.2723-.2343.5635-.2343.8548 0 .9752.6712 1.7478 1.7477 1.7478h9.7457Zm-.0127-.9942H3.1335c-.437 0-.7283-.3609-.7283-.7536 0-.1139.019-.2469.0824-.3799l4.876-8.5045c.1393-.2406.3926-.3546.6395-.3546.247 0 .4876.1076.627.3546l4.8696 8.5108c.0697.1267.1013.2597.1013.3736 0 .3927-.3039.7536-.7409.7536Zm-4.857-3.2739c.304 0 .475-.1773.4813-.5066l.095-3.3372c.0063-.323-.247-.5636-.5826-.5636-.342 0-.5826.2343-.5762.5573l.0823 3.3435c.0063.323.1836.5066.5002.5066Zm0 2.0581c.361 0 .684-.2913.684-.6586 0-.3736-.3167-.6586-.684-.6586-.3736 0-.6839.2913-.6839.6586 0 .3609.3167.6586.684.6586Z" clipRule="evenodd" />
, 
    'WarningOutlined'
)

type WarningOutlinedRef = PathIconRef

type WarningOutlinedProps = PathIconProps

export {
    WarningOutlined
}

export type {
    WarningOutlinedRef,
    WarningOutlinedProps
}

export default WarningOutlined
