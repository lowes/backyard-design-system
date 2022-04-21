import * as React from 'react'

import { render } from '../../../test-utils'

import BreadcrumbSkeleton from './BreadcrumbSkeleton'

describe('BreadcrumbSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<BreadcrumbSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <BreadcrumbSkeleton animate={true} data-testid="skeleton-animate" />,
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change in width', () => {
        const { getByTestId } = render(
            <BreadcrumbSkeleton width="30rem" data-testid="skeleton-width" />,
        )

        const skeleton = getByTestId('skeleton-width')
        expect(skeleton).toBeInTheDocument()
    })
})
