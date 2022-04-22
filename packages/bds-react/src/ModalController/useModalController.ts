import * as React from 'react'

import { ModalControllerContext } from './ModalControllerProvider'

const useModalController = () => {
    return React.useContext(ModalControllerContext)
}

export { useModalController }

export default useModalController
