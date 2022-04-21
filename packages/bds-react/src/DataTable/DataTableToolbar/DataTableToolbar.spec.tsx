import * as React from 'react'

import { render } from '../../../test-utils'

import { DataTableToolbar, DataTableProvider, ThemeProvider } from '../../'
import type { DataTableProps, ThemeProviderProps } from '../../'

describe('DataTableToolbar Snapshots', () => {
    test('DataTableToolbar default snapshot', () => {
        const { asFragment } = render(
            <DataTableProvider columns={[]} data={[]} showToolbar>
                <DataTableToolbar />
            </DataTableProvider>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('enableFilters', () => {
        const filtering = [true, false]

        filtering.forEach((filterEnabled) => {
            test(`DataTableToolbar enableFilters: ${filterEnabled} snapshot`, () => {
                const { asFragment } = render(
                    <DataTableProvider
                        columns={[]}
                        data={[]}
                        showToolbar
                        enableFilters={filterEnabled}
                    >
                        <DataTableToolbar />
                    </DataTableProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('sizes', () => {
        const sizes: DataTableProps['size'][] = ['large', 'medium', 'small', 'custom']

        sizes.forEach((size) => {
            test(`DataTableToolbar size: ${size} snapshot`, () => {
                const { asFragment } = render(
                    <DataTableProvider columns={[]} data={[]} showToolbar size={size}>
                        <DataTableToolbar />
                    </DataTableProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('enableSearch', () => {
        const search = [true, false]

        search.forEach((searchEnabled) => {
            test(`DataTableToolbar enableSearch: ${searchEnabled} snapshot`, () => {
                const { asFragment } = render(
                    <DataTableProvider
                        columns={[]}
                        data={[]}
                        showToolbar
                        enableSearch={searchEnabled}
                    >
                        <DataTableToolbar />
                    </DataTableProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`DataTable ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <DataTableProvider columns={[]} data={[]} showToolbar>
                            <DataTableToolbar />
                        </DataTableProvider>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
