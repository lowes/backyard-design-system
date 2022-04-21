import * as React from 'react'
import styled from 'styled-components'
import type { Hooks, HeaderProps, CellProps } from 'react-table'

import ChevronDown from '@lowes-tech/bds-icons/ChevronDown'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'

import IconButton from '../../IconButton'
import type { IconButtonProps } from '../../IconButton'
import { BackyardTheme } from '../../ThemeProvider'

import type { DataTableProps } from '../DataTable'

const ExpandColumnWrapper = styled.div`
    &&& > .cell-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const baseExpandButtonProps: IconButtonProps = {
    variant: 'ghost',
    color: 'interactive',
    size: 'extra_small',
    shape: 'rounded',
}

const useExpandColumn = (
    theme: BackyardTheme,
    enableRowExpansion: DataTableProps['enableRowExpansion'],
) => {
    const addExpandColumn = <Data extends object = {}>(hooks: Hooks<Data>): void => {
        hooks.visibleColumns.push((columns) => [
            {
                id: 'expansion',
                Header: ({
                    getToggleAllRowsExpandedProps,
                    isAllRowsExpanded,
                }: HeaderProps<Data>) => {
                    return (
                        <IconButton {...baseExpandButtonProps} {...getToggleAllRowsExpandedProps()}>
                            {isAllRowsExpanded ? <ChevronDown /> : <ChevronRight />}
                        </IconButton>
                    )
                },
                Cell: ({ row }: CellProps<Data>) => {
                    return row.canExpand ? (
                        <IconButton {...baseExpandButtonProps} {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? <ChevronDown /> : <ChevronRight />}
                        </IconButton>
                    ) : null
                },
                Filter: () => null,
                width: theme.sizes.size_56,
                minWidth: theme.sizes.size_56 as any,
                maxWidth: theme.sizes.size_56 as any,
                Wrapper: ExpandColumnWrapper,
            },
            ...columns,
        ])
    }

    return enableRowExpansion ? addExpandColumn : () => null
}

export { useExpandColumn }

export default useExpandColumn
