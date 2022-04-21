import * as React from 'react'
import { render } from '../../../test-utils'
import IconButtonSkeleton from './IconButtonSkeleton'

describe('IconButton Snapshots', () => {
    test('IconButton default snapshot', () => {
        const { asFragment } = render(
            <IconButtonSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('IconButton size snapshots', () => {
        const sizes = ['small', 'medium', 'large']
        sizes.forEach(size => {
            const { asFragment } = render(
                <IconButtonSkeleton size={size} />
            )
    
            expect(asFragment()).toMatchSnapshot()
        })
    })

    test('IconButton animate snapshot', () => {
        const { asFragment } = render(
            <IconButtonSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})