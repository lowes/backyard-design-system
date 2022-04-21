import type { Hooks } from 'react-table'

import type { DataTableProviderProps } from '../DataTableProvider'

const useScrollbarColumn = <Data extends object = {}>(
    scrollbarWidth: number,
    disableScrollbar: DataTableProviderProps['disableScrollbar'],
) => {
    const addScrollbarColumn = (hooks: Hooks<Data>): void => {
        hooks.visibleColumns.push((columns) => [
            ...columns,
            {
                id: 'scrollbar',
                Filter: () => null,
                width: scrollbarWidth,
                minWidth: scrollbarWidth,
                maxWidth: scrollbarWidth,
            },
        ])
    }

    return !disableScrollbar ? addScrollbarColumn : () => null
}

export { useScrollbarColumn }

export default useScrollbarColumn
