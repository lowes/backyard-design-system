import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    Multiselect,
    FormControl,
    FormHeading,
    FormHelperText,
    Option,
    MultiselectSkeleton,
    FormHelperTextSkeleton,

} from '..'
import ListOption from '../ListOption'
import { OptionGroup } from '../Select'

export default { title: '@lowes-tech/bds-react/Multiselect', decorators: [withKnobs] }

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
        jumbo: 'jumbo',
    },
    'medium',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <Multiselect
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            size={select(...sizes)}
            shape={select(...shapes)}
            onChange={action('onChange')}
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
        <Multiselect
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            size={select(...sizes)}
            shape={select(...shapes)}
            onChange={action('onChange')}
        >
            <Option value="1">Option 1</Option>
            <Option value="2">Option 2</Option>
            <Option value="3">Option 3</Option>
            <Option value="4">Option 4</Option>
        </Multiselect>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithOptionGroupOptions = () => (
    <Grid.Column start={6} end={12}>
        <Multiselect
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            size={select(...sizes)}
            shape={select(...shapes)}
            onChange={action('onChange')}
            options={[
                { label: 'List Option 1', value: '1' },
                { label: 'List Option 2', value: '2' },
                {
                    label: 'List Group 1',
                    options: [
                        { label: 'List Option 3', value: '3' },
                        {
                            label: 'List Group 2', options: [
                                { label: 'List Option 4', value: '4' },
                                { label: 'List Option 5', value: '5' },
                            ]
                        },
                    ]
                },
            ]}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithOptionGroupsDeclarative = () => (
    <Grid.Column start={6} end={12}>
        <Multiselect
            id='default'
            label={text('Label', 'Label')}
            state={select(...states)}
            size={select(...sizes)}
            shape={select(...shapes)}
            onChange={action('onChange')}
        >
            <ListOption value="1">List Option 1</ListOption>
            <ListOption value="2">List Option 2</ListOption>
            <OptionGroup
                label="List Group 1"
            >
                <Option value="3">List Option 3</Option>
                <Option value="4">List Option 4</Option>
            </OptionGroup>
            <OptionGroup
                label="List Group 2"
            >
                <Option value="5">List Option 5</Option>
                <Option value="6">List Option 6</Option>
            </OptionGroup>
        </Multiselect>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithFormControl = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Heading</FormHeading>
            <Multiselect
                id='default'
                label={text('Label', 'Label')}
                state={select(...states)}
                size={select(...sizes)}
                shape={select(...shapes)}
                onChange={action('onChange')}
            >
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
                <Option value="3">Option 3</Option>
                <Option value="4">Option 4</Option>
            </Multiselect>
            <FormHelperText>Helper Text</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const ManyOptions = () => (
    <Grid.Column start={6} end={12}>
        <Multiselect
            id='defaut'
            label={text('Label', 'Label')}
            state={select(...states)}
            size={select(...sizes)}
            shape={select(...shapes)}
            onChange={action('onChange')}
            options={[...new Array(20)].map((_, index) => ({
                label: `Option ${index + 1}`,
                value: `${index + 1}`,
            }))}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Multiselect Skeleton</FormHeading>
            <br />
            <MultiselectSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Multiselect Skeleton w/ Helper Text</FormHeading>
            <br />
            <MultiselectSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
