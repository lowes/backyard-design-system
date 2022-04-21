import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import { BDSFunctional } from '../utils/typings/BDSComponentProps'

const OptionGroup: BDSFunctional<OptionGroupProps> = ({ 
    children, 
    className, 
    disabled = false, 
    label = 'Option Group Label', 
    ...props 
}) => (
    <optgroup className={classNames(`select-option-group`, className)} label={label} disabled={disabled} {...props}>
        {React.Children.map(children, (child) => 
            React.isValidElement(child) 
                ? React.cloneElement(child, { disabled }) 
                : child
        )}
    </optgroup>
)

interface OptionGroupProps extends BackyardBaseProps<HTMLOptGroupElement> {
    children?: React.ReactNode
    className?: string
    disabled?: boolean
    label: string
}

OptionGroup.bdsName = 'OptionGroup'

export {
    OptionGroup
}

export type {
    OptionGroupProps
}

export default OptionGroup
