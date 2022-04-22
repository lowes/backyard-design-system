import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import ListPicker from './ListPicker'

describe('ListPicker Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <ListPicker
                data-testid="List"
            />
        )

        const picker = getByTestId('List')

        expect(picker).toBeInTheDocument()
    })

    describe('prop: options', () => {
        describe('with', () => {
            it('renders a unordered list', () => {
                const { getByTestId } = render(
                    <ListPicker
                        data-testid="List"
                        type="time"
                        options={[
                            '8:00',
                            '9:00',
                            '12:00',
                            '14:00',
                            '15:00'
                        ]}
                    />
                )

                const picker = getByTestId('List')

                expect(picker.tagName).toBe('UL')
            })

            it('parses times as string', () => {
                const { getByTestId } = render(
                    <ListPicker
                        data-testid="List"
                        type="time"
                        value="9:00"
                        options={[
                            '8:00',
                            '9:00',
                            '12:00',
                            '14:00',
                            '15:00'
                        ]}
                    />
                )

                const picker = getByTestId('List')

                expect(picker).toBeInTheDocument()
            })

            it('parses times as an object', () => {
                const { getByTestId } = render(
                    <ListPicker
                        data-testid="List"
                        type="time"
                        value="9:15"
                        options={[
                            { label: 'Morning 8:00 AM', value: '8:00' },
                            { label: 'Morning 9:15 AM', value: '9:15' },
                            { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                            { label: 'Morning 10:15 AM', value: '10:15' },
                            { label: 'Morning 11:15 AM', value: '11:15' },
                            { label: 'Noon 12:00 PM', value: '12:00' }
                        ]}
                    />
                )

                const picker = getByTestId('List')

                expect(picker).toBeInTheDocument()
            })

            // it('parses times as a range object', () => {
            //     const onChangeSpy = jest.fn()
            //     const { getByTestId, container } = render(
            //         <ListPicker
            //             data-testid="List"
            //             type="time"
            //             onChange={onChangeSpy}
            //             defaultValue={JSON.stringify(['10:15', '12:00'])}
            //             options={[
            //                 { label: 'Morning 8:00 AM - 9:45 AM', start: '8:00', end: '9:45' },
            //                 { label: 'Morning 10:15 AM - 12:00 PM', start: '10:15', end: '12:00' },
            //                 { label: 'Afternoon 1:15 PM - 2:30 PM', start: '13:15', end: '14:30', disabled: true }
            //             ]}
            //         />
            //     )

            //     const picker = getByTestId('List')
            //     const options = container.querySelectorAll('button')

            //     // expect(onChangeSpy).not.toHaveBeenCalled()

            //     options[0].click()

            //     expect(onChangeSpy).toHaveBeenCalledWith(
            //         onChangeSpy.mock.calls[0][0], {
            //         container: picker,
            //         date: [null, null],
            //         disabled: false,
            //         index: 0,
            //         item: options[0],
            //         label: 'Morning 8:00 AM - 9:45 AM',
            //         text: 'Morning 8:00 AM - 9:45 AM',
            //         time: ['08:00', '09:45'],
            //         value: '["08:00","09:45"]'
            //     })
            // })

            // it('checks for list picker onChange', async () => {
            //     const onChangeSpy = jest.fn()
            //     let wrapper

            //     await act(async () => {
            //         wrapper = render(
            //             <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
            //                 <ListPicker
            //                     data-testid="List"
            //                     type="time"
            //                     onChange={onChangeSpy}
            //                     defaultValue="09:15"
            //                     options={[
            //                         { label: 'Morning 8:00 AM', value: '8:00' },
            //                         { label: 'Morning 9:15 AM', value: '9:15' },
            //                         { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
            //                         { label: 'Morning 10:15 AM', value: '10:15' },
            //                         { label: 'Morning 11:15 AM', value: '11:15' },
            //                         { label: 'Noon 12:00 PM', value: '12:00' }
            //                     ]}
            //                 />
            //             </ThemeProvider>
            //         )
            //     })

            //     const { getByTestId, container } = wrapper

            //     const picker = getByTestId('List')
            //     const options = container.querySelectorAll('button')

            //     // expect(onChangeSpy).not.toHaveBeenCalled()

            //     options[0].click()

            //     expect(onChangeSpy).toHaveBeenCalledWith(
            //         onChangeSpy.mock.calls[0][0], {
            //         container: picker,
            //         date: null,
            //         disabled: false,
            //         index: 0,
            //         item: options[0],
            //         label: 'Morning 8:00 AM',
            //         text: 'Morning 8:00 AM',
            //         time: '08:00',
            //         value: '08:00'
            //     })
            // })

            // it('updates value and triggers onChange when list picker is selected', async () => {
            //     const onChangeSpy = jest.fn()
            //     let wrapper

            //     await act(async () => {
            //         wrapper = render(
            //             <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
            //                 <ListPicker
            //                     data-testid="List"
            //                     onChange={onChangeSpy}
            //                     type="time"
            //                     value="09:15"
            //                     options={[
            //                         { label: 'Morning 8:00 AM', value: '8:00' },
            //                         { label: 'Morning 9:15 AM', value: '9:15' },
            //                         { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
            //                         { label: 'Morning 10:15 AM', value: '10:15' },
            //                         { label: 'Morning 11:15 AM', value: '11:15' },
            //                         { label: 'Noon 12:00 PM', value: '12:00' }
            //                     ]}
            //                 />
            //             </ThemeProvider>
            //         )
            //     })

            //     const { getByTestId, container } = wrapper

            //     const picker = getByTestId('List')
            //     const options = container.querySelectorAll('button')

            //     // expect(onChangeSpy).not.toHaveBeenCalled()

            //     options[0].click()

            //     expect(onChangeSpy).toHaveBeenCalledWith(
            //         onChangeSpy.mock.calls[0][0], {
            //         container: picker,
            //         date: null,
            //         disabled: false,
            //         index: 0,
            //         item: options[0],
            //         label: 'Morning 8:00 AM',
            //         text: 'Morning 8:00 AM',
            //         time: '08:00',
            //         value: '08:00'
            //     })
            // })
        })
    })

    describe('prop: onFocus', () => {
        it('shows list picker popover', () => {
            const onFocusSpy = jest.fn()
            const { getByTestId } = render(
                <ListPicker 
                    onFocus={onFocusSpy}
                    data-testid="List"
                />
            )

            const picker = getByTestId('List')

            expect(onFocusSpy).not.toHaveBeenCalled()

            fireEvent.focus(picker)

            expect(onFocusSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onBlur', () => {
        it('hides list picker popover', () => {
            const onBlurSpy = jest.fn()
            const { getByTestId } = render(
                <ListPicker 
                    onBlur={onBlurSpy}
                    data-testid="List"
                />
            )

            const picker = getByTestId('List')

            fireEvent.focus(picker)

            expect(onBlurSpy).not.toHaveBeenCalled()

            fireEvent.blur(picker)

            expect(onBlurSpy).toHaveBeenCalled()
        })
    })
})
