import React from 'react'
import { GridV3 as Grid, TextArea, FormControl, FormHeading, TextAreaSkeleton, FormHelperText } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/TextArea', decorators: [withKnobs] }

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

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <TextArea
            id='outlined-text-area'
            label='Label'
            disabled={boolean('Disabled', false)}
            defaultValue={text('Text', '')}
            helperText={text('Helper Text', 'Helper Text')}
            rows={number('Rows', 4)}
            max={number('Max', 300)}
            resizer={boolean('Resizer', false)}
            shape={select(...shapes)}
            state={select(...states)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const HelperText = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <TextArea
                id='outlined-text-area'
                label='Label'
                disabled={boolean('Disabled', false)}
                defaultValue={text('Text', '')}
                rows={number('Rows', 4)}
                max={number('Max', 300)}
                resizer={boolean('Resizer', false)}
                shape={select(...shapes)}
                state={select(...states)}
            />
            <FormHelperText>This is some really long helper text to show that it goes all the way across the input so this is a really super wide input!</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Text Area Skeleton</FormHeading>
            <br />
            <TextAreaSkeleton
                shape={select(...shapes)}
                rows={number('Rows', 4)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Text Area Skeleton w/ Helper Text</FormHeading>
            <br />
            <TextAreaSkeleton
                shape={select(...shapes)}
                rows={number('Rows', 4)}
                animate={boolean('Animate', false)}
                helperText
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Text Area Skeleton w/ Max Counter</FormHeading>
            <br />
            <TextAreaSkeleton
                shape={select(...shapes)}
                rows={number('Rows', 4)}
                animate={boolean('Animate', false)}
                max
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Text Area Skeleton w/ Helper Text & Max Counter</FormHeading>
            <br />
            <TextAreaSkeleton
                shape={select(...shapes)}
                rows={number('Rows', 4)}
                animate={boolean('Animate', false)}
                helperText
                max
            />
        </FormControl>
    </Grid.Column>
)
