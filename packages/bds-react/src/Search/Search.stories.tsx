import React from 'react'
import { GridV3 as Grid, Search, SearchSkeleton, FormControl, FormHeading, FormHelperTextSkeleton, IconButton } from '../'
import TriangleDown from '@lowes-tech/bds-icons/TriangleDown'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Search', decorators: [withKnobs] }

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
        jumbo: 'jumbo',
        large: 'large',
        medium: 'medium',
        small: 'small',
    },
    'medium',
] as const

export const Default = () => (
    <Grid.Column start={6} end={12}>
        <Search
            variant="outlined"
            shape={select(...shapes)}
            size={select(...sizes)}
            placeholder={text('Placeholder', 'Placeholder')}
            disabled={boolean('Disabled', false)}
            defaultValue={text('Default Value', '')}
            onSearchClick={action('search-click')}
            onClearClick={action('clear-click')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const withCategories = () => (
    <Grid.Column start={6} end={12}>
        <Search
            variant="outlined"
            shape={select(...shapes)}
            size={select(...sizes)}
            placeholder={text('Placeholder', 'Placeholder')}
            disabled={boolean('Disabled', false)}
            defaultValue={text('Default Value', '')}
            onSearchClick={action('search-click')}
            onClearClick={action('clear-click')}
            itemBefore={
                <IconButton
                    size='small' 
                    variant='tertiary' 
                    color='neutral'
                >
                    <TriangleDown />
                </IconButton>
            }
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Search Skeleton</FormHeading>
            <br />
            <SearchSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
        <br />
        <br />
        <FormControl>
            <FormHeading>Search Skeleton w/ Helper Text</FormHeading>
            <br />
            <SearchSkeleton
                shape={select(...shapes)}
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
            <FormHelperTextSkeleton animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
