import * as React from 'react'
import { render } from '../../test-utils'

import OrderedList from '.'

describe('OrderedList Tests', () => {
    it('Renders as parent <ul>', () => {
        const { getByTestId } = render(
            <OrderedList data-testid='1'></OrderedList>
        )

        const item = getByTestId('1')

        expect(item).toBeInTheDocument()
    })

    it('Renders as nested <ul>', () => {
        const { getByTestId } = render(
            <OrderedList nested data-testid='2'></OrderedList>
        )

        const item = getByTestId('2')

        expect(item).toBeInTheDocument()
    })

    it('Renders as a decimal indicator', () => {
        const { getByTestId } = render(
            <OrderedList type='decimal' data-testid='3'></OrderedList>
        )

        const item = getByTestId('3')

        expect(item).toBeInTheDocument()
    })

    it('Renders as a lower-roman indicator', () => {
        const { getByTestId } = render(
            <OrderedList type='lower-roman' data-testid='4'></OrderedList>
        )

        const item = getByTestId('4')

        expect(item).toBeInTheDocument()
    })

    it('Renders as a lower-roman indicator', () => {
        const { getByTestId } = render(
            <OrderedList type='lower-latin' data-testid='5'></OrderedList>
        )

        const item = getByTestId('5')

        expect(item).toBeInTheDocument()
    })
})