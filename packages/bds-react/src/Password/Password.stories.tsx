import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    Password,
    FormControl,
    FormHeading,
    PasswordSkeleton,
    FormHelperTextSkeleton,
} from '../'

export default { title: '@lowes-tech/bds-react/Password', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

const states = [
    'State',
    {
        default: 'default',
        error: 'error',
        success: 'success',
    },
    'default',
] as const

const sizes = [
    'Size',
    {
        small: 'small',
        medium: 'medium',
        large: 'large',
        jumbo: 'jumbo'
    },
    'large',
] as const

export const DefaultPassword = () => (
    <Grid.Column start={6} end={12}>
        <Password
            id='outlined-password'
            variant="outlined"
            label='Password'
            defaultValue={text('Default Value', '')}
            disabled={boolean('Disabled', false)}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('textfield-change')}
            onClick={action('textfield-click')}
            onFocus={action('textfield-focus')}
            onBlur={action('textfield-blur')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Password Skeleton</FormHeading>
            <br />
            <PasswordSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Password Skeleton w/ Helper Text</FormHeading>
            <br />
            <PasswordSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
