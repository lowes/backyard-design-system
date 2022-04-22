import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Linebuster: React.MemoExoticComponent<React.ForwardRefExoticComponent<LinebusterProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M3.8316 3.875h1.0737v1.0625H3.8316V3.875ZM4.9053 11.0625H3.8316v1.0625h1.0737v-1.0625ZM12.1053 3.875h-1.0737v1.0625h1.0737V3.875Z" /><path fillRule="evenodd" d="M7.8737 2v2.0625H6.8632V2H2.3158C2.1263 2 2 2.125 2 2.3125v4.5h3.6V8h1.2v1.1875H4.4632V8h-2.4v5.6875c0 .1875.1263.3125.3157.3125h4.5474v-3.6875h1.1369v1.5h1.2631v1.125h3.5369V14h.821c.1895 0 .3158-.125.3158-.3125v-.75h-.9474v-1.125H14V2.25c0-.125-.1263-.25-.3158-.25H7.8737Zm3.8526 7.1875h-1.2V11.75H9.2V9.1875H7.9368V8h1.2V6.8125h1.3264V8h1.2631v1.1875Zm0-1.1875V6.8125h1.1369V8h-1.1369ZM7.9368 6.8125v-2.75h1.2v2.75h-1.2Zm-.0631 0H6.8632V8h1.0105V6.8125Zm4.9895 2.375v2.625h-.9474v-2.625h.9474Zm-9.9158-3.375V3h2.9052v2.875c-.0631-.0625-2.9052-.0625-2.9052-.0625ZM2.8842 13h2.9053v-2.875H2.8842V13Zm7.2632-7.1875V3h2.9052v2.875c0-.0625-2.9052-.0625-2.9052-.0625Z" clipRule="evenodd" /><path fillRule="evenodd" d="M9.1368 12.9375H7.8737V14h1.2631v-1.0625Z" /></React.Fragment>
, 
    'Linebuster'
)

type LinebusterRef = PathIconRef

type LinebusterProps = PathIconProps

export {
    Linebuster
}

export type {
    LinebusterRef,
    LinebusterProps
}

export default Linebuster
