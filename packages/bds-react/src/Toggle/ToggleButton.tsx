import * as React from 'react'
import classnames from 'classnames'

import IconButton from '../IconButton'
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent'
import useForwardedRef from '../utils/hooks/useForwardedRef'
import useRandomId from '../utils/hooks/useRandomId'
import type { ButtonProps } from '../Button'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'

import type { ToggleValue } from './hooks/useToggleReducer'
import ToggleButtonBase from './styles/ToggleButtonBase'
import useToggle from './hooks/useToggle'

/**
 * Backyard React Toggle Button
 *
 * Toggle button to be used as a child of `Toggle`
 *
 * Examples:
 *
 * - [Toggle](https://backyard.lowes.com/Components/Toggle)
 *
 * API:
 *
 * - [ToggleButton API](https://backyard.lowes.com/ComponentsAPI/ToggleButton)
 */
const ToggleButton: BDSForwardRef<ToggleButtonProps> = React.forwardRef<
    ToggleButtonRef,
    ToggleButtonProps
>(function ToggleButton(
    {
        id: idProp,
        children,
        className,
        component = IconButton,
        variant = 'secondary',
        state: stateProp,
        shape = 'squared',
        disabled = false,
        ariaLabel = 'toggle button',
        selected: selectedProp = false,
        onSelect,
        onDeselect,
        onClick,
        value: valueProp,
        style: styleProp,
        ...props
    },
    ref,
) {
    // Get toggle provider values
    const { toggles, toggled, dispatchToggle, handleToggle } = useToggle()

    // Hold button inner ref
    const innerRef = useForwardedRef(ref)

    // Generate id for toggle map
    const id = useRandomId(idProp)

    // Default value to id if not defined
    const value = typeof valueProp !== 'undefined' ? valueProp : id

    // Calculate whether or not button is selected
    const selected = React.useMemo(
        () =>
            selectedProp ||
            // Check if toggled value is a Set
            (toggled?.value instanceof Set
                ? // If so, check if it has the value
                  toggled?.value.has(value)
                : // Else, check if it is the value
                  toggled?.value === value),
        [selectedProp, toggled],
    )

    // Contextual props from `ToggleProvider`
    const context = React.useMemo<ToggleButtonProps>(
        () => ({
            selected,
            state: stateProp || (selected ? 'selected' : 'unselected'),
            color: selected ? 'selected' : 'unselected',
            value,
            id,
            onSelect,
            onDeselect,
            // Overwrite onClick handler...
            onClick: (event) => {
                // Persist event through dispatch call
                persistSyntheticEvent(event)

                // Dispatch toggle action to
                // select or deselect button
                dispatchToggle({
                    type: 'toggle',
                    value,
                    // Callback to handle toggle button callbacks
                    callback: (state, action) =>
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        handleToggle(event, state, action, { onClick }),
                })
            },
            // Assign internal toggle id
            'data-toggle-id': id,
            // Set ref to list of refs for `Toggle` to use to
            // calculate the default value when enforcing selected
            // but no default value was provided
            ref: innerRef,
        }),
        [id, selected],
    )

    // Side effect for when id, innerref, or context changes
    React.useEffect(() => {
        // If id and ref defined,
        if (id && innerRef.current) {
            // Update toggles with new/changed context
            toggles.current[id] = context
        }
    }, [innerRef, id, context])

    // Extract `onSelect` and `onDeselect` to remove console error
    const {
        onSelect: onSelectContext,
        onDeselect: onDeselectContext,
        ...contextWithoutTrigger
    } = context

    return (
        <ToggleButtonBase
            as={component}
            className={classnames(
                'toggle-button',
                { selected: context.selected },
                `state--${context.state}`,
                className,
            )}
            variant={variant}
            disabled={disabled}
            color="neutral"
            size="small"
            aria-label={ariaLabel}
            // aria-checked={selected}
            shape={shape}
            style={{
                '--btn-icon': 'var(--bds-color-icon-solid-inverse)',
                ...styleProp,
            }}
            {...props}
            {...contextWithoutTrigger}
        >
            {children}
        </ToggleButtonBase>
    )
})

type ToggleButtonRef = HTMLButtonElement

type ToggleButtonOverrideProps = 'color' | 'onClick' | 'onSelect' | 'onDeselect' | 'value' | 'size'

interface ToggleButtonProps extends Omit<ButtonProps, ToggleButtonOverrideProps> {
    /**
     * Aria label to give to toggle button
     * Defaults to 'toggle button'
     */
    ariaLabel?: string
    /**
     * Component to render as
     */
    component?: React.ElementType
    /**
     * Color of toggle button
     */
    state?: 'unselected' | 'selected'
    /**
     * Value of the toggle button
     */
    value?: ToggleValue
    /**
     * onClick trigger function for when toggle button is clicked
     */
    onClick?: (event: React.MouseEvent, state: ToggleValue) => void
    /**
     * onSelect trigger function for when toggle button is selected
     */
    onSelect?: (event: React.MouseEvent, value: ToggleValue) => void
    /**
     * onDeselect trigger function for when toggle button is deselected
     *
     * Note: will trigger when a different button is selected when `exclusive`
     *  option is enabled, because button will be deselected in place of a new one
     */
    onDeselect?: (event: React.MouseEvent, value: ToggleValue) => void

    size?: 'small'
}

ToggleButton.bdsName = 'ToggleButton'

export { ToggleButton }

export type { ToggleButtonRef, ToggleButtonProps }

export default ToggleButton
