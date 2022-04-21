import * as React from 'react'

import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, getShape } from '../ThemeProvider'
import type { OptionProps } from '../Select'
import type { ListOptionProps } from '../ListOption'

import ListSelectorMultiple from './ListSelectorMultiple'
import type { ListSelectorMultipleProps, ListSelectorMultipleRef } from './ListSelectorMultiple'
import ListSelectorSingle from './ListSelectorSingle'
import type { ListSelectorSingleProps, ListSelectorSingleRef } from './ListSelectorSingle'

/**
 * TypeScript guard for prop types
 */
const GuardMultipleProps = (
    props: ListSelectorProps,
    multiple: ListSelectorProps['multiple'],
): props is ListSelectorMultipleProps => multiple

/**
 * Backyard React List Selector (List)
 *
 * `List` provides a method for selecting a single or multiple option out of a list of options.
 *
 * It functions similarly to a `Select` or `Multiselect` but offers a different, more customized presentation to the user.
 *
 * For a non-selected list of options for a user to trigger actions from, use `Menu`.
 *
 * Example:
 * ```
 *  <List>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New York
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New Jersey
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Charlotte
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Atlanta
 *      </ListOption>
 *  </List>
 * ```
 */
const ListSelector: BDSForwardRef<ListSelectorProps> = React.forwardRef<
    ListSelectorRef,
    ListSelectorProps
>(function ListSelector(
    {
        shape: shapeProp, // = 'rounded',
        multiple = false,
        children,
        options,
        ...props
    },
    ref: React.Ref<ListSelectorRef>,
) {
    // Get Backyard Theme Context
    const { shape: shapeContext } = useBackyardTheme({
        validate: true,
        name: 'ListSelector',
    }).context

    // Calculate shape
    const shape = getShape(shapeProp, shapeContext)

    // Calculate size of the options
    const size = React.useMemo(
        () => children ? React.Children.count(children) : options?.length, 
        [options, children]
    )

    return GuardMultipleProps(props, multiple) ? (
        <ListSelectorMultiple
            key={`multiple-${size}`} // re-render when size changes
            shape={shape}
            options={options}
            {...(props as ListSelectorMultipleProps)}
            ref={ref as React.Ref<ListSelectorMultipleRef>}
        >
            {children}
        </ListSelectorMultiple>
    ) : (
        <ListSelectorSingle
            key={`single-${size}`} // re-render when size changes
            shape={shape}
            options={options}
            {...(props as ListSelectorSingleProps)}
            ref={ref as React.Ref<ListSelectorSingleRef>}
        >
            {children}
        </ListSelectorSingle>
    )
})

type ListSelectorRef = ListSelectorMultipleRef & ListSelectorSingleRef

type ListSelectorExtend = ListSelectorSingleProps | ListSelectorMultipleProps

type ListSelectorOverrideProps = 'value' | 'defaultValue' | 'onChange'

type ListSelectorValue = string | number

interface ListSelectorProps extends Omit<ListSelectorExtend, ListSelectorOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[]
    /**
     * Whether or not list selector is multiple selection or single selection
     */
    multiple?: boolean
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: ListSelectorMultipleProps['onChange'] | ListSelectorSingleProps['onChange']
    /**
     * List item to render
     */
    renderItem?: (
        props: ListOptionProps,
        ref?: React.Ref<any>,
    ) => React.ReactElement
    /**
     * Default value of the list selector
     */
    defaultValue?: ListSelectorValue | ListSelectorValue[] 
    /**
     * Value of the list selector
     */
    value?: ListSelectorValue | ListSelectorValue[]
    /**
     * Shape of the first/last list item
     */
    shape?: 'rounded' | 'squared'
}

// Rename `ListSelector` to `List` for backwards compatibility
const List = ListSelector

export { ListSelector, List }

export type { ListSelectorProps, ListSelectorRef }

export default ListSelector
