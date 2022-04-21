import React from 'react'
import { withKnobs, boolean, select, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import ListView from '@lowes-tech/bds-icons/ListView'
import GridViewFilled from '@lowes-tech/bds-icons/GridViewFilled'
import AppsFilled from '@lowes-tech/bds-icons/AppsFilled'
import { ApiLink } from '../utils/storybook/ApiLink'
import { GridV3 as Grid, Toggle, ToggleButton, Typography, ToggleSkeleton } from '../'

export default { title: '@lowes-tech/bds-react/Toggle', decorators: [withKnobs] }

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
        small: 'small',
        medium: 'medium',
        large: 'large',
    },
    'medium',
] as const

export const ToggleMultiple = () => (
    <Grid.Column start={6} end={12}>
        <Typography variant="h3">Without Default Value</Typography>
        <br />
        <Toggle
            enforceSelected={boolean('Enforce Active', false)}
            onChange={action('onChange')}
            shape={select(...shapes)}
            variant='secondary'
        >
            <ToggleButton
                value="list"
                onSelect={action('onSelect (list)')}
                onDeselect={action('onDeselect (list)')}
                onClick={action('onClick (list)')}
                size='small'
            >
                <ListView />
            </ToggleButton>
            <ToggleButton
                value="grid-large"
                onSelect={action('onSelect (grid-large)')}
                onDeselect={action('onDeselect (grid-large)')}
                onClick={action('onClick (grid-large)')}
                size='small'
            >
                <GridViewFilled />
            </ToggleButton>
            <ToggleButton
                value="grid-small"
                onSelect={action('onSelect (grid-small)')}
                onDeselect={action('onDeselect (grid-small)')}
                onClick={action('onClick (grid-small)')}
                size='small'
            >
                <AppsFilled />
            </ToggleButton>
        </Toggle>
        <br />
        <br />
        <Typography variant="h3">With Default Value</Typography>
        <br />
        <Toggle
            enforceSelected={boolean('Enforce Active', false)}
            defaultValue={['list', 'grid-small']}
            onChange={action('onChange')}
            shape={select(...shapes)}
            variant='secondary'
        >
            <ToggleButton
                value="list"
                onSelect={action('onSelect (list)')}
                onDeselect={action('onDeselect (list)')}
                onClick={action('onClick (list)')}
                size='small'
            >
                <ListView />
            </ToggleButton>
            <ToggleButton
                value="grid-large"
                onSelect={action('onSelect (grid-large)')}
                onDeselect={action('onDeselect (grid-large)')}
                onClick={action('onClick (grid-large)')}
                size='small'
            >
                <GridViewFilled />
            </ToggleButton>
            <ToggleButton
                value="grid-small"
                onSelect={action('onSelect (grid-small)')}
                onDeselect={action('onDeselect (grid-small)')}
                onClick={action('onClick (grid-small)')}
                size='small'
            >
                <AppsFilled />
            </ToggleButton>
        </Toggle>

        <ApiLink to='#' />
    </Grid.Column>
)

