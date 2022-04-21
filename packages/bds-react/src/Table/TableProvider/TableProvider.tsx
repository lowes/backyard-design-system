import * as React from 'react'

import { useBackyardTheme, getShape } from '../../ThemeProvider'

import type { TableProps } from '../Table'

/**
 * Table Context
 */
const TableContext: React.Context<TableContextValues> = React.createContext(null)

/**
 * Table Consumer
 */
const TableConsumer: React.Consumer<TableContextValues> = TableContext.Consumer

/**
 * Backyard React Table Provider
 *
 * Provides values to children and handles state management of the `Table`.
 */
const TableProvider = ({
    children,
    shape: shapeProp, // = 'rounded',
    ...override
}: TableProviderProps): React.ReactElement<TableProviderProps> => {
    const { shape: shapeContext } = useBackyardTheme({ validate: true, name: 'Table' }).context

    const shape = getShape(shapeProp, shapeContext)

    const context = React.useMemo(
        () => ({
            shape
        }),
        [shape]
    )

    return (
        <TableContext.Provider
            value={{
                ...context,
                ...override,
            }}
        >
            {children}
        </TableContext.Provider>
    )
}

/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(TableContext)`
 */
interface TableContextValues {
    /**
     * Shape of the table
     */
    shape?: TableProps['shape']
}

interface TableProviderProps {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode
    /**
     * Shape of the table edges
     */
    shape?: TableProps['shape']
}

export { TableProvider, TableContext, TableConsumer }

export type { TableContextValues, TableProviderProps }

export default TableProvider
