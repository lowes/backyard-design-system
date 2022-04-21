import * as React from 'react'
import { render, fireEvent, act } from '../../test-utils'
import ThemeProvider from '../ThemeProvider'
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
                thumbnailProps: {
                    onClick: props.onClick ? props.onClick : null,
                    variant: 'content',
                    children: 'test',
                },
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

describe('Gallery Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(<GalleryExample data-testid="gallery" />)

        const gallery = getByTestId('gallery')

        expect(gallery).toBeInTheDocument()
    })

    it('slides to the correct viewport item when thumbnail clicked', () => {
        const { getByTestId } = render(<GalleryExample data-testid="gallery" />)

        const gallery = getByTestId('gallery')
        const buttons = gallery.querySelectorAll('.gallery-thumbnail button')

        fireEvent.click(buttons[2])

        expect(buttons[2].parentNode.classList).toContain('selected')
    })

    it('slides to the correct viewport item when nav next button clicked', () => {
        const { getByTestId } = render(<GalleryExample data-testid="gallery" />)

        const gallery = getByTestId('gallery')
        const next = gallery.querySelector('button.next')
        const buttons = gallery.querySelectorAll('.gallery-thumbnail button')

        fireEvent.click(next)

        expect(buttons[1].parentNode.classList).toContain('selected')
    })

    it('slides to the correct viewport item when nav prev button clicked', () => {
        const { getByTestId } = render(<GalleryExample defaultItem={2} data-testid="gallery" />)

        const gallery = getByTestId('gallery')
        const prev = gallery.querySelector('button.prev')
        const buttons = gallery.querySelectorAll('.gallery-thumbnail button')

        fireEvent.click(prev)

        expect(buttons[1].parentNode.classList).toContain('selected')
    })

    it('allows the item count to be modified externally', () => {
        const StateExample = () => {
            const [item, setItem] = React.useState(0)

            return (
                <>
                    <GalleryExample item={item} data-testid="gallery" />
                    <button data-testid="set-button" onClick={() => setItem((state) => state + 2)}>
                        Test
                    </button>
                </>
            )
        }

        const { getByTestId } = render(<StateExample />)

        const gallery = getByTestId('gallery')
        const button = getByTestId('set-button')
        const buttons = gallery.querySelectorAll('.gallery-thumbnail button')

        fireEvent.click(button)

        expect(buttons[2].parentNode.classList).toContain('selected')
    })

    it('allows the max thumbnails to be modified externally', async () => {
        let wrapper

        const onClickSpy = jest.fn()

        const StateExample = () => {
            const [maxThumbnails, setMaxThumbnails] = React.useState(5)

            return (
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <>
                        <GalleryExample
                            maxThumbnails={maxThumbnails}
                            data-testid="gallery"
                            onExcessClick={onClickSpy}
                        />
                        <button
                            data-testid="set-button"
                            onClick={() => setMaxThumbnails((state) => state + 1)}
                        >
                            Test
                        </button>
                    </>
                </ThemeProvider>
            )
        }

        await act(async () => {
            wrapper = render(<StateExample />)
        })

        const { getByTestId } = wrapper

        const gallery = getByTestId('gallery')
        const button = getByTestId('set-button')
        const excess = gallery.querySelector('.excess button')

        expect(excess.textContent).toBe('+3')

        fireEvent.click(button)

        expect(excess.textContent).toBe('')
    })

    test(`Gallery thumbnail on click trigger`, async () => {
        let wrapper

        const onClickSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <GalleryExample data-testid="gallery" onExcessClick={onClickSpy} />
                </ThemeProvider>,
            )
        })

        const { getByTestId } = wrapper

        const gallery = getByTestId('gallery')
        const button = gallery.querySelector('.excess button')

        fireEvent.click(button)

        expect(onClickSpy).toHaveBeenCalled()
    })

    test(`Gallery excess click trigger`, async () => {
        let wrapper

        const onClickSpy = jest.fn()

        await act(async () => {
            wrapper = render(
                <ThemeProvider override={{ isMobile: false, isDesktop: true }}>
                    <GalleryExample data-testid="gallery" onClick={onClickSpy} />
                </ThemeProvider>,
            )
        })

        const { getByTestId } = wrapper

        const gallery = getByTestId('gallery')
        const buttons = gallery.querySelectorAll('.gallery-thumbnail button')

        fireEvent.click(buttons[2])

        expect(buttons[2].parentNode.classList).toContain('selected')
        expect(onClickSpy).toHaveBeenCalled()
    })
})
