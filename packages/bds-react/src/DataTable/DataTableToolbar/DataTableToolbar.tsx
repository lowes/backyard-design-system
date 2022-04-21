import * as React from 'react'
import classNames from 'classnames'
import { useAsyncDebounce } from 'react-table'

import Filter from '@lowes-tech/bds-icons/Filter'
import SearchIcon from '@lowes-tech/bds-icons/SearchIcon'
import DotsVertical from '@lowes-tech/bds-icons/DotsVertical'

import type { BackyardBaseProps } from '../../utils/typings/BackyardProps'

import DataTableToolbarWrapper from './styles/DataTableToolbarWrapper'
import IconButton from '../../IconButton'
import MenuPopover from '../../MenuPopover'
import { Menu } from '../../Menu'

import { useDataTable } from '../hooks'
import Search from '../../Search'
import ClickAwayListener from '../../ClickAwayListener'
import { Toggle, ToggleButton } from '../../Toggle'

/**
 * Backyard React Data Table Toolbar
 *
 * @internal
 *
 * This component is for the `DataTable` component to auto render with our base layout
 * This component renders the toolbar of the data table
 */
const DataTableToolbar = <Data extends object = any>({
    children,
    className,
    size: sizeProp = 'medium',
    shape: shapeProp = 'rounded',
    ...props
}: DataTableToolbarProps): React.ReactElement<DataTableToolbarProps> => {
    const {
        enableFilters,
        enableSearch,
        menuItems = [],
        showFilters,
        showSearch,
        setShowFilters,
        setShowSearch,
        setGlobalFilter,
        state,
        toolbar,
        size: sizeContext,
        shape: shapeContext,
    } = useDataTable<Data>()

    const size = sizeContext || sizeProp
    const shape = shapeContext || shapeProp

    const [value, setValue] = React.useState(state.globalFilter || '')

    const handleShowFilters = () => setShowFilters(true)
    const handleHideFilters = () => setShowFilters(false)

    const handleSearchToggle = () => {
        setShowSearch((show) => !show)
    }

    const handleSearchDebounce = useAsyncDebounce((val) => {
        setGlobalFilter(val)
    }, 200)

    const handleSearchChange = (_, val) => {
        setValue(val)
    }

    const clearSearch = () => {
        setValue('')
    }

    React.useEffect(() => {
        handleSearchDebounce(value)
    }, [value])

    return (
        <DataTableToolbarWrapper
            className={classNames(
                'data-table-toolbar',
                `size--${size}`,
                `shape--${shape}`,
                className,
            )}
            {...props}
        >
            <div className="table-toolbar-action-buttons">
                <Toggle
                    variant="ghost"
                    buttonProps={{
                        variant: 'ghost',
                    }}
                    selectedButtonProps={{
                        variant: 'primary',
                    }}
                    exclusive
                    shape={shape}
                    {...(showFilters ? { value: 'show' } : {})}
                >
                    <ToggleButton
                        disabled={!enableFilters}
                        className={classNames('filter-button')}
                        size="small"
                        value="show"
                        onSelect={handleShowFilters}
                        onDeselect={handleHideFilters}
                        shape={shape}
                    >
                        <Filter />
                    </ToggleButton>
                </Toggle>

                {!showSearch && !state.globalFilter ? (
                    <IconButton
                        className={classNames('search-button')}
                        disabled={!enableSearch}
                        size="small"
                        variant="ghost"
                        shape={shape}
                        onClick={handleSearchToggle}
                    >
                        <SearchIcon />
                    </IconButton>
                ) : (
                    <ClickAwayListener onClickAway={handleSearchToggle}>
                        <Search
                            className={classNames('search-field')}
                            variant="filled"
                            fill="canvas"
                            placeholder="Search"
                            size="small"
                            shape={shape}
                            onChange={handleSearchChange}
                            onClearClick={clearSearch}
                            value={value}
                        />
                    </ClickAwayListener>
                )}
            </div>

            <div className="toolbar-tools">
                {toolbar.map((tool, index) =>
                    tool ? React.cloneElement(tool, { key: index, shape }) : null,
                )}
            </div>

            {menuItems.length > 0 && (
                <MenuPopover
                    placement="bottom-end"
                    menu={<Menu items={menuItems} shape={shape} width="10rem" />}
                    shape={shape}
                >
                    <IconButton
                        size="small"
                        color="interactive"
                        variant="ghost"
                    >
                        <DotsVertical />
                    </IconButton>
                </MenuPopover>
            )}
        </DataTableToolbarWrapper>
    )
}

type DataTableToolbarRef = HTMLDivElement

type DataTableToolbarOverrides = 'size'

interface DataTableToolbarProps
    extends BackyardBaseProps<DataTableToolbarRef, DataTableToolbarOverrides> {
    /**
     * Size of the component
     */
    size?: 'large' | 'medium' | 'small'
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared'
}

export { DataTableToolbar }

export type { DataTableToolbarProps, DataTableToolbarRef }

export default DataTableToolbar
