import React from 'react'
import { ButtonGroup, GridV3 as Grid, IconButton, ButtonGroupSkeleton } from '../'

import Plus from '@lowes-tech/bds-icons/Plus'
import HeartOutlined from '@lowes-tech/bds-icons/HeartOutlined'
import Edit from '@lowes-tech/bds-icons/Edit'
import Dots from '@lowes-tech/bds-icons/Dots'

import { ApiLink } from '../utils/storybook/ApiLink'

import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/ButtonGroup', decorators: [withKnobs] }

const variants = [
    'Variant',
    {
        secondary: 'secondary',
        ghost: 'ghost',
    },
    'secondary'
] as const

const colors = [
    'Color',
    {
        interative: 'interactive',
        neutral: 'neutral',
    },
    'interactive'
] as const

const sizes = [
    'Sizes',
    {
        small: 'small',
        medium: 'medium',
    },
    'medium',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultButtonGroup = () => (
    <Grid.Column start={6} end={12}>
        <ButtonGroup variant={select(...variants)} shape={select(...shapes)} color={select(...colors)}>
            <IconButton
                size={select(...sizes)}
                disabled={boolean('Disabled', false)}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Plus />
            </IconButton>
            <IconButton
                size={select(...sizes)}
                disabled={boolean('Disabled', false)}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <HeartOutlined />
            </IconButton>
            <IconButton
                size={select(...sizes)}
                disabled={boolean('Disabled', false)}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Edit />
            </IconButton>
            <IconButton
                size={select(...sizes)}
                disabled={boolean('Disabled', false)}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Dots />
            </IconButton>
        </ButtonGroup>

        <ApiLink to='#' />
    </Grid.Column>
)

export const DisabledButtons = () => (
    <Grid.Column start={6} end={12}>
        <ButtonGroup variant={select(...variants)} shape={select(...shapes)}>
            <IconButton
                size={select(...sizes)}
                disabled={false}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Plus />
            </IconButton>
            <IconButton
                size={select(...sizes)}
                disabled={true}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <HeartOutlined />
            </IconButton>
            <IconButton
                size={select(...sizes)}
                disabled={true}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Edit />
            </IconButton>
            <IconButton
                size={select(...sizes)}
                disabled={false}
                onClick={action('button-click')}
                onKeyDown={action('button-key-down')}
                onFocus={action('button-focus')}
            >
                <Dots />
            </IconButton>
        </ButtonGroup>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton  = () => (
    <Grid.Column start={6} end={12}>
        <ButtonGroupSkeleton 
            size={select(...sizes)}
            animate={boolean('Animate', false)}
            width={text('Width', '')}
        />
    </Grid.Column>
)
