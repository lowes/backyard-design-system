import * as React from 'react'
import classNames from 'classnames'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'

import DataTableBaseWrapper from './styles/DataTableBaseWrapper'
import DataTableToolbar from '../DataTableToolbar'
import DataTableContent from '../DataTableContent'
import { useDataTable } from '../hooks'

/**
 * Backyard React Data Table Base
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 */
const DataTableBase = <Data extends object = any>({
    children,
    className,
    height,
    style,
    ...props
}: DataTableBaseProps): React.ReactElement<DataTableBaseProps> => {
    const { showToolbar, shape } = useDataTable<Data>()

    return (
        <DataTableBaseWrapper
            className={classNames('data-table', `shape--${shape}`, className)}
            style={{
                height,
                ...style,
            }}
            {...props}
        >
            {showToolbar && <DataTableToolbar<Data> />}
            <DataTableContent<Data> />
        </DataTableBaseWrapper>
    )
}

type DataTableBaseRef = HTMLDivElement

type DataTableBaseOverrideProps = 'data'

interface DataTableBaseProps
    extends BackyardBaseProps<DataTableBaseRef, DataTableBaseOverrideProps> {}

export { DataTableBase }

export type { DataTableBaseProps, DataTableBaseRef }

export default DataTableBase
