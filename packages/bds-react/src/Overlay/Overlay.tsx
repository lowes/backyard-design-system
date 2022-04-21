import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

import OverlayBase from './styles/OverlayBase'

/**
 * Backyard React Overlay
 *
 * Simple fixed overlay using the overlay design token and position across entire screen
 */
const Overlay: BDSForwardRef<OverlayProps> = React.forwardRef<OverlayRef, OverlayProps>(
    function Overlay({ className, invisible = false, open, ...props }, ref) {
        // Get Backyard Theme Context
        const theme = useBackyardTheme()

        validateBackyardTheme(theme, 'Overlay')

        // Render if open, else we use invisible CSS
        return open ? (
            <OverlayBase
                className={classNames(
                    'overlay',
                    {
                        invisible,
                    },
                    className,
                )}
                aria-hidden
                ref={ref}
                {...props}
            />
        ) : null
    },
)

type OverlayRef = HTMLDivElement

interface OverlayProps extends BackyardBaseProps<OverlayRef> {
    /**
     * Whether or not overlay is invisible
     */
    invisible?: boolean
    /**
     * Whether or not overlay is open
     */
    open: boolean
}

Overlay.bdsName = 'Overlay'

export { Overlay }

export type { OverlayProps, OverlayRef }

export default Overlay
