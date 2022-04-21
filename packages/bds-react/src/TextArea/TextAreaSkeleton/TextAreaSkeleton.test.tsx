import * as React from 'react'

import { render } from '../../../test-utils'

import TextAreaSkeleton from './TextAreaSkeleton'

describe('TextAreaSkeleton Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<TextAreaSkeleton data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should have custom width', () => {
        const { getByTestId } = render(<TextAreaSkeleton width="20rem" data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should accept custom rows', () => {
        const { getByTestId } = render(<TextAreaSkeleton rows={9} data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })

    it('should animate', () => {
        const { getByTestId } = render(<TextAreaSkeleton animate data-testid="skeleton" />)

        const skeleton = getByTestId('skeleton')
        expect(skeleton).toBeInTheDocument()
    })
})
