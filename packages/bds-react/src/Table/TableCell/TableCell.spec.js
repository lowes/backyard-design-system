import * as React from 'react'
import { render } from '../../../test-utils'
import { ThemeProvider } from '../../ThemeProvider'
import Table from '../Table'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import TableCell from './TableCell'

describe('TableCell Snapshots', () => {
    test('TableCell default snapshot', () => {
        const { asFragment } = render(
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>cell data</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: width', () => {
        test(`Sets width of table`, () => {
            const { asFragment } = render(
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell width={75}>cell data1.1</TableCell>
                            <TableCell>cell data1.2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>cell data2.1</TableCell>
                            <TableCell>cell data2.2</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: moreInfo', () => {
        test(`Adds the more info icon to cell`, () => {
            const { asFragment } = render(
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell moreInfo='hello world'>cell data</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`TableCell ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>cell data</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('TableCell DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell id='id'
                                       className='classname'>
                                cell data
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})