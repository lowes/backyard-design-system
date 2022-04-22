import * as React from 'react'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import { ParagraphRegular } from './styles'

/**
 * Backyard React Paragraph
 *
 * Internal Component for Typography
 */
const Paragraph: BDSForwardRef<ParagraphProps> = React.forwardRef<
    ParagraphRef,
    ParagraphProps
>(function Paragraph({ children, ...props }, ref) {
    return (
        <ParagraphRegular {...props} ref={ref}>
            {children}
        </ParagraphRegular>
    )
})

type ParagraphRef = HTMLParagraphElement

interface ParagraphProps extends BackyardBaseProps<ParagraphRef> {
    /** Nothin */
}

Paragraph.bdsName = 'Paragraph'

export { Paragraph }

export type { ParagraphRef, ParagraphProps }

export default Paragraph
