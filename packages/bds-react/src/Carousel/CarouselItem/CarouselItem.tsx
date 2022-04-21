import * as React from 'react'

import { BackyardBaseProps, BackyardToken } from '../../utils/typings/BackyardProps'
import CarouselItemWrapper from './styles/CarouselItemWrapper'

/**
 * Wrapper for content that is to be included within the Carousel component.
 *
 * ex.
 * <CarouselItem>
 *     <Button>Button 1</Button>
 * </CarouselItem>
 */
const CarouselItem = React.forwardRef<CarouselItemRef, CarouselItemProps>(function CarouselItem(
    { children, padding = 'size_16', ...props },
    ref,
) {
    return (
        <CarouselItemWrapper className='carousel-item' padding={padding} {...props} ref={ref}>
            {children}
        </CarouselItemWrapper>
    )
})

type CarouselItemRef = HTMLDivElement

interface CarouselItemProps extends BackyardBaseProps<CarouselItemRef> {
    /**
     * Padding on the left and right of the carousel item.
     * Note this padding gets applied to both the left and right side of the Item so if you want say 3rem between
     * items you need to set the padding to 1.5rem.
     */
    padding?: 'none' | keyof BackyardToken['sizes'] | string
}

export { CarouselItem }

export type { CarouselItemProps, CarouselItemRef }

export default CarouselItem
