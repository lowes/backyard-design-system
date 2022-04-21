import * as React from 'react'
import { render } from '../../../test-utils'
import IconButtonSkeleton from './IconButtonSkeleton'

describe('IconButton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <IconButtonSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <IconButtonSkeleton animate={true} data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should render different sizes', () => {
        const sizes = ['small', 'medium', 'large']
        
        sizes.forEach(size => {
            const { getByTestId } = render(
                <IconButtonSkeleton size={size} data-testid={`skeleton-${size}`} />
            )
    
            const skeleton = getByTestId(`skeleton-${size}`)
            expect(skeleton).toBeInTheDocument()
        })
    })
})