import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'

import { Alert, GridV3 as Grid, FormControl, FormHeading, AlertSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Alert', decorators: [withKnobs] }

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
        medium: 'medium',
        jumbo: 'jumbo',
    },
    'medium',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <Alert
            title={text('Title', 'Title')}
            subtitle={text('Subtitle', '')}
            type={select(...types)}
            size={select(...sizes)}
            multiline={boolean('Multiline', false)}
            elevation={boolean('Elevation', true)}
            noClose={boolean('No Close', false)}
            action={text('Action', 'Action')}
            onClose={action('close-clicked')}
            onActionClick={action('action-clicked')}
            shape={select(...shapes)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Alert Skeleton</FormHeading>
            <br />
            <AlertSkeleton shape={select(...shapes)} animate={boolean('Animate', false)} />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Multiline Alert Skeleton</FormHeading>
            <br />
            <AlertSkeleton
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
                multiline
            />
        </FormControl>
    </Grid.Column>
)
