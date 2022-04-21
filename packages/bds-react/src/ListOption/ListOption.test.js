import * as React from 'react'
import { render } from '../../test-utils'

import ListOption from '.'

describe('ListOption Tests', () => {
    it('renders', () => {
        const { getByRole } = render(
            <ListOption>Item 1</ListOption>
        )

        const item = getByRole('button')

        expect(item).toBeInTheDocument()
    })
})
