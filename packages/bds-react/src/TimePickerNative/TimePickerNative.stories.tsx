import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    TimePickerNative,
    TimePickerNativeSkeleton,
    FormControl,
    FormHeading,
    FormHelperTextSkeleton,
} from '../'

export default { title: '@lowes-tech/bds-react/TimePickerNative', decorators: [withKnobs] }

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
        <TimePickerNative
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            shape={select(...shapes)}
            onChange={action('onChange')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const List = () => (
    <Grid.Column start={6} end={12}>
        <TimePickerNative
            id='list'
            label={text('Label', 'Installation Time')}
            state={select(...states)}
            shape={select(...shapes)}
            onChange={action('onChange')}
            time="09:15"
            times={[
                { label: 'Morning 8:00 AM', value: '8:00' },
                { label: 'Morning 9:15 AM', value: '9:15' },
                { label: 'Morning 9:45 AM', value: '9:45', disabled: true },
                { label: 'Morning 10:15 AM', value: '10:15' },
                { label: 'Morning 11:15 AM', value: '11:15' },
                { label: 'Noon 12:00 PM', value: '12:00' },
                { label: 'Afternoon 1:15 PM', value: '13:15', disabled: true },
                { label: 'Afternoon 1:45 PM', value: '13:45' },
                { label: 'Afternoon 3:00 PM', value: '15:00', disabled: true },
                { label: 'Evening 5:00 PM', value: '18:00' },
                { label: 'Evening 5:45 PM', value: '18:45' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Ranges = () => (
    <Grid.Column start={6} end={12}>
        <TimePickerNative
            id='ranges'
            label={text('Label', 'Room Booking')}
            state={select(...states)}
            shape={select(...shapes)}
            onChange={action('onChange')}
            times={[
                { label: 'Morning 8:00 AM - 9:45 AM', start: '8:00', end: '9:45' },
                { label: 'Morning 10:15 AM - 12:00 PM', start: '10:15', end: '12:00' },
                {
                    label: 'Afternoon 1:15 PM - 2:30 PM',
                    start: '13:15',
                    end: '14:30',
                    disabled: true,
                },
                {
                    label: 'Afternoon 3:00 PM - 4:15 PM',
                    start: '15:00',
                    end: '16:15',
                    disabled: true,
                },
                { label: 'Evening 5:00 PM - 6:15 PM', start: '18:00', end: '19:15' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>TimePickerNative Skeleton</FormHeading>
            <br />
            <TimePickerNativeSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>TimePickerNative Skeleton w/ Helper Text</FormHeading>
            <br />
            <TimePickerNativeSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
