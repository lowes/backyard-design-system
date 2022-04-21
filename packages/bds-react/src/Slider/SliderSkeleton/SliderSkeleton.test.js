import * as React from 'react'
import { render } from '../../../test-utils'
import SliderSkeleton from './SliderSkeleton'

describe('SliderSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <SliderSkeleton data-testid='skeleton' />
        )

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should show input box', () => {
        const { getByTestId } = render(
            <SliderSkeleton showInput data-testid='skeleton-input' />
        )

        const skeleton = getByTestId('skeleton-input')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(
            <SliderSkeleton animate={true} data-testid='skeleton-animate' />
        )

        const skeleton = getByTestId('skeleton-animate')
        expect(skeleton).toBeInTheDocument()
    })

    it('should change orientation', () => {
        const { getByTestId } = render(
            <SliderSkeleton orientation='vertical' data-testid='skeleton-orientate' />
        )

        const skeleton = getByTestId('skeleton-orientate')
        expect(skeleton).toBeInTheDocument()
    })
})