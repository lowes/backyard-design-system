import * as React from 'react'
import { useAsyncDebounce } from 'react-table'
import type { FilterProps } from 'react-table'

import Dropdown from '../../Dropdown'
import type { DropdownProps } from '../../Dropdown'

const SelectFilter =
    <Data extends object>(optionValues: string[]) =>
    ({ column }: FilterProps<Data>) => {
        const { filterValue, setFilter, id } = column

        const [value, setValue] = React.useState(filterValue)

        const handleChange: DropdownProps['onChange'] = (_, { value: val }) => {
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
            if (filterValue !== value) {
                setValue(filterValue)
            }
        }, [filterValue])

        return (
            <Dropdown
                onChange={handleChange}
                label="Select"
                options={[
                    { value: '', label: 'none' },
                    ...optionValues.map((optionValue) => ({
                        value: optionValue,
                        label: optionValue,
                    })),
                ]}
                size="small"
                wrapperProps={{
                    className: 'cell-filter',
                }}
                className={`${id}-filter`}
                value={value}
            />
        )
    }

export { SelectFilter }

export default SelectFilter
