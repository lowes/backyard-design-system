import * as React from 'react'
import { render } from '../../../test-utils'
import ProgressStepperSkeleton from './ProgressStepperSkeleton'

describe('ProgressStepperSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <ProgressStepperSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <ProgressStepperSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change step quantity', () => {
        const { getByTestId } = render(
            <ProgressStepperSkeleton steps={5} data-testid='skeleton-steps' />
        )

        const skeleton = getByTestId('skeleton-steps')
        expect(skeleton).toBeInTheDocument()
    })

    it('should contain captions of steps titles', () => {
        const { getByTestId } = render(
            <ProgressStepperSkeleton withCaption={true} data-testid='skeleton-captions' />
        )

        const skeleton = getByTestId('skeleton-captions')
        expect(skeleton).toBeInTheDocument()
    })

    it('should test orientation and sizing', () => {
        const directions = ['row', 'column']
        const sizes = ['large', 'small']

        directions.forEach(direction => {
            sizes.forEach(size => {
                const { getByTestId } = render(
                    <ProgressStepperSkeleton direction={direction} size={size} data-testid={`skeleton-${direction}-${size}`} />
                )
        
                const skeleton = getByTestId(`skeleton-${direction}-${size}`)
                expect(skeleton).toBeInTheDocument()
            })
        }) 
    })
})