import * as React from 'react'
import classNames from 'classnames'

import ButtonGroup from '../ButtonGroup'
import type { ButtonGroupProps, ButtonGroupRef } from '../ButtonGroup'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'

import type { ToggleButtonProps } from './ToggleButton'
import type { ToggleState, ToggleValue } from './hooks/useToggleReducer'
import { ToggleProvider, defaultSelectedButton, defaultUnselectedButton } from './ToggleProvider'

const ToggleButtonGroup = ButtonGroup as React.ForwardRefExoticComponent<ToggleButtonGroupProps>

/**
 * Backyard React Toggle
 *
 * Toggle wrapper to manage state of a group of `ToggleButton`s
 *
 * Examples:
 *
 * - [Toggle](https://backyard.lowes.com/Components/Toggle)
 *
 * API:
 *
 * - [Toggle API](https://backyard.lowes.com/ComponentsAPI/Toggle)
 * - inherits [ButtonGroup API](https://backyard.lowes.com/ComponentsAPI/ButtonGroup)
 *
 * - [ToggleButton API](https://backyard.lowes.com/ComponentsAPI/ToggleButton)
 */
const Toggle: BDSForwardRef<ToggleProps> = React.forwardRef(function Toggle(
    {
        children,
        className,
        defaultValue,
        exclusive = false,
        enforceSelected = false,
        buttonProps = defaultUnselectedButton,
        selectedButtonProps = defaultSelectedButton,
        value,
        shape: shapeProp, // = 'rounded',
        onChange,
        ...props
    },
    ref,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'Toggle',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    return (
        <ToggleButtonGroup
            className={classNames('toggle-button-group', className)}
            shape={shape}
            color='neutral'
            {...buttonProps}
            {...props}
            ref={ref}
        >
            <ToggleProvider
                defaultValue={defaultValue}
                exclusive={exclusive}
                enforceSelected={enforceSelected}
                buttonProps={buttonProps}
                selectedButtonProps={selectedButtonProps}
                value={value}
                onChange={onChange}
            >
                {children}
            </ToggleProvider>
        </ToggleButtonGroup>
    )
})

type ToggleOptions = {
    exclusive: ToggleProps['exclusive']
    enforceSelected: ToggleProps['enforceSelected']
}

type ToggleButtonGroupOverrideProps = 'state' | 'variant'

interface ToggleButtonGroupProps extends Omit<ButtonGroupProps, ToggleButtonGroupOverrideProps> {
    variant?: ToggleButtonProps['variant']
}

type ToggleRef = ButtonGroupRef

type ToggleOverrideProps = 'onChange' | 'variant'

interface ToggleProps extends Omit<ButtonGroupProps, ToggleOverrideProps> {
    /**
     * Props to define a unselected toggle button
     */
    buttonProps?: ToggleButtonProps
    /**
     * Props to define a selected toggle button
     */
    selectedButtonProps?: ToggleButtonProps
    /**
     * Default value of the `Toggle`
     *
     * Can be a single `string` or an array of `string`s
     */
    defaultValue?: string | string[]
    /**
     * Controlled value of the `Toggle`
     *
     * Can be a single `string` or an array of `string`s
     */
    value?: string | string[]
    /**
     * Whether or not toggle buttons are exclusively toggled
     *
     * When enabled, `Toggle` values are a single `string`
     * When disabled, `Toggle` values are an array of `string`s
     */
    exclusive?: boolean
    /**
     * Whether or not toggle should enforce at least one toggle
     * to be selected at all times
     *
     * When enabled, defaults `Toggle` value to value of first `ToggleButton` child
     * if `defaultValue` prop is not given
     */
    enforceSelected?: boolean
    /**
     * Shape of the edges of the button group
     */
    shape?: 'rounded' | 'squared'
    /**
     * onChange trigger function for when toggled state changes
     */
    onChange?: (event: React.MouseEvent, state: ToggleValue) => void
    /**
     * Toggle variants
     */
    variant?: 'secondary' | 'ghost'
}

Toggle.bdsName = 'Toggle'

export {
    Toggle
}

export type {
    ToggleProps,
    ToggleRef,
    ToggleOptions,
    ToggleState,
    ToggleValue,
    ToggleButtonGroupOverrideProps
}

export default Toggle
