import * as React from 'react'

import type { BackyardToken } from '../utils/typings/BackyardProps'

import { clean } from './utils'

/**
 * Form Control Context
 */
const FormControlContext: React.Context<FormControlContextValues> = React.createContext(null)

/**
 * Form Control Consumer
 */
const FormControlConsumer: React.Consumer<FormControlContextValues> = FormControlContext.Consumer

const mapChildren = (children: React.ReactNode, callback: (child: React.ReactNode) => string[]) =>
    React.Children.map(children, (child) =>
        React.isValidElement(child) && child?.props?.children
            ? [callback(child), mapChildren(child.props.children, callback)]
            : callback(child),
    )

const indentLookup = (bdsName: string): keyof BackyardToken['sizes'] | boolean =>
    ({
        Select: 'size_16',
        TextInput: 'size_16',
        FormControlLabel: 'size_36',
    }[bdsName] || false) as keyof BackyardToken['sizes'] | false

const initialIndent = (children: React.ReactNode): keyof BackyardToken['sizes'] => {
    const indents = mapChildren(children, (child) =>
        React.isValidElement(child) ? (child as any).type?.bdsName : false,
    )
        .map((child) => indentLookup(child))
        .filter((indent) => typeof indent === 'string')
        .sort((a, b) =>
            b.localeCompare(a, undefined, {
                numeric: true,
                sensitivity: 'base',
            }),
        )

    if (indents.length > 1) {
        return 'size_0'
    }

    return indents[0]
}

/**
 * @internal
 * Backyard React Form Control Provider
 *
 * Use the hook `useFormControl` instead of this provider.
 *
 * Provides values to children and handles state management of the `FormControl` and its children.
 */
const FormControlProvider = ({
    children,
    disabled,
    state,
    indent: indentProp,
    ...override
}: FormControlProviderProps): React.ReactElement<FormControlProviderProps> => {
    // Memoize props to react to changes
    const props: FormContextProps = React.useMemo(
        () => ({
            disabled,
            state,
            indent: indentProp || initialIndent(children),
        }),
        [disabled, state, indentProp],
    )

    // Context is a record of `id => FormContextProps`
    // It will track all controlled form inputsF
    // and can be used to synchronize and share data
    // between the entire form
    const [context, setContext] = React.useState<FormContexts>({})

    /**
     * Merge new values into old values.
     * Props provided to `FormControl` have the highest priority.
     *
     * @param oldValues - old context props to merge into
     * @param newValues - new context props to merge
     */
    const merge = (oldValues: FormContextProps, newValues: FormContextProps) => ({
        ...clean(oldValues),
        ...clean(newValues),
        ...clean(props),
    })

    /**
     * Updates single input contexts
     *
     * @param id - id of form input to update
     * @param newContext - new context to update with
     */
    const update = (id: string, newContext: FormContextProps) => {
        setContext((oldContext) => ({
            ...oldContext,
            [id]: merge(oldContext?.[id] || {}, newContext),
        }))
    }

    /**
     * Adds single input to contexts
     *
     * @param id - id of form input to add
     * @param newContext - context to initialize with
     */
    const add = (id: string, newContext: FormContextProps) => {
        setContext((oldContext) => ({
            ...oldContext,
            [id]: merge(oldContext?.[id] || {}, newContext),
        }))
    }

    /**
     * Removes context by id from contexts
     *
     * @param id - id to context to remove
     */
    const remove = (id: string) => {
        setContext((oldContext) => {
            const { [id]: removedContext, ...restContext } = oldContext

            return restContext
        })
    }

    return (
        <FormControlContext.Provider
            value={{
                ...props,
                context,
                setContext,
                update,
                add,
                remove,
                ...override,
            }}
        >
            {children}
        </FormControlContext.Provider>
    )
}

interface FormContexts {
    [id: string]: FormContextProps
}

interface FormContextProps {
    /**
     * Controls the disabled state of the child form elements
     */
    disabled?: boolean
    /**
     * Controls the possible states to provide to form elements
     */
    state?: 'default' | 'error' | 'warning' | 'info' | 'success'
    /**
     * Controls the indention of the helper text
     */
    indent?: keyof BackyardToken['sizes'] | boolean
}

/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(FormControlContext)`
 */
interface FormControlContextValues extends FormContextProps {
    /**
     * Context map
     */
    context: FormContexts
    /**
     * Sets a new form control context from a child
     */
    setContext: React.Dispatch<React.SetStateAction<FormContexts>>
    /**
     * Updates context with new values
     */
    update: (id: string, newContext: Partial<FormControlContextValues>) => void
    add: (id: string, newContext: Partial<FormControlContextValues>) => void
    remove: (id: string) => void
}

interface FormControlProviderProps {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode
    /**
     * Controls the disabled state of the child form elements
     */
    disabled?: boolean
    /**
     * Controls the indention of the helper text
     */
    indent?: keyof BackyardToken['sizes'] | boolean
    /**
     * Controls the possible states to provide to form elements
     */
    state?: 'default' | 'error' | 'warning' | 'info' | 'success'
}

export { FormControlProvider, FormControlContext, FormControlConsumer }

export type { FormControlContextValues, FormControlProviderProps, FormContextProps }

export default FormControlProvider
