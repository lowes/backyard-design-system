import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import ModalBody from '../Modal/ModalBody'
import type { ModalBodyProps, ModalBodyRef } from '../Modal/ModalBody'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

const DrawerBodyWrapper = styled(ModalBody)``

/**
 * Backyard React Drawer Body
 *
 * Component to use as a child of `Drawer`
 *
 * Contains the body text of the drawer, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `DrawerFooter` component
 *
 * Example:
 *  <DrawerBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </DrawerBody>
 */
const DrawerBody: BDSForwardRef<DrawerBodyProps> = React.forwardRef<DrawerBodyRef, DrawerBodyProps>(
    function DrawerBody({ children, className, ...props }, ref) {
        /**
         * Layout:
         *  <ModalBody>
         *      ...
         *  </ModalBody>
         */
        return (
            <DrawerBodyWrapper
                className={classNames('drawer-body', className)}
                {...props}
                ref={ref}
            >
                {children}
            </DrawerBodyWrapper>
        )
    },
)

type DrawerBodyRef = ModalBodyRef

interface DrawerBodyProps extends ModalBodyProps {
    // Nothing
}

DrawerBody.bdsName = 'DrawerBody'

export { DrawerBody }

export type { DrawerBodyProps, DrawerBodyRef }

export default DrawerBody
