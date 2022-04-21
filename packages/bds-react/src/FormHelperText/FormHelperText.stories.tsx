import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import Info from '@lowes-tech/bds-icons/InfoOutlined'
import { ApiLink } from '../utils/storybook/ApiLink'
import {
    GridV3 as Grid,
    FormControl,
    TextField,
    FormHelperText,
    TextFieldSkeleton,
    FormHelperTextSkeleton,
} from '../'

export default { title: '@lowes-tech/bds-react/FormHelperText', decorators: [withKnobs] }

const states = [
    'State',
    {
        undefined: undefined,
        error: 'error',
    },
    undefined,
] as const

export const DefaultFormHelperText = () => (
    <Grid.Column start={6} end={12}>
        <FormControl state={select(...states)}>
            <TextField id='test-1' />
            <FormHelperText>{text('Helper Text', 'Placeholder')}</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithIcon = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <TextField id='test-1' />
            <FormHelperText icon={<Info />}>{text('Helper Text', 'Placeholder')}</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <TextFieldSkeleton animate={boolean('Animate', false)} />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
