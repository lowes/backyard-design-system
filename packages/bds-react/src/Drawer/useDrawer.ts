import * as React from 'react'

import { ModalContext } from '../Modal/ModalProvider'
import type { ModalContextValues } from '../Modal/ModalProvider'

const useDrawer = () => {
    return React.useContext<DrawerContextValues>(ModalContext)
}

interface DrawerContextValues extends ModalContextValues {
    /**
     * Orientation of the `Drawer`
     */
    orientation?: 'vertical' | 'horizontal'
}

export { useDrawer }

export default useDrawer
