import * as React from 'react'

import { DataTableContext } from '../DataTableProvider'
import type { DataTableContextValues } from '../DataTableProvider'

const useDataTable = <Data extends object = {}>() => {
    return React.useContext<DataTableContextValues<Data>>(DataTableContext)
}

export { useDataTable }

export default useDataTable
