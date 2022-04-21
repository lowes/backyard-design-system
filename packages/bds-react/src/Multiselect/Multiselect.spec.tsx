import * as React from 'react'
import { render, act } from '../../test-utils'

import { ThemeProvider } from '../ThemeProvider'
import Option from '../Select/Option'
import OptionGroup from '../Select/OptionGroup'

import Multiselect from './Multiselect'

describe('Multiselect Snapshots', () => {
    test('render on desktop', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Multiselect
                        open
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                    />
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('render on mobile', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: true, isDesktop: false }}>
                    <Multiselect
                        open
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            { label: 'Option 3', value: '3' },
                            { label: 'Option 4', value: '4' }
                        ]}
                    />
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('render no options', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: true, isDesktop: false }}>
                    <Multiselect
                        data-testid="dropdown"
                    />
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('render children', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: true, isDesktop: false }}>
                    <Multiselect
                        data-testid="dropdown"
                    >
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                        <Option value="4">Option 4</Option>
                    </Multiselect>
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('render option group children', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: true, isDesktop: false }}>
                    <Multiselect
                        data-testid="dropdown"
                    >
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <OptionGroup
                            label="List Group 1"
                        >
                            <Option value="3">List Option 3</Option>
                            <Option value="4">List Option 4</Option>
                        </OptionGroup>
                    </Multiselect>
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('render option group options', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Multiselect
                        open
                        data-testid="dropdown"
                        options={[
                            { label: 'Option 1', value: '1' },
                            { label: 'Option 2', value: '2' },
                            {
                                label: 'List Group 1',
                                options: [
                                    { label: 'List Option 3', value: '3' },
                                    { label: 'List Option 4', value: '4' },
                                ]
                            },
                        ]}
                    />
                </ThemeProvider>
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
