import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import DatePicker from './DatePicker'

describe('DatePicker Tests', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <DatePicker
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
                    <DatePicker
                        label="Date"
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker.tagName).toBe('INPUT')
            })

            describe('prop: onChange', () => {
                it('doesnt trigger `onChange` when not defined', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <DatePicker
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
                        <DatePicker
                            label="Date"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Date')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    fireEvent.change(picker, {
                        target: {
                            value: '2020-12-01'
                        }
                    })

                    expect(onChangeSpy).toHaveBeenCalled()
                })

                it('doesn\'t trigger `onChange` when invalid value change event occurs', () => {
                    const onChangeSpy = jest.fn()
                    const { getByLabelText } = render(
                        <DatePicker
                            label="Date"
                            onChange={onChangeSpy}
                        />
                    )

                    const picker = getByLabelText('Date')

                    expect(onChangeSpy).not.toHaveBeenCalled()

                    Simulate.change(picker, {
                        target: {
                            value: '99999999'
                        } as any // EventTarget (test)
                    })

                    expect(onChangeSpy).not.toHaveBeenCalled()
                })
            })
        })

        describe('with', () => {
            it('renders a select as the native picker', () => {
                const { getByLabelText } = render(
                    <DatePicker
                        label="Date"
                        dates={[
                            { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                            { label: 'Today 9:15 AM', value: '2020-07-19' },
                            { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                            { label: 'Next Day 10:15 AM', value: '2020-07-21' }
                        ]}
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker.tagName).toBe('SELECT')
            })

            it('parses dates as string', () => {
                const { getByLabelText } = render(
                    <DatePicker
                        label="Date"
                        date="2020-07-19"
                        dates={[
                            '2020-07-18',
                            '2020-07-19',
                            '2020-07-20',
                            '2020-07-21'
                        ]}
                    />
                )

                const picker = getByLabelText('Date')

                expect(picker).toBeInTheDocument()
            })

            it('parses dates as an object', () => {
                const { getByLabelText } = render(
                    <DatePicker
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

            it('checks for list picker onChange', async () => {
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                            <DatePicker
                                open={true}
                                label="Date"
                                date="2020-07-19"
                                render="custom"
                            />
                        </ThemeProvider>
                    )
                })

                const { getByLabelText, container } = wrapper

                const picker = getByLabelText('Date')
                const day = container.querySelector('[aria-label="Jul 19, 2020"]')

                expect(picker.value).toBe('07/19/2020')

                await act(async () => {
                    picker.focus()
                    fireEvent.mouseDown(day)
                })

                expect(picker.value).toBe('07/19/2020')
            })

            it('updates value and triggers onChange when list picker is selected', async () => {
                const onChangeSpy = jest.fn()
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                            <DatePicker
                                open={true}
                                label="Date"
                                onChange={onChangeSpy}
                                date="2020-07-19"
                                render="custom"
                            />
                        </ThemeProvider>
                    )
                })

                const { getByLabelText, container } = wrapper

                const picker = getByLabelText('Date')
                const day = container.querySelector('[aria-label="Jul 19, 2020"]')

                expect(onChangeSpy).toHaveBeenCalledTimes(0)
                expect(picker.value).toBe('07/19/2020')

                await act(async () => {
                    picker.focus()
                    fireEvent.mouseDown(day)
                })

                expect(onChangeSpy).toHaveBeenCalledTimes(1)
                expect(picker.value).toBe('07/19/2020')
            })
        })
    })

    describe('prop: onFocus', () => {
        it('shows list picker popover', () => {
            const onFocusSpy = jest.fn()
            const { getByLabelText } = render(
                <DatePicker
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
        it('hides list picker popover', () => {
            const onBlurSpy = jest.fn()
            const { getByLabelText } = render(
                <DatePicker
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

    describe('prop: onClick', () => {
        // it('renders calendar without dates', async () => {
        //     let wrapper

        //     const onClickSpy = jest.fn()

        //     await act(async () => {
        //         wrapper = render(
        //             <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
        //                 <DatePicker
        //                     onClick={onClickSpy}
        //                     label="Date"
        //                     render="custom"
        //                 />
        //             </ThemeProvider>
        //         )
        //     })

        //     const { getAllByLabelText } = wrapper

        //     const picker = getAllByLabelText('Date')[0]
        //     const list = picker.parentNode.parentNode.parentNode.nextSibling

        //     expect(onClickSpy).not.toHaveBeenCalled()
        //     expect(list).toBeInTheDocument()
        // })

        it('shows calendar picker popover', async () => {
            const onClickSpy = jest.fn()
            let wrapper

            await act(async () => {
                wrapper = render(
                    <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                        <DatePicker
                            delayOpen={0}
                            onClick={onClickSpy}
                            label="Date"
                            dates={[
                                '2020-07-18',
                                '2020-07-19',
                                '2020-07-20',
                                '2020-07-21'
                            ]}
                        />
                    </ThemeProvider>
                )
            })

            const { getByLabelText } = wrapper

            const picker = getByLabelText('Date')
            // const list = picker.parentNode.parentNode.parentNode.nextSibling

            expect(onClickSpy).not.toHaveBeenCalled()
            // expect(list).not.toBeVisible()

            await act(async () => {
                picker.click()
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
                        <DatePicker
                            delayOpen={0}
                            onClick={onClickSpy}
                            label="Date"
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

            const { getAllByLabelText, container } = wrapper

            const picker = getAllByLabelText('Date')[0]
            // const list = picker.parentNode.parentNode.parentNode.nextSibling

            expect(onClickSpy).not.toHaveBeenCalled()
            // expect(list).not.toBeVisible()

            await act(async () => {
                picker.click()
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
                        <DatePicker
                            onOpen={onOpenSpy}
                            onClose={onCloseSpy}
                            label="Date"
                            date="2020-07-19"
                            disableDates={[
                                '2020-07-18',
                                '2020-07-19',
                                '2020-07-20',
                                '2020-07-21'
                            ]}
                        />
                    </ThemeProvider>
                )
            })

            const { getByLabelText, container } = wrapper

            const picker = getByLabelText('Date')

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
                    <DatePicker
                        onKeyDown={onKeyDownSpy}
                        label="Date"
                        date="2020-07-19"
                        disableDates={[
                            '2020-07-18',
                            '2020-07-19',
                            '2020-07-20',
                            '2020-07-21'
                        ]}
                    />
                </ThemeProvider>
            )
        })

        const { container } = wrapper

        const input = container.querySelector('input')

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
                        <DatePicker
                            className="main"
                            delayClose={0}
                            delayOpen={0}
                            onFocus={onFocusSpy}
                            label="Date"
                            date="2020-07-19"
                            disableDates={[
                                '2020-07-18',
                                '2020-07-19',
                                '2020-07-20',
                                '2020-07-21'
                            ]}
                        />
                        <DatePicker className="other" />
                    </React.Fragment>
                </ThemeProvider>
            )
        })

        const { container } = wrapper

        const input = container.querySelector('.main')
        const other = container.querySelector('.other')

        expect(onFocusSpy).toHaveBeenCalled()

        await act(async () => {
            fireEvent.focus(input)
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(2)

        await act(async () => {
            fireEvent.focusOut(input, {
                relatedTarget: other
            })
        })

        expect(onFocusSpy).toHaveBeenCalledTimes(2)
    })
})
