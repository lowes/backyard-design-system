import * as React from 'react'
import { render } from '../../../test-utils'
import ButtonGroupSkeleton from './ButtonGroupSkeleton'

describe('ButtonGroup Snapshots', () => {
    test('ButtonGroup default snapshot', () => {
        const { asFragment } = render(
            <ButtonGroupSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('ButtonGroup size snapshots', () => {
        const sizes = ['small', 'medium', 'large']
        sizes.forEach(size => {
            const { asFragment } = render(
                <ButtonGroupSkeleton size={size} />
            )
    
            expect(asFragment()).toMatchSnapshot()
        })
    })

    test('ButtonGroup animate snapshot', () => {
        const { asFragment } = render(
            <ButtonGroupSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})