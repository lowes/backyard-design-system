import * as React from 'react'
import { render } from '../../../test-utils'
import LinkSkeleton from './LinkSkeleton'

describe('LinkSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <LinkSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <LinkSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change in width', () => {
        const { getByTestId } = render(
            <LinkSkeleton width='30rem' data-testid='skeleton-width' />
        )

        const skeleton = getByTestId('skeleton-width')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change in height', () => {
        const { getByTestId } = render(
            <LinkSkeleton size='small' data-testid='skeleton-size' />
        )

        const skeleton = getByTestId('skeleton-size')
        expect(skeleton).toBeInTheDocument()
    })
})