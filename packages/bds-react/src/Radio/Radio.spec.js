import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Radio from './Radio'

describe('Radio Snapshots', () => {
    test('Radio default snapshot', () => {
        const { asFragment } = render(
            <Radio />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Radio ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Radio />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`Radio ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <Radio disabled={disabled} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: checked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Radio ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Radio checked={checked} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: defaultChecked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Radio default ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Radio defaultChecked={checked} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Radio className snapshot', () => {
            const { asFragment } = render(
                <Radio className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Radio wrapperProps snapshot', () => {
            const { asFragment } = render(
                <Radio 
                    id="radio"
                    wrapperProps={{
                        style: {
                            opacity: '0'
                        }
                    }}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Radio DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <Radio
                    name="test-name"
                    value="test-value"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
