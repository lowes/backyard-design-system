import * as React from 'react'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import { CaptionRegular } from './styles'

/**
 * Backyard React Caption
 *
 * Internal Component for Typography
 */
const Caption: BDSForwardRef<CaptionProps> = React.forwardRef<
    CaptionRef,
    CaptionProps
>(function Caption({ children, ...props }, ref) {
    return (
        <CaptionRegular {...props} ref={ref}>
            {children}
        </CaptionRegular>
    )
})

type CaptionRef = HTMLSpanElement

interface CaptionProps extends BackyardBaseProps<CaptionRef> {}

Caption.bdsName = 'Caption'

export { Caption }

export type { CaptionProps, CaptionRef }

export default Caption
