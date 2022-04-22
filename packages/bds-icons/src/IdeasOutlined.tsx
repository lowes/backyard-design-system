import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const IdeasOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<IdeasOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M9.8739 11.3512c.1762 0 .2902-.1089.2902-.2851v-.8294c0-1.2544 1.8195-2.063 1.8195-4.3024C11.9836 3.5758 10.387 2 7.9974 2s-3.981 1.5758-3.981 3.9343c0 2.2393 1.8194 3.048 1.8194 4.3024v.8294c0 .1762.114.2851.2851.2851h3.753Zm-.4821-.7827H6.6082v-.3214c0-1.524-1.809-2.3378-1.809-4.3076 0-1.8972 1.2803-3.1568 3.1982-3.1568 1.9231 0 3.2035 1.2596 3.2035 3.1568 0 1.9698-1.8091 2.7836-1.8091 4.3076v.3214Zm.2903 2.1823c.2643 0 .482-.2178.482-.4873s-.2177-.4873-.482-.4873H6.3179c-.2643 0-.482.2178-.482.4873s.2177.4873.482.4873h3.3642ZM7.9974 14c.7153 0 1.2233-.3266 1.2752-.8294H6.7274c.0467.5028.5547.8294 1.27.8294Z" clipRule="evenodd" />
, 
    'IdeasOutlined'
)

type IdeasOutlinedRef = PathIconRef

type IdeasOutlinedProps = PathIconProps

export {
    IdeasOutlined
}

export type {
    IdeasOutlinedRef,
    IdeasOutlinedProps
}

export default IdeasOutlined
