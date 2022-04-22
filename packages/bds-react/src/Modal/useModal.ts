import * as React from 'react'

import { ModalContext } from './ModalProvider'

const useModal = () => {
    return React.useContext(ModalContext)
}

export { useModal }

export default useModal
