import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const PowerPlug: React.MemoExoticComponent<React.ForwardRefExoticComponent<PowerPlugProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.8307 5.317a.5.5 0 0 1 .5.5V8.896a.9999.9999 0 0 1-.3095.7234L9.1998 11.358a.3001.3001 0 0 0-.0928.217v1.5354a.3.3 0 0 1-.3.3H7.1694a.3.3 0 0 1-.3-.3V11.574a.2999.2999 0 0 0-.0916-.2158L4.9765 9.6189a1 1 0 0 1-.3054-.7194V5.817a.5.5 0 0 1 .5-.5h5.6596Zm-.164-2.817a.5.5 0 0 0-.5-.5h-.3334a.5.5 0 0 0-.5.5v2.1667H6.6667V2.5a.5.5 0 0 0-.5-.5h-.3334a.5.5 0 0 0-.5.5v2.1667h-.0066C4.6 4.66 4 5.26 4 5.9867v3.2657a1 1 0 0 0 .2929.7072l1.9526 1.9525a.3002.3002 0 0 1 .0878.2122V13.5a.5.5 0 0 0 .5.5h2.3334a.5.5 0 0 0 .5-.5v-1.376a.3.3 0 0 1 .0875-.2118l1.9539-1.9595A1.0001 1.0001 0 0 0 12 9.2467V6c0-.7333-.6-1.3333-1.3333-1.3333V2.5Z" />
, 
    'PowerPlug'
)

type PowerPlugRef = PathIconRef

type PowerPlugProps = PathIconProps

export {
    PowerPlug
}

export type {
    PowerPlugRef,
    PowerPlugProps
}

export default PowerPlug
