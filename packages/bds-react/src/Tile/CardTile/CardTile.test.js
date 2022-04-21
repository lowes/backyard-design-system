import { render } from '../../../test-utils'
import * as React from 'react'
import CardTile from './CardTile'

describe('CardTile Tests', () => {
    it('renders', () => {
        const { getByText, getByTestId } = render(
            <CardTile data-testid='card'>
                Children Text
            </CardTile>
        )

        const card = getByTestId('card')
        const children = getByText('Children Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })
})
