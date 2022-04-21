import { render } from '../../../test-utils'
import * as React from 'react'
import LinkTile from './LinkTile'

describe('LinkTile Tests', () => {
    it('renders', () => {
        const { getByText, getByTestId } = render(
            <LinkTile href='#'
                      data-testid='card'>
                Children Text
            </LinkTile>
        )

        const card = getByTestId('card')
        const children = getByText('Children Text')

        expect(card).toBeInTheDocument()
        expect(children).toBeInTheDocument()
    })
})
