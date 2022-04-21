import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const RotateRight: React.MemoExoticComponent<React.ForwardRefExoticComponent<RotateRightProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0028 14c2.731 0 4.9215-2.196 4.9215-4.9327 0-.2675-.1895-.4626-.4626-.4626-.262 0-.4348.1951-.4348.4627 0 2.2405-1.7891 4.0352-4.0241 4.0352S3.973 11.3079 3.973 9.0673c0-2.235 1.7947-4.0241 4.0298-4.0241.4236 0 .8137.0334 1.1481.1059L7.4844 6.8045c-.0836.0891-.1282.2006-.1282.3177 0 .2563.1895.4458.4403.4458.1394 0 .2453-.0445.3233-.1281l2.2963-2.3075c.1004-.0948.1394-.2062.1394-.3344a.4775.4775 0 0 0-.1394-.3345L8.1198 2.1338C8.0418 2.0446 7.9303 2 7.7965 2c-.2508 0-.4403.2006-.4403.457 0 .117.0446.2286.1226.3177L8.967 4.235c-.3177-.0557-.641-.0892-.9642-.0892-2.7311 0-4.9271 2.1905-4.9271 4.9215C3.0757 11.804 5.2717 14 8.0027 14Z" clipRule="evenodd" />
, 
    'RotateRight'
)

type RotateRightRef = PathIconRef

type RotateRightProps = PathIconProps

export {
    RotateRight
}

export type {
    RotateRightRef,
    RotateRightProps
}

export default RotateRight
