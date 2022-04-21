import * as React from 'react'
import { render } from '../../../test-utils'
import UnorderedListSkeleton from './UnorderedListSkeleton'

describe('UnorderedListSkeleton Tests', () => {
    /** Default test, makes sure the skeleton renders */
    it('renders', () => {
        const { getByTestId } = render(
            <UnorderedListSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    /** Validate that the skeleton animates */
    it('should animate', () => {
        const { getByTestId } = render(
            <UnorderedListSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    /** Validate the width of the OL has changed */
    it('should change in width', () => {
        const { getByTestId } = render(
            <UnorderedListSkeleton width='30rem' data-testid='skeleton-width' />
        )

        const skeleton = getByTestId('skeleton-width')
        expect(skeleton).toBeInTheDocument()
    })

    /** Validate that more list item are added to the OL */
    it('should have more list items', () => {
        const { getByTestId } = render(
            <UnorderedListSkeleton items='7' data-testid='skeleton-items' />
        )

        const skeleton = getByTestId('skeleton-items')
        expect(skeleton).toBeInTheDocument()
    })

    /** Validate density options */
    it('should have more list items', () => {
        const densities = ['normal', 'comfort', 'condensed']

        densities.forEach(density => {
            const { getByTestId } = render(
                <UnorderedListSkeleton density={density} data-testid={`skeleton-${density}`} />
            )
    
            const skeleton = getByTestId(`skeleton-${density}`)
            expect(skeleton).toBeInTheDocument()
        })
    })
})