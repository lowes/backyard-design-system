import React from 'react'
import { GridV3 as Grid, OrderedList, ListItem, Typography, OrderedListSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, select, boolean, number, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/OrderedList', decorators: [withKnobs] }

const densities = [
    'Density',
    {
        condensed: 'condensed',
        normal: 'normal',
        comfort: 'comfort',
    },
    'normal',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <OrderedList density={select(...densities)}>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
        </OrderedList>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Nested = () => (
    <Grid.Column start={6} end={12}>
        <OrderedList density={select(...densities)}>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
                <OrderedList>
                    <ListItem>Look at me, I'm nested and a slightly different color.</ListItem>
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                        <OrderedList>
                            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                        </OrderedList>
                    </ListItem>
                </OrderedList>
            </ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
        </OrderedList>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <OrderedListSkeleton
            density={select(...densities)}
            items={number('List items', 4)}
            width={text('Width', '18.75rem')}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)
