import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import SelectPicker from './SelectPicker'

describe('SelectPicker Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <SelectPicker
                data-testid="Select"
            />
        )

        const picker = getByTestId('Select')

        expect(picker).toBeInTheDocument()
    })

    describe('prop: options', () => {
        describe('with', () => {
            it('renders a select', () => {
                const { getByTestId } = render(
                    <SelectPicker
                        data-testid="Select"
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

                const picker = getByTestId('Select')

                expect(picker.tagName).toBe('SELECT')
            })

            it('parses times as string', () => {
                const { getByTestId } = render(
                    <SelectPicker
                        data-testid="Select"
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

                const picker = getByTestId('Select')

                expect(picker).toBeInTheDocument()
            })

            it('parses times as an object', () => {
                const { getByTestId } = render(
                    <SelectPicker
                        data-testid="Select"
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

                const picker = getByTestId('Select')

                expect(picker).toBeInTheDocument()
            })

            // it('parses times as a range object', () => {
            //     const onChangeSpy = jest.fn()
            //     const { getByTestId, container } = render(
            //         <SelectPicker
            //             data-testid="Select"
            //             type="time"
            //             defaultValue={JSON.stringify(['10:15', '12:00'])}
            //             onChange={onChangeSpy}
            //             options={[
            //                 { label: 'Morning 8:00 AM - 9:45 AM', start: '8:00', end: '9:45' },
            //                 { label: 'Morning 10:15 AM - 12:00 PM', start: '10:15', end: '12:00' },
            //                 { label: 'Afternoon 1:15 PM - 2:30 PM', start: '13:15', end: '14:30', disabled: true }
            //             ]}
            //         />
            //     )

            //     const picker = getByTestId('Select')
            //     const options = container.querySelectorAll('option')

            //     expect(onChangeSpy).not.toHaveBeenCalled()
            //     expect(picker.value).toBe(JSON.stringify(['10:15', '12:00']))

            //     Simulate.change(picker, {
            //         target: {
            //             value: options[1].value
            //         }
            //     })

            //     expect(onChangeSpy).toHaveBeenCalled()
            //     expect(picker.value).toBe(JSON.stringify(['08:00', '09:45']))
            // })

            // it('checks for list picker onChange', async () => {
            //     let wrapper

            //     await act(async () => {
            //         wrapper = render(
            //             <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
            //                 <SelectPicker
            //                     data-testid="Select"
            //                     type="time"
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

            //     const picker = getByTestId('Select')
            //     const options = container.querySelectorAll('option')

            //     expect(picker.value).toBe('09:15')

            //     Simulate.change(picker, {
            //         target: {
            //             value: options[1].value
            //         }
            //     })

            //     expect(picker.value).toBe('08:00')
            // })

            // it('updates value and triggers onChange when list picker is selected', async () => {
            //     const onChangeSpy = jest.fn()
            //     let wrapper

            //     await act(async () => {
            //         wrapper = render(
            //             <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
            //                 <SelectPicker
            //                     data-testid="Select"
            //                     onChange={onChangeSpy}
            //                     type="time"
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

            //     const picker = getByTestId('Select')
            //     const options = container.querySelectorAll('option')

            //     expect(onChangeSpy).not.toHaveBeenCalled()
            //     expect(picker.value).toBe('09:15')

            //     Simulate.change(picker, {
            //         target: {
            //             value: options[1].value
            //         }
            //     })

            //     expect(onChangeSpy).toHaveBeenCalled()
            //     expect(picker.value).toBe('08:00')
            // })
        })
    })

    describe('prop: onFocus', () => {
        it('shows list picker popover', () => {
            const onFocusSpy = jest.fn()
            const { getByTestId } = render(
                <SelectPicker 
                    onFocus={onFocusSpy}
                    data-testid="Select"
                />
            )

            const picker = getByTestId('Select')

            expect(onFocusSpy).not.toHaveBeenCalled()

            fireEvent.focus(picker)

            expect(onFocusSpy).toHaveBeenCalled()
        })
    })

    describe('prop: onBlur', () => {
        it('hides list picker popover', () => {
            const onBlurSpy = jest.fn()
            const { getByTestId } = render(
                <SelectPicker 
                    onBlur={onBlurSpy}
                    data-testid="Select"
                />
            )

            const picker = getByTestId('Select')

            fireEvent.focus(picker)

            expect(onBlurSpy).not.toHaveBeenCalled()

            fireEvent.blur(picker)

            expect(onBlurSpy).toHaveBeenCalled()
        })
    })
})
