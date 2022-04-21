import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import TimePickerNative from './TimePickerNative'

describe('TimePickerNative Tests', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <TimePickerNative
                label="Time"
            />
        )

        const picker = getByLabelText('Time')

        expect(picker).toBeInTheDocument()
    })

    describe('prop: times', () => {
        describe('without', () => {
            it('renders a text input as the native picker', () => {
                const { getByLabelText } = render(
                    <TimePickerNative
                        label="Time"
                    />
                )

                const picker = getByLabelText('Time')

                expect(picker.tagName).toBe('INPUT')
            })

            describe('prop: onChange', () => {
                it('doesnt trigger `onChange` when not defined', () => {
                    const onChangeSpy = jest.fn(event => event.defaultPrevented)
                    const { getByLabelText } = render(
                        <TimePickerNative
                            label="Time"
                        />
                    )

                    const picker = getByLabelText('Time')

                    fireEvent.change(picker, {
                        target: {
                            value: '8:00'
                        }
                    })

                    expect(onChangeSpy).not.toHaveBeenCalled()
                })

                it('triggers `onChange` when value change event occurs', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <TimePickerNative
                            label="Time"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Time')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    Simulate.change(picker, {
                        target: {
                            value: '8:00 AM'
                        } as any // EventTarget
                    })

                    expect(onChangeSpy).toHaveBeenCalled()
                })

                it('always triggers `onChange`', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <TimePickerNative
                            label="Time"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Time')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    Simulate.change(picker, {
                        target: {
                            value: '24:00 AM'
                        } as any // EventTarget
                    })

                    expect(onChangeSpy).toHaveBeenCalled()
                })
            })
        })

        describe('with', () => {
            it('renders a select as the native picker', () => {
                const { getByLabelText } = render(
                    <TimePickerNative
                        label="Time"
                        times={[
                            '8:00',
                            '9:00',
                            '12:00',
                            '14:00',
                            '15:00'
                        ]}
                    />
                )

                const picker = getByLabelText('Time')

                expect(picker.tagName).toBe('SELECT')
            })

            it('parses times as string', () => {
                const { getByLabelText } = render(
                    <TimePickerNative
                        label="Time"
                        time="9:00"
                        times={[
                            '8:00',
                            '9:00',
                            '12:00',
                            '14:00',
                            '15:00'
                        ]}
                    />
                )

                const picker = getByLabelText('Time')

                expect(picker).toBeInTheDocument()
            })

            it('parses times as an object', () => {
                const { getByLabelText } = render(
                    <TimePickerNative
                        label="Time"
                        time="9:15"
                        times={[
                            { label: 'Morning 8:00 AM', value: '8:00' },
                            { label: 'Morning 9:15 AM', value: '9:15' },
                            { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                            { label: 'Morning 10:15 AM', value: '10:15' },
                            { label: 'Morning 11:15 AM', value: '11:15' },
                            { label: 'Noon 12:00 PM', value: '12:00' }
                        ]}
                    />
                )

                const picker = getByLabelText('Time')

                expect(picker).toBeInTheDocument()
            })

            it('parses times as a range object', () => {
                const { getByLabelText } = render(
                    <TimePickerNative
                        label="Time"
                        time={JSON.stringify(['10:15', '12:00'])}
                        times={[
                            { label: 'Morning 8:00 AM - 9:45 AM', start: '8:00', end: '9:45' },
                            { label: 'Morning 10:15 AM - 12:00 PM', start: '10:15', end: '12:00' },
                            { label: 'Afternoon 1:15 PM - 2:30 PM', start: '13:15', end: '14:30', disabled: true }
                        ]}
                    />
                )

                const picker = getByLabelText('Time') as HTMLInputElement

                expect(picker.value).toBe(JSON.stringify(['10:15', '12:00']))
            })

            it('triggers `onChange` when value change event occurs', () => {
                const onChangeSpy = jest.fn()
                const { getByLabelText } = render(
                    <TimePickerNative
                        label="Time"
                        onChange={onChangeSpy}
                        time="09:15"
                        times={[
                            { label: 'Morning 8:00 AM', value: '8:00' },
                            { label: 'Morning 9:15 AM', value: '9:15' },
                            { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                            { label: 'Morning 10:15 AM', value: '10:15' },
                            { label: 'Morning 11:15 AM', value: '11:15' },
                            { label: 'Noon 12:00 PM', value: '12:00' }
                        ]}
                    />
                )

                const picker = getByLabelText('Time') as HTMLInputElement

                expect(onChangeSpy).not.toHaveBeenCalled()
                expect(picker.value).toBe('09:15')

                Simulate.change(picker, {
                    target: {
                        value: '08:00'
                    } as any // EventTarget
                })

                expect(onChangeSpy).toHaveBeenCalled()
            })

            it('handles withCustom select onMouseDown', async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                            <TimePickerNative
                                label="Time"
                                time="09:15"
                                withCustom
                                times={[
                                    { label: 'Morning 8:00 AM', value: '8:00' },
                                    { label: 'Morning 9:15 AM', value: '9:15' },
                                    { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                                    { label: 'Morning 10:15 AM', value: '10:15' },
                                    { label: 'Morning 11:15 AM', value: '11:15' },
                                    { label: 'Noon 12:00 PM', value: '12:00' }
                                ]}
                            />
                        </ThemeProvider>
                    )
                })

                const { getByLabelText } = wrapper

                const picker = getByLabelText('Time')

                fireEvent.mouseDown(picker)

                expect(picker).toHaveFocus()
            })
        })
    })

    describe('prop: onFocus', () => {
        it('shows list picker popover', () => {
            const onFocusSpy = jest.fn()
            const { getByLabelText } = render(
                <TimePickerNative
                    onFocus={onFocusSpy}
                    label="Time"
                />
            )

            const picker = getByLabelText('Time')

            expect(onFocusSpy).not.toHaveBeenCalled()

            fireEvent.focus(picker)

            expect(onFocusSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onBlur', () => {
        it('hides list picker popover', () => {
            const onBlurSpy = jest.fn()
            const { getByLabelText } = render(
                <TimePickerNative
                    onBlur={onBlurSpy}
                    label="Time"
                />
            )

            const picker = getByLabelText('Time')

            fireEvent.focus(picker)

            expect(onBlurSpy).not.toHaveBeenCalled()

            fireEvent.blur(picker)

            expect(onBlurSpy).toHaveBeenCalled()
        })
    })
})
