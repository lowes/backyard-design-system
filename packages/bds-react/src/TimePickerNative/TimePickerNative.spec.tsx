import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import TimePickerNative from './TimePickerNative'

describe('TimePickerNative Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(
            <TimePickerNative />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <TimePickerNative />
                <FormHelperText>Text Input Helper</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`TimePickerNative ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <TimePickerNative />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: times', () => {
        test(`TimePickerNative times snapshot`, () => {
            const { asFragment } = render(
                <TimePickerNative
                    defaultValue="8:00"
                    times={[
                        { label: 'Morning 8:00 AM', value: '8:00' },
                        { label: 'Morning 9:15 AM', value: '9:15' },
                        { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                        { label: 'Morning 10:15 AM', value: '10:15' },
                        { label: 'Morning 11:15 AM', value: '11:15' },
                        { label: 'Noon 12:00 PM', value: '12:00' },
                        { label: 'Afternoon 1:15 PM', value: '13:15', disabled: true },
                        { label: 'Afternoon 1:45 PM', value: '13:45' },
                        { label: 'Afternoon 3:00 PM', value: '15:00', disabled: true },
                        { label: 'Evening 5:00 PM', value: '18:00' },
                        { label: 'Evening 5:45 PM', value: '18:45' }
                    ]}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
