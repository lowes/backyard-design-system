import * as React from 'react'

import { render } from '../../../test-utils'

import MultiselectSkeleton from './MultiselectSkeleton'

describe('MultiselectSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<MultiselectSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<MultiselectSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should accept custom size', () => {
        const { getByTestId } = render(<MultiselectSkeleton size="small" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<MultiselectSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
