import * as React from 'react'
import { render } from '../../../test-utils'
import { ThemeProvider } from '../../ThemeProvider'
import Table from '../Table'
import TableHead from '../TableHead'
import TableRow from '../TableRow'
import TableHeader from './TableHeader'

describe('TableHeader Snapshots', () => {
    test('TableHeader default snapshot', () => {
        const { asFragment } = render(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>header</TableHeader>
                    </TableRow>
                </TableHead>
            </Table>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: width', () => {
        test(`Sets width of table`, () => {
            const { asFragment } = render(
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader width={75}>header1.1</TableHeader>
                            <TableHeader>header1.2</TableHeader>
                        </TableRow>
                    </TableHead>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: moreInfo', () => {
        test(`Adds the more info icon to cell`, () => {
            const { asFragment } = render(
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader moreInfo='hello world'>header</TableHeader>
                        </TableRow>
                    </TableHead>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`TableHeader ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>header</TableHeader>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('TableHeader DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader id='id'
                                         className='classname'>
                                header
                            </TableHeader>
                        </TableRow>
                    </TableHead>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})