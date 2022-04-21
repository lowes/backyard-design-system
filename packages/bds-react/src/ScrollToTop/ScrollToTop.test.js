import * as React from 'react'
import { fireEvent, render } from '../../test-utils'
import ScrollToTop from './ScrollToTop'

describe('ScrollToTop Tests', () => {
    describe('Renders', () => {
        it('default', () => {
            const { getByTestId } = render(<ScrollToTop data-testid="scroll" />)

            const scroll = getByTestId('scroll')

            expect(scroll).toBeInTheDocument()
        })

        it('renders with showAt=0', () => {
            const { getByTestId } = render(<ScrollToTop showAt={0} data-testid="scroll" />)

            const scroll = getByTestId('scroll')

            expect(scroll).toBeInTheDocument()
        })
    })

    it('should trigger `onClick`', () => {
        const onClickSpy = jest.fn()

        const { getByRole } = render(
            <ScrollToTop showAt={0} onClick={onClickSpy} data-testid="scroll" />,
        )

        const fab = getByRole('button')

        expect(onClickSpy).toHaveBeenCalledTimes(0)

        fireEvent.click(fab)

        expect(onClickSpy).toHaveBeenCalledTimes(1)
    })
})
