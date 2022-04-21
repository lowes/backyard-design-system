import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import ModalHeader from '../Modal/ModalHeader'
import type { ModalHeaderRef, ModalHeaderProps } from '../Modal/ModalHeader'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

const DrawerHeaderWrapper = styled(ModalHeader)``

/**
 * Backyard React Drawer Header
 *
 * Component to use as a child of `Drawer`
 *
 * Should contain the text for the title of the drawer
 *
 * Example:
 *  <DrawerHeader
 *      icon={<Settings />}
 *  >
 *      Drawer Header
 *  </DrawerHeader>
 */
const DrawerHeader: BDSForwardRef<DrawerHeaderProps> = React.forwardRef<
    DrawerHeaderRef,
    DrawerHeaderProps
>(function DrawerHeader({ children, className, ...props }, ref) {
    return (
        <DrawerHeaderWrapper
            className={classNames('drawer-header', className)}
            {...props}
            ref={ref}
        >
            {children}
        </DrawerHeaderWrapper>
    )
})

type DrawerHeaderRef = ModalHeaderRef

interface DrawerHeaderProps extends ModalHeaderProps {
    // Nothing
}

DrawerHeader.bdsName = 'DrawerHeader'

export { DrawerHeader }

export type { DrawerHeaderProps, DrawerHeaderRef }

export default DrawerHeader
