import * as React from 'react'
import { render } from '../../../test-utils'
import SwitchSkeleton from './SwitchSkeleton'

describe('SwitchSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <SwitchSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <SwitchSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have label skeleton', () => {
        const { getByTestId } = render(
            <SwitchSkeleton withLabel={true} data-testid='skeleton-label' />
        )

        const skeleton = getByTestId('skeleton-label')
        expect(skeleton).toBeInTheDocument()
    })
})