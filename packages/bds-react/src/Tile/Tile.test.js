import { render } from '../../test-utils'
import * as React from 'react'
import Tile from './Tile'

describe('Tile Tests', () => {
    it('renders', () => {
        const { getByText, getByTestId } = render(
            <Tile data-testid='card'>
                Children Text
            </Tile>
        )

        const card = getByTestId('card')
        const children = getByText('Children Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })

    it('type:card renders', () => {
        const { getByText, getByTestId } = render(
            <Tile variant='card'
                  data-testid='card'>
                Children Text
            </Tile>
        )

        const card = getByTestId('card')
        const children = getByText('Children Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })

    it('type:link renders', () => {
        const { getByText, getByTestId } = render(
            <Tile variant='link'
                  href='#'
                  data-testid='card'>
                Children Text
            </Tile>
        )

        const card = getByTestId('card')
        const children = getByText('Children Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })

    it('type:radio renders', () => {
        const { getByText, getByTestId } = render(
            <Tile variant='radio'
                  data-testid='radio'>
                <span>Text</span>
            </Tile>
        )

        const card = getByTestId('radio')
        const children = getByText('Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })
})
