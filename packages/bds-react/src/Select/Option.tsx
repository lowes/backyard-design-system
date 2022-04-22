import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import { BDSFunctional } from '../utils/typings/BDSComponentProps'

const Option: BDSFunctional<OptionProps> = ({ 
    children, 
    className, 
    disabled = false, 
    value, 
    hidden = false, 
    ...props
}) => (
    <option
        className={classNames('select-option', className)}
        value={value}
        disabled={disabled}
        hidden={hidden}
        {...props}
    >
        {children}
    </option>
)

interface OptionProps extends BackyardBaseProps<HTMLOptionElement> {
    children?: React.ReactNode
    className?: string
    disabled?: boolean
    hidden?: boolean
    value?: string | number
    options?: OptionProps[]
}

Option.bdsName = 'Option'

export {
    Option
}

export type {
    OptionProps
}

export default Option
