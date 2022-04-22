import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
    GridV3 as Grid,
    DatePicker,
    FormControl,
    FormHeading,
    DatePickerSkeleton,
    FormHelperTextSkeleton,
    CalendarPicker,
} from '../'
import useAdapter from '../Pickers/hooks/useAdapter'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/DatePicker', decorators: [withKnobs] }

const states = [
    'State',
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
        <DatePicker
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            onChange={action('onChange')}
            shape={select(...shapes)}
            disablePast={boolean('disablePast', false)}
            disableFuture={boolean('disableFuture', false)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Dates = () => {
    const adapter = useAdapter()

    const today = adapter.date(new Date())

    return (
        <Grid.Column start={6} end={12}>
            <DatePicker
                id='dates'
                label={text('Label', 'Installation Date')}
                state={select(...states)}
                onChange={action('onChange')}
                shape={select(...shapes)}
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
            <DatePicker
                id='dates-object'
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
            <DatePicker
                id='disabled-dates'
                label={text('Label', 'Room Booking')}
                state={select(...states)}
                onChange={action('onChange')}
                shape={select(...shapes)}
                minDate={adapter.addDays(today, -7)}
                maxDate={adapter.addDays(today, 7)}
                disableDates={[
                    adapter.addDays(today, -3),
                    adapter.addDays(today, -1),
                    today,
                    adapter.addDays(today, 2),
                    adapter.addDays(today, 3),
                    adapter.addDays(today, 4),
                ]}
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const Calendar = () => (
    <Grid.Column start={6} end={12}>
        <CalendarPicker
            onChange={action('onChange')}
            shape={select(...shapes)}
            disablePast={boolean('disablePast', false)}
            disableFuture={boolean('disableFuture', false)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>DatePicker Skeleton</FormHeading>
            <br />
            <DatePickerSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>DatePicker Skeleton w/ Helper Text</FormHeading>
            <br />
            <DatePickerSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
