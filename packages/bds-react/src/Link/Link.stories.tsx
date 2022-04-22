import React from 'react'
import { GridV3 as Grid, Link, LinkSkeleton } from '../'
import ChevronLeft from '@lowes-tech/bds-icons/ChevronLeft'
import ChevronRight from '@lowes-tech/bds-icons/ChevronRight'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Link', decorators: [withKnobs] }

const colors = [
    'Color',
    {
        interactive: 'interactive',
        primary: 'primary',
        inverse: 'inverse',
    },
    'text_interactive',
] as const

const sizes = [
    'Size',
    {
        small: 'small',
        medium: 'medium',
    },
    'medium',
] as const

const underline = [
    'Underline',
    {
        never: 'never',
        hover: 'hover',
        always: 'always',
    },
    'hover',
] as const

export const DefaultLink = () => (
    <Grid.Column start={6} end={12}>
        <Link
            bold={boolean('Bold', false)}
            color={select(...colors)}
            size={select(...sizes)}
            underline={select(...underline)}
            to={text('To', 'to')}
            onClick={action('link-click')}
            onKeyDown={action('link-key-down')}
        >
            {text('Text', 'link text!')}
        </Link>

        <ApiLink to='#' />
    </Grid.Column>
)

export const IconBeforeLink = () => (
    <Grid.Column start={6} end={12}>
        <Link
            iconBefore={<ChevronLeft />}
            bold={boolean('Bold', false)}
            color={select(...colors)}
            size={select(...sizes)}
            underline={select(...underline)}
            to={text('To', 'to')}
            onClick={action('link-click')}
            onKeyDown={action('link-key-down')}
        >
            {text('Text', 'link text!')}
        </Link>

        <ApiLink to='#' />
    </Grid.Column>
)

export const IconAfterLink = () => (
    <Grid.Column start={6} end={12}>
        <Link
            iconAfter={<ChevronRight />}
            bold={boolean('Bold', false)}
            color={select(...colors)}
            size={select(...sizes)}
            underline={select(...underline)}
            to={text('To', 'to')}
            onClick={action('link-click')}
            onKeyDown={action('link-key-down')}
        >
            {text('Text', 'link text!')}
        </Link>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <LinkSkeleton 
            width={text('Width', '6rem')}
            animate={boolean('Animate', false)}
            size={select(...sizes)}
        />
    </Grid.Column>
)
