import React from 'react'
import { render } from '../../test-utils'

import Skeleton from '.'

describe('Skeleton tests', () => {
    it('Renders', () => {
        const { getByTestId } = render(
            <Skeleton variant='text' data-testid='1' />
        )

        const item = getByTestId('1')
        expect(item).toBeInTheDocument()
    })
})