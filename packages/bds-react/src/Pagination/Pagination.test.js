import * as React from 'react'
import { render, fireEvent } from '../../test-utils'
import Pagination from './Pagination'

describe('Pagination Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Pagination
                count={10}
                data-testid="pagination"
            />
        )

        const pagination = getByTestId('pagination')

        expect(pagination).toBeInTheDocument()
    })

    describe('event: change', () => {
        it('should trigger `onChange` when enabled', () => {
            const onChangeSpy = jest.fn(event => event.persist())
            const { getByText } = render(
                <Pagination
                    count={10}
                    data-testid="pagination"
                    onChange={onChangeSpy}
                />
            )

            const item = getByText('3')

            fireEvent.click(item)

            expect(onChangeSpy).toHaveBeenCalledTimes(1)
            expect(onChangeSpy).toHaveBeenCalledWith({
                ...onChangeSpy.mock.calls[0][0]
            }, 3)
        })

        it('should not trigger `onChange` when disabled', () => {
            const onChangeSpy = jest.fn()
            const { getByText } = render(
                <Pagination
                    disabled
                    count={10}
                    data-testid="pagination"
                    onChange={onChangeSpy}
                />
            )

            const item = getByText('3')

            fireEvent.click(item)

            expect(onChangeSpy).not.toHaveBeenCalled()
        })
    })

    describe('keyboard accessibility', () => {
        it('triggers `onChange` when `Space` is pressed on the pagination item', () => {
            const onChangeSpy = jest.fn()
            const { getByText } = render(
                <Pagination
                    count={10}
                    data-testid="pagination"
                    onChange={onChangeSpy}
                />
            )

            const item = getByText('3')

            item.focus()

            fireEvent.keyDown(item, {
                key: ' '
            })

            expect(onChangeSpy).toHaveBeenCalled()
        })
    })
})
