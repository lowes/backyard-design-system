import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const FolderOpenFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<FolderOpenFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.2318 5.117v-.2582c0-.759-.3868-1.1384-1.1568-1.1384H7.4902c-.2505 0-.3979-.0627-.582-.2174l-.2248-.1879c-.2432-.2026-.4347-.2726-.7958-.2726H4.7897c-.6447 0-1.0168.3684-1.0168 1.1126v1.1033c-1.0555.3719-1.7766 1.4307-1.6553 2.6137l.2912 2.8404c.1308 1.2753 1.205 2.245 2.487 2.245h6.1975c1.2784 0 2.3508-.9644 2.486-2.2356l.3021-2.8404c.1571-1.477-1.0006-2.7644-2.4859-2.7644h.8363Zm-7.6273 0H3.773v.1414a2.4972 2.4972 0 0 1 .8316-.1413Zm6.5098-.004H4.8199v-.7025c0-.276.1658-.4154.4719-.4154h.711c.2137 0 .3413.0446.5039.1673l.1945.1394c.2072.1505.3762.2063.692.2063H10.62c.3157 0 .4943.1477.4943.4376v.1673ZM5.2014 8.1945c0-.1985.161-.3595.3596-.3595h4.8828a.3596.3596 0 0 1 0 .7191H5.561a.3596.3596 0 0 1-.3596-.3596Zm1.2008 1.326a.3596.3596 0 1 0 0 .7191h3.2003a.3596.3596 0 0 0 0-.7191H6.4022Z" clipRule="evenodd" />
, 
    'FolderOpenFilled'
)

type FolderOpenFilledRef = PathIconRef

type FolderOpenFilledProps = PathIconProps

export {
    FolderOpenFilled
}

export type {
    FolderOpenFilledRef,
    FolderOpenFilledProps
}

export default FolderOpenFilled
