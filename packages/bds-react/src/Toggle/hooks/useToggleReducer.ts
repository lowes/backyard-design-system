import * as React from 'react'

import type { ToggleOptions } from '../Toggle'
import type { ToggleButtonProps } from '../ToggleButton'

/**
 * Initialize reducer to set data type depending on options and default value
 *
 * @param initValue - value to initialize reducer with
 * @param options - options from `Toggle`
 */
function initToggleReducer(initValue: ToggleValue, { exclusive }: ToggleOptions): ToggleState {
    // If toggle is exclusive,
    if (exclusive) {
        // Initialize non-iterator
        return typeof initValue !== 'undefined' ? { value: initValue } : null
    }

    // If initial value is an array,
    if (Array.isArray(initValue)) {
        // Initialize Set iterator
        return { value: new Set(initValue) }
    }

    // If initial value is a Set,
    if (initValue instanceof Set) {
        // No change needed
        return { value: initValue }
    }

    // Initialize Set with initial value
    return { value: new Set([initValue]) }
}

/**
 * Reducer function to handle updates to state via action
 *
 * @param state - current state of the reducer
 * @param action - action to perform on state
 * @param options - toggle options
 */
function toggleReducer(
    value: ToggleValue,
    action: ToggleAction,
    options: ToggleOptions,
): ToggleValue {
    // Get enforceSelected from options
    const { enforceSelected } = options

    // Switch on action type...
    switch (action.type) {
        // When 'select' action...
        case 'select':
            // If state is a Set,
            if (value instanceof Set) {
                // Create new instance of Set to tell React to re-render
                const newValue = new Set<ToggleValue>([...value].filter(Boolean))

                // If action value is defined and not null,
                if (typeof action.value !== 'undefined' && action.value !== null) {
                    // Add value to Set
                    newValue.add(action.value)
                }

                // Return new Set
                return newValue
            }

            // Else, state is a single value,
            // Return new value
            return action.value

        // When 'deselect' action...
        case 'deselect':
            // If state is a Set,
            if (value instanceof Set) {
                // Create new instance of Set to tell React to re-render
                const newValue = new Set([...value].filter(Boolean))

                // If more than one toggle or not enforcing selected,
                if (newValue.size > 1 || !enforceSelected) {
                    // Delete value from Set
                    newValue.delete(action.value)
                }

                // Retur new Set
                return newValue
            }

            // Else, state is a single value.

            // If enforcing selected,
            if (enforceSelected) {
                // Return last state value
                return value
            }

            // Else, not enforcing selected,
            // Return no value
            return null

        // When 'toggle' action...
        case 'toggle':
            // If state is a Set,
            if (value instanceof Set) {
                // If Set has action value,
                return value.has(action.value)
                    ? // Return deselected state
                      toggleReducer(value, { ...action, type: 'deselect' }, options)
                    : // Return selected state
                      toggleReducer(value, { ...action, type: 'select' }, options)
            }

            // Else, state is a single value,
            // If state is equivalent to action value,
            return value === action.value
                ? // Return deselected state
                  toggleReducer(value, { ...action, type: 'deselect' }, options)
                : // Return selected state
                  toggleReducer(value, { ...action, type: 'select' }, options)

        // When 'set' or 'reset' action...
        case 'set':
        case 'reset':
            // Re-initialzie reducer with new action value
            return initToggleReducer(action.value, options)?.value

        // By default,
        default:
            // No changes to state
            return value
    }
}

/**
 * Toggle reducer helper to call `callback` if defined on new toggled state value
 *
 * @param state - current state value
 * @param action - action to perform on state
 * @param options - options from toggle
 */
function toggleReducerHelper(
    state: ToggleState,
    action: ToggleAction,
    options: ToggleOptions,
): ToggleState {
    // Reduce new state from action
    const newState = toggleReducer(state?.value, action, options)

    // Return new state from reducer
    return { value: newState, action }
}

/**
 * Toggle reducer hook to manage the `Toggle` state
 *
 * @param arg.value - controlled value of the toggle component
 * @param arg.defaultValue - default value of the toggle component
 * @param arg.options - options from toggle component
 * @param arg.refs - list of refs of toggle buttons from toggle component
 */
const useToggleReducer = ({
    value,
    defaultValue,
    options,
    toggles,
}: ToggleReducerArgs): [ToggleState, React.Dispatch<ToggleAction>] => {
    // Get enforce selected option
    const { enforceSelected } = options

    // Use react reducer to manage toggle state
    const [toggle, dispatchToggle]: [ToggleState, React.Dispatch<ToggleAction>] = React.useReducer(
        // Helper to include options with state/action
        (state, action) => toggleReducerHelper(state, action, options),
        // Default value to initialize with
        defaultValue,
        // Initialize reducer with options
        (initValue) => initToggleReducer(initValue, options),
    )

    // Side effect to reset toggle reducer when defaultValue or options change...
    React.useEffect(() => {
        // Calculate first toggle entry in provider
        const firstToggle = Object.entries(toggles.current)[0]?.[1]

        // If toggle buttons defined,
        if (firstToggle) {
            // If enforcing selected,
            if (enforceSelected) {
                // Reset reducer with default value if defined,
                // or first toggle button value
                // or zero if undefined
                dispatchToggle({
                    type: 'reset',
                    value: defaultValue || firstToggle.value,
                })
            } else {
                // Else, not enforcing a selected value,
                // Reset reducer to default value if defined, else null
                dispatchToggle({
                    type: 'reset',
                    value: defaultValue || null,
                })
            }
        }
    }, [options, defaultValue, toggles])

    // Side effect to set a new toggle reducer value when `Toggle`'s value changes...
    React.useEffect(() => {
        // If value is not defined,
        if (typeof value !== 'undefined') {
            // Dispatch set action with value
            dispatchToggle({
                type: 'set',
                value,
            })
        }
    }, [value])

    // Return reducer state and dispatch
    return [toggle, dispatchToggle]
}

type ToggleReducerArgs = {
    value: ToggleValue
    defaultValue: ToggleValue
    options: ToggleOptions
    toggles: React.MutableRefObject<Record<string, ToggleButtonProps>>
}

type ToggleValueTypes = string | number

type ToggleValue = ToggleValueTypes | ToggleValueTypes[] | Set<ToggleValue>

type ToggleState = {
    value: ToggleValue
    action?: ToggleAction
}

type ToggleCallback = (state: ToggleState, action: ToggleAction) => void

type ToggleAction =
    | { type: 'reset'; value: ToggleValue; callback?: ToggleCallback }
    | { type: 'set'; value: ToggleValue; callback?: ToggleCallback }
    | { type: 'select'; value: ToggleValue; callback?: ToggleCallback }
    | { type: 'deselect'; value: ToggleValue; callback?: ToggleCallback }
    | { type: 'toggle'; value: ToggleValue; callback?: ToggleCallback }

export {
    useToggleReducer,
    toggleReducer,
    toggleReducerHelper,
    initToggleReducer,
}

export type {
    ToggleState,
    ToggleAction,
    ToggleValue,
    ToggleCallback,
}

export default useToggleReducer
