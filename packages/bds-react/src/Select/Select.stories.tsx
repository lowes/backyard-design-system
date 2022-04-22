import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    Select,
    Option,
    FormControl,
    FormHeading,
    FormHelperTextSkeleton,
    SelectSkeleton,
} from '..'
import Phone from '@lowes-tech/bds-icons/PhoneOutlined'

export default { title: '@lowes-tech/bds-react/Select', decorators: [withKnobs] }

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
    'medium',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <Select
            disabled={boolean('Disabled', false)}
            defaultValue={text('Default Value', '')}
            label={text('Label', 'Label')}
            value={text('Value', 'value')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('select-change')}
            onClick={action('select-click')}
            onKeyDown={action('select-key-down')}
            onFocus={action('select-focus')}
            onBlur={action('select-on-blur')}
        >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        </Select>

        <ApiLink to='#' />
    </Grid.Column>
)

export const SelectOptions = () => (
    <Grid.Column start={6} end={12}>
        <Select
            disabled={boolean('Disabled', false)}
            defaultValue={text('Default Value', '')}
            label={text('Label', 'Label')}
            value={text('Value', 'value')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('select-change')}
            onClick={action('select-click')}
            onKeyDown={action('select-key-down')}
            onFocus={action('select-focus')}
            onBlur={action('select-on-blur')}
            options={[
                { label: '', value: '0', hidden: true },
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
                { label: 'Option 3', value: '3' },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Icon = () => (
    <Grid.Column start={6} end={12}>
        <Select
            disabled={boolean('Disabled', false)}
            defaultValue={text('Default Value', '')}
            label={text('Label', 'Label')}
            value={text('Value', 'value')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('select-change')}
            onClick={action('select-click')}
            onKeyDown={action('select-key-down')}
            onFocus={action('select-focus')}
            onBlur={action('select-on-blur')}
            itemBefore={<Phone />}
        >
            <Option value="" hidden></Option>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        </Select>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Stacked = () => (
    <Grid.Column start={6} end={12}>
        <Select
            disabled={boolean('Disabled', false)}
            defaultValue={text('Default Value', '')}
            label={text('Label', 'Label')}
            value={text('Value', 'value')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            stacked
            onChange={action('select-change')}
            onClick={action('select-click')}
            onKeyDown={action('select-key-down')}
            onFocus={action('select-focus')}
            onBlur={action('select-on-blur')}
        >
            <Option value="" hidden></Option>
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
        </Select>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Select Skeleton</FormHeading>
            <br />
            <SelectSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Select Skeleton w/ Helper Text</FormHeading>
            <br />
            <SelectSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
