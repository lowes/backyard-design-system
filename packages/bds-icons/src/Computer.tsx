import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Computer: React.MemoExoticComponent<React.ForwardRefExoticComponent<ComputerProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.8169 14c.2739 0 .5062-.2323.5062-.5122s-.2323-.5062-.5062-.5062h-.8159l-.1608-1.0957h3.728c1.0184 0 1.5306-.4884 1.5306-1.5306V3.5305C15.0988 2.4883 14.5866 2 13.5682 2H2.4318C1.4134 2 .9012 2.4883.9012 3.5305v6.8248c0 1.0422.5122 1.5306 1.5306 1.5306h3.728l-.1608 1.0957h-.8159c-.274 0-.5062.2263-.5062.5062S4.9092 14 5.1831 14h5.6338Zm3.061-3.5412H2.1161c-.1786 0-.256-.085-.256-.3045V3.6599c0-.5028.1786-.701.5895-.701h11.1008c.4049 0 .5896.1982.5896.701v6.4944c0 .2195-.0834.3045-.2621.3045Z" clipRule="evenodd" />
, 
    'Computer'
)

type ComputerRef = PathIconRef

type ComputerProps = PathIconProps

export {
    Computer
}

export type {
    ComputerRef,
    ComputerProps
}

export default Computer
