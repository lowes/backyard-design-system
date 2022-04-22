import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const WaterHeaterFan: React.MemoExoticComponent<React.ForwardRefExoticComponent<WaterHeaterFanProps>> = createPathIcon(
    <path fillRule="evenodd" d="M7.991 7.4a.5996.5996 0 0 0-.599.6c0 .3314.2681.6.599.6a.5995.5995 0 0 0 .5991-.6c0-.3314-.2682-.6-.599-.6ZM8.2906 2c2.6959 0 2.7618 2.142 1.348 2.85-.5932.294-.8568.924-.9706 1.482.2876.12.5392.306.7309.546C11.6156 5.678 14 6.152 14 8.3c0 2.7-2.1388 2.76-2.8457 1.338-.2996-.594-.9346-.858-1.4918-.972-.1198.288-.3055.534-.5452.738C10.3095 11.618 9.8363 14 7.6915 14c-2.696 0-2.75-2.148-1.336-2.856.587-.294.8507-.918.9705-1.47-.2935-.12-.5512-.312-.7429-.552C4.3724 10.31 2 9.842 2 7.7 2 5 4.1328 4.934 4.8397 6.356c.2996.594.9287.852 1.4858.966.1138-.288.3056-.54.5512-.732C5.6845 4.376 6.1577 2 8.2906 2Z" />
, 
    'WaterHeaterFan'
)

type WaterHeaterFanRef = PathIconRef

type WaterHeaterFanProps = PathIconProps

export {
    WaterHeaterFan
}

export type {
    WaterHeaterFanRef,
    WaterHeaterFanProps
}

export default WaterHeaterFan
