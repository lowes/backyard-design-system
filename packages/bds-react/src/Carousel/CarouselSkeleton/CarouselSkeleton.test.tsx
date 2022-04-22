import * as React from 'react'

import { render } from '../../../test-utils'

import CarouselSkeleton from './CarouselSkeleton'

describe('CarouselSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<CarouselSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<CarouselSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<CarouselSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
