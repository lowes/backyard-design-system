import * as React from 'react'
import { render, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import DatePicker from './DatePicker'

describe('DatePicker Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(<DatePicker />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <DatePicker />
                <FormHelperText>Text Input Helper</FormHelperText>
            </FormControl>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`DatePicker ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <DatePicker />
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: dates', () => {
        test(`DatePicker dates snapshot`, () => {
            const { asFragment } = render(
                <DatePicker
                    date="2020-07-19"
                    dates={[
                        { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                        { label: 'Today 9:15 AM', value: '2020-07-19' },
                        { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                        { label: 'Next Day 10:15 AM', value: '2020-07-21' },
                    ]}
                />,
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test(`DatePicker dates desktop snapshot`, async () => {
            let wrapper

            await act(async () => {
                wrapper = render(
                    <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                        <DatePicker
                            date="2020-05-19"
                            minDate="2020-05-18"
                            maxDate="2020-05-20"
                            dates={[
                                { label: 'Yesterday 8:00 AM', value: '2020-05-18' },
                                { label: 'Today 9:15 AM', value: '2020-05-19' },
                                { label: 'Tomorrow 9:45 AM', value: '2020-05-20', disabled: true },
                                { label: 'Next Day 10:15 AM', value: '2020-05-21' },
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
                                    <DatePicker render={type} date="2021-01-01" />
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
