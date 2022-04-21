import React from 'react'
import PathIcon from './components'
import type { PathIconProps, PathIconRef } from './components'

const Facebook: React.ForwardRefExoticComponent<FacebookProps> = React.forwardRef<
    FacebookRef,
    FacebookProps
>(function Facebook({ color, size, className, ...props }, ref) {
    return (
        <PathIcon
            className={['icon', 'icon-facebook', className].filter(Boolean).join(' ')}
            color="rgb(59, 89, 152)"
            size={size}
            {...props}
            ref={ref}
        >
            <path fill="#3B5998" d="M12.714 2H3.286A1.286 1.286 0 002 3.286v9.428A1.286 1.286 0 003.286 14h3.676V9.92H5.275V8h1.687V6.536c0-1.664.991-2.584 2.51-2.584.726 0 1.486.13 1.486.13v1.634h-.837c-.826 0-1.083.512-1.083 1.037V8h1.842l-.294 1.92H9.038V14h3.676A1.286 1.286 0 0014 12.714V3.286A1.286 1.286 0 0012.714 2z"/>
        </PathIcon>
    )
})

type FacebookRef = PathIconRef

type FacebookProps = PathIconProps

export { Facebook }

export type { FacebookRef, FacebookProps }

export default Facebook
