import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Table from './Table'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

describe('Table Snapshots', () => {
    test('Table default snapshot', () => {
        const { asFragment } = render(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>header1</TableHeader>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>cell11</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>cell21</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Table ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeader>header1</TableHeader>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>cell11</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>cell21</TableCell>
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
        test('Table DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeader>header1</TableHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>cell11</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>cell21</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('variants', () => {
        const variants = ['outlined', 'filled']

        variants.forEach(variant => {
            test('Table DOM props (id, className) snapshot', () => {
                const { asFragment } = render(
                    <Table variant={variant}>
                        <TableHead>
                            <TableRow>
                                <TableHeader>header1</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>cell11</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>cell21</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('variants', () => {
        const rules = [true, false]

        rules.forEach(rule => {
            test('Table DOM props (id, className) snapshot', () => {
                const { asFragment } = render(
                    <Table rightRule={rule}>
                        <TableHead>
                            <TableRow>
                                <TableHeader>header1</TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>cell11</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>cell21</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                )
    
                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})