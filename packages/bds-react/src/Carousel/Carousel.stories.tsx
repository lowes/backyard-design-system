import * as React from 'react'
import styled from 'styled-components'
import { boolean, number, withKnobs } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    Button,
    Carousel,
    CarouselItem,
    GridV3 as Grid,
    Typography,
    FormControl,
    FormHeading,
    CarouselSkeleton,
} from '../'

export default { title: '@lowes-tech/bds-react/Carousel', decorators: [withKnobs] }

const Block = styled.div<{ width?: number }>`
    height: 8rem;
    width: ${({ width }) => (width ? `${width}rem` : `2.5rem`)};
    background-color: #d2d2d2;
`

export const DefaultCarousel = () => (
    <>
        <Grid.Row>
            <Grid.Column start={6} end={12} style={{ marginBottom: '1rem' }}>
                <Typography variant="h4" style={{ marginTop: '1rem', paddingBottom: '1rem' }}>
                    Carousel Example
                </Typography>
                <Carousel
                    noScrollbar={boolean('No Scrollbar', false)}
                    noButtons={boolean('No Buttons', false)}
                    scrollDistance={number('Scroll Distance', 100)}
                >
                    <CarouselItem>
                        <Block />
                    </CarouselItem>
                    <CarouselItem>
                        <Block width={4} />
                    </CarouselItem>
                    <CarouselItem>
                        <Block width={8} />
                    </CarouselItem>
                    <CarouselItem>
                        <Block />
                    </CarouselItem>
                    <CarouselItem>
                        <Block width={4} />
                    </CarouselItem>
                    <CarouselItem>
                        <Block />
                    </CarouselItem>
                    <CarouselItem>
                        <Block width={1} />
                    </CarouselItem>
                    <CarouselItem>
                        <Block />
                    </CarouselItem>
                    <CarouselItem>
                        <Block />
                    </CarouselItem>
                    <CarouselItem>
                        <Block width={3} />
                    </CarouselItem>
                    <CarouselItem>
                        <Block width={6} />
                    </CarouselItem>
                    <CarouselItem>
                        <Block />
                    </CarouselItem>
                </Carousel>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column start={6} end={12}>
                <Typography variant="h4" style={{ marginTop: '1rem', paddingBottom: '1rem' }}>
                    Button Carousel Example
                </Typography>
                <Carousel
                    noScrollbar={boolean('No Scrollbar', false)}
                    noButtons={boolean('No Buttons', false)}
                    scrollDistance={number('Scroll Distance', 100)}
                >
                    <CarouselItem padding="size_8">
                        <Button>Button 1</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 2</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 3</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 4</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 5</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 6</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 7</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 8</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 9</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 10</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 11</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 12</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 13</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 14</Button>
                    </CarouselItem>
                    <CarouselItem padding="size_8">
                        <Button>Button 15</Button>
                    </CarouselItem>
                </Carousel>
            </Grid.Column>
        </Grid.Row>

        <ApiLink to='#' />
    </>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Carousel Skeleton</FormHeading>
            <br />
            <CarouselSkeleton
                animate={boolean('Animate', false)}
                hideButtons={boolean('Hide Buttons', false)}
                hideScrollbar={boolean('Hide Scrollbar', false)}
            />
        </FormControl>
    </Grid.Column>
)
