import * as React from 'react'
import styled from 'styled-components'

import type { Hooks } from 'react-table'

import Checkbox from '../../Checkbox'
import type { BackyardTheme } from '../../ThemeProvider'

import type { DataTableProps } from '../DataTable'

const SelectColumnWrapper = styled.div`
    &&& > .cell-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const useSelectColumn = <Data extends object = {}>(
    theme: BackyardTheme,
    enableRowSelection: DataTableProps<Data>['enableRowSelection'],
) => {
    const addSelectColumn = (hooks: Hooks<Data>): void => {
        hooks.visibleColumns.push((columns) => [
            {
                id: 'selection',
                Header: ({ getToggleAllPageRowsSelectedProps }) => {
                    const { indeterminate, checked, ...props } = getToggleAllPageRowsSelectedProps({
                        className: 'row-selection-all',
                    })

                    return (
                        <Checkbox
                            checked={checked || indeterminate}
                            indeterminate={indeterminate}
                            {...props}
                        />
                    )
                },
                Cell: ({ row }) => {
                    const isSubRow = row.id.indexOf('.') > -1

                    return !isSubRow ? (
                        <Checkbox
                            {...row.getToggleRowSelectedProps({
                                className: 'row-selection',
                            })}
                        />
                    ) : null
                },
                Filter: () => null,
                width: theme.sizes.size_56,
                minWidth: theme.sizes.size_56 as any,
                maxWidth: theme.sizes.size_56 as any,
                Wrapper: SelectColumnWrapper,
            },
            ...columns,
        ])
    }

    return enableRowSelection ? addSelectColumn : () => null
}

export { useSelectColumn }

export default useSelectColumn
