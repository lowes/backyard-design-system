import * as React from 'react'

import { FormControlContext } from '../FormControlProvider'
import type {
    FormControlContextValues,
    FormControlProviderProps,
    FormContextProps,
} from '../FormControlProvider'
import useRandomId from '../../utils/hooks/useRandomId'

/**
 * Hook to add
 * @param props - context props to initialize input with
 */
function useFormControl(
    props: UseFormControlProps = {},
): (FormControlContextValues & { id?: string }) | FormContextProps {
    // Get contexts from `FormControl` if available
    const formControlContext = React.useContext<FormControlContextValues>(FormControlContext)

    // If there is no `FormControl` parent,
    if (!formControlContext) {
        // Return props as given, no synchornization needed
        return props as FormContextProps
    }

    // Else, get all props from `FormControl`
    const {
        context,
        add,
        remove,
        update,
        disabled: disabledContext,
        state: stateContext,
        indent: indentContext,
        ...rest
    } = formControlContext

    // State to hold the id of the input
    const id = React.useCallback(useRandomId(props?.id), [])

    // Side effect for when the `id` is updated...
    React.useEffect(() => {
        // If input is being tracked and `id` is defined,
        if (!props?.noContext && id) {
            // Add input to `FormControl` contexts
            add(id, props)
        }

        // When dismounting...
        return () => {
            // If input is in contexts,
            if (context?.[id]) {
                // Remove input from `FormControl`
                remove(id)
            }
        }
    }, [id])

    // Side effect for when component's `disabled` prop changes...
    React.useEffect(() => {
        // If input is being tracked and `id` is defined,
        if (!props?.noContext && id) {
            // Update input context with `disabled` value
            update(id, {
                disabled: props.disabled,
            })
        }
    }, [props.disabled])
    // Side effect for when the component's `state` prop changes...
    React.useEffect(() => {
        // If input is being tracked and `id` is defined,
        if (!props?.noContext && id) {
            // Update input context with `state` value
            update(id, {
                state: props.state,
            })
        }
    }, [props.state])

    // Map contexts to a list of control inputs
    const controls = Object.keys(context)
        .map((key) => ({
            ...context[key],
        }))
        .filter((control) => Object.keys(control).length !== 0) as FormContextProps[]

    // Calculate what helper text should appear as from form control context
    const disabled = disabledContext || controls.some((control) => control.disabled === true)
    let indent =
        indentContext ||
        (controls.length > 0
            ? controls.filter((control) => typeof control.indent === 'string')[0]?.indent
            : 'size_16')
    const state =
        stateContext ||
        (() => {
            // First priority state, error
            if (controls.some((control) => control.state === 'error')) {
                return 'error'
            }

            // Second priority state, error
            if (controls.some((control) => control.state === 'warning')) {
                return 'warning'
            }

            // Third priority state, error
            if (controls.some((control) => control.state === 'info')) {
                return 'info'
            }

            // Finally, no states, default
            return 'default'
        })()

    // If there are multiple controls, don't indent
    if (controls.length > 1) indent = false

    // Provide contexts and `FormControl` values
    return {
        context,
        add,
        remove,
        update,
        ...rest,
        disabled,
        indent,
        state,
        id,
    }
}

type UseFormControlProps = {
    /**
     * If true, component will not be added
     * as an input to the `FormControl` contexts
     *
     * Use this to subscribe to any changes to form inputs
     * changed managed by the `FormControl`, like `FormHelperText`
     */
    noContext?: boolean
    /**
     * Whether or not input is disabled
     */
    disabled?: FormControlProviderProps['disabled']
    /**
     * Visual state of the component
     */
    state?: FormControlProviderProps['state']
    /**
     * Whether or not the `FormHelperText` should be indented
     */
    indent?: FormControlProviderProps['indent']
    /**
     * ID of the input for tracking purposes
     * This will be automatically generated if not defined
     */
    id?: string
}

export { useFormControl }

export default useFormControl
