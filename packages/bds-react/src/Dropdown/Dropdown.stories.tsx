import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Info from '@lowes-tech/bds-icons/InfoOutlined'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    Dropdown,
    FormControl,
    FormHeading,
    FormHelperText,
    Option,
    DropdownSkeleton,
    FormHelperTextSkeleton,
} from '../'

export default { title: '@lowes-tech/bds-react/Dropdown', decorators: [withKnobs] }

const variants = [
    'Variant',
    {
        outlined: 'outlined',
        filled: 'filled',
    },
    'outlined',
] as const

const states = [
    'State',
    {
        default: 'default',
        error: 'error',
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
        jumbo: 'jumbo,'
    },
    'large',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <Dropdown
            label={text('Label', 'Label')}
            state={select(...states)}
            sizes={select(...sizes)}
            onChange={action('onChange')}
            shape={select(...shapes)}
            disabled={boolean('Disabled', false)}
            options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' },
                { label: 'Option 4', value: '4' },
                { label: 'Option 5', value: '5' },
                { label: 'Option 6', value: '6' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const DeclarativeChildren = () => (
    <Grid.Column start={6} end={12}>
        <Dropdown
            label={text('Label', 'Label')}
            state={select(...states)}
            shape={select(...shapes)}
            disabled={boolean('Disabled', false)}
            onChange={action('onChange')}
        >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
        </Dropdown>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithFormControl = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Heading</FormHeading>
            <Dropdown
                label={text('Label', 'Label')}
                state={select(...states)}
                shape={select(...shapes)}
                disabled={boolean('Disabled', false)}
                onChange={action('onChange')}
            >
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
                <Option value="4">Option 4</Option>
            </Dropdown>
            <FormHelperText icon={<Info />}>Helper Text</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const ManyOptions = () => (
    <Grid.Column start={6} end={12}>
        <Dropdown
            label={text('Label', 'Label')}
            state={select(...states)}
            shape={select(...shapes)}
            disabled={boolean('Disabled', false)}
            onChange={action('onChange')}
            options={[...new Array(20)].map((_, index) => ({
                label: `${index + 1}`,
                value: `${index + 1}`,
            }))}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Stacked = () => (
    <Grid.Column start={6} end={12}>
        <Dropdown
            id='stacked-dropdown'
            label={text('Label', 'Sort By')}
            state={select(...states)}
            sizes={select(...sizes)}
            onChange={action('onChange')}
            shape={select(...shapes)}
            stacked={boolean('Stacked', true)}
            disabled={boolean('Disabled', false)}
            options={[
                { label: 'Featured', value: '1' },
                { label: 'Best Sellers', value: '2' },
                { label: 'Highest Rated', value: '3' },
                { label: 'New Arrivals', value: '4' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Dropdown Skeleton</FormHeading>
            <br />
            <DropdownSkeleton
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Dropdown Skeleton w/ Helper Text</FormHeading>
            <br />
            <DropdownSkeleton
                shape={select(...shapes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
