import * as React from 'react'

import { ModalControllerContext } from '../ModalController/ModalControllerProvider'
import type { ModalControllerContextValues } from '../ModalController/ModalControllerProvider'

const useDrawerController = () => {
    return React.useContext<DrawerControllerContextValues>(ModalControllerContext)
}

interface DrawerControllerContextValues extends ModalControllerContextValues {
    /**
     * Orientation of the `Drawer`
     */
    orientation?: 'vertical' | 'horizontal'
}

export { useDrawerController }

export default useDrawerController
