export const equals = (rows, id, filterValue) => {
    if (rows && id && typeof filterValue !== 'undefined') {
        return rows.filter((row) => {
            const rowValue = row.values[id]

            return rowValue !== undefined ? rowValue === filterValue : false
        })
    }

    return false
}

export default equals
