import * as React from 'react'

import type { OptionProps } from '../../Select'
import type { ListSelectorMultipleProps } from '../ListSelectorMultiple'

/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for multiselect
 * @param children - children `Option`s for multiselect
 */
 const getOptions = (
    options: ListSelectorMultipleProps['options'],
    children: ListSelectorMultipleProps['children'] = null,
): OptionProps[] =>
    // If options are defined,
    options?.length > 0
        ? // Then use options format
        options
        : // Else, map children props to `options` format
        children
            ? React.Children.map(children,
                // If child is an option group or list option group,
                (child) => ['OptionGroup', 'ListOptionGroup']
                    .includes((child as any).type?.bdsName)
                    // Recursively add option levels
                    ? ({
                        ...child?.props,
                        options: getOptions(
                            [],
                            child.props.children as ListSelectorMultipleProps['children']
                        )
                    })
                    // Else, just add option
                    : ({
                        ...child?.props,
                        label: child?.props?.children as string,
                    })
            )
            : []

export {
    getOptions
}

export default getOptions
