import { fireEvent, render } from '../../../test-utils'
import * as React from 'react'
import RadioTile from './RadioTile'

describe('RadioTile Tests', () => {
    it('renders', () => {
        const { getByText, getByTestId } = render(
            <RadioTile data-testid='radio'>
                <span>Text</span>
            </RadioTile>
        )

        const card = getByTestId('radio')
        const children = getByText('Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })

    it('updates checked on change', () => {
        const { getByTestId } = render(
            <RadioTile data-testid="radio">
                <span>Text</span>
            </RadioTile>
        )

        const radio = getByTestId('radio')

        expect(radio.checked).toEqual(false)

        fireEvent.click(radio)

        expect(radio.checked).toEqual(true)
    })

    // note: see RadioGroup.test.js for radioGroup related tests
})
