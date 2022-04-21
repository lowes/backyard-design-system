import React from 'react'
import { Breadcrumb, GridV3 as Grid, BreadcrumbSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Breadcrumb', decorators: [withKnobs] }

const renders = [
    'Render',
    {
        auto: 'auto',
        desktop: 'desktop',
        mobile: 'mobile',
    },
    'auto',
] as const

export const DefaultBreadcrumb = () => (
    <Grid.Column start={6} end={12}>
        <Breadcrumb
            render={select(...renders)}
            crumbs={[
                {
                    label: text('First Crumb', 'Appliances'),
                },
                {
                    label: text('Second Crumb', 'Refrigerators'),
                },
                {
                    label: text('Third Crumb', 'French Door Refrigerators'),
                },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <BreadcrumbSkeleton
            render={select(...renders)}
            width={text('Width', '15rem')}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)
