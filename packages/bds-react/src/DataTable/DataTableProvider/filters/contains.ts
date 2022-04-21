export const contains = (rows, id, filterValue) => {
    if (rows && id && typeof filterValue !== 'undefined') {
        return rows.filter((row) => {
            const rowValue = row.values[id]

            return rowValue !== undefined ? rowValue.includes(filterValue) : false
        })
    }

    return false
}

export default contains
