import * as React from 'react'
import { render } from '../../../test-utils'
import RatingSkeleton from './RatingSkeleton'

describe('RatingSkeleton Snapshots', () => {
    test('RatingSkeleton default snapshot', () => {
        const { asFragment } = render(
            <RatingSkeleton />
        )

        expect(asFragment()).toMatchSnapshot()
    })


    test('RatingSkeleton animate snapshot', () => {
        const { asFragment } = render(
            <RatingSkeleton animate={true} />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('RatingSkeleton sizes snapshot', () => {
        const sizes = ['small', 'medium', 'large', 'jumbo']

        sizes.forEach(size => {
            const { asFragment } = render(
                <RatingSkeleton size={size} />
            )
    
            expect(asFragment()).toMatchSnapshot()
        })
    })
})