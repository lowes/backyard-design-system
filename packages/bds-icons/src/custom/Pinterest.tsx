import React from 'react'
import PathIcon from './components'
import type { PathIconProps, PathIconRef } from './components'

const Pinterest: React.ForwardRefExoticComponent<PinterestProps> = React.forwardRef<PinterestRef, PinterestProps>(function Pinterest({
    color,
    size,
    className,
    ...props
},
    ref
) {
    return (
        <PathIcon
            className={['icon', 'icon-pinterest', className].filter(Boolean).join(' ')}
            color="rgb(204, 33, 39)"
            size={size}
            {...props}
            ref={ref}
        >
            <path d="M7.90475 2C5.43795 2 3 3.64454 3 6.30608C3 7.99871 3.9521 8.96042 4.52913 8.96042C4.76715 8.96042 4.9042 8.29684 4.9042 8.1093C4.9042 7.8857 4.33438 7.40965 4.33438 6.47919C4.33438 4.54614 5.80581 3.1757 7.71 3.1757C9.34733 3.1757 10.5591 4.10616 10.5591 5.81561C10.5591 7.09229 10.047 9.48696 8.38801 9.48696C7.78935 9.48696 7.27723 9.05419 7.27723 8.43388C7.27723 7.52506 7.91197 6.64509 7.91197 5.70742C7.91197 4.11578 5.65434 4.40429 5.65434 6.32772C5.65434 6.73164 5.70483 7.17884 5.88515 7.5467C5.55336 8.97485 4.87535 11.1026 4.87535 12.5741C4.87535 13.0285 4.94026 13.4757 4.98354 13.9301C5.06529 14.0215 5.02441 14.0118 5.14944 13.9662C6.3612 12.3072 6.31792 11.9826 6.8661 9.81154C7.16183 10.3741 7.92639 10.6771 8.53227 10.6771C11.0856 10.6771 12.2325 8.18864 12.2325 5.94544C12.2325 3.55798 10.1696 2 7.90475 2Z"/>
        </PathIcon>
    )
})

type PinterestRef = PathIconRef

type PinterestProps = PathIconProps

export {
    Pinterest
}

export type {
    PinterestRef,
    PinterestProps
}

export default Pinterest
