import React from 'react'
import PathIcon from './components'
import type { PathIconProps, PathIconRef } from './components'

const Setpay: React.ForwardRefExoticComponent<SetpayProps> = React.forwardRef<SetpayRef, SetpayProps>(
    function Setpay({ color, size, className, ...props }, ref) {
        return (
            <PathIcon
                className={['icon', 'icon-setpay', className].filter(Boolean).join(' ')}
                overrideColor
                size={size}
                {...props}
                ref={ref}
            >
                <path d="M12.1319 2H9.81746V8H12.1326L12.1319 2ZM5.3158 8H3V14H5.3158V8ZM8.7242 14H6.4084V2H8.72387L8.7242 14Z" fill="#FBC600" />
            </PathIcon>
        )
    },
)

type SetpayRef = PathIconRef

type SetpayProps = PathIconProps

export { Setpay }

export type { SetpayRef, SetpayProps }

export default Setpay
