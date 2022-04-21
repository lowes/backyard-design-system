import * as React from 'react'
import { render } from '../../../test-utils'
import PVSSkeleton from './PVSSkeleton'

describe('PVSSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <PVSSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <PVSSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })
})