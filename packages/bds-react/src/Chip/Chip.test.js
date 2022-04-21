import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Chip from './Chip'
import RadioGroup from '../RadioGroup'

describe('Chip Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <Chip label="test" />
        )

        const chip = getByRole('checkbox')

        expect(chip).toBeInTheDocument()
    })

    describe('event: focus', () => {
        it('should trigger `onFocus` when enabled', () => {
            const onFocusSpy = jest.fn()
            const { getByRole } = render(
                <Chip label="test" onFocus={onFocusSpy} />
            )

            const chip = getByRole('checkbox')

            fireEvent.focus(chip)

            expect(onFocusSpy).toHaveBeenCalledTimes(1)
        })

        it('should not trigger `onFocus` when disabled', () => {
            const onFocusSpy = jest.fn()
            const { getByRole } = render(
                <Chip disabled label="test" onFocus={onFocusSpy} />
            )

            const chip = getByRole('checkbox')

            fireEvent.focus(chip)

            expect(onFocusSpy).not.toHaveBeenCalled()
        })
    })

    describe('variant: choice', () => {
        let chip0, chip1, chip2

        const onClickSpy = jest.fn()

        beforeEach(() => {
            const { getAllByRole } = render(
                <React.Fragment>
                    <RadioGroup name="test">
                        <Chip variant="choice" label="test0" name="test" value="0" />
                        <Chip defaultChecked variant="choice" label="test1" name="test" value="1" />
                        <Chip variant="choice" label="test2" name="test" value="2" onClick={onClickSpy} />
                    </RadioGroup>
                </React.Fragment>
            )

            const [_chip0, _chip1, _chip2] = getAllByRole('radio')
            chip0 = _chip0
            chip1 = _chip1
            chip2 = _chip2
        })

        it('should default to chip checked', () => {
            expect(chip0.checked).toBe(false)
            expect(chip1.checked).toBe(true)
            expect(chip2.checked).toBe(false)
        })

        it('should trigger `onClick` when defined', () => {
            expect(onClickSpy).not.toHaveBeenCalled()

            fireEvent.click(chip2)

            expect(onClickSpy).toHaveBeenCalled()
        })

        it('should change checked radio when selecting another', () => {
            fireEvent.click(chip2)

            expect(chip0.checked).toBe(false)
            expect(chip1.checked).toBe(false)
            expect(chip2.checked).toBe(true)
        })
    })

    describe('variant: filter', () => {
        let chip0, chip1, chip2

        const onClickSpy = jest.fn()

        beforeEach(() => {
            const { getAllByRole } = render(
                <React.Fragment>
                    <RadioGroup name="test">
                        <Chip variant="filter" label="test0" name="test" value="0" />
                        <Chip defaultChecked variant="filter" label="test1" name="test" value="1" />
                        <Chip variant="filter" label="test2" name="test" value="2" onClick={onClickSpy} />
                    </RadioGroup>
                </React.Fragment>
            )

            const [_chip0, _chip1, _chip2] = getAllByRole('checkbox')
            chip0 = _chip0
            chip1 = _chip1
            chip2 = _chip2
        })

        it('should default to chip checked', () => {
            expect(chip0.checked).toBe(false)
            expect(chip1.checked).toBe(true)
            expect(chip2.checked).toBe(false)
        })

        
        it('should trigger `onClick` when defined', () => {
            expect(onClickSpy).not.toHaveBeenCalled()

            fireEvent.click(chip2)

            expect(onClickSpy).toHaveBeenCalled()
        })

        describe('event: keyup', () => {
            it('should blur chip on Escape key', () => {
                chip2.focus()

                expect(chip2).toHaveFocus()

                fireEvent.keyUp(chip2, { key: 'Escape' })

                expect(chip2).not.toHaveFocus()
            })
        })

        it('should change checked checkboxes when selecting another', () => {
            fireEvent.click(chip2)

            expect(chip0.checked).toBe(false)
            expect(chip1.checked).toBe(true)
            expect(chip2.checked).toBe(true)
        })
    })

    describe('variant: input', () => {
        let chip0, chip1, chip2

        const onClickSpy = jest.fn()
        const onDeleteSpy = jest.fn()
        const onKeyUpSpy = jest.fn()

        beforeEach(() => {
            const { getAllByRole } = render(
                <React.Fragment>
                    <RadioGroup name="test">
                        <Chip variant="input" label="test0" name="test" value="0" />
                        <Chip defaultChecked variant="input" id="test1" name="test" value="1" />
                        <Chip variant="input" label="test2" name="test" value="2" onClick={onClickSpy} onDelete={onDeleteSpy} onKeyUp={onKeyUpSpy} />
                    </RadioGroup>
                </React.Fragment>
            )

            const [_chip0, _chip1, _chip2] = getAllByRole('checkbox')
            chip0 = _chip0
            chip1 = _chip1
            chip2 = _chip2

            jest.clearAllMocks()
        })

        it('should default to render', () => {
            expect(chip0).toBeInTheDocument()
            expect(chip1).toBeInTheDocument()
            expect(chip2).toBeInTheDocument()
        })

        describe('event: click', () => {
            it('should trigger `onClick` and `onDelete` when defined', () => {
                expect(onClickSpy).not.toHaveBeenCalled()
                expect(onDeleteSpy).not.toHaveBeenCalled()

                fireEvent.click(chip2)

                expect(onClickSpy).toHaveBeenCalled()
                expect(onDeleteSpy).toHaveBeenCalled()
            })

            it('should not trigger `onClick` when disabled is true', () => {
                const eventHandlers = {
                    onClickFn: () => {}
                };

                const onClickSpy = jest.spyOn(eventHandlers, 'onClickFn')

                const { container } = render(
                    <Chip
                        className='chip'
                        label='chip'
                        name='chip'
                        disabled={true} />
                )

                const chip = container.querySelector('.chip')

                expect(onClickSpy).toHaveBeenCalledTimes(0)
            })

            it('should remove clicked chip', () => {
                fireEvent.click(chip2)

                expect(chip0).toBeInTheDocument()
                expect(chip1).toBeInTheDocument()
                expect(chip2).not.toBeInTheDocument()
            })
        })

        describe('event: keydown', () => {
            it('should trigger `onKeyDown` when defined', () => {
                const eventHandler = {
                    onKeyDownFn: (event, obj) => {}
                }

                const onKeyDownSpy = jest.spyOn(eventHandler, 'onKeyDownFn')

                const { container } = render(
                    <Chip
                        onKeyDown={eventHandler.onKeyDownFn} />
                )

                const chip = container.querySelector('.chip--input')

                fireEvent.keyDown(chip, {
                    key: 'Enter'
                })

                expect(onKeyDownSpy).toHaveBeenCalledTimes(1)
            })
        })

        describe('event: keyup', () => {
            it('should trigger `onKeyUp` and `onDelete` when defined', () => {
                expect(onKeyUpSpy).not.toHaveBeenCalled()
                expect(onDeleteSpy).not.toHaveBeenCalled()

                fireEvent.keyUp(chip2, { key: 'Delete' })

                expect(onKeyUpSpy).toHaveBeenCalled()
                expect(onDeleteSpy).toHaveBeenCalled()
            })

            it('should remove clicked chip', () => {
                fireEvent.keyUp(chip2, { key: 'Delete' })

                expect(chip0).toBeInTheDocument()
                expect(chip1).toBeInTheDocument()
                expect(chip2).not.toBeInTheDocument()
            })
        })
    })
})
