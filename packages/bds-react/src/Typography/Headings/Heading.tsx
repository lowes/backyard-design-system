import * as React from 'react'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps'

import { H1, H2, H3, H4, H5, H6 } from './styles'

const variants = {
    1: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => <H1 {...props} ref={ref} />),
    2: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => <H2 {...props} ref={ref} />),
    3: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => <H3 {...props} ref={ref} />),
    4: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => <H4 {...props} ref={ref} />),
    5: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => <H5 {...props} ref={ref} />),
    6: React.forwardRef<HeadingRef, HeadingProps>((props, ref) => <H6 {...props} ref={ref} />),
}

/**
 * Backyard React Heading
 *
 * Internal Component for Typography
 */
const Heading: BDSForwardRef<HeadingProps> = React.forwardRef<
    HeadingRef,
    HeadingProps
>(function Heading({ children, level = 1, regular, ...props }, ref) {
    const Component = variants[level] || variants[1]

    return (
        <Component regular={regular} {...props} ref={ref}>
            {children}
        </Component>
    )
})

type HeadingRef = HTMLHeadingElement

interface HeadingProps extends BackyardBaseProps<HeadingRef> {
    /**
     * Heading level
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6
    /**
     * Change the font-weight to regular (400)
     *  from the default bold (700) when true
     */
    regular?: boolean
}

Heading.bdsName = 'Heading'

export { Heading }

export type { HeadingProps, HeadingRef }

export default Heading
