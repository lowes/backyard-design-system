import * as React from 'react'

import { render } from '../../../test-utils'

import GallerySkeleton from './GallerySkeleton'

describe('GallerySkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<GallerySkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<GallerySkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should accept custom thumbnails', () => {
        const { getByTestId } = render(<GallerySkeleton thumbnails={2} data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<GallerySkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
