import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Settings: React.MemoExoticComponent<React.ForwardRefExoticComponent<SettingsProps>> = createPathIcon(
    <path fillRule="evenodd" d="M12.4593 8.588c.024-.192.042-.384.042-.588 0-.204-.018-.396-.042-.588l1.266-.99c.114-.09.144-.252.072-.384l-1.2-2.076c-.072-.132-.234-.18-.366-.132l-1.494.6c-.312-.24-.648-.438-1.014-.588l-.228-1.59c-.018-.144-.144-.252-.294-.252h-2.4c-.15 0-.276.108-.294.252l-.228 1.59c-.366.15-.702.354-1.014.588l-1.494-.6a.2927.2927 0 0 0-.366.132l-1.2 2.076a.2958.2958 0 0 0 .072.384l1.266.99c-.024.192-.042.39-.042.588 0 .198.018.396.042.588l-1.266.99c-.114.09-.144.252-.072.384l1.2 2.076c.072.132.234.18.366.132l1.494-.6c.312.24.648.438 1.014.588l.228 1.59c.018.144.144.252.294.252h2.4c.15 0 .276-.108.294-.252l.228-1.59c.366-.15.702-.354 1.014-.588l1.494.6c.138.054.294 0 .366-.132l1.2-2.076c.072-.132.042-.294-.072-.384l-1.266-.99ZM8.0013 10.1c-1.158 0-2.1-.942-2.1-2.1 0-1.158.942-2.1 2.1-2.1 1.158 0 2.1.942 2.1 2.1 0 1.158-.942 2.1-2.1 2.1Z" clipRule="evenodd" />
, 
    'Settings'
)

type SettingsRef = PathIconRef

type SettingsProps = PathIconProps

export {
    Settings
}

export type {
    SettingsRef,
    SettingsProps
}

export default Settings
