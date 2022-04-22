import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const TaxExempt: React.MemoExoticComponent<React.ForwardRefExoticComponent<TaxExemptProps>> = createPathIcon(
    <path fillRule="evenodd" d="M2.7225 2.6911v10.6178c0 .377.3142.6911.6911.6911h9.1728c.377 0 .6911-.3141.6911-.6911V2.6911c0-.377-.3141-.6911-.6911-.6911H3.4136c-.4398.0628-.691.3141-.691.6911Zm9.6754 10.155a.4.4 0 0 1-.4.4H3.8136a.4.4 0 0 1-.4-.4V3.1539a.4.4 0 0 1 .4-.4h8.1843a.4.4 0 0 1 .4.4v9.6922ZM4.1676 4.6387a.377.377 0 0 1 .377-.377h3.0156a.377.377 0 1 1 0 .754H4.5445a.377.377 0 0 1-.377-.377Zm0 1.5079a.377.377 0 0 1 .377-.377h3.0156a.377.377 0 0 1 0 .754H4.5445a.377.377 0 0 1-.377-.377Zm0 1.5078a.377.377 0 0 1 .377-.377h3.0156a.377.377 0 1 1 0 .754H4.5445a.377.377 0 0 1-.377-.377Zm0 1.5079a.377.377 0 0 1 .377-.377h3.0156a.377.377 0 1 1 0 .754H4.5445a.377.377 0 0 1-.377-.377Zm0 1.5079a.377.377 0 0 1 .377-.377h3.0156a.377.377 0 0 1 0 .7539H4.5445a.377.377 0 0 1-.377-.3769Zm0 1.5078a.377.377 0 0 1 .377-.377h6.7224a.377.377 0 0 1 0 .754H4.5445a.377.377 0 0 1-.377-.377Zm7.5392-7.602-.4398.4397.4398.4398v.3141h-.7539v.754h-.3142l-.4397-.4398-.4398.4398H9.445v-.754h-.7539v-.3141l.4398-.4398-.4398-.4398v-.3141h.754v-.754h.314l.4399.4398.4397-.4398h.3142v.754h.7539v.3141Zm-.9539 2.7015a.2.2 0 0 1 .2.2v3.1927l-.7539-.754-.754.754V7.4775a.2.2 0 0 1 .2-.2h1.1079Z" clipRule="evenodd" />
, 
    'TaxExempt'
)

type TaxExemptRef = PathIconRef

type TaxExemptProps = PathIconProps

export {
    TaxExempt
}

export type {
    TaxExemptRef,
    TaxExemptProps
}

export default TaxExempt
