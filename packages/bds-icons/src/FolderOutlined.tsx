import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const FolderOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<FolderOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.5157 12.8502c.9407 0 1.4843-.5436 1.4843-1.6202V5.7265c0-1.0767-.5488-1.615-1.6411-1.615H7.2735c-.3554 0-.5644-.0889-.8258-.3084l-.3188-.2665C5.784 3.249 5.5122 3.1498 5 3.1498H3.4425C2.528 3.1498 2 3.6725 2 4.7282V11.23c0 1.0818.5488 1.6202 1.6411 1.6202h8.8746Zm.6428-6.763H2.8415V4.77c0-.5174.2717-.7787.7735-.7787h1.1655c.3502 0 .5592.0836.8258.3136l.3188.2613c.3397.2822.6167.3868 1.1341.3868h5.2892c.5174 0 .8101.277.8101.8205v.3136Zm-.8101 5.9215H3.6516c-.5227 0-.8102-.277-.8102-.8205V6.8763h10.3171v4.3171c0 .5383-.2927.8153-.8101.8153Z" clipRule="evenodd" />
, 
    'FolderOutlined'
)

type FolderOutlinedRef = PathIconRef

type FolderOutlinedProps = PathIconProps

export {
    FolderOutlined
}

export type {
    FolderOutlinedRef,
    FolderOutlinedProps
}

export default FolderOutlined
