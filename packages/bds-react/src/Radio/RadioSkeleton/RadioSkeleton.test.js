import * as React from 'react'
import { render } from '../../../test-utils'
import RadioSkeleton from './RadioSkeleton'

describe('RadioSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <RadioSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <RadioSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have a label present', () => {
        const { getByTestId } = render(
            <RadioSkeleton withLabel data-testid='skeleton-label' />
        )

        const skeleton = getByTestId('skeleton-label')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change the width of the label', () => {
        const { getByTestId } = render(
            <RadioSkeleton withLabel labelWidth='8rem' data-testid='skeleton-label-width' />
        )

        const skeleton = getByTestId('skeleton-label-width')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have a helper text present', () => {
        const { getByTestId } = render(
            <RadioSkeleton withHelper data-testid='skeleton-helper' />
        )

        const skeleton = getByTestId('skeleton-helper')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change the width of the helper text', () => {
        const { getByTestId } = render(
            <RadioSkeleton withHelper helperWidth='8rem' data-testid='skeleton-helper-width' />
        )

        const skeleton = getByTestId('skeleton-helper-width')
        expect(skeleton).toBeInTheDocument()
    })
})