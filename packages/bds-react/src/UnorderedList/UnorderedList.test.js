import * as React from 'react'
import { render } from '../../test-utils'

import UnorderedList from '.'

describe('UnorderedList Tests', () => {
    it('Renders as parent <ul>', () => {
        const { getByTestId } = render(
            <UnorderedList data-testid='1'></UnorderedList>
        )

        const item = getByTestId('1')

        expect(item).toBeInTheDocument()
    })

    it('Renders as nested <ul>', () => {
        const { getByTestId } = render(
            <UnorderedList nested data-testid='2'></UnorderedList>
        )

        const item = getByTestId('2')

        expect(item).toBeInTheDocument()
    })
})