import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Switch from './Switch'

describe('Switch Snapshots', () => {
    test('Switch default snapshot', () => {
        const { asFragment } = render(
            <Switch />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Switch ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Switch />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`Switch ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <Switch disabled={disabled} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: checked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Switch ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Switch checked={checked} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: defaultChecked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Switch default ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Switch defaultChecked={checked} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Switch className snapshot', () => {
            const { asFragment } = render(
                <Switch className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Switch wrapperProps snapshot', () => {
            const { asFragment } = render(
                <Switch
                    wrapperProps={{
                        style: {
                            opacity: '0'
                        }
                    }}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Switch DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <Switch
                    name="test-name"
                    value="test-value"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
