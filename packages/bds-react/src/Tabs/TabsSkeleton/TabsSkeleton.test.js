import * as React from 'react'
import { render } from '../../../test-utils'
import TabsSkeleton from './TabsSkeleton'

describe('TabsSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <TabsSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <TabsSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(
            <TabsSkeleton width='10rem' data-testid='skeleton-width-change' />
        )

        const skeleton = getByTestId('skeleton-width-change')
        expect(skeleton).toBeInTheDocument()
    })
})