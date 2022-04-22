import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Attachment: React.MemoExoticComponent<React.ForwardRefExoticComponent<AttachmentProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.466 13.003 12.61 8.8588c.1624-.1624.1624-.4592-.0056-.6104-.1624-.1736-.4256-.1512-.5936.0112l-4.1161 4.1161c-1.0697 1.0753-2.509.9689-3.4273.0392-.924-.9184-1.0305-2.3464.0392-3.4217l5.6169-5.6113c.644-.644 1.5905-.7337 2.2065-.1232.6104.6216.5208 1.5624-.1176 2.2064l-5.4882 5.4882c-.2744.2856-.6104.2016-.8008.0112-.1904-.196-.2688-.5208.0056-.8064l3.8361-3.825c.168-.1735.1792-.42.0168-.5824-.1624-.1568-.4088-.1456-.5768.0224L5.3579 9.6204c-.5712.5713-.5488 1.4449-.0448 1.9489.5488.5488 1.3776.5376 1.9544-.0392l5.5106-5.5106c1.0472-1.0472 1.0024-2.4248.0896-3.3377-.8904-.8904-2.2905-.9576-3.3377.0897L3.885 8.422c-1.3832 1.3833-1.2768 3.3601-.028 4.609 1.2489 1.2432 3.2257 1.3496 4.609-.028Z" clipRule="evenodd" />
, 
    'Attachment'
)

type AttachmentRef = PathIconRef

type AttachmentProps = PathIconProps

export {
    Attachment
}

export type {
    AttachmentRef,
    AttachmentProps
}

export default Attachment
