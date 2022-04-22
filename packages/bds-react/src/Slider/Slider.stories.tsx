import React from 'react'
import { Slider, SliderSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withA11y } from '@storybook/addon-a11y'
import { GridV3 as Grid } from '../'
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Slider', decorators: [withA11y, withKnobs] }

const orientations = [
    'Orientation',
    {
        horizontal: 'horizontal',
        vertical: 'vertical',
    },
    'horizontal',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultSlider = () => (
    <Grid.Column start={5} end={13}>
        <Slider
            defaultValue={number('Default Value', 1)}
            disabled={boolean('Disabled', false)}
            showInput={boolean('Show Input', false)}
            min={number('Min', 1)}
            max={number('Max', 10)}
            orientation={select(...orientations)}
            shape={select(...shapes)}
            step={number('Step', 1)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const SliderWithoutDivisibleStep = () => (
    <Grid.Column start={5} end={13}>
        <Slider
            defaultValue={number('Default Value', 0)}
            disabled={boolean('Disabled', false)}
            showInput={boolean('Show Input', false)}
            min={number('Min', 0)}
            max={number('Max', 11)}
            orientation={select(...orientations)}
            shape={select(...shapes)}
            step={number('Step', 3)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const SliderWithLargeIndivisibleStep = () => (
    <Grid.Column start={5} end={13}>
        <Slider
            defaultValue={number('Default Value', 0)}
            disabled={boolean('Disabled', false)}
            showInput={boolean('Show Input', false)}
            min={number('Min', 0)}
            max={number('Max', 11)}
            orientation={select(...orientations)}
            shape={select(...shapes)}
            step={number('Step', 6)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const TooltipSlider = () => (
    <Grid.Column start={5} end={13}>
        <Slider
            defaultValue={number('Default Value', 0)}
            disabled={boolean('Disabled', false)}
            showInput={boolean('Show Input', false)}
            min={number('Min', 0)}
            max={number('Max', 14)}
            orientation={select(...orientations)}
            shape={select(...shapes)}
            step={number('Step', 3)}
            tooltip={true}
        />

        <ApiLink to='#' />
    </Grid.Column>
)
export const Skeleton = () => (
    <SliderSkeleton
        orientation={select(...orientations)}
        showInput={boolean('showInput', false)}
        animate={boolean('Animate', false)}
    />
)
