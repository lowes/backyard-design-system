import * as React from 'react'

import { render } from '../../../test-utils'

import FileUploadSkeleton from './FileUploadSkeleton'

describe('FileUploadSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<FileUploadSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<FileUploadSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<FileUploadSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
