import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Merge: React.MemoExoticComponent<React.ForwardRefExoticComponent<MergeProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.7827 14c.3794 0 .6323-.2604.6323-.6249 0-.2231-.119-.4463-.3199-.5728l-.5876-.3794c-1.0341-.6843-2.8566-2.4102-2.8566-4.2327V5.4005h1.0563c.5208 0 .6621-.3645.372-.7736l-1.659-2.373c-.238-.3348-.595-.3422-.8405 0L5.9134 4.6195c-.2902.4165-.1563.781.3793.781h1.0564v2.7897c0 1.8225-1.83 3.5409-2.8566 4.2327l-.5877.3794c-.2083.1265-.3198.3571-.3198.5803 0 .3347.2454.6174.6248.6174.1934 0 .3943-.067.5728-.186l.3869-.2603c1.034-.6993 2.559-2.2764 2.8193-3.0649h.0224c.2529.7811 1.7779 2.3656 2.8193 3.0649l.3868.2603c.1786.119.3794.186.5654.186Z" clipRule="evenodd" />
, 
    'Merge'
)

type MergeRef = PathIconRef

type MergeProps = PathIconProps

export {
    Merge
}

export type {
    MergeRef,
    MergeProps
}

export default Merge
