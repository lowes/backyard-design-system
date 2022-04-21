import React from 'react'
import { GridV3 as Grid, Pagination } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Pagination', decorators: [withKnobs] }

const sizes = [
    'Size',
    {
        small: 'small',
        medium: 'medium',
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

export const NumberedPagination = () => (
    <Grid.Column start={6} end={12}>
        <Pagination
            size={select(...sizes)}
            shape={select(...shapes)}
            count={number('Count', 5)}
            defaultPage={number('Default Page', 1)}
            boundaryCount={number('Boundary Count', 2)}
            siblingCount={number('Sibling Count', 0)}
            hidePrevButton={boolean('Hide Prev Button', false)}
            hideNextButton={boolean('Hide Next Button', false)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const EllipsisExample = () => (
    <Grid.Column start={6} end={12}>
        <Pagination
            size={select(...sizes)}
            shape={select(...shapes)}
            count={number('Count', 8)}
            defaultPage={number('Default Page', 1)}
            boundaryCount={number('Boundary Count', 1)}
            siblingCount={number('Sibling Count', 1)}
            hidePrevButton={boolean('Hide Prev Button', false)}
            hideNextButton={boolean('Hide Next Button', false)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const DottedPagination = () => (
    <Grid.Column start={6} end={12}>
        <Pagination
            variant="dotted"
            size={select(...sizes)}
            shape={select(...shapes)}
            count={number('Count', 5)}
            defaultPage={number('Default Page', 1)}
            boundaryCount={number('Boundary Count', 2)}
            siblingCount={number('Sibling Count', 0)}
            hidePrevButton={boolean('Hide Prev Button', false)}
            hideNextButton={boolean('Hide Next Button', false)}
        />

        <ApiLink to='#' />
    </Grid.Column>
)
