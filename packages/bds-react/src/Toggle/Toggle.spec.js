import * as React from 'react'
import { render, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import Button from '../Button'
import { Toggle, ToggleButton } from '../Toggle'

describe('Toggle Snapshots', () => {
    test('default snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle>
                    <ToggleButton>0</ToggleButton>
                    <ToggleButton>1</ToggleButton>
                    <ToggleButton>2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('disabled snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle>
                    <ToggleButton>0</ToggleButton>
                    <ToggleButton disabled>1</ToggleButton>
                    <ToggleButton>2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`${theme} theme snapshot`, async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider theme={theme}>
                            <Toggle>
                                <ToggleButton>0</ToggleButton>
                            </Toggle>
                        </ThemeProvider>,
                    )
                })

                const { asFragment } = wrapper

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('default list snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle defaultValue={['0', '2']}>
                    <ToggleButton value="0">0</ToggleButton>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('default single value snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle exclusive enforceSelected defaultValue="1">
                    <ToggleButton value="0">0</ToggleButton>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('no default exclusive snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle exclusive>
                    <ToggleButton value="0">0</ToggleButton>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('set default snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle defaultValue={new Set(['1', '2'])}>
                    <ToggleButton value="0">0</ToggleButton>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('no default enforce selected snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle exclusive enforceSelected>
                    <ToggleButton value="0">0</ToggleButton>
                    <ToggleButton value="1">1</ToggleButton>
                    <ToggleButton value="2">2</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('custom children snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle exclusive enforceSelected defaultValue="1">
                    <ToggleButton component={Button} value="0">
                        0
                    </ToggleButton>
                    <ToggleButton component={Button} value="1">
                        1
                    </ToggleButton>
                    <ToggleButton component={Button} value="2">
                        2
                    </ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('toggle snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(<Toggle />)
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('toggle button snapshot', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <Toggle>
                    <ToggleButton value="0">0</ToggleButton>
                </Toggle>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
