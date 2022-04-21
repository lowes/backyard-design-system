import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import ModalController from '../ModalController'
import type { ModalControllerProps, ModalControllerRef } from '../ModalController'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme } from '../ThemeProvider'
import type { DrawerProps } from '../Drawer'

import DrawerControllerBase from './styles/DrawerControllerBase'

// Inherit from `ModalController`
const DrawerControllerWrapper = styled(ModalController)`
    ${DrawerControllerBase}
`

// Maps `DrawerController`'s `anchor` to `Drawer`'s `orientation`
const orientationMap: Record<DrawerControllerProps['anchor'], DrawerProps['orientation']> = {
    top: 'horizontal',
    bottom: 'horizontal',
    left: 'vertical',
    right: 'vertical',
}

// Maps `DraweController`'s `anchor` to CSS Properties for positioning
const positionMap: Record<DrawerControllerProps['anchor'], React.CSSProperties> = {
    top: {
        top: '0',
    },
    bottom: {
        bottom: '0',
    },
    left: {
        left: '0',
    },
    right: {
        right: '0',
    },
}

/**
 * Backyard React Drawer Controller
 *
 * Extends from `DrawerHandler` to offer and cleaner API to work with
 *
 * Controls drawer defined in `drawer` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `DrawerHandler`
 *
 * Example:
 *  <DrawerController
 *      drawer={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */
const DrawerController: BDSForwardRef<DrawerControllerProps> = React.forwardRef<
    DrawerControllerRef,
    DrawerControllerProps
>(function DrawerController(
    {
        className,
        anchor = 'left',
        drawer: drawerProp,
        style: styleProp,
        drawerStyle: drawerStyleProp,
        position: positionProp,
        ...props
    },
    ref,
) {
    // Get Backyard Theme
    const theme = useBackyardTheme({ validate: true, name: 'DrawerController' })

    // Memoize style prop
    const style = React.useMemo<React.CSSProperties>(
        () => ({
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.drawer,
            ...styleProp,
        }),
        [theme.name, styleProp],
    )

    // Memoize modal style
    const drawerStyle = React.useMemo<React.CSSProperties>(
        () => ({
            position: 'fixed',
            zIndex: theme.zIndex.drawer + 1,
            transform: 'none',
            ...drawerProp?.props?.style,
            ...drawerStyleProp,
        }),
        [theme.zIndex],
    )

    // Memoize modal render
    const drawer = React.useMemo(
        () =>
            React.cloneElement(drawerProp, {
                style: drawerStyle,
            }),
        [drawerStyle],
    )

    // Memoize position on page
    const position = React.useMemo(
        () => positionProp || positionMap[anchor],
        [positionProp, anchor],
    )

    // Memoize context props
    const context = React.useMemo(
        () => ({
            orientation: orientationMap[anchor],
        }),
        [anchor],
    )

    /**
     * Layout:
     *  <DrawerHandler>
     *      ...
     *  </DrawerHandler>
     */
    return (
        <DrawerControllerWrapper
            className={classNames('drawer-controller', `anchor--${anchor}`, className)}
            modal={drawer}
            modalStyle={drawerStyle}
            position={position}
            context={context}
            style={style}
            {...props}
            ref={ref}
        />
    )
})

type DrawerControllerRef = ModalControllerRef

type DrawerControllerOverrideProps = 'modal'

interface DrawerControllerProps extends Omit<ModalControllerProps, DrawerControllerOverrideProps> {
    /**
     * Anchor point for the `Drawer`
     *
     * Automatically sets `Drawer`'s `orientation` prop if not specified.
     *
     * @default 'left'
     */
    anchor?: 'left' | 'right' | 'top' | 'bottom'
    /**
     * Drawer component to control
     */
    drawer: React.ReactElement
    /**
     * Drawer style overrides
     */
    drawerStyle?: React.CSSProperties
    /**
     * Position override for `Drawer` placement
     */
    position?: React.CSSProperties
}

DrawerController.bdsName = 'DrawerController'

export { DrawerController, DrawerControllerProps, DrawerControllerRef }

export default DrawerController
