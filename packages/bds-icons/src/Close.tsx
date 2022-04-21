import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Close: React.MemoExoticComponent<React.ForwardRefExoticComponent<CloseProps>> = createPathIcon(
    <path fillRule="evenodd" d="M13.8042 13.8032c.2573-.2648.2573-.6962 0-.9535L8.9611 7.9991l4.8431-4.8432c.2573-.2573.2648-.6962 0-.9535-.2649-.2648-.7038-.2648-.9611 0L8 7.0456 3.1569 2.2024c-.2573-.2648-.7038-.2724-.961 0-.2574.2649-.2574.6962 0 .9535l4.843 4.8432-4.843 4.8506c-.2574.2573-.265.6962 0 .9535.2648.2573.7037.2573.961 0L8 8.9602l4.8431 4.843c.2573.2573.7038.2649.9611 0Z" clipRule="evenodd" />
, 
    'Close'
)

type CloseRef = PathIconRef

type CloseProps = PathIconProps

export {
    Close
}

export type {
    CloseRef,
    CloseProps
}

export default Close
