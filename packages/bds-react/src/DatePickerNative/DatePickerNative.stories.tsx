import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
    GridV3 as Grid,
    DatePickerNative,
    DatePickerNativeSkeleton,
    FormControl,
    FormHeading,
    FormHelperTextSkeleton,
} from '../'
import useAdapter from '../Pickers/hooks/useAdapter'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/DatePickerNative', decorators: [withKnobs] }

const states = [
    'States',
    {
        default: 'default',
        error: 'error',
        success: 'success',
    },
    'default',
] as const

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
    'large',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <DatePickerNative
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            shape={select(...shapes)}
            onChange={action('onChange')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Dates = () => {
    const adapter = useAdapter()

    const today = adapter.date(new Date())

    return (
        <Grid.Column start={6} end={12}>
            <DatePickerNative
                id='dates'
                label={text('Label', 'Installation Date')}
                state={select(...states)}
                onChange={action('onChange')}
                shape={select(...shapes)}
                date={today}
                dates={[
                    adapter.addDays(today, -3),
                    adapter.addDays(today, -2),
                    adapter.addDays(today, -1),
                    today,
                    adapter.addDays(today, 1),
                    adapter.addDays(today, 2),
                    adapter.addDays(today, 3),
                    adapter.addDays(today, 4),
                ]}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const DatesAsObject = () => {
    const adapter = useAdapter()

    const today = adapter.date(new Date())
    const yesterday = adapter.addDays(today, -1)
    const tomorrow = adapter.addDays(today, 1)

    return (
        <Grid.Column start={6} end={12}>
            <DatePickerNative
                id='date-object'
                label={text('Label', 'Installation Date')}
                state={select(...states)}
                onChange={action('onChange')}
                shape={select(...shapes)}
                date={adapter.format(today, 'yyyy-MM-dd')}
                dates={[
                    {
                        label: `Yesterday ${adapter.format(yesterday, 'EEE MMM do, yyyy')}`,
                        value: adapter.format(yesterday, 'yyyy-MM-dd'),
                    },
                    {
                        label: `Today ${adapter.format(today, 'EEE MMM do, yyyy')}`,
                        value: adapter.format(today, 'yyyy-MM-dd'),
                    },
                    {
                        label: `Tomorrow ${adapter.format(tomorrow, 'EEE MMM do, yyyy')}`,
                        value: adapter.format(tomorrow, 'yyyy-MM-dd'),
                    },
                ]}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const DisabledDates = () => {
    const adapter = useAdapter()

    const today = adapter.date(new Date())

    return (
        <Grid.Column start={6} end={12}>
            <DatePickerNative
                id='disabled-dates'
                label={text('Label', 'Room Booking')}
                state={select(...states)}
                onChange={action('onChange')}
                shape={select(...shapes)}
                min={adapter.format(adapter.addDays(today, -7), 'yyyy-MM-dd')}
                max={adapter.format(adapter.addDays(today, 7), 'yyyy-MM-dd')}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>DatePickerNative Skeleton</FormHeading>
            <br />
            <DatePickerNativeSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>DatePickerNative Skeleton w/ Helper Text</FormHeading>
            <br />
            <DatePickerNativeSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
