// Account story
import React from 'react'
import RatingEmpty from '@lowes-tech/bds-icons/RatingEmpty'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/RatingEmpty',
    decorators: [withKnobs]
}

export const RatingEmptyIcon = () => (
    <RatingEmpty 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
