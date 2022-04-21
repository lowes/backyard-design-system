import React from 'react'
import { GridV3 as Grid, Pill, PillSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Pill', decorators: [withKnobs] }

const colors = [
    'Color',
    {
        'dark-blue': 'dark-blue',
        'blue': 'blue',
        'light-blue': 'light-blue',
        'interactive': 'interactive',
        'green': 'green',
        'red': 'red',
        'gold': 'gold',
        'lfp-yellow': 'lfp-yellow',
        'neutral': 'neutral'
    },
    'dark-blue',
] as const

const shapes = {
    circle: 'circle',
    dot: 'dot'
} as const

const variants = {
    pill: 'pill',
    indicator: 'indicator'
}

const sizes = [
    'Sizes',
    {
        medium: 'medium',
        jumbo: 'jumbo'
    },
    'medium'
] as const

export const FilledPill = () => (
    <Grid.Column start={6} end={12}>
        <Pill
            value={number('Value', 1)}
            invisible={boolean('Invisible', false)}
            max={number('Max Value', 10)}
            color={select(...colors)}
            size={select(...sizes)}
            shape={select('Shapes', shapes, 'circle')}>
            {text('Text', 'Text')}
        </Pill>

        <ApiLink to='#' />
    </Grid.Column>
)

export const OutlinedPill = () => (
    <Grid.Column start={6} end={12}>
        <Pill
            variant='outlined'
            value={number('Value', 1)}
            invisible={boolean('Invisible', false)}
            max={number('Max Value', 10)}
            color={select(...colors)}
            shape={select('Shapes', shapes, 'circle')}
            size={select(...sizes)}
        >
            {text('Text', 'Text')}
        </Pill>

        <ApiLink to='#' />
    </Grid.Column>
)

export const IndicatorPill = () => (
    <Grid.Column start={6} end={12}>
        <Pill
            variant='indicator'
            invisible={boolean('Invisible', false)}
            color={select(...colors)}
            shape={select('Shapes', shapes, 'circle')}
            size={select(...sizes)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <PillSkeleton 
            variant={select('Variant', variants, 'pill')}
            size={select(...sizes)}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)