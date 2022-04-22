import * as React from 'react'
import { render } from '../../../test-utils'
import RatingSkeleton from './RatingSkeleton'

describe('RatingSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <RatingSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <RatingSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have value option', () => {
        const { getByTestId } = render(
            <RatingSkeleton withValue={true} data-testid='skeleton-value' />
        )

        const skeleton = getByTestId('skeleton-value')
        expect(skeleton).toBeInTheDocument()
    })

    it('should render in different sizes', () => {
        const sizes = ['small', 'medium', 'large', 'jumbo']

        sizes.forEach(size => {
            const { getByTestId } = render(
                <RatingSkeleton size={size} data-testid={`skeleton-${size}`} />
            )
    
            const skeleton = getByTestId(`skeleton-${size}`)
            expect(skeleton).toBeInTheDocument()
        })
    })
})