import * as React from 'react'
import { render } from '../../test-utils'
import Badge from './Badge'

describe('Badge Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <Badge>
                Placeholder
            </Badge>
        )

        const badge = getByText('Placeholder')

        expect(badge).toBeInTheDocument()
    })
})
