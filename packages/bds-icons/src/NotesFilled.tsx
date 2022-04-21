import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const NotesFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<NotesFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.972 14c1.1586 0 1.7351-.5877 1.7351-1.7519v-5.082H8.6548c-.7164 0-1.0578-.3415-1.0578-1.0579V2H5.028c-1.153 0-1.735.5933-1.735 1.7575v8.4906C3.293 13.4179 3.8693 14 5.028 14h5.944Zm1.6679-7.6007c-.0336-.2295-.1959-.4534-.4645-.7277l-3.084-3.1399c-.263-.2686-.4925-.431-.7276-.4701V6.097c0 .2015.1007.3022.3078.3022H12.64Zm-2.4795 3.1902H5.8452c-.2295 0-.3974-.1623-.3974-.3805 0-.2183.1679-.3806.3974-.3806h4.3152c.2239 0 .3974.1623.3974.3806 0 .2182-.1735.3805-.3974.3805Zm0 2.1325H5.8452c-.2295 0-.3974-.1623-.3974-.3806s.1679-.3806.3974-.3806h4.3152c.2239 0 .3974.1623.3974.3806s-.1735.3806-.3974.3806Z" clipRule="evenodd" />
, 
    'NotesFilled'
)

type NotesFilledRef = PathIconRef

type NotesFilledProps = PathIconProps

export {
    NotesFilled
}

export type {
    NotesFilledRef,
    NotesFilledProps
}

export default NotesFilled
