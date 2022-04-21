import * as React from 'react'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import { FootnoteRegular } from './styles'

/**
 * Backyard React Footnote
 *
 * Internal Component for Typography
 */
const Footnote: BDSForwardRef<FootnoteProps> = React.forwardRef<
    FootnoteRef,
    FootnoteProps
>(function Footnote({ children, ...props }, ref) {
    return (
        <FootnoteRegular {...props} ref={ref}>
            {children}
        </FootnoteRegular>
    )
})

type FootnoteRef = HTMLSpanElement

interface FootnoteProps extends BackyardBaseProps<FootnoteRef> {}

Footnote.bdsName = 'Footnote'

export { Footnote }

export type { FootnoteProps, FootnoteRef }

export default Footnote
