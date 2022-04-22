import React from 'react'
import { GridV3 as Grid, Switch, SwitchSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Switch', decorators: [withKnobs] }

const sizes = [
    'Size',
    {
        small: 'small',
        large: 'large',
    },
    'large',
] as const

export const DefaultSwitch = () => (
    <Grid.Column start={6} end={12}>
        <Switch
            id='default-switch'
            disabled={boolean('Disabled', false)}
            defaultChecked={boolean('Default Checked', false)}
            size={select(...sizes)}
            name={text('Value', 'default-radio')}
            value={text('Value', 'value')}
            onChange={action('switch-change')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <SwitchSkeleton 
        size='large'
        withLabel={boolean('withLabel', false)}
        animate={boolean('Animate', false)}
    />
)