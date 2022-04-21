import * as React from 'react'

import { render } from '../../../test-utils'

import AccordionSkeleton from './AccordionSkeleton'

describe('AccordionSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<AccordionSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<AccordionSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should accept custom size', () => {
        const { getByTestId } = render(<AccordionSkeleton size="small" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<AccordionSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
