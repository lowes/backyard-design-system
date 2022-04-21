import * as React from 'react'

import { render } from '../../../test-utils'

import PasswordSkeleton from './PasswordSkeleton'

describe('PasswordSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<PasswordSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<PasswordSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should accept custom size', () => {
        const { getByTestId } = render(<PasswordSkeleton size="small" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<PasswordSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
