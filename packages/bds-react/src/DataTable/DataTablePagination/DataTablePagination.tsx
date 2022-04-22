import * as React from 'react'
import classNames from 'classnames'

import Pagination, { PaginationProps } from '../../Pagination'
import { Dropdown } from '../../Dropdown'
import { SelectOptionInfo } from '../../Select'

import DataTablePaginationWrapper from './style/DataTablePaginationWrapper'
import { useDataTable } from '../hooks'
import BackyardBaseProps from '../../utils/typings/BackyardProps'

const DataTablePagination = <Data extends object = any>({
    rowsPerPageOptions = [10, 25, 50],
    size = 'medium',
    onChange,
    paginationProps,
}: DataTablePaginationProps): React.ReactElement<DataTablePaginationProps> => {
    // pull values from DataTableContext
    const {
        // canNextPage,
        // canPreviousPage,
        gotoPage,
        pageOptions,
        setPageSize,
        state: { pageIndex, pageSize },
        // options,
        // rows,
        shape,
    } = useDataTable<Data>()

    // @todo remove if no longer needed
    // Extract row count and page count from options
    // Will react to changes from external sources (such as a server)
    // const { manualPagination, rowCount, pageCount } = options

    // @todo remove if no longer needed
    // Calculate the total number of rows
    // const rowTotal = manualPagination ? rowCount || pageCount * pageSize : rows.length

    // @todo remove if no longer needed
    // Calculate the minimum and maximum row counts for a given page
    // const rowMin = pageIndex * pageSize + 1
    // const rowMax = Math.min((pageIndex + 1) * pageSize, rowTotal)

    // set the initial page size
    React.useEffect(() => {
        if (!pageSize) {
            setPageSize(Number(rowsPerPageOptions[0]))
        }
    }, [])

    /**
     * Event trigger for the `onChange` event.
     *
     * Invokes the `onChange` prop function if available.
     *
     * Invokes the `gotoPage` prop function if available.
     *
     * @param event - the React onChange event
     * @param value - the new page value
     */
    const onPageChangeHandler = (event: React.ChangeEvent, newPage: number) => {
        // correct the page value for zero based datasets in the data table library
        const pageValue = newPage - 1

        gotoPage(pageValue)

        if (onChange) {
            onChange(event, pageValue)
        }
    }

    /**
     * Event trigger for the `onChange` event.
     *
     * Invokes the `setItemsPerPage` function.
     *
     * @param event -
     * @param option -
     */
    const onSelectChangeHandler = (event: React.ChangeEvent, option: SelectOptionInfo) => {
        setPageSize(Number(option.value))
    }

    return (
        <DataTablePaginationWrapper className={classNames('table-pagination', `size--${size}`)}>
            <Dropdown
                className="table-pagination-rows"
                label="Rows"
                value={String(pageSize)}
                onChange={onSelectChangeHandler}
                options={rowsPerPageOptions.map((text) => ({
                    label: String(text),
                    value: String(text),
                }))}
                shape={shape}
            />

            <div className="table-pagination-container">
                {/* <div className="item-count">
                    <Typography>{`${rowMin} - ${rowMax} of ${rowTotal}`}</Typography>
                </div> */}

                <Pagination
                    count={pageOptions.length}
                    // hideNextButton={!canNextPage}
                    // hidePrevButton={!canPreviousPage}
                    // correct the page value for the non-zero based pagination component
                    page={pageIndex + 1}
                    // shape={shape}
                    onChange={onPageChangeHandler}
                    // showFirstButton
                    // showLastButton
                    {...paginationProps}
                />
            </div>
        </DataTablePaginationWrapper>
    )
}

type DataPaginationRef = HTMLDivElement

type DataTableOverrideProps = 'size' | 'onChange'

interface DataTablePaginationProps
    extends BackyardBaseProps<DataPaginationRef, DataTableOverrideProps> {
    /**
     * An array of items per page options.
     */
    rowsPerPageOptions?: number[]
    /**
     * Footer sizes.
     */
    size?: 'large' | 'medium' | 'small'
    /**
     * The onChange function.
     */
    onChange?: (event: React.ChangeEvent, page: number) => void
    /**
     * Props for the pagination component.
     */
    paginationProps?: PaginationProps
}

export { DataTablePagination }

export type { DataTablePaginationProps }

export default DataTablePagination
