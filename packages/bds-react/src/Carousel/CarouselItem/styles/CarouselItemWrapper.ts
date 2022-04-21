import styled from 'styled-components'
import type { CarouselItemProps } from '../CarouselItem'

const CarouselItemWrapper = styled.div<CarouselItemProps>`
    flex-shrink: 0;
    margin: 0
        ${({ theme, padding }) =>
            padding === 'none' ? 0 : theme.sizes[padding] || padding};
`

export { CarouselItemWrapper }

export default CarouselItemWrapper
