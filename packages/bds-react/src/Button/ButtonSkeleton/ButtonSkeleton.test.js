import * as React from 'react'
import { render } from '../../../test-utils'
import ButtonSkeleton from './ButtonSkeleton'

describe('Button Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <ButtonSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(
            <ButtonSkeleton width='20rem' data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <ButtonSkeleton animate={true} data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should render different sizes', () => {
        const sizes = ['small', 'medium', 'large']

        sizes.forEach(size => {
            const testID = `skeleton=${size}`
            const { getByTestId } = render(
                <ButtonSkeleton size={size} data-testid={testID}  />
            )
    
            const skeleton = getByTestId(testID)
            expect(skeleton).toBeInTheDocument()
        })
    })

    it('should be full width', () => {
        const { getByTestId } = render(
            <ButtonSkeleton fullWidth={true} data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})