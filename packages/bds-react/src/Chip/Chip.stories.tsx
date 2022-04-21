import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { Chip, GridV3 as Grid, FormGroup, FormControl, FormHeading, ChipSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Chip', decorators: [withKnobs] }

const types = [
    'Variant',
    {
        choice: 'choice',
        filter: 'filter',
        input: 'input',
    },
    'filter',
] as const

export const DefaultChip = () => (
    <Grid.Column start={6} end={12}>
        <Chip
            variant={select(...types)}
            // checked={boolean('Checked', false)}
            defaultChecked={boolean('Default Checked', false)}
            disabled={boolean('Disabled', false)}
            subdued={boolean('Subdued', false)}
            label={text('Label', 'Placeholder')}
            value={text('Value', 'value')}
            name={text('Name', 'name')}
            id="chip"
            onChange={action('chip-changed')}
            onClick={action('chip-clicked')}
            onDelete={action('chip-deleted')}
            onKeyUp={action('chip-key-up')}
            onKeyDown={action('chip-key-down')}
            onFocus={action('chip-focused')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const FormGroupChips = () => (
    <Grid.Column start={6} end={12}>
        <FormGroup>
            <Chip
                id="chipid1"
                variant='choice'
                defaultChecked={boolean('Default Checked', false)}
                disabled={boolean('Disabled', false)}
                subdued={boolean('Subdued', false)}
                label={text('Label', 'Placeholder')}
                name={text('Name', 'name')}
                value={text('Value', 'value')}
                onChange={action('chip-changed')}
                onClick={action('chip-clicked')}
                onDelete={action('chip-deleted')}
                onKeyUp={action('chip-key-up')}
                onKeyDown={action('chip-key-down')}
                onFocus={action('chip-focused')}
            />
            <Chip
                id="chipid2"
                variant='choice'
                defaultChecked={boolean('Default Checked', false)}
                disabled={boolean('Disabled', false)}
                subdued={boolean('Subdued', false)}
                label={text('Label', 'label')}
                name={text('Name', 'name')}
                value={text('Value', 'value')}
                onChange={action('chip-changed')}
                onClick={action('chip-clicked')}
                onDelete={action('chip-deleted')}
                onKeyUp={action('chip-key-up')}
                onKeyDown={action('chip-key-down')}
                onFocus={action('chip-focused')}
            />
        </FormGroup>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Chip Skeleton</FormHeading>
            <br />
            <ChipSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
