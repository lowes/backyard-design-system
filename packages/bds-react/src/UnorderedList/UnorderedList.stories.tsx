import React from 'react'

import { withKnobs, select, boolean, number, text } from '@storybook/addon-knobs'

import { GridV3 as Grid, UnorderedList, ListItem, UnorderedListSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/UnorderedList', decorators: [withKnobs] }

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
        <UnorderedList density={select(...densities)}>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
        </UnorderedList>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Nested = () => (
    <Grid.Column start={6} end={12}>
        <UnorderedList density={select(...densities)}>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
            <ListItem>
                Lorem ipsum dolor sit amet, consectetur adipiscing.
                <UnorderedList>
                    <ListItem>Look at me, I'm nested and a slightly different color.</ListItem>
                    <ListItem>
                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                        <UnorderedList>
                            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
                        </UnorderedList>
                    </ListItem>
                </UnorderedList>
            </ListItem>
            <ListItem>Lorem ipsum dolor sit amet, consectetur adipiscing.</ListItem>
        </UnorderedList>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <UnorderedListSkeleton
            density={select(...densities)}
            items={number('List items', 4)}
            width={text('Width', '18.75rem')}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)