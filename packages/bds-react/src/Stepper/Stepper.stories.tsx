import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import { GridV3 as Grid, Stepper, FormControl, FormHeading, StepperSkeleton } from '../'

export default { title: '@lowes-tech/bds-react/Stepper', decorators: [withKnobs] }

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
    },
    'default',
] as const

export const OutlinedStepper = () => (
    <Grid.Column start={6} end={12}>
        <Stepper
            label={text('Label', 'Label')}
            step={number('Step', 1)}
            roundToStep={boolean('Round Step', false)}
            defaultValue={number('Default Value', 0)}
            shape={select(...shapes)}
            state={select(...states)}
            onChange={action('stepper-change')}
            onBlur={action('stepper-blur')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Stepper Skeleton</FormHeading>
            <br />
            <StepperSkeleton
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Stepper Skeleton (Hidden Buttons)</FormHeading>
            <br />
            <StepperSkeleton
                hideButtons
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Stepper Skeleton (w/ Label)</FormHeading>
            <br />
            <StepperSkeleton
                label
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
    </Grid.Column>
)
