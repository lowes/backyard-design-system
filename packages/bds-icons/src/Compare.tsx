import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Compare: React.MemoExoticComponent<React.ForwardRefExoticComponent<CompareProps>> = createPathIcon(
    <path fillRule="evenodd" d="M6.6496 8.896c.2773 0 .457-.1848.457-.4518 0-.1335-.0462-.2311-.1232-.3133l-1.484-1.4428-.9704-.8319 1.2015.0514h6.665c.2618 0 .457-.19.457-.457s-.1952-.4621-.457-.4621h-6.665l-1.2015.0564.9704-.8318 1.484-1.448c.077-.077.1232-.1797.1232-.3132 0-.262-.1797-.4519-.457-.4519-.1078 0-.2413.0565-.3286.1438L3.3018 5.1066c-.1027.0975-.154.2156-.154.344 0 .1232.0513.2413.154.3389L6.321 8.7574c.0873.0873.2208.1386.3286.1386ZM9.3454 14c.113 0 .2465-.0565.3338-.1438l3.0192-2.9627c.1027-.0976.1541-.2157.1541-.3441 0-.1283-.0514-.2464-.1541-.344L9.6792 7.2426c-.0873-.0873-.2208-.1438-.3338-.1438-.2721 0-.4519.19-.4519.457 0 .1284.0411.2311.1233.3133l1.4788 1.4428.9756.8319-1.2067-.0514H3.6047c-.267 0-.457.19-.457.457s.19.457.457.457h6.6598l1.2067-.0513-.9756.8318-1.4788 1.4429c-.0822.0821-.1233.1848-.1233.3132 0 .267.1798.457.4519.457Z" clipRule="evenodd" />
, 
    'Compare'
)

type CompareRef = PathIconRef

type CompareProps = PathIconProps

export {
    Compare
}

export type {
    CompareRef,
    CompareProps
}

export default Compare
