import type { ForwardRefExoticComponent, FC } from 'react'

interface BDSForwardRef<P> extends ForwardRefExoticComponent<P> {
    bdsName?: string
}

interface BDSFunctional<P> extends FC<P> {
    bdsName?: string
}

export {
    BDSForwardRef,
    BDSFunctional
}