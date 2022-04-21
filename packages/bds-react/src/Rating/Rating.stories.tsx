import React from 'react'
import { GridV3 as Grid, Rating, RatingSkeleton } from '../'
import RatingOutline from '@lowes-tech/bds-icons/RatingEmpty'
import RatingFilled from '@lowes-tech/bds-icons/RatingFull'
import { ApiLink } from '../utils/storybook/ApiLink'
import { action } from '@storybook/addon-actions'
import { withKnobs, number, boolean, select, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Rating', decorators: [withKnobs] }

const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
    jumbo: 'jumbo'
} as const

export const DefaultRating = () => (
    <Grid.Column start={6} end={12}>
        <Rating
            interactive={boolean('Interactive', false)}
            name={text('Name', 'name')}
            value={Number(text('Value', '3.5'))}
            count={number('Ratings', 734)}
            emptyIcon={<RatingOutline />}
            icon={<RatingFilled />}
            size={select('Sizes', sizes, 'medium')}
            precision={number('Precision', 0.5)}
            onChange={action('rating-change')}
            onChangeHover={action('rating-change-hover')}
            onMouseLeave={action('rating-mouse-leave')}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <RatingSkeleton
            size={select('Sizes', sizes, 'medium')}
            animate={boolean('Animate', false)}
            withValue={boolean('withValue', false)}
        />
    </Grid.Column>
)