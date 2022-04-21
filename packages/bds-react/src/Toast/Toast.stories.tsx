import React from 'react'
import { GridV3 as Grid, Toast, FormControl, FormHeading, ToastSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Toast', decorators: [withKnobs] }

const types = [
    'Type',
    {
        info: 'info',
        error: 'error',
        success: 'success',
        warning: 'warning',
    },
    'info',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

const sizes = [
    'Size',
    {
        standard: 'standard',
        jumbo: 'jumbo',
    },
    'standard',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <Toast
            title={text('Title', 'Title')}
            subtitle={text('Subtitle', 'Subtitle goes here...')}
            size={select(...sizes)}
            closed={boolean('Closed', false)}
            closeDelay={number('Close Delay', 0)}
            noClose={boolean('No Close', false)}
            noTimestamp={boolean('No Timestamp', false)}
            type={select(...types)}
            shape={select(...shapes)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Toast Skeleton</FormHeading>
            <br />
            <ToastSkeleton shape={select(...shapes)} animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
