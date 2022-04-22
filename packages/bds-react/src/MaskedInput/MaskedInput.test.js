import * as React from 'react'
import { render } from '../../test-utils'
import MaskedInput from './MaskedInput'

describe('MaskedInput Test', () => {
    it('renders', () => {
        const { getByLabelText } = render(
            <MaskedInput label='Masked input' />
        )

        const input = getByLabelText('Masked input')
        expect(input).toBeInTheDocument()
    })
})

describe('Phone number mask tests', () => {
    const options = [
        { value: '8', expected: '(8' },
        { value: '80', expected: '(80' },
        { value: '800', expected: '(800' },
        { value: '8005', expected: '(800) 5' },
        { value: '80055', expected: '(800) 55' },
        { value: '800555', expected: '(800) 555' },
        { value: '8005556', expected: '(800) 555-6' },
        { value: '80055566', expected: '(800) 555-66' },
        { value: '800555666', expected: '(800) 555-666' },
        { value: '8005556666', expected: '(800) 555-6666' }
    ]

    options.forEach(option => {
        it(`tests input value of ${option.value}`, () => {
            const { getByDisplayValue } = render(
                <MaskedInput 
                    mask='phone'
                    value={option.value}
                />
            )

            const input = getByDisplayValue(option.expected)
            expect(input).toBeInTheDocument()
        })
    })
})