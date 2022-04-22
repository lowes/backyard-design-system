 import React from 'react'
import { GridV3 as Grid, List, ListOption } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/List', decorators: [withKnobs] }

const sizes = [
    'Size',
    {
        condensed: 'condensed',
        normal: 'normal',
    },
    'normal',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultListSelector = () => (
    <Grid.Column start={6} end={12}>
        <List shape={select(...shapes)}>
            <ListOption size={select(...sizes)}>List Item</ListOption>
            <ListOption size={select(...sizes)}>List Item</ListOption>
            <ListOption size={select(...sizes)}>List Item</ListOption>
        </List>

        <ApiLink to='#' />
    </Grid.Column>
)

export const ListSelectorOptions = () => (
    <Grid.Column start={6} end={12}>
        <List
            disabled={boolean('Disabled', false)}
            shape={select(...shapes)}
            defaultValue={text('Default Value', undefined)}
            label={text('Label', 'label')}
            value={text('Value', undefined)}
            onChange={action('onChange')}
            options={[
                { label: 'List Item 1', value: '1' },
                { label: 'List Item 2', value: '2' },
                { label: 'List Item 3', value: '3' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const ListSelectorMultiple = () => (
    <Grid.Column start={6} end={12}>
        <List
            multiple
            disabled={boolean('Disabled', false)}
            shape={select(...shapes)}
            defaultValue={text('Default Value', undefined)}
            label={text('Label', 'label')}
            value={text('Value', undefined)}
            onChange={action('onChange')}
            options={[
                { label: 'List Item 1', value: '1' },
                { label: 'List Item 2', value: '2' },
                { label: 'List Item 3', value: '3' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)
