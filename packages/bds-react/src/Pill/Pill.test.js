import * as React from 'react'
import { render } from '../../test-utils'
import Pill from './Pill'

describe('Pill Tests', () => {
    it('renders', () => {
        const { getByText } = render(
            <Pill
                value={23}
            />
        )

        const pill = getByText('23')

        expect(pill).toBeInTheDocument()
        expect(pill).toBeVisible()
    })

    it('outlined variant dot should not be visible', () => {
        const { getByTestId } = render(
            <Pill
                variant="outlined"
                shape="dot"
                data-testid="pill"
            />
        )

        const pill = getByTestId('pill')

        expect(pill).toBeInTheDocument()
        // @todo uncomment when jsdom inheritance bug is fixed
        // @link https://github.com/testing-library/jest-dom/issues/209
        // expect(pill).not.toBeVisible()
    })

    it('should not be visible if given invisible prop', () => {
        const { getByTestId } = render(
            <Pill
                invisible
                value={23}
                data-testid="pill"
            />
        )

        const pill = getByTestId('pill')

        expect(pill).toBeInTheDocument()
        // @todo uncomment when jsdom inheritance bug is fixed
        // @link https://github.com/testing-library/jest-dom/issues/209
        // expect(pill).not.toBeVisible()
    })
})