export const ToggleExclusive = () => (
    <Grid.Column start={6} end={12}>
        <Typography variant="h3">Without Default Value</Typography>
        <br />
        <Toggle
            exclusive={boolean('Exclusive', true)}
            enforceSelected={boolean('Enforce Active', false)}
            onChange={action('onChange')}
            shape={select(...shapes)}
            variant='secondary'
        >
            <ToggleButton
                value="list"
                onSelect={action('onSelect (list)')}
                onDeselect={action('onDeselect (list)')}
                onClick={action('onClick (list)')}
                size='small'
            >
                <ListView />
            </ToggleButton>
            <ToggleButton
                value="grid-large"
                onSelect={action('onSelect (grid-large)')}
                onDeselect={action('onDeselect (grid-large)')}
                onClick={action('onClick (grid-large)')}
                size='small'
            >
                <GridViewFilled />
            </ToggleButton>
            <ToggleButton
                value="grid-small"
                onSelect={action('onSelect (grid-small)')}
                onDeselect={action('onDeselect (grid-small)')}
                onClick={action('onClick (grid-small)')}
                size='small'
            >
                <AppsFilled />
            </ToggleButton>
        </Toggle>
        <br />
        <br />
        <Typography variant="h3">With Default Value</Typography>
        <br />
        <Toggle
            exclusive={boolean('Exclusive', true)}
            enforceSelected={boolean('Enforce Active', false)}
            defaultValue="grid-large"
            onChange={action('onChange')}
            shape={select(...shapes)}
            variant='secondary'
            size='small'
        >
            <ToggleButton
                value="list"
                onSelect={action('onSelect (list)')}
                onDeselect={action('onDeselect (list)')}
                onClick={action('onClick (list)')}
                size='small'
            >
                <ListView />
            </ToggleButton>
            <ToggleButton
                value="grid-large"
                onSelect={action('onSelect (grid-large)')}
                onDeselect={action('onDeselect (grid-large)')}
                onClick={action('onClick (grid-large)')}
                size='small'
            >
                <GridViewFilled />
            </ToggleButton>
            <ToggleButton
                value="grid-small"
                onSelect={action('onSelect (grid-small)')}
                onDeselect={action('onDeselect (grid-small)')}
                onClick={action('onClick (grid-small)')}
                size='small'
            >
                <AppsFilled />
            </ToggleButton>
        </Toggle>

        <ApiLink to='#' />
    </Grid.Column>
)

export const ToggleEnforceSelected = () => (
    <Grid.Column start={6} end={12}>
        <Typography variant="h3">Without Default Value</Typography>
        <Typography variant="caption">
            `enforceSelected` automatically selects the first button if no default is defined
        </Typography>
        <br />
        <br />
        <Toggle
            variant='secondary'
            exclusive={boolean('Exclusive', true)}
            enforceSelected={boolean('Enforce Active', true)}
            onChange={action('onChange')}
            shape={select(...shapes)}
        >
            <ToggleButton
                value="list"
                onSelect={action('onSelect (list)')}
                onDeselect={action('onDeselect (list)')}
                onClick={action('onClick (list)')}
                size='small'
            >
                <ListView />
            </ToggleButton>
            <ToggleButton
                value="grid-large"
                onSelect={action('onSelect (grid-large)')}
                onDeselect={action('onDeselect (grid-large)')}
                onClick={action('onClick (grid-large)')}
                size='small'
            >
                <GridViewFilled />
            </ToggleButton>
            <ToggleButton
                value="grid-small"
                onSelect={action('onSelect (grid-small)')}
                onDeselect={action('onDeselect (grid-small)')}
                onClick={action('onClick (grid-small)')}
                size='small'
            >
                <AppsFilled />
            </ToggleButton>
        </Toggle>
        <br />
        <br />
        <Typography variant="h3">With Default Value</Typography>
        <br />
        <Toggle
            variant='secondary'
            exclusive={boolean('Exclusive', true)}
            enforceSelected={boolean('Enforce Active', true)}
            defaultValue="grid-small"
            onChange={action('onChange')}
            shape={select(...shapes)}
        >
            <ToggleButton
                value="list"
                onSelect={action('onSelect (list)')}
                onDeselect={action('onDeselect (list)')}
                onClick={action('onClick (list)')}
                size='small'
            >
                <ListView />
            </ToggleButton>
            <ToggleButton
                value="grid-large"
                onSelect={action('onSelect (grid-large)')}
                onDeselect={action('onDeselect (grid-large)')}
                onClick={action('onClick (grid-large)')}
                size='small'
            >
                <GridViewFilled />
            </ToggleButton>
            <ToggleButton
                value="grid-small"
                onSelect={action('onSelect (grid-small)')}
                onDeselect={action('onDeselect (grid-small)')}
                onClick={action('onClick (grid-small)')}
                size='small'
            >
                <AppsFilled />
            </ToggleButton>
        </Toggle>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <ToggleSkeleton
        size={select(...sizes)}
        instances={number('Instances', 2)}
        animate={boolean('Animate', false)}
    />
)
