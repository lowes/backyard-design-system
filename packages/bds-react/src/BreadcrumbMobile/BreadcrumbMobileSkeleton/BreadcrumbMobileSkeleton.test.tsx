import * as React from 'react'

import { render } from '../../../test-utils'

import BreadcrumbMobileSkeleton from './BreadcrumbMobileSkeleton'

describe('BreadcrumbMobileSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<BreadcrumbMobileSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <BreadcrumbMobileSkeleton animate={true} data-testid="skeleton-animate" />,
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change in width', () => {
        const { getByTestId } = render(
            <BreadcrumbMobileSkeleton width="30rem" data-testid="skeleton-width" />,
        )

        const skeleton = getByTestId('skeleton-width')
        expect(skeleton).toBeInTheDocument()
    })
})
