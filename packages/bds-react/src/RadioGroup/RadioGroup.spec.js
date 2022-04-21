import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import RadioGroup from './RadioGroup'

describe('RadioGroup Snapshots', () => {
    test('RadioGroup default snapshot', () => {
        const { asFragment } = render(
            <RadioGroup name="test-radio-group" />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`RadioGroup ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <RadioGroup name="test-radio-group" />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`RadioGroup ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <RadioGroup name="test-radio-group" disabled={disabled} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('RadioGroup className snapshot', () => {
            const { asFragment } = render(
                <RadioGroup name="test-radio-group" className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('RadioGroup DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <RadioGroup
                    id="test-id"
                    name="test-name"
                    value="test-value"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
