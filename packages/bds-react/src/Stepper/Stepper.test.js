import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Stepper from './Stepper'

describe('Stepper Tests', () => {
    it('renders', () => {
        const { getAllByRole, getAllByDisplayValue, getAllByText } = render(
            <Stepper 
                label="Label"
            />
        )

        const [number] = getAllByDisplayValue('0')
        const [minus, plus] = getAllByRole('button')
        const [label] = getAllByText('Label')

        expect(minus).toBeInTheDocument()
        expect(number).toBeInTheDocument()
        expect(plus).toBeInTheDocument()
        expect(label).toBeInTheDocument()
    })

    it('increments on plus click', () => {
        const { getAllByRole, getAllByDisplayValue } = render(
            <Stepper
                defaultValue={1}
            />
        )

        const [number] = getAllByDisplayValue('1')
        const [minus, plus] = getAllByRole('button')

        expect(number.value).toBe('1')
        expect(number.getAttribute('data-value-previous')).toBe('1')
        expect(number.getAttribute('data-value-current')).toBe('1')

        fireEvent.click(plus)

        expect(number.value).toBe('2')
        expect(number.getAttribute('data-value-previous')).toBe('1')
        expect(number.getAttribute('data-value-current')).toBe('2')
    })

    it('decrements on minus click', () => {
        const { getAllByRole, getAllByDisplayValue } = render(
            <Stepper
                defaultValue={1}
            />
        )

        const [number] = getAllByDisplayValue('1')
        const [minus, plus] = getAllByRole('button')

        expect(number.value).toBe('1')
        expect(number.getAttribute('data-value-previous')).toBe('1')
        expect(number.getAttribute('data-value-current')).toBe('1')

        fireEvent.click(minus)

        expect(number.value).toBe('0')
        expect(number.getAttribute('data-value-previous')).toBe('1')
        expect(number.getAttribute('data-value-current')).toBe('0')
    })

    it('steps correctly', () => {
        const { getAllByRole, getAllByDisplayValue } = render(
            <Stepper
                step={2}
            />
        )

        const [number] = getAllByDisplayValue('0')
        const [minus, plus] = getAllByRole('button')

        expect(number.value).toBe('0')
        expect(number.getAttribute('data-value-previous')).toBe('0')
        expect(number.getAttribute('data-value-current')).toBe('0')

        fireEvent.click(plus)
        fireEvent.click(plus)

        expect(number.value).toBe('4')
        expect(number.getAttribute('data-value-previous')).toBe('2')
        expect(number.getAttribute('data-value-current')).toBe('4')

        fireEvent.click(minus)

        expect(number.value).toBe('2')
        expect(number.getAttribute('data-value-previous')).toBe('4')
        expect(number.getAttribute('data-value-current')).toBe('2')
    })

    it('steps correctly with fraction step, then triggers `onChange`', () => {
        const onChangeSpy = jest.fn()
        const { getAllByRole, getAllByDisplayValue } = render(
            <Stepper
                step={2.25}
                roundToStep={true}
                onChange={onChangeSpy}
            />
        )

        const [number] = getAllByDisplayValue('0')
        const [minus, plus] = getAllByRole('button')

        expect(number.value).toBe('0')
        expect(number.getAttribute('data-value-previous')).toBe('0')
        expect(number.getAttribute('data-value-current')).toBe('0')

        fireEvent.click(plus)
        fireEvent.click(plus)

        expect(number.value).toBe('4.5')
        expect(number.getAttribute('data-value-previous')).toBe('2.25')
        expect(number.getAttribute('data-value-current')).toBe('4.5')

        fireEvent.click(minus)

        expect(number.value).toBe('2.25')
        expect(number.getAttribute('data-value-previous')).toBe('4.5')
        expect(number.getAttribute('data-value-current')).toBe('2.25')
        expect(onChangeSpy).toHaveBeenCalledTimes(3)
    })

    it('rounds to nearest step correctly', () => {
        const { getAllByDisplayValue } = render(
            <Stepper
                min={12}
                max={29}
                step={7}
                roundToStep={true}
            />
        )

        const [number] = getAllByDisplayValue('12')

        fireEvent.focus(number)

        expect(number.value).toBe('12')
        expect(number.getAttribute('data-value-previous')).toBe('12')
        expect(number.getAttribute('data-value-current')).toBe('12')

        fireEvent.change(number, { target: { value: '17' } })

        expect(number.value).toBe('17')
        expect(number.getAttribute('data-value-previous')).toBe('12')
        expect(number.getAttribute('data-value-current')).toBe('17')

        fireEvent.blur(number)

        expect(number.value).toBe('19')
        expect(number.getAttribute('data-value-previous')).toBe('17')
        expect(number.getAttribute('data-value-current')).toBe('19')

        fireEvent.blur(number, { target: { value: '28' } })

        expect(number.value).toBe('26')
        expect(number.getAttribute('data-value-previous')).toBe('19')
        expect(number.getAttribute('data-value-current')).toBe('26')
    })

    it('clamps to min and max', () => {
        const { getAllByRole, getAllByDisplayValue } = render(
            <Stepper
                min={12}
                max={26}
                step={7}
                defaultValue={12}
                roundToStep={false}
            />
        )

        const [number] = getAllByDisplayValue('12')
        const [minus, plus] = getAllByRole('button')

        fireEvent.focus(number)

        expect(number.value).toBe('12')
        expect(number.getAttribute('data-value-previous')).toBe('12')
        expect(number.getAttribute('data-value-current')).toBe('12')
        expect(minus).toHaveAttribute('disabled')
        expect(plus).not.toHaveAttribute('disabled')

        fireEvent.blur(number, { target: { value: '999' } })

        expect(number.value).toBe('26')
        expect(number.getAttribute('data-value-previous')).toBe('12')
        expect(number.getAttribute('data-value-current')).toBe('26')
        expect(plus).toHaveAttribute('disabled')
        expect(minus).not.toHaveAttribute('disabled')

        fireEvent.blur(number, { target: { value: '-3' } })

        expect(number.value).toBe('12')
        expect(number.getAttribute('data-value-previous')).toBe('26')
        expect(number.getAttribute('data-value-current')).toBe('12')
        expect(minus).toHaveAttribute('disabled')
        expect(plus).not.toHaveAttribute('disabled')
    })

    it('calls `onBlur` and `onChange` when enabled', () => {
        const onBlurSpy = jest.fn()
        const onChangeSpy = jest.fn()
        const { getAllByDisplayValue } = render(
            <Stepper
                step={2}
                roundToStep={true}
                onChange={onChangeSpy}
                onBlur={onBlurSpy}
            />
        )

        const [number] = getAllByDisplayValue('0')

        fireEvent.focus(number)

        expect(number.value).toBe('0')
        expect(number.getAttribute('data-value-previous')).toBe('0')
        expect(number.getAttribute('data-value-current')).toBe('0')

        fireEvent.change(number, { target: { value: '3' } })

        expect(number.value).toBe('3')
        expect(number.getAttribute('data-value-previous')).toBe('0')
        expect(number.getAttribute('data-value-current')).toBe('3')

        fireEvent.blur(number)

        expect(number.value).toBe('4')
        expect(number.getAttribute('data-value-previous')).toBe('3')
        expect(number.getAttribute('data-value-current')).toBe('4')

        expect(onBlurSpy).toHaveBeenCalledTimes(1)
        expect(onChangeSpy).toHaveBeenCalledTimes(2)

    })
})
