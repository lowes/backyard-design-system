import type { BackyardToken } from '../../utils/typings/BackyardProps'

import type { ParsableDate } from './types'

interface BasePickerProps {
    /**
     * Picker value
     */
    value?: ParsableDate
    /**
     * onChange callback
     */
    onChange?: (date: Date | null) => void
    /**
     * Disable picker and text field.
     */
    disabled?: boolean
    /**
     * Make picker read only.
     */
    readOnly?: boolean
    /**
     * On open callback.
     */
    onOpen?: () => void
    /**
     * On close callback.
     */
    onClose?: () => void
    /**
     * Controlled picker open state.
     */
    open?: boolean
    /**
     * className applied to the root component.
     */
    className?: string
    /**
     * Shadow to apply to picker base
     */
    shadow?: string | keyof BackyardToken['shadows']
}

export type {
    BasePickerProps
}

export default BasePickerProps
