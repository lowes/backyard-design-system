import * as React from 'react'
import { render } from '../../test-utils'
import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

describe('Carousel Tests', () => {
    it('renders', () => {
        const { getByTestId, getByText } = render(
            <Carousel data-testid='carousel'>
                <CarouselItem>
                    Item 1
                </CarouselItem>
                <CarouselItem>
                    Item 2
                </CarouselItem>
                <CarouselItem>
                    Item 3
                </CarouselItem>
            </Carousel>
        )

        const carousel = getByTestId('carousel')
        const carouselItem1 = getByText('Item 1')
        const carouselItem2 = getByText('Item 2')
        const carouselItem3 = getByText('Item 3')

        expect(carousel).toBeInTheDocument()
        expect(carouselItem1).toBeInTheDocument()
        expect(carouselItem2).toBeInTheDocument()
        expect(carouselItem3).toBeInTheDocument()
    })
})
