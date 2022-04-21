import * as React from 'react'

import useToggleReducer, { ToggleValue } from './hooks/useToggleReducer'
import type { ToggleAction, ToggleState } from './hooks/useToggleReducer'
import type { ToggleProps, ToggleOptions, ToggleButtonGroupOverrideProps } from './Toggle'
import type { ToggleButtonProps, ToggleButtonRef } from './ToggleButton'

const ToggleContext = React.createContext<ToggleContextValues>(null)

const ToggleConsumer = ToggleContext.Consumer

const defaultUnselectedButton: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps> = {
    variant: 'ghost',
    state: 'unselected'
}

const defaultSelectedButton: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps> = {
    variant: 'ghost',
    state: 'selected'
}

/**
 * `ToggleProvider` Backyard React
 * 
 * @param props - Toggle props
 */
const ToggleProvider = ({
    children,
    defaultValue,
    exclusive: exclusiveProp = false,
    enforceSelected: enforceSelectedProp = false,
    buttonProps = defaultUnselectedButton,
    selectedButtonProps = defaultSelectedButton,
    value,
    onChange,
}: ToggleProviderProps): React.ReactElement<ToggleProviderProps> => {
    // Memoize options for prop changes
    const options: ToggleOptions = React.useMemo(
        () => ({ exclusive: exclusiveProp, enforceSelected: enforceSelectedProp }),
        [exclusiveProp, enforceSelectedProp],
    )

    // Hold Records of each toggle being managed
    const toggles = React.useRef<Record<string, ToggleButtonProps>>({})

    // Use toggle reducer hook to manage toggled state of `ToggleButton`s
    const [toggled, dispatchToggle] = useToggleReducer({
        value,
        defaultValue,
        options,
        toggles,
    })

    /**
     * Handle toggle interaction from `ToggleButton`
     *
     * Handles callbacks for `ToggleButton` reduced toggled state for
     * - onClick
     * - onSelect
     * - onDeselect
     *
     * Handles callback for `Toggle` for
     * - onChange
     *
     * @param event - Mouse event from toggle click
     * @param state - New state from toggle action
     * @param action - Action performed on state
     * @param props - `ToggleButton` props to handle callbacks
     */
    const handleToggle = (
        event: React.MouseEvent,
        state: ToggleState,
        action: ToggleAction,
        { onClick }: ToggleButtonProps,
    ) => {
        // New state will be an array or a single value,
        // not a Set, which would end up confusing users
        let newValue = state?.value

        // If state and toggled are Sets,
        if (state?.value instanceof Set && toggled?.value instanceof Set) {
            // Set is deleved to an array
            newValue = [...state?.value] as ToggleValue
        }

        // For each `ToggleButton` managed by provider...
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Object.entries(toggles.current).forEach(([id, toggle]) => {
            // Destructure callbacks and value from child props
            const { value: buttonValue, onSelect, onDeselect } = toggle

            // Get default type from action
            // Will be calculated below to determin
            let { type } = action

            // If state and toggled are Sets,
            if (state?.value instanceof Set && toggled?.value instanceof Set) {
                // If state has button value,
                if (state?.value.has(buttonValue)) {
                    // If button is not currently toggled,
                    if (!toggled?.value.has(buttonValue)) {
                        // Button was selected.
                        type = 'select'
                    }
                    // Else, button was already toggled
                    // No callbacks
                } else if (toggled?.value.has(buttonValue)) {
                    // Else if toggled has button value,
                    // but state does not,
                    // Button was deselected.
                    type = 'deselect'
                }
            } else if (state?.value === buttonValue) {
                // Else if current state is button value,
                // Button was selected
                type = 'select'
            } else if (toggled?.value === buttonValue) {
                // Else if button was toggled,
                // But is no longer current state value,
                // Button was deselected
                type = 'deselect'
            }

            // Switch on calculated type...
            switch (type) {
                // When selected...
                case 'select':
                    // If onSelect callback is defined for current `ToggleButton`,
                    if (onSelect) {
                        // Trigger onSelect callback
                        onSelect(event, buttonValue)
                    }

                    break

                // When deselected...
                case 'deselect':
                    // If onDeselect callback is defined for current `ToggleButton`,
                    if (onDeselect) {
                        // Trigger onDeselect callback
                        onDeselect(event, buttonValue)
                    }

                    break

                // By default...
                default:
                // Do nothing
            }
        })

        // If onClick for `ToggleButton` defined,
        if (onClick) {
            // Trigger onClick callback
            onClick(event, newValue)
        }

        // If onChange for `Toggle` is defined,
        if (onChange) {
            // Trigger onChange callback
            onChange(event, newValue)
        }
    }

    // Side effect for when the `toggled` state changes...
    React.useEffect(() => {
        // If toggled state has callback function,
        if (typeof toggled?.action?.callback === 'function') {
            // Trigger callback function with new state and action
            toggled.action.callback(toggled, toggled?.action)
        }
    }, [toggled])

    const context = {
        toggles,
        toggled, dispatchToggle,
        buttonProps, selectedButtonProps,
        handleToggle,
        ...options,
    } as ToggleContextValues

    return (
        <ToggleContext.Provider value={context}>
            {children}
        </ToggleContext.Provider>
    )
}

interface ToggleContextValues extends ToggleOptions {
    toggles: React.MutableRefObject<Record<string, ToggleButtonProps>>
    toggled: ToggleState
    dispatchToggle: React.Dispatch<ToggleAction>
    refs: React.MutableRefObject<Record<string, React.RefObject<ToggleButtonRef>>>
    buttonProps: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps>
    selectedButtonProps: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps>
    handleToggle: (
        event: React.MouseEvent,
        state: ToggleState,
        action: ToggleAction,
        { onClick }: ToggleButtonProps
    ) => void
}

interface ToggleProviderProps extends ToggleProps {
    // See `ToggleProps`
}

export {
    ToggleContext,
    ToggleConsumer,
    ToggleProvider,
    defaultSelectedButton,
    defaultUnselectedButton,
}

export type {
    ToggleContextValues,
    ToggleProviderProps,
}

export default ToggleProvider
