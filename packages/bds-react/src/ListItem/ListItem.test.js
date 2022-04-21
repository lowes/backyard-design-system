import * as React from 'react'
import { render } from '../../test-utils'

import ListItem from '.'

describe('ListItem Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <ListItem data-testid='1'>Item 1</ListItem>
        )

        const item = getByTestId('1')

        expect(item).toBeInTheDocument()
    })
})