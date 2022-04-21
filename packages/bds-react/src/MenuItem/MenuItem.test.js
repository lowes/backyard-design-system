import * as React from 'react'
import { render } from '../../test-utils'

import MenuItem from '../MenuItem'

describe('MenuItem Tests', () => {
    it('renders', () => {
        const { getByRole } = render(<MenuItem>Item 1</MenuItem>)

        const item = getByRole('menuitem')

        expect(item).toBeInTheDocument()
    })
})
