import React from 'react'
import { GridV3 as Grid, IconButton, IconButtonSkeleton } from '../'
import Plus from '@lowes-tech/bds-icons/Plus'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/IconButton', decorators: [withKnobs] }

const colors = [
    'Color',
    {
        interactive: 'interactive',
        green: 'green',
        red: 'red',
        neutral: 'neutral',
    },
    'interactive',
] as const

const types = [
    'Type',
    {
        button: 'button',
        submit: 'submit',
        reset: 'reset',
    },
    'button',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
        circle: 'circle',
    },
    'rounded',
] as const

const sizes = [
    'Size',
    {
        small: 'small',
        medium: 'medium',
        large: 'large',
        jumbo: 'jumbo'
    },
    'medium',
] as const

export const PrimaryIconButton = () => (
    <Grid.Column start={6} end={12}>
        <IconButton
            variant="primary"
            color={select(...colors)}
            shape={select(...shapes)}
            size={select(...sizes)}
            type={select(...types)}
            disabled={boolean('Disabled', false)}
            onClick={action('button-click')}
            onKeyDown={action('button-key-down')}
            onFocus={action('button-focus')}
        >
            <Plus />
        </IconButton>

        <ApiLink to='#' />
    </Grid.Column>
)

export const SecondaryIconButton = () => (
    <Grid.Column start={6} end={12}>
        <IconButton
            variant="secondary"
            color={select(...colors)}
            shape={select(...shapes)}
            size={select(...sizes)}
            type={select(...types)}
            disabled={boolean('Disabled', false)}
            onClick={action('button-click')}
            onKeyDown={action('button-key-down')}
            onFocus={action('button-focus')}
        >
            <Plus />
        </IconButton>

        <ApiLink to='#' />
    </Grid.Column>
)

export const TertiaryIconButton = () => (
    <Grid.Column start={6} end={12}>
        <IconButton
            variant="tertiary"
            color={select(...colors)}
            shape={select(...shapes)}
            size={select(...sizes)}
            type={select(...types)}
            disabled={boolean('Disabled', false)}
            onClick={action('button-click')}
            onKeyDown={action('button-key-down')}
            onFocus={action('button-focus')}
        >
            <Plus />
        </IconButton>

        <ApiLink to='#' />
    </Grid.Column>
)

export const GhostIconButton = () => (
    <Grid.Column start={6} end={12}>
        <IconButton
            variant="ghost"
            color={select(...colors)}
            shape={select(...shapes)}
            size={select(...sizes)}
            type={select(...types)}
            disabled={boolean('Disabled', false)}
            onClick={action('button-click')}
            onKeyDown={action('button-key-down')}
            onFocus={action('button-focus')}
        >
            <Plus />
        </IconButton>

        <ApiLink to='#' />
    </Grid.Column>
)

export const InverseIconButton = () => (
    <Grid.Column start={6} end={12}>
        <span style={{
            padding: '3rem', 
            backgroundColor: 'var(--bds-color-surface-blue)',
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '-3rem',
            marginLeft: '-3rem'
        }}>
            <IconButton
                variant="inverse"
                color={select(...colors)}
                shape={select(...shapes)}
                size={select(...sizes)}
                type={select(...types)}
                disabled={boolean('Disabled', false)}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Plus />
            </IconButton>
        </span>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <IconButtonSkeleton 
            size={select(...sizes)}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)
