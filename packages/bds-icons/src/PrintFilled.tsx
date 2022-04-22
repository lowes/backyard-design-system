import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PrintFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<PrintFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.8852 3.5007v-.0908c0-.7904-.6142-1.1429-1.4793-1.1429H5.5941c-.8278 0-1.4793.3525-1.4793 1.1429v.0908h7.7704ZM11.02 13.733c.6729 0 1.02-.3044 1.02-1.0147v-1.0254h.3685c1.0414 0 1.5915-.5233 1.5915-1.5647V5.781c0-1.0413-.5501-1.57-1.5915-1.57H3.5861C2.6035 4.211 2 4.7396 2 5.781v4.3472c0 1.0414.55 1.5647 1.5861 1.5647H3.96v1.0254c0 .7103.3418 1.0147 1.02 1.0147H11.02Zm-.2617-.8011H5.247c-.2884 0-.4273-.1388-.4273-.4272V8.3231c0-.283.1389-.4219.4273-.4219h5.5113c.2831 0 .4219.1389.4219.4219v4.1816c0 .2884-.1388.4272-.4219.4272Zm-.9239-3.1081c.1869 0 .3258-.1442.3258-.3311 0-.1816-.1389-.3258-.3258-.3258H6.1762c-.1922 0-.3364.1442-.3364.3258 0 .1869.1442.331.3364.331h3.6582Zm0 1.8638c.1869 0 .3258-.1389.3258-.3204 0-.187-.1389-.3365-.3258-.3365H6.1762c-.1922 0-.3364.1495-.3364.3365 0 .1815.1442.3204.3364.3204h3.6582Z" clipRule="evenodd" />
, 
    'PrintFilled'
)

type PrintFilledRef = PathIconRef

type PrintFilledProps = PathIconProps

export {
    PrintFilled
}

export type {
    PrintFilledRef,
    PrintFilledProps
}

export default PrintFilled
