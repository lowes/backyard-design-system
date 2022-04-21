import * as React from 'react'
import { render, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import TimePicker from './TimePicker'

describe('TimePicker Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(<TimePicker />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <TimePicker />
                <FormHelperText>Text Input Helper</FormHelperText>
            </FormControl>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`TimePicker ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <TimePicker />
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: times', () => {
        test(`TimePicker times snapshot`, () => {
            const { asFragment } = render(
                <TimePicker
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
                        { label: 'Evening 5:45 PM', value: '18:45' },
                    ]}
                />,
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test(`TimePicker times desktop snapshot`, async () => {
            let wrapper

            await act(async () => {
                wrapper = render(
                    <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                        <TimePicker
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
                                { label: 'Evening 5:45 PM', value: '18:45' },
                            ]}
                        />
                    </ThemeProvider>,
                )
            })

            const { asFragment } = wrapper

            expect(asFragment()).toMatchSnapshot()
        })

        describe('render type', () => {
            const types = ['custom', 'native'] as const
            const viewports = ['desktop', 'mobile'] as const
            const overrides = {
                desktop: { isMobile: false, isDesktop: true },
                mobile: { isMobile: true, isDesktop: false },
            }

            viewports.forEach((viewport) => {
                types.forEach((type) => {
                    test(`DatePicker render=${type} viewport=${viewport} theme snapshot`, async () => {
                        let wrapper

                        await act(async () => {
                            wrapper = render(
                                <ThemeProvider override={overrides[viewport]}>
                                    <TimePicker
                                        render={type}
                                        times={[
                                            { label: 'Morning 8:00 AM', value: '8:00' },
                                            { label: 'Morning 9:15 AM', value: '9:15' },
                                            {
                                                label: 'Morning 9:45 AM',
                                                value: '9:45',
                                                disabled: true,
                                            },
                                            { label: 'Morning 10:15 AM', value: '10:15' },
                                            { label: 'Morning 11:15 AM', value: '11:15' },
                                            { label: 'Noon 12:00 PM', value: '12:00' },
                                            {
                                                label: 'Afternoon 1:15 PM',
                                                value: '13:15',
                                                disabled: true,
                                            },
                                            { label: 'Afternoon 1:45 PM', value: '13:45' },
                                            {
                                                label: 'Afternoon 3:00 PM',
                                                value: '15:00',
                                                disabled: true,
                                            },
                                            { label: 'Evening 5:00 PM', value: '18:00' },
                                            { label: 'Evening 5:45 PM', value: '18:45' },
                                        ]}
                                    />
                                </ThemeProvider>,
                            )
                        })

                        const { asFragment } = wrapper

                        expect(asFragment()).toMatchSnapshot()
                    })
                })
            })
        })
    })
})
