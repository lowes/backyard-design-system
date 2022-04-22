import * as React from 'react'
import { render } from '../../../test-utils'
import { ThemeProvider } from '../../ThemeProvider'
import Carousel from '../Carousel'
import CarouselItem from './CarouselItem'

describe('CarouselItem Snapshots', () => {
    test('CarouselItem default snapshot', () => {
        const { asFragment } = render(<CarouselItem>Item 1</CarouselItem>)

        expect(asFragment()).toMatchSnapshot()
    })

    test('padding prop snapshot', () => {
        const { asFragment } = render(
            <Carousel noScrollbar id="test">
                <CarouselItem padding="size_12">
                    <p>Hello World</p>
                </CarouselItem>
            </Carousel>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`CarouselItem ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <CarouselItem>Item 1</CarouselItem>
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('CarouselItem DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <CarouselItem id="id" className="classname">
                    <p>Hello World</p>
                </CarouselItem>,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
