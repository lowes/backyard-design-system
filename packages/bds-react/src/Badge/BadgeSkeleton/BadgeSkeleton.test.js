import * as React from 'react'
import { render } from '../../../test-utils'
import BadgeSkeleton from './BadgeSkeleton'

describe('Badge Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <BadgeSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(
            <BadgeSkeleton width='20rem' data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <BadgeSkeleton animate={true} data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})