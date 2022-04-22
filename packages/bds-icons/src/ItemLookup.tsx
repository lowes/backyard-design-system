import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ItemLookup: React.MemoExoticComponent<React.ForwardRefExoticComponent<ItemLookupProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M6.066 9.8288V3.4323H5.583v5.636c.2073.2181.3728.4761.4832.7605ZM4.762 8.5105V3.4323h-.847v4.915c.2985 0 .5843.058.847.1632ZM8.2587 11.413V3.4323h-1.382v7.9807h1.382ZM9.646 3.4323v7.9807h-.8833V3.4323h.8832ZM11.5424 11.413V3.4323h-1.3717v7.9807h1.3717ZM13.0388 3.4323v7.9807h-1.0755V3.4323h1.0755ZM14 11.413V3.4323h-.6962v7.9807H14ZM3.7611 11.0142a.5242.5242 0 0 1-.5238-.5238c0-.2881.2348-.524.5238-.524.2891 0 .5239.2359.5239.524a.5242.5242 0 0 1-.5239.5238Z" /><path fillRule="evenodd" d="M3.915 12.5677c1.0405 0 1.915-.8671 1.915-1.9151s-.8632-1.915-1.915-1.915c-1.048 0-1.915.867-1.915 1.915 0 1.0556.867 1.9151 1.915 1.9151Zm.7607-.9448c.1154 0 .2012-.0888.2012-.2022a.199.199 0 0 0-.0572-.1431l-.369-.3689a.798.798 0 0 0 .1184-.4183c0-.443-.364-.808-.808-.808-.444 0-.808.365-.808.808 0 .4439.364.808.808.808a.8029.8029 0 0 0 .3976-.1056l.372.3729c.0384.0385.0917.0572.145.0572Z" clipRule="evenodd" /></React.Fragment>
, 
    'ItemLookup'
)

type ItemLookupRef = PathIconRef

type ItemLookupProps = PathIconProps

export {
    ItemLookup
}

export type {
    ItemLookupRef,
    ItemLookupProps
}

export default ItemLookup
