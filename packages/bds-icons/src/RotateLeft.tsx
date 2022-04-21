import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const RotateLeft: React.MemoExoticComponent<React.ForwardRefExoticComponent<RotateLeftProps>> = createPathIcon(
    <path fillRule="evenodd" d="M8.0028 14c2.731 0 4.9215-2.196 4.9215-4.9327a4.905 4.905 0 0 0-4.9215-4.9215c-.3289 0-.6522.0335-.9699.0892l1.4882-1.4603c.0836-.0891.1226-.2006.1226-.3177 0-.2563-.1895-.457-.4347-.457-.1394 0-.2508.0446-.3289.1338L5.5838 4.4635a.4775.4775 0 0 0-.1393.3345c0 .1281.0446.2396.1393.3344l2.2963 2.3075c.0837.0836.1895.1281.3233.1281.2508 0 .4403-.1895.4403-.4458 0-.117-.039-.2286-.1282-.3177L6.849 5.149c.34-.0725.7246-.1059 1.1538-.1059 2.235 0 4.0241 1.7891 4.0241 4.0241 0 2.2406-1.7891 4.0353-4.0241 4.0353S3.973 11.3079 3.973 9.0673c0-.2675-.1672-.4626-.4347-.4626-.2731 0-.4626.1951-.4626.4627C3.0757 11.804 5.2717 14 8.0027 14Z" clipRule="evenodd" />
, 
    'RotateLeft'
)

type RotateLeftRef = PathIconRef

type RotateLeftProps = PathIconProps

export {
    RotateLeft
}

export type {
    RotateLeftRef,
    RotateLeftProps
}

export default RotateLeft
