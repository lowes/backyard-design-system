import * as React from 'react'

import { render } from '../../../test-utils'

import DropdownSkeleton from './DropdownSkeleton'

describe('DropdownSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<DropdownSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<DropdownSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should accept custom size', () => {
        const { getByTestId } = render(<DropdownSkeleton size="small" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<DropdownSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
