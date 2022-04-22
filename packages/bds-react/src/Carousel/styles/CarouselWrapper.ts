import styled, { css } from 'styled-components'
import Scrollbar from '../../Scrollbar'
import CarouselItemWrapper from '../CarouselItem/styles/CarouselItemWrapper'

const CarouselButtons = css`
    .carousel-button-right,
    .carousel-button-left {
        display: none;
        position: absolute;
        align-self: center;

        &.show-button {
            display: flex;
        }
    }

    .carousel-button-left {
        left: 0;
    }

    .carousel-button-right {
        right: 0;
    }
`

const CarouselWrapper = styled(Scrollbar)`
    display: flex;
    flex-wrap: wrap;
    position: relative;
    min-width: 0;

    padding-top: var(--bds-sizes-size-16);
    padding-right: var(--bds-sizes-size-20);
    padding-left: var(--bds-sizes-size-20);

    .scrollbar-container {
        padding-top: var(--bds-sizes-size-20);
        padding-bottom: var(--bds-sizes-size-20);
    }

    &.no-scrollbar > .scrollbar-container {
        display: none;
    }

    .content-container {
        display: flex;
        flex-direction: row;
        min-width: 0;

        /** move the padding from the first and last Carousel Item **/
        ${CarouselItemWrapper} {
            &:first-of-type {
                margin-left: 0;
            }
            &:last-of-type {
                margin-right: 0;
            }
        }

        ${CarouselButtons}
    }
`

export { CarouselWrapper }

export default CarouselWrapper
