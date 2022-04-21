import * as React from 'react'

import type { Hooks, ColumnInstance, CellProps } from 'react-table'

import type { DataTableProps } from '../DataTable'

function escapeRegExp(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

const HighlightText = ({ text = '', highlight = '' }: { text: String; highlight: string }) => {
    if (!highlight) {
        return <span>{text}</span>
    }

    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)

    return (
        <span>
            {parts
                .filter((part) => part)
                .map((part, i) =>
                    regex.test(part) ? (
                        <b key={i} style={{ textDecoration: 'underline' }}>
                            {part}
                        </b>
                    ) : (
                        <span key={i}>{part}</span>
                    ),
                )}
        </span>
    )
}

const addHighlightCell = <Data extends object = {}>(hooks: Hooks<Data>): void => {
    hooks.visibleColumns.push((columns) => [
        ...columns.map<ColumnInstance<Data>>(({ Cell, ...column }) => {
            return {
                ...column,
                OriginalCell: Cell,
                Cell: ({ cell, state }: CellProps<Data>): ColumnInstance<Data>['Cell'] => {
                    const text = String(cell.value)
                    const filter = state.globalFilter

                    return typeof Cell !== 'undefined' ? (
                        cell.render('OriginalCell')
                    ) : (
                        <HighlightText text={text} highlight={filter} />
                    )
                },
            }
        }),
    ])
}

const useHighlightCell = (disableFuzzyHighlight: DataTableProps['disableFuzzyHighlight']) => {
    return !disableFuzzyHighlight ? addHighlightCell : () => null
}

export { useHighlightCell, addHighlightCell, HighlightText }

export default useHighlightCell
