import React from 'react'
import { GridV3 as Grid, FormControlLabel, Checkbox, CheckboxSkeleton } from '../'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Checkbox', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultCheckbox = () => (
    <Grid.Column start={6} end={12}>
        <FormControlLabel
            control={
                <Checkbox
                    // checked={boolean('Checked', false)}
                    defaultChecked={boolean('Default Checked', false)}
                    disabled={boolean('Disabled', false)}
                    shape={select(...shapes)}
                    value={text('Value', 'value')}
                    name={text('Name', 'name')}
                    onChange={action('checkbox-changed')}
                />
            }
            label="Checkbox label"
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const ControlledCheckbox = () => (
    <Grid.Column start={6} end={12}>
        <FormControlLabel
            control={
                <Checkbox
                    checked={boolean('Checked', false)}
                    defaultChecked={boolean('Default Checked', false)}
                    disabled={boolean('Disabled', false)}
                    shape={select(...shapes)}
                    value={text('Value', 'value')}
                    name={text('Name', 'name')}
                    onChange={action('checkbox-changed')}
                />
            }
            label="Checkbox label"
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <CheckboxSkeleton 
            withLabel={boolean('withLabel', false)}
            labelWidth={text('Label text width', '5rem')}
            withHelper={boolean('withHelper', false)}
            helperWidth={text('Helper text width', '5rem')}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)