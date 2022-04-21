import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import DatePickerNative from './DatePickerNative'

describe('DatePickerNative Tests', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <DatePickerNative
                label="Date"
            />
        )

        const picker = getByLabelText('Date')

        expect(picker).toBeInTheDocument()
    })

    describe('prop: dates', () => {
        describe('without', () => {
            it('renders a text input as the native picker', () => {
                const { getByLabelText } = render(
                    <DatePickerNative
                        label="Date"
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker.tagName).toBe('INPUT')
            })

            describe('prop: onChange', () => {
                it('doesnt trigger `onChange` when not defined', () => {
                    const onChangeSpy = jest.fn(event => event.defaultPrevented)
                    const { getByLabelText } = render(
                        <DatePickerNative
                            label="Date"
                        />
                    )

                    const picker = getByLabelText('Date')

                    fireEvent.change(picker, {
                        target: {
                            value: '2020-07-19'
                        }
                    })

                    expect(onChangeSpy).not.toHaveBeenCalled()
                })

                it('triggers `onChange` when value change event occurs', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <DatePickerNative
                            label="Date"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Date')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    Simulate.change(picker, {
                        target: {
                            value: '2020-07-19'
                        } as any // EventTarget
                    })

                    expect(onChangeSpy).toHaveBeenCalled()
                })

                it('always triggers `onChange`', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <DatePickerNative
                            label="Date"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Date')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    Simulate.change(picker, {
                        target: {
                            value: '9999-99-99'
                        } as any // EventTarget
                    })

                    expect(onChangeSpy).toHaveBeenCalled()
                })
            })
        })

        describe('with', () => {
            it('renders a select as the native picker', () => {
                const { getByLabelText } = render(
                    <DatePickerNative
                        label="Date"
                        dates={[
                            '2020-07-17',
                            '2020-07-18',
                            '2020-07-19',
                            '2020-07-20',
                            '2020-07-21',
                            '2020-07-22'
                        ]}
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker.tagName).toBe('SELECT')
            })

            it('parses dates as string', () => {
                const { getByLabelText } = render(
                    <DatePickerNative
                        label="Date"
                        date="2020-07-19"
                        dates={[
                            '2020-07-17',
                            '2020-07-18',
                            '2020-07-19',
                            '2020-07-20',
                            '2020-07-21',
                            '2020-07-22'
                        ]}
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker).toBeInTheDocument()
            })

            it('parses dates as an object', () => {
                const { getByLabelText } = render(
                    <DatePickerNative
                        label="Date"
                        date="2020-07-19"
                        dates={[
                            { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                            { label: 'Today 9:15 AM', value: '2020-07-19' },
                            { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                            { label: 'Next Day 10:15 AM', value: '2020-07-21' }
                        ]}
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker).toBeInTheDocument()
            })

            it('triggers `onChange` when value change event occurs', () => {
                const onChangeSpy = jest.fn()
                const { getByLabelText } = render(
                    <DatePickerNative
                        label="Date"
                        onChange={onChangeSpy}
                        date="2020-07-19"
                        dates={[
                            { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                            { label: 'Today 9:15 AM', value: '2020-07-19' },
                            { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                            { label: 'Next Day 10:15 AM', value: '2020-07-21' }
                        ]}
                    />
                )

                const picker = getByLabelText('Date') as HTMLInputElement

                expect(onChangeSpy).not.toHaveBeenCalled()
                expect(picker.value).toBe('2020-07-19')

                Simulate.change(picker, {
                    target: {
                        value: '2020-07-18'
                    } as any // EventTarget
                })

                expect(onChangeSpy).toHaveBeenCalled()
            })

            it('handles withCustom select onMouseDown', async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                            <DatePickerNative
                                label="Date"
                                withCustom
                                dates={[
                                    { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                                    { label: 'Today 9:15 AM', value: '2020-07-19' },
                                    { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                                    { label: 'Next Day 10:15 AM', value: '2020-07-21' }
                                ]}
                            />
                        </ThemeProvider>
                    )
                })

                const { getByLabelText } = wrapper

                const picker = getByLabelText('Date')

                fireEvent.mouseDown(picker)

                expect(picker).toHaveFocus()
            })
        })
    })

    describe('prop: onFocus', () => {
        it('shows calendar picker popover', () => {
            const onFocusSpy = jest.fn()
            const { getByLabelText } = render(
                <DatePickerNative
                    onFocus={onFocusSpy}
                    label="Date"
                />
            )

            const picker = getByLabelText('Date')

            expect(onFocusSpy).not.toHaveBeenCalled()

            fireEvent.focus(picker)

            expect(onFocusSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onBlur', () => {
        it('hides calendar picker popover', () => {
            const onBlurSpy = jest.fn()
            const { getByLabelText } = render(
                <DatePickerNative
                    onBlur={onBlurSpy}
                    label="Date"
                />
            )

            const picker = getByLabelText('Date')

            fireEvent.focus(picker)

            expect(onBlurSpy).not.toHaveBeenCalled()

            fireEvent.blur(picker)

            expect(onBlurSpy).toHaveBeenCalled()
        })
    })
})
