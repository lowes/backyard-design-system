import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const ContactsOutlined: React.MemoExoticComponent<React.ForwardRefExoticComponent<ContactsOutlinedProps>> = createPathIcon(
    <path fillRule="evenodd" d="M11.488 2.688C11.456 2.24 11.2 2 10.7094 2H5.296c-.4906 0-.7466.24-.7786.688h6.9706Zm1.0454 1.4773c-.08-.4853-.3094-.752-.8427-.752h-7.376c-.5333 0-.7627.2667-.8427.752h9.0614ZM12.0427 14c1.1147 0 1.6747-.5547 1.6747-1.6533v-5.664c0-1.0987-.56-1.6534-1.6747-1.6534H3.9574c-1.12 0-1.6747.5494-1.6747 1.6534v5.664c0 1.0986.5547 1.6533 1.6747 1.6533h8.0853Zm-7.4186-.8587h-.656c-.5334 0-.8267-.288-.8267-.8426V6.7253c0-.5546.2933-.8373.8266-.8373h8.064c.5227 0 .8267.2827.8267.8373v5.5734c0 .5546-.304.8426-.8267.8426h-.6666c-.432-.9813-1.568-2.0533-3.3707-2.0533-1.8026 0-2.9386 1.072-3.3706 2.0533Zm3.3706-2.7946c.9014.0053 1.6267-.816 1.6267-1.7867 0-.9547-.7253-1.7333-1.6267-1.7333-.9013 0-1.6266.7786-1.6266 1.7333 0 .9707.7253 1.776 1.6266 1.7867Z" clipRule="evenodd" />
, 
    'ContactsOutlined'
)

type ContactsOutlinedRef = PathIconRef

type ContactsOutlinedProps = PathIconProps

export {
    ContactsOutlined
}

export type {
    ContactsOutlinedRef,
    ContactsOutlinedProps
}

export default ContactsOutlined
