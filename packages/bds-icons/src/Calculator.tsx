import React from 'react'

import createPathIcon from './components/PathIcon/createPathIcon'
import type { PathIconProps, PathIconRef } from './components/PathIcon'

const Calculator: React.MemoExoticComponent<React.ForwardRefExoticComponent<CalculatorProps>> = createPathIcon(
    <path fillRule="evenodd" d="M10.97 2c.12 0 .18 0 .3.06s.18.12.24.18.12.12.18.24.06.18.06.3v10.44c0 .12 0 .18-.06.3s-.12.18-.18.24-.12.12-.24.18c-.06 0-.105.015-.15.03s-.09.03-.15.03H5.03c-.12 0-.18 0-.3-.06-.0917 0-.1483-.07-.1967-.1298A.662.662 0 0 0 4.49 13.76c-.06-.06-.12-.12-.18-.24 0-.06-.015-.105-.03-.15s-.03-.09-.03-.15V2.84c0-.12 0-.18.06-.3s.12-.18.18-.24.12-.12.24-.18.18-.06.3-.06L10.97 2Zm0 4.5V2.78H5.03V6.5h5.94Zm-4.44.72v1.5h-1.5v-1.5h1.5Zm0 3.72v-1.5h-1.5v1.5h1.5Zm0 .72v1.5h-1.5v-1.5h1.5Zm2.16-2.94v-1.5h-1.5v1.5h1.5Zm0 .72v1.5h-1.5v-1.5h1.5Zm0 3.72v-1.5h-1.5v1.5h1.5Zm2.28-5.94v1.5h-1.5v-1.5h1.5Zm0 3.72v-1.5h-1.5v1.5h1.5Zm0 .72v1.5h-1.5v-1.5h1.5Z" clipRule="evenodd" />
, 
    'Calculator'
)

type CalculatorRef = PathIconRef

type CalculatorProps = PathIconProps

export {
    Calculator
}

export type {
    CalculatorRef,
    CalculatorProps
}

export default Calculator
