import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ContactsFilled: React.MemoExoticComponent<React.ForwardRefExoticComponent<ContactsFilledProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.488 2.688C11.456 2.24 11.2 2 10.7094 2H5.4027c-.4907 0-.7467.24-.7786.688h6.8639Zm1.0454 1.4773c-.08-.4853-.3094-.752-.8427-.752h-7.376c-.5333 0-.7627.2667-.8427.752h9.0614ZM12.0427 14c1.1147 0 1.6747-.5547 1.6747-1.6533v-5.664c0-1.0987-.56-1.6534-1.6747-1.6534H3.9574c-1.12 0-1.6747.5494-1.6747 1.6534v5.664c0 1.0986.5547 1.6533 1.6747 1.6533h8.0853Zm-4.0373-3.5467c-.9013-.0106-1.632-.768-1.632-1.7866 0-.9547.7306-1.7334 1.632-1.7334.9013 0 1.6266.7787 1.6266 1.7334 0 1.0186-.7253 1.792-1.6266 1.7866Zm3.3066 2.688H4.6934c.432-.8746 1.4987-1.9466 3.3013-1.9466 1.8027 0 2.8853 1.072 3.3173 1.9466Z" clipRule="evenodd" />
, 
    'ContactsFilled'
)

type ContactsFilledRef = PathIconRef

type ContactsFilledProps = PathIconProps

export {
    ContactsFilled
}

export type {
    ContactsFilledRef,
    ContactsFilledProps
}

export default ContactsFilled
