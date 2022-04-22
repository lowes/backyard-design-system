import React from 'react'
import {
    GridV3 as Grid,
    TextField,
    TextFieldSkeleton,
    FormControl,
    FormHeading,
    FormHelperText,
    FormHelperTextSkeleton
} from '../'
import { EmailOutlined, InfoOutlined } from '@lowes-tech/bds-icons'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: '@lowes-tech/bds-react/TextField', decorators: [withKnobs] }

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
        undefined: undefined,
        error: 'error',
        success: 'success',
    },
    undefined,
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

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <TextField
            id='outlined-text-field'
            label={text('Label', 'Label')}
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

export const ItemBefore = () => (
    <Grid.Column start={6} end={12}>
        <TextField
            id='outlined-text-field'
            label={text('Label', 'Email address')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('textfield-change')}
            onClick={action('textfield-click')}
            onFocus={action('textfield-focus')}
            onBlur={action('textfield-blur')}
            itemBefore={<EmailOutlined />}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const ItemAfter = () => (
    <Grid.Column start={6} end={12}>
        <TextField
            id='outlined-text-field'
            label={text('Label', 'Email address')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('textfield-change')}
            onClick={action('textfield-click')}
            onFocus={action('textfield-focus')}
            onBlur={action('textfield-blur')}
            itemAfter={<InfoOutlined />}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Suffix = () => (
    <Grid.Column start={6} end={12}>
        <TextField
            id='outlined-text-field'
            label={text('Label', 'Weight')}
            shape={select(...shapes)}
            state={select(...states)}
            size={select(...sizes)}
            onChange={action('textfield-change')}
            onClick={action('textfield-click')}
            onFocus={action('textfield-focus')}
            onBlur={action('textfield-blur')}
            suffix='lbs.'
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithHelperText = () => (
    <Grid.Column start={6} end={12}>
        <FormControl
            state={select(...states)}
        >
            <TextField
                id='outlined-text-field'
                label={text('Label', 'Label')}
                shape={select(...shapes)}
                size={select(...sizes)}
                itemBefore={<EmailOutlined />}
                customIcon={true}
                onChange={action('textfield-change')}
                onClick={action('textfield-click')}
                onFocus={action('textfield-focus')}
                onBlur={action('textfield-blur')}
            />
            <FormHelperText>
                Helper Text
            </FormHelperText>
        </FormControl>
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Text Field Skeleton</FormHeading>
            <br />
            <TextFieldSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Text Field Skeleton w/ Helper Text</FormHeading>
            <br />
            <TextFieldSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
