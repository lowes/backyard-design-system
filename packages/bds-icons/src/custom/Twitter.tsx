import React from 'react'
import PathIcon from './components'
import type { PathIconProps, PathIconRef } from './components'

const Twitter: React.ForwardRefExoticComponent<TwitterProps> = React.forwardRef<TwitterRef, TwitterProps>(function Twitter({
    color,
    size,
    className,
    ...props
},
    ref
) {
    return (
        <PathIcon
            className={['icon', 'icon-twitter', className].filter(Boolean).join(' ')}
            color="rgb(85, 172, 238)"
            size={size}
            {...props}
            ref={ref}
        >
            <path d="M12.7665 5.44687C12.7741 5.55425 12.7741 5.66165 12.7741 5.76903C12.7741 9.0443 10.2995 12.8182 5.77666 12.8182C4.38325 12.8182 3.08884 12.4116 2 11.706C2.19798 11.729 2.38831 11.7366 2.59391 11.7366C3.74364 11.7366 4.80203 11.3455 5.64722 10.6781C4.56599 10.6551 3.6599 9.94177 3.34771 8.95994C3.50001 8.98294 3.65228 8.99829 3.81219 8.99829C4.033 8.99829 4.25383 8.96759 4.4594 8.91392C3.3325 8.68379 2.48729 7.68664 2.48729 6.48238V6.45171C2.81469 6.6358 3.19543 6.75086 3.59896 6.76618C2.93652 6.32129 2.50253 5.56192 2.50253 4.70282C2.50253 4.2426 2.62433 3.82073 2.83754 3.45255C4.04821 4.95595 5.86802 5.93776 7.90862 6.04516C7.87055 5.86107 7.8477 5.66933 7.8477 5.47756C7.8477 4.1122 8.94416 3 10.3071 3C11.0152 3 11.6548 3.29915 12.1041 3.78239C12.6599 3.675 13.1929 3.46789 13.665 3.18409C13.4822 3.75939 13.0939 4.24263 12.5838 4.54943C13.0787 4.49576 13.5584 4.35766 14 4.16592C13.665 4.65681 13.2462 5.094 12.7665 5.44687Z" />
        </PathIcon>
    )
})

type TwitterRef = PathIconRef

type TwitterProps = PathIconProps

export {
    Twitter
}

export type {
    TwitterRef,
    TwitterProps
}

export default Twitter
