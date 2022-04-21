import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import ModalFooter from '../Modal/ModalFooter'
import type { ModalFooterRef, ModalFooterProps } from '../Modal/ModalFooter'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import useDrawer from './useDrawer'

const DrawerFooterWrapper = styled(ModalFooter)``

/**
 * Backyard React Drawer Footer
 *
 * Component to use as child of `Drawer`
 *
 * Should contain the primary actions of the drawer,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <DrawerFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </DrawerFooter>
 */
const DrawerFooter: BDSForwardRef<DrawerFooterProps> = React.forwardRef<
    DrawerFooterRef,
    DrawerFooterProps
>(function DrawerFooter(
    {
        children,
        className,
        orientation: orientationProp, // = 'horizontal'
        ...props
    },
    ref,
) {
    // Get drawer context
    const { orientation: orientationContext } = useDrawer() || {}

    // Memoize calculated props
    const { orientation } = React.useMemo(
        () => ({
            orientation: orientationProp || orientationContext || 'horizontal',
        }),
        [orientationProp, orientationContext],
    )

    return (
        <DrawerFooterWrapper
            className={classNames('drawer-footer', className)}
            orientation={orientation}
            {...props}
            ref={ref}
        >
            {children}
        </DrawerFooterWrapper>
    )
})

type DrawerFooterRef = ModalFooterRef

interface DrawerFooterProps extends ModalFooterProps {
    /**
     * Orientation of the content
     */
    orientation?: 'vertical' | 'horizontal'
}

DrawerFooter.bdsName = 'DrawerFooter'

export { DrawerFooter }

export type { DrawerFooterProps, DrawerFooterRef }

export default DrawerFooter
