import * as React from 'react'
import { render, act } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Gallery from './Gallery'

const GalleryExample = (props) => (
    <Gallery
        items={[
            {
                original: 'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
                thumbnail: 'https://via.placeholder.com/150/FFFFFF/000000?text=Thumb',
            },
            {
                original: 'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
                thumbnail: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Thumb',
            },
            {
                original: 'https://via.placeholder.com/1500x1000/00FF00/FFFFFF?text=Original',
                thumbnail: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Thumb',
            },
            {
                original: 'https://via.placeholder.com/1000x1500/FF0000/FFFFFF?text=Original',
                thumbnail: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb',
            },
            {
                original: 'https://via.placeholder.com/1500/999999/FFFFFF?text=Original',
                thumbnail: 'https://via.placeholder.com/150/999999/FFFFFF?text=Thumb',
            },
            {
                original: 'https://via.placeholder.com/1500/FF00FF/FFFFFF?text=Original',
                thumbnail: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Thumb',
            },
            {
                original: 'https://via.placeholder.com/1500/FFFF00/FFFFFF?text=Original',
                thumbnail: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Thumb',
            },
        ]}
        {...props}
    />
)

describe('Gallery Snapshots', () => {
    test('Gallery default snapshot', () => {
        const { asFragment } = render(<GalleryExample />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Gallery ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <GalleryExample />
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disableNavigation', () => {
        const { asFragment } = render(<GalleryExample disableNavigation />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: disableThumbnails', () => {
        const { asFragment } = render(<GalleryExample disableThumbnails />)

        expect(asFragment()).toMatchSnapshot()
    })

    test(`Gallery desktop snapshot`, async () => {
        let wrapper

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <Gallery
                        items={[
                            {
                                original:
                                    'https://via.placeholder.com/1500/FFFFFF/000000?text=Original',
                            },
                            {
                                original:
                                    'https://via.placeholder.com/1600/0000FF/FFFFFF?text=Original',
                            },
                        ]}
                    />
                </ThemeProvider>,
            )
        })

        const { asFragment } = wrapper

        expect(asFragment()).toMatchSnapshot()
    })
})
