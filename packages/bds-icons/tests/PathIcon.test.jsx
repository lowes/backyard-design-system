import * as React from 'react'
import { render } from '../test-utils'
import PathIcon from '../src/components/PathIcon'

describe('PathIcon Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <PathIcon 
                title="test"
                data-testid='icon'
            >
                <path fillRule="evenodd" d="M15 18v6H9v-6h6zm-9 0v6H0v-6h6zm18 0v6h-6v-6h6zM6 9v6H0V9h6zm9 0v6H9V9h6zm9 0v6h-6V9h6zM6 0v6H0V0h6zm18 0v6h-6V0h6zm-9 0v6H9V0h6z" />
            </PathIcon>
        )

        const icon = getByTestId('icon')

        expect(icon).toBeInTheDocument()
    })

    it('renders with size token', () => {
        const { getByTestId } = render(
            <PathIcon
                size="size_16"
                data-testid='icon'
            >
                <path fillRule="evenodd" d="M15 18v6H9v-6h6zm-9 0v6H0v-6h6zm18 0v6h-6v-6h6zM6 9v6H0V9h6zm9 0v6H9V9h6zm9 0v6h-6V9h6zM6 0v6H0V0h6zm18 0v6h-6V0h6zm-9 0v6H9V0h6z" />
            </PathIcon>
        )

        const icon = getByTestId('icon')

        expect(icon).toBeInTheDocument()
    })

    it('renders with size value', () => {
        const { getByTestId } = render(
            <PathIcon
                size="1rem"
                data-testid='icon'
            >
                <path fillRule="evenodd" d="M15 18v6H9v-6h6zm-9 0v6H0v-6h6zm18 0v6h-6v-6h6zM6 9v6H0V9h6zm9 0v6H9V9h6zm9 0v6h-6V9h6zM6 0v6H0V0h6zm18 0v6h-6V0h6zm-9 0v6H9V0h6z" />
            </PathIcon>
        )

        const icon = getByTestId('icon')

        expect(icon).toBeInTheDocument()
    })
})
