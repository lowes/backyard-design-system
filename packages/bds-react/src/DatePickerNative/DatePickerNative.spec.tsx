import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import DatePickerNative from './DatePickerNative'

describe('DatePickerNative Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(
            <DatePickerNative />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <DatePickerNative />
                <FormHelperText>Text Input Helper</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`DatePickerNative ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <DatePickerNative />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: dates', () => {
        test(`DatePickerNative dates snapshot`, () => {
            const { asFragment } = render(
                <DatePickerNative
                    date="2020-07-19"
                    dates={[
                        { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                        { label: 'Today 9:15 AM', value: '2020-07-19' },
                        { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                        { label: 'Next Day 10:15 AM', value: '2020-07-21' }
                    ]}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
