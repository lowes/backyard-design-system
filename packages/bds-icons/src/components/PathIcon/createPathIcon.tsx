import * as React from 'react'

import PathIcon from './PathIcon'
import type { PathIconRef, PathIconProps } from './PathIcon'

const pascalToKebab = (str: string) => {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
        .toLowerCase()
}

const createPathIcon = (
    path: React.ReactElement,
    displayName: string
): React.MemoExoticComponent<React.ForwardRefExoticComponent<PathIconProps>> => React.memo(
    React.forwardRef<PathIconRef, PathIconProps>(({ className, ...props }, ref) => {
        const classes = [`icon-${pascalToKebab(displayName)}`, className].filter(Boolean).join(' ')

        return (
            <PathIcon
                className={classes}
                {...props}
                ref={ref}
            >
                {path}
            </PathIcon>
        )
    })
)

export {
    createPathIcon
}

export default createPathIcon
