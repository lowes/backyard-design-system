import * as React from 'react'

import { render } from '../../../test-utils'

import FormHelperTextSkeleton from './FormHelperTextSkeleton'

describe('FormHelperTextSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<FormHelperTextSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(
            <FormHelperTextSkeleton width="20rem" data-testid="skeleton" />,
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<FormHelperTextSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
