import * as React from 'react'
import { render } from '../../../test-utils'
import ToggleSkeleton from './ToggleSkeleton'

describe('ToggleSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <ToggleSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <ToggleSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom length', () => {
        const { getByTestId } = render(
            <ToggleSkeleton instances={4} data-testid='skeleton-width-change' />
        )

        const skeleton = getByTestId('skeleton-width-change')
        expect(skeleton).toBeInTheDocument()
    })
})