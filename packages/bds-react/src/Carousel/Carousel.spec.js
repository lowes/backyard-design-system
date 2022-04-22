import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

describe('Carousel Snapshots', () => {
    test('Carousel default snapshot', () => {
        const { asFragment } = render(
            <Carousel id="test">
                <CarouselItem>Item 1</CarouselItem>
            </Carousel>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('noScrollbar prop snapshot', () => {
        const { asFragment } = render(
            <Carousel noScrollbar id="test">
                <CarouselItem>
                    <p>Hello World</p>
                </CarouselItem>
            </Carousel>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('scrollDistance prop snapshot', () => {
        const { asFragment } = render(
            <Carousel scrollDistance={500} id="test">
                <CarouselItem>
                    <p>Hello World</p>
                </CarouselItem>
            </Carousel>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Carousel ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Carousel id="test">
                                <CarouselItem>Item 1</CarouselItem>
                            </Carousel>
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Carousel DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Carousel id="id" className="classname">
                    <CarouselItem>
                        <p>Hello World</p>
                    </CarouselItem>
                </Carousel>,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
