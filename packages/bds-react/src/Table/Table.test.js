import * as React from 'react'
import { render } from '../../test-utils'
import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeader from './TableHeader'
import TableRow from './TableRow'



describe('Table Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Table data-testid='table'>
                <TableHead data-testid='table-head'>
                    <TableRow data-testid='table-row'>
                        <TableHeader data-testid='table-header'>header1</TableHeader>
                        <TableHeader>header2</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody data-testid='table-body'>
                    <TableRow>
                        <TableCell data-testid='table-cell'>cell11</TableCell>
                        <TableCell>cell12</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>cell21</TableCell>
                        <TableCell>cell22</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )

        const table = getByTestId('table')
        const tableHead = getByTestId('table-head')
        const tableBody = getByTestId('table-body')
        const tableRow = getByTestId('table-row')
        const tableHeader = getByTestId('table-header')
        const tableCell = getByTestId('table-cell')

        expect(table).toBeInTheDocument()
        expect(tableHead).toBeInTheDocument()
        expect(tableBody).toBeInTheDocument()
        expect(tableRow).toBeInTheDocument()
        expect(tableHeader).toBeInTheDocument()
        expect(tableCell).toBeInTheDocument()
    })
})
