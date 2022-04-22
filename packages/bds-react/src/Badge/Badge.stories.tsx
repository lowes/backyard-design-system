import React from 'react'
import { Badge, GridV3 as Grid, BadgeSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

import { withKnobs, select, text, boolean } from '@storybook/addon-knobs'

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

const arrows = [
    'Arrow',
    {
        none: 'none',
        left: 'left',
        right: 'right',
    },
    'none'
] as const

const sizes = [
    'Size',
    {
        medium: 'medium',
        jumbo: 'jumbo'
    },
    'medium'
] as const

export default { title: '@lowes-tech/bds-react/Badge', decorators: [withKnobs] }

export const FilledBadge = () => (
    <Grid.Column start={6} end={12}>
        <Badge
            color={select(...colors)}
            bold={boolean('bold', false)}
            arrow={select(...arrows)}
            size={select(...sizes)}
        >
            {text('Text', 'Badge')}
        </Badge>

        <ApiLink to='#' />
    </Grid.Column>
)

export const OutlinedBadge = () => (
    <Grid.Column start={6} end={12}>
        <Badge
            variant='outlined'
            color={select(...colors)}
            size={select(...sizes)}
        >
            {text('Text', 'Badge')}
        </Badge>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <BadgeSkeleton 
            animate={boolean('Animate', false)}
            width={text('Width', '')}
            size={select(...sizes)}
        />
    </Grid.Column>
)
