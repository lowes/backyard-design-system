import * as React from 'react'
import { Simulate, render, fireEvent, act } from '../../test-utils'
import CalendarPicker from './CalendarPicker'

describe('CalendarPicker Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <CalendarPicker
                data-testid="Calendar"
            />
        )

        const picker = getByTestId('Calendar')

        expect(picker).toBeInTheDocument()
    })

    describe('prop: dates', () => {
        describe('with', () => {
            it('parses dates as string', () => {
                const { getByTestId } = render(
                    <CalendarPicker
                        data-testid="Calendar"
                        date="2020-07-19"
                        dates={[
                            '2020-07-18',
                            '2020-07-19',
                            '2020-07-20',
                            '2020-07-21'
                        ]}
                    />
                )

                const picker = getByTestId('Calendar')

                expect(picker).toBeInTheDocument()
            })

            it('parses dates as an object', () => {
                const { getByTestId } = render(
                    <CalendarPicker
                        data-testid="Calendar"
                        date="2020-07-19"
                        dates={[
                            { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
                            { label: 'Today 9:15 AM', value: '2020-07-19' },
                            { label: 'Tomorrow 9:45 AM', value: '2020-07-20', disabled: true },
                            { label: 'Next Day 10:15 AM', value: '2020-07-21' }
                        ]}
                    />
                )

                const picker = getByTestId('Calendar')

                expect(picker).toBeInTheDocument()
            })

            it('triggers onChange when calendar picker is selected', async () => {
                const onChangeSpy = jest.fn()
                let wrapper

                await act(async () => {
                    wrapper = render(
                        <CalendarPicker
                            data-testid="Calendar"
                            onChange={onChangeSpy}
                            date="2020-07-19"
                        />
                    )
                })

                const { getByTestId, container } = wrapper

                const picker = getByTestId('Calendar')
                const weeks = container.querySelectorAll('.week')
                const week = weeks[2].children
                const day = week[6]

                expect(onChangeSpy).toHaveBeenCalledTimes(0)

                await act(async () => {
                    picker.focus()
                    Simulate.mouseDown(day)
                })

                expect(onChangeSpy).toHaveBeenCalledTimes(1)
            })
        })
    })

    describe('event: Keyboard', () => {
        it('should focus in all directions', async () => {
            let wrapper

            await act(async () => {
                wrapper = render(
                    <CalendarPicker
                        data-testid="Calendar"
                        date="2020-07-19"
                    />
                )
            })

            const { getByTestId, container } = wrapper

            const picker = getByTestId('Calendar')
            const weeks = container.querySelectorAll('.week')
            const week = weeks[3].children
            const day = week[0]

            await act(async () => {
                picker.focus()
                fireEvent.keyDown(picker, {
                    key: 'ArrowUp'
                })
            })

            expect(day).toHaveFocus()
        })
    })
})
