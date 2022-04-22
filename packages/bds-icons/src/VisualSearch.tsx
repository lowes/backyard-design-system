import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const VisualSearch: React.MemoExoticComponent<React.ForwardRefExoticComponent<VisualSearchProps>> = createPathIcon(
    <React.Fragment><path fillRule="evenodd" d="M2 4.1403A2.1404 2.1404 0 0 1 4.1403 2h1.3081a.386.386 0 1 1 0 .772h-1.308a1.3685 1.3685 0 0 0-1.3685 1.3683v1.3081a.386.386 0 1 1-.7719 0v-1.308Zm8.1656-1.7543a.386.386 0 0 1 .386-.386h1.308A2.1404 2.1404 0 0 1 14 4.1403v1.3081a.386.386 0 0 1-.7719 0v-1.308a1.3685 1.3685 0 0 0-1.3685-1.3685h-1.308a.3859.3859 0 0 1-.386-.386ZM2.386 10.1656a.386.386 0 0 1 .386.386v1.308a1.3688 1.3688 0 0 0 1.3683 1.3685h1.3081a.3863.3863 0 0 1 .386.3859.3857.3857 0 0 1-.386.386h-1.308A2.1403 2.1403 0 0 1 2 11.8596v-1.308a.3859.3859 0 0 1 .386-.386Zm11.228 0a.3859.3859 0 0 1 .386.386v1.308A2.1404 2.1404 0 0 1 11.8596 14h-1.308a.3859.3859 0 0 1 0-.7719h1.308c.3629 0 .711-.1442.9677-.4008a1.3689 1.3689 0 0 0 .4008-.9677v-1.308a.3862.3862 0 0 1 .3859-.386ZM8 9.5473c.6511 0 1.179-.5278 1.179-1.1789S8.651 7.1894 8 7.1894s-1.179.5279-1.179 1.179S7.349 9.5474 8 9.5474Z" /><path fillRule="evenodd" d="m6.2205 5.421.6743-.7368h2.2105l.6742.7369h1.1679c.4052 0 .7368.3315.7368.7368v4.421c0 .4053-.3316.7369-.7368.7369H5.0526c-.4052 0-.7368-.3316-.7368-.7369v-4.421c0-.4053.3316-.7368.7368-.7368h1.168ZM6.158 8.3684c0 1.0168.8253 1.8421 1.8421 1.8421 1.0169 0 1.842-.8253 1.842-1.8421S9.017 6.5264 8 6.5264c-1.0168 0-1.8421.8252-1.8421 1.842Z" clipRule="evenodd" /></React.Fragment>
, 
    'VisualSearch'
)

type VisualSearchRef = PathIconRef

type VisualSearchProps = PathIconProps

export {
    VisualSearch
}

export type {
    VisualSearchRef,
    VisualSearchProps
}

export default VisualSearch
