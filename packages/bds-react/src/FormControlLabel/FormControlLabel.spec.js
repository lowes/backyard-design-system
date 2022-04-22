import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Checkbox from '../Checkbox'
import Switch from '../Switch'
import Radio from '../Radio'
import FormControlLabel from './FormControlLabel'

describe('FormControlLabel Snapshots', () => {
    test('FormControlLabel checkbox snapshot', () => {
        const { asFragment } = render(
            <FormControlLabel
                label="Checkbox"
                control={<Checkbox />}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('FormControlLabel radio snapshot', () => {
        const { asFragment } = render(
            <FormControlLabel
                label="Radio"
                control={<Radio />}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('FormControlLabel switch snapshot', () => {
        const { asFragment } = render(
            <FormControlLabel
                label="Switch"
                control={<Switch />}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`FormControl ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <FormControlLabel
                            label="Label"
                            control={<Checkbox />}
                        />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`FormControl ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <FormControlLabel
                        label="Label"
                        control={<Checkbox />}
                        disabled={disabled}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('control prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`FormControl ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <FormControlLabel
                        label="Label"
                        control={(
                            <Checkbox
                                disabled={disabled}
                            />
                        )}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
