import * as React from 'react'
import { render, act } from '../../../test-utils'

import { ThemeProvider } from '../../ThemeProvider'

import GallerySkeleton from './GallerySkeleton'
import type { GallerySkeletonProps } from './GallerySkeleton'

describe('GallerySkeleton Snapshots', () => {
    test('renders', async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider>
                    <GallerySkeleton animate />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })

    test('thumbnails snapshots', () => {
        const thumbs: GallerySkeletonProps['thumbnails'][] = [5, 2]

        thumbs.forEach((thumbs) => {
            const { asFragment } = render(<GallerySkeleton thumbnails={thumbs} />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
