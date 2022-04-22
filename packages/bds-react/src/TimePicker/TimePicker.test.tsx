import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import TimePicker from './TimePicker'

describe('TimePicker Tests', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <TimePicker
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
                    <TimePicker
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
                        <TimePicker
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
                    const { container } = render(
                        <TimePicker
                            label="Time"
                            onChange={onChangeSpy}
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

                    const picker = container.querySelector('select')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    fireEvent.change(picker, {
                        target: {
                            value: '08:00'
                        }
                    })

                    expect(onChangeSpy).toHaveBeenCalled()
                })

                it('doesn\'t trigger `onChange` when invalid value change event occurs', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <TimePicker
                            label="Time"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Time')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    Simulate.change(picker, {
                        target: {
                            value: '24:00 AM'
                        } as any // EventTarget (test)
                    })

                    expect(onChangeSpy).not.toHaveBeenCalled()
                })
            })
        })

        describe('with', () => {
            it('renders a select as the native picker', () => {
                const { getByLabelText } = render(
                    <TimePicker
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
                    <TimePicker
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
                    <TimePicker
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
                const { getByLabelText, container } = render(
                    <TimePicker
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
                const options = container.querySelectorAll('option')

                expect(picker.value).toBe(JSON.stringify(['10:15', '12:00']))

                Simulate.change(picker, {
                    target: {
                        value: options[1].value
                    } as any // EventTarget (test)
                })

                expect(picker.value).toBe(JSON.stringify(['08:00', '09:45']))
            })

            it('checks for list picker onChange', async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                            <TimePicker
                                label="Time"
                                time="09:15"
                                times={[
                                    { label: 'Morning 8:00 AM', value: '8:00' },
                                    { label: 'Morning 9:15 AM', value: '9:15' },
                                    { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                                    { label: 'Morning 10:15 AM', value: '10:15' },
                                    { label: 'Morning 11:15 AM', value: '11:15' },
                                    { label: 'Noon 12:00 PM', value: '12:00' }
                                ]}
                                render="custom"
                            />
                        </ThemeProvider>
                    )
                })

                const { getByLabelText, container } = wrapper

                const picker = getByLabelText('Time')
                const options = container.querySelectorAll('button')

                expect(picker.value).toBe('09:15')

                await act(async () => {
                    picker.focus()
                    options[1].click()
                })

                expect(picker.value).toBe('08:00')
            })

            it('updates value and triggers onChange when list picker is selected', async () => {
                const onChangeSpy = jest.fn()
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                            <TimePicker
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
                                render="custom"
                            />
                        </ThemeProvider>
                    )
                })

                const { getByLabelText, container } = wrapper

                const picker = getByLabelText('Time')
                const options = container.querySelectorAll('button')

                // expect(onChangeSpy).not.toHaveBeenCalled()
                expect(picker.value).toBe('09:15')

                await act(async () => {
                    picker.focus()
                    options[1].click()
                })

                expect(onChangeSpy).toHaveBeenCalled()
                expect(picker.value).toBe('08:00')
            })
        })
    })

    describe('prop: onFocus', () => {
        it('shows list picker popover', () => {
            const onFocusSpy = jest.fn()
            const { getByLabelText } = render(
                <TimePicker 
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
                <TimePicker 
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

    describe('prop: onClick', () => {
        it('does not render list without times', () => {
            const onClickSpy = jest.fn()
            const { getByLabelText } = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <TimePicker
                        onClick={onClickSpy}
                        label="Time"
                    />                    
                </ThemeProvider>
            )

            const picker = getByLabelText('Time')
            const list = picker.parentNode.parentNode.nextSibling

            expect(onClickSpy).not.toHaveBeenCalled()
            expect(list).not.toBeInTheDocument()
        })

        it('shows list picker popover', async () => {
            const onClickSpy = jest.fn()
            let wrapper

            await act(async () => {
                wrapper = render(
                    <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                        <TimePicker
                            delayOpen={0}
                            onClick={onClickSpy}
                            label="Time"
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
            // const list = picker.parentNode.parentNode.parentNode.nextSibling

            expect(onClickSpy).not.toHaveBeenCalled()
            // expect(list).not.toBeVisible()

            await act(async () => {
                picker.click()
                picker.focus()                
            })

            expect(onClickSpy).toHaveBeenCalled()
            // expect(list).toBeVisible()
        })

        it('hides list picker popover when user clicks away', async () => {
            const onClickSpy = jest.fn()
            let wrapper

            await act(async () => {
                wrapper = render(
                    <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                        <TimePicker
                            delayOpen={0}
                            onClick={onClickSpy}
                            label="Time"
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

            const { getByLabelText, container } = wrapper

            const picker = getByLabelText('Time')
            // const list = picker.parentNode.parentNode.parentNode.nextSibling

            expect(onClickSpy).not.toHaveBeenCalled()
            // expect(list).not.toBeVisible()

            await act(async () => {
                picker.click()
                picker.focus()
            })

            expect(onClickSpy).toHaveBeenCalled()
            // expect(list).toBeVisible()

            await act(async () => {
                container.click()
            })

            // expect(list).not.toBeVisible()
        })
    })

    describe('props: onOpen/onClose', () => {
        it('triggers onOpen/onClose when popover opens/closes', async () => {
            const onOpenSpy = jest.fn()
            const onCloseSpy = jest.fn()
            let wrapper

            await act(async () => {
                wrapper = render(
                    <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                        <TimePicker
                            onOpen={onOpenSpy}
                            onClose={onCloseSpy}
                            label="Time"
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

            const { getByLabelText, container } = wrapper

            const picker = getByLabelText('Time')

            expect(onOpenSpy).toHaveBeenCalledTimes(0)
            expect(onCloseSpy).toHaveBeenCalledTimes(0)

            await act(async () => {
                picker.click()
            })

            expect(onOpenSpy).toHaveBeenCalledTimes(1)
            expect(onCloseSpy).toHaveBeenCalledTimes(0)

            await act(async () => {
                container.click()
            })

            expect(onOpenSpy).toHaveBeenCalledTimes(1)
            expect(onCloseSpy).toHaveBeenCalledTimes(1)
        })
    })

    it('open options on key down', async () => {
        let wrapper
        const onKeyDownSpy = jest.fn((event) => event.persist())

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <TimePicker
                        onKeyDown={onKeyDownSpy}
                        label="Time"
                        className="main"
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

        const { container } = wrapper

        const input = container.querySelector('.main')

        expect(onKeyDownSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.keyDown(input, { key: 'ArrowDown' })
        })

        expect(onKeyDownSpy).toHaveBeenCalledTimes(1)
    })

    it('focus in and focus out', async () => {
        let wrapper
        const onFocusSpy = jest.fn((event) => event.persist())

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <React.Fragment>
                        <TimePicker
                            onFocus={onFocusSpy}
                            className="main"
                            delayClose={0}
                            delayOpen={0}
                            label="Time"
                            times={[
                                { label: 'Morning 8:00 AM', value: '8:00' },
                                { label: 'Morning 9:15 AM', value: '9:15' },
                                { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                                { label: 'Morning 10:15 AM', value: '10:15' },
                                { label: 'Morning 11:15 AM', value: '11:15' },
                                { label: 'Noon 12:00 PM', value: '12:00' }
                            ]}
                        />
                        <TimePicker className="other" />
                    </React.Fragment>
                </ThemeProvider>
            )
        })

        const { container } = wrapper

        const input = container.querySelector('.main')
        const other = container.querySelector('.other')

        expect(onFocusSpy).not.toHaveBeenCalled()

        await act(async () => {
            fireEvent.click(input)
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(0)

        await act(async () => {
            fireEvent.focusOut(input, {
                relatedTarget: other
            })
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(0)
    })
})
