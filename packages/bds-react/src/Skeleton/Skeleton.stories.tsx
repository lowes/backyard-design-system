import React from 'react'
import { GridV3 as Grid } from '../'
import { Skeleton } from './'
import { withKnobs } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Skeleton', decorators: [withKnobs] }

export const Text = () => (
    <Grid.Column start={6} end={12}>
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Rect = () => (
    <Grid.Column start={6} end={12}>
        <Skeleton variant='rect' height='size_64' width='size_128' />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Circle = () => (
    <Grid.Column start={6} end={12}>
        <Skeleton variant='circle' height='size_128' width='size_128' />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Animate = () => (
    <Grid.Column start={6} end={12}>
        <Skeleton variant='text' animate style={{marginBottom: '16px', width: '16rem'}} />
        <Skeleton variant='rect' height='size_64' width='16rem' animate style={{marginBottom: '16px'}} />
        <Skeleton variant='circle' height='size_64' width='size_64' animate />

        <ApiLink to='#' />
    </Grid.Column>
)