import React from 'react'

import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'

import { Tabs, Tab, Typography, TabsSkeleton, GridV3 as Grid } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Tabs', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultTab = () => (
    <Grid.Column start={5} end={13}>
        <Tabs
            shape={select(...shapes)}
            isOnLayer={boolean('On Layer', false)}
            keepMounted={boolean('Keep Mounted', false)}
        >
            <Tab id="tab-1" label="Tab 1">
                <Typography>Hello world 1</Typography>
            </Tab>
            <Tab id="tab-2" label="Tab 2">
                <Typography>Hello world 2</Typography>
            </Tab>
            <Tab id="tab-3" label="Tab 3">
                <Typography>Hello world 3</Typography>
            </Tab>
            <Tab id="tab-4" label="Tab 4">
                <Typography>Hello world 4</Typography>
            </Tab>
            <Tab id="tab-5" label="Tab 5">
                <Typography>Hello world 5</Typography>
            </Tab>
        </Tabs>

        <ApiLink to='#' />
    </Grid.Column>
)

export const DisabledTabs = () => (
    <Grid.Column start={5} end={13}>
        <Tabs
            shape={select(...shapes)}
            isOnLayer={boolean('On Layer', false)}
            keepMounted={boolean('Keep Mounted', false)}
        >
            <Tab id="tab-1" label="Tab 1">
                <Typography>Hello world 1</Typography>
            </Tab>
            <Tab id="tab-2" label="Tab 2" disabled>
                <Typography>Hello world 2</Typography>
            </Tab>
            <Tab id="tab-3" label="Tab 3">
                <Typography>Hello world 3</Typography>
            </Tab>
            <Tab id="tab-4" label="Tab 4">
                <Typography>Hello world 4</Typography>
            </Tab>
            <Tab id="tab-5" label="Tab 5">
                <Typography>Hello world 5</Typography>
            </Tab>
        </Tabs>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <TabsSkeleton
        width={text('width', '100%')}
        animate={boolean('Animate', false)}
    />
)
