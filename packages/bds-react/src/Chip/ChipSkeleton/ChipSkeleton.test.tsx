import * as React from 'react'

import { render } from '../../../test-utils'

import ChipSkeleton from './ChipSkeleton'

describe('ChipSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<ChipSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<ChipSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<ChipSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
