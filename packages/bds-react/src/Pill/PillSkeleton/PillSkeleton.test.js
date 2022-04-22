import * as React from 'react'
import { render } from '../../../test-utils'
import PillSkeleton from './PillSkeleton'

describe('Pill Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <PillSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <PillSkeleton animate={true} data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should render as an indicator', () => {
        const { getByTestId } = render(
            <PillSkeleton variant='indicator' data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})