import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Password from './Password'

describe('Password Tests', () => {
    it('renders', () => {
        const { getByDisplayValue } = render(
            <Password defaultValue="p455" />
        )

        const textinput = getByDisplayValue('p455')

        expect(textinput).toBeInTheDocument()
    })

    describe('on toggle click', () => {
        it('toggles between hidden and visible password text', () => {
            const { getByDisplayValue } = render(
                <Password defaultValue="p455" />
            )

            const textInput = getByDisplayValue('p455')
            const iconAfter = textInput.nextSibling.lastChild

            expect(textInput).toHaveAttribute('type', 'password')

            fireEvent.click(iconAfter)

            expect(textInput).toHaveAttribute('type', 'text')
        })
    })
})
