import * as React from 'react'
import { render } from '../../test-utils'
import Typography from './Typography'

describe('Typography Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <Typography>
                Test
            </Typography>
        )

        const text = getByText('Test')

        expect(text).toBeInTheDocument()
    })
})
