import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const QuickviewOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<QuickviewOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0022 11.7629C11.5499 11.7629 14 8.8957 14 8c0-.9001-2.4544-3.7629-5.9978-3.7629C4.5027 4.2371 2 7.0999 2 8c0 .8957 2.4984 3.7629 6.0022 3.7629Zm0-.6937c-2.8936 0-5.2339-2.4501-5.2339-3.0692 0-.5225 2.3403-3.0692 5.2338-3.0692 2.8804 0 5.2294 2.5467 5.2294 3.0692 0 .6191-2.349 3.0692-5.2294 3.0692Zm.0001-.6103c1.3655 0 2.4632-1.1197 2.4632-2.4589 0-1.3743-1.0977-2.4588-2.4632-2.4588-1.3743 0-2.4764 1.0845-2.472 2.4588.0088 1.3392 1.0977 2.4589 2.472 2.4589Zm0-1.6422c-.4567 0-.8255-.3688-.8255-.8167 0-.4523.3688-.8167.8254-.8167.4523 0 .8211.3644.8211.8167 0 .4479-.3688.8167-.821.8167Z" clipRule="evenodd" />
, 
    'QuickviewOutlined'
)

type QuickviewOutlinedRef = PathIconRef

type QuickviewOutlinedProps = PathIconProps

export {
    QuickviewOutlined
}

export type {
    QuickviewOutlinedRef,
    QuickviewOutlinedProps
}

export default QuickviewOutlined
