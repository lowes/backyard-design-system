import * as React from 'react'
import { useAsyncDebounce } from 'react-table'
import type { FilterProps } from 'react-table'

import Search from '../../Search'

function TextFilter<Data extends object>({ column }: FilterProps<Data>) {
    const { filterValue, setFilter, id } = column

    const [value, setValue] = React.useState(filterValue)

    const searchRef = React.useRef(null)

    const handleChange = (_, val) => {
        setValue(val)
    }

    const handleClear = (_, val) => {
        setValue(val)
    }

    const setDebounceValue = useAsyncDebounce((val) => {
        setFilter(val || undefined)
    }, 200)

    React.useEffect(() => {
        if (filterValue !== value) {
            setDebounceValue(value)
        }
    }, [value])

    React.useEffect(() => {
        setValue(filterValue)
    }, [filterValue])

    return (
        <Search
            value={value || ''}
            onChange={handleChange}
            onClearClick={handleClear}
            placeholder="Search"
            variant="filled"
            fill="canvas"
            size="small"
            wrapperProps={{
                className: 'cell-filter',
            }}
            className={`${id}-filter`}
            label={`${id} filter`}
            ref={searchRef}
        />
    )
}

export { TextFilter }

export default TextFilter
