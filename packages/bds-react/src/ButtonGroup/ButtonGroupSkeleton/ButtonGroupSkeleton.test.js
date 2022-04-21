import * as React from 'react'
import { render } from '../../../test-utils'
import ButtonGroupSkeleton from './ButtonGroupSkeleton'

describe('ButtonGroup Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <ButtonGroupSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(
            <ButtonGroupSkeleton width='20rem' data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <ButtonGroupSkeleton animate={true} data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should render different sizes', () => {
        const sizes = ['small', 'medium', 'large']
        
        sizes.forEach(size => {
            const { getByTestId } = render(
                <ButtonGroupSkeleton size={size} data-testid={`skeleton-${size}`} />
            )
    
            const skeleton = getByTestId(`skeleton-${size}`)
            expect(skeleton).toBeInTheDocument()
        })
    })
})