import * as React from 'react'
import classNames from 'classnames'
import ArrowLeft from '@lowes-tech/bds-icons/ArrowLeft'
import ArrowRight from '@lowes-tech/bds-icons/ArrowRight'

import IconButton from '../IconButton'
import useForkRef from '../utils/hooks/useForkRef'
import useHasOverflow from '../utils/hooks/useHasOverflow'
import type { BackyardBaseProps } from '../utils/typings/BackyardProps'
import CarouselWrapper from './styles/CarouselWrapper'
import type { IconButtonProps } from '../IconButton'
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps'
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider'

/**
 * A carousel may contain buttons the link the user to another page or site, or it may be a slider containing imagery
 * and details for products. Each image and information should like the user to the respective product page.
 *
 * Details for the product variation may include price, name, and a quick “add to cart” button for ease of shopping.
 *
 * Interactive arrows on both the left and right allow the user to view more options that may be hidden due to the
 * width restriction of a screen. To show there are more options, a slider will be visible below the product version
 * on web, and pagination dots on the mobile version.
 *
 * The button carousel is a type of horizontal navigation. As the user clicks on a button, they are brought
 * to the respective page.
 *
 * ex.
 * <Carousel noScrollbar
 *           scrollDistance={200}>
 *      <CarouselItem>
 *          <Button>Button 1</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 2</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 3</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 4</Button>
 *      </CarouselItem>
 *      <CarouselItem>
 *          <Button>Button 5</Button>
 *      </CarouselItem>
 * </Carousel>
 */
const Carousel: BDSForwardRef<CarouselProps> = React.forwardRef<CarouselRef, CarouselProps>(
    function Carousel(
        {
            children,
            noScrollbar,
            noButtons,
            scrollDistance = 100,
            carouselButtonProps,
            leftIcon,
            rightIcon,
            ...props
        },
        ref,
    ) {
        // Get Backyard Theme
        const theme = useBackyardTheme()

        // Validate theme hook
        validateBackyardTheme(theme, 'Carousel')

        // Throws custom error if both noButtons and noScrollbar are truthy at the same time.
        if (noScrollbar && noButtons && process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            throw Error(
                `Backyard: For accessibility reasons, the Carousel component \n` +
                    `can only have one of the following props true at a time: \n\n` +
                    `noButtons \n` +
                    `noScrollbar \n\n` +
                    `For reference to this components api, please refer to: \n\n` +
                    `https://backyard.lowes.com/ComponentAPI/Carousel \n\n`,
            )
        }

        const contentRef = React.useRef<HTMLDivElement>()
        const handleRef = useForkRef(contentRef, ref)

        const [isFarLeft, setIsFarLeft] = React.useState(true)
        const [isFarRight, setIsFarRight] = React.useState(false)

        const hasOverflow = useHasOverflow(contentRef)

        /**
         * Scrolls the content either left or right by either the default scroll distance or the
         * calculated distance from the scrollbar
         *
         * @param direction: number - either 1 or -1 depending if you wanna scroll left (1) or right (-1)
         */
        const scrollContent = (direction: number) => {
            contentRef.current.scrollLeft -= scrollDistance * direction
        }

        /**
         *  Checks the scroll position of the Carousel to determine if the user is at the end or beginning of the content
         */
        const checkStartEnd = () => {
            const { scrollLeft, scrollWidth, offsetWidth } = contentRef.current as HTMLDivElement
            setIsFarLeft(scrollLeft === 0)
            setIsFarRight(scrollLeft + offsetWidth === scrollWidth)
        }

        React.useEffect(() => {
            checkStartEnd()
        }, [hasOverflow])

        const handleResize = () => {
            checkStartEnd()
        }

        return (
            <CarouselWrapper
                // key={React.Children.count(children)}
                className={classNames('carousel-content', { 'no-scrollbar': noScrollbar })}
                onScroll={checkStartEnd}
                onResize={handleResize}
                {...props}
                ref={handleRef}
            >
                {!noButtons ? (
                    <IconButton
                        className={classNames('carousel-button-left', {
                            'show-button': !isFarLeft,
                        })}
                        size="small"
                        variant='inverse'
                        color='interactive'
                        shape='circle'
                        elevation
                        {...carouselButtonProps}
                        onClick={() => scrollContent(1)}
                    >
                        {leftIcon || <ArrowLeft />}
                    </IconButton>
                ) : null}

                {children}

                {!noButtons ? (
                    <IconButton
                        className={classNames('carousel-button-right', {
                            'show-button': !isFarRight,
                        })}
                        size="small"
                        variant='inverse'
                        color='interactive'
                        shape='circle'
                        elevation
                        {...carouselButtonProps}
                        onClick={() => scrollContent(-1)}
                    >
                        {rightIcon || <ArrowRight />}
                    </IconButton>
                ) : null}
            </CarouselWrapper>
        )
    },
)

type CarouselRef = HTMLDivElement

interface CarouselProps extends BackyardBaseProps<CarouselRef> {
    /**
     * Overrides the props on both of the carousel icon buttons.
     */
    carouselButtonProps?: IconButtonProps
    /**
     * The icon for the navigate left icon button.
     */
    leftIcon?: React.ReactElement
    /**
     * Makes it so that when true the Carousel will not display a scrollbar whenever there are items hidden by overflow.
     * Note: This does not remove the scroll functionality just purely removes the scrollbar. You can still scroll via
     * the buttons or within the Carousel itself.
     */
    noScrollbar?: boolean
    /**
     * Makes it so that when true, the Carousel will not display the left and right buttons. This works in concert with
     * the noScrollbar prop. Both noScrollBar and noButtons can be false but only one can be true at a time.
     */
    noButtons?: boolean
    /**
     * The icon for the navigate left icon button.
     */
    rightIcon?: React.ReactElement
    /**
     * Distance, in px, that is scrolled when clicking the 'scroll buttons'
     */
    scrollDistance?: number
}

Carousel.bdsName = 'Carousel'

export { Carousel }

export type { CarouselProps, CarouselRef }

export default Carousel
