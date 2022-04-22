import React from 'react'
import { Button, GridV3 as Grid, ButtonSkeleton } from '../'
import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'
import { ApiLink } from '../utils/storybook/ApiLink'

import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Button', decorators: [withKnobs] }

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
        circle: 'circle'
    },
    'rounded',
] as const

const variants = [
    'Variant',
    {
        primary: 'primary',
        secondary: 'secondary',
        ghost: 'ghost',
        tertiary: 'tertiary',
        inverse:'inverse'
    },
    'primary',
] as const

export const Primary = () => (
    <Grid.Column start={6} end={12}>
        <Button
            variant="primary"
            disabled={boolean('Disabled', false)}
            color={select(...colors)}
            size={select(...sizes)}
            fullWidth={boolean('Full-Width', false)}
            elevation={boolean('Elevation', false)}
            shape={select(...shapes)}
            type={select(...types)}
            onClick={action('button-clicked')}
            onFocus={action('button-focus')}
        >
            {text('Label', 'Sign In')}
        </Button>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Secondary = () => (
    <Grid.Column start={6} end={12}>
        <Button
            variant="secondary"
            disabled={boolean('Disabled', false)}
            color={select(...colors)}
            size={select(...sizes)}
            fullWidth={boolean('Full-Width', false)}
            elevation={boolean('Elevation', false)}
            shape={select(...shapes)}
            type={select(...types)}
            onClick={action('button-clicked')}
            onFocus={action('button-focus')}
        >
            {text('Label', 'Sign In')}
        </Button>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Tertiary = () => (
    <Grid.Column start={6} end={12}>
        <Button
            variant="tertiary"
            disabled={boolean('Disabled', false)}
            color={select(...colors)}
            size={select(...sizes)}
            fullWidth={boolean('Full-Width', false)}
            elevation={boolean('Elevation', false)}
            shape={select(...shapes)}
            type={select(...types)}
            onClick={action('button-clicked')}
            onFocus={action('button-focus')}
        >
            {text('Label', 'Sign In')}
        </Button>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Ghost = () => (
    <Grid.Column start={6} end={12}>
        <Button
            variant="ghost"
            disabled={boolean('Disabled', false)}
            color={select(...colors)}
            size={select(...sizes)}
            fullWidth={boolean('Full-Width', false)}
            shape={select(...shapes)}
            type={select(...types)}
            onClick={action('button-clicked')}
            onFocus={action('button-focus')}
        >
            {text('Label', 'Sign In')}
        </Button>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Inverse = () => (
    <Grid.Column start={6} end={12}>
        <span style={{
            padding: '3rem', 
            backgroundColor: 'var(--bds-color-surface-blue',
            display: 'inline-flex',
            alignItems: 'center',
            marginTop: '-3rem',
            marginLeft: '-3rem'
        }}>
            <Button
                variant="inverse"
                disabled={boolean('Disabled', false)}
                color={select(...colors)}
                size={select(...sizes)}
                fullWidth={boolean('Full-Width', false)}
                elevation={boolean('Elevation', false)}
                shape={select(...shapes)}
                type={select(...types)}
                onClick={action('button-clicked')}
                onFocus={action('button-focus')}
            >
                {text('Label', 'Sign In')}
            </Button>
        </span>

        <ApiLink to='#' />
    </Grid.Column>
)

export const IconBefore = () => (
    <Grid.Column start={6} end={12}>
        <Button
            variant={select(...variants)}
            disabled={boolean('Disabled', false)}
            color={select(...colors)}
            size={select(...sizes)}
            fullWidth={boolean('Full-Width', false)}
            shape={select(...shapes)}
            type={select(...types)}
            onClick={action('button-clicked')}
            onFocus={action('button-focus')}
            iconBefore={<ChevronLeft size='size_20'/>}
        >
            {text('Label', 'Back')}
        </Button>

        <ApiLink to='#' />
    </Grid.Column>
)

export const IconAfter = () => (
    <Grid.Column start={6} end={12}>
        <Button
            variant={select(...variants)}
            disabled={boolean('Disabled', false)}
            color={select(...colors)}
            size={select(...sizes)}
            fullWidth={boolean('Full-Width', false)}
            shape={select(...shapes)}
            type={select(...types)}
            onClick={action('button-clicked')}
            onFocus={action('button-focus')}
            iconAfter={<ChevronRight />}
        >
            {text('Label', 'Continue')}
        </Button>

        <ApiLink to='#' />
    </Grid.Column>
)

export const FormSubmit = () => (
    <Grid.Column start={6} end={12}>
        <form action="/?path=/story/button--form-submit" method="get">
            <Button
                variant={select(...variants)}
                disabled={boolean('Disabled', false)}
                color={select(...colors)}
                size={select(...sizes)}
                fullWidth={boolean('Full-Width', false)}
                shape={select(...shapes)}
                type={select(...types)}
            >
                {text('Label', 'Submit')}
            </Button>
        </form>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <ButtonSkeleton 
            size={select(...sizes)}
            animate={boolean('Animate', false)}
            fullWidth={boolean('Full-Width', false)}
            width={text('Width', null)}
        />
    </Grid.Column>
)
