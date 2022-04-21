// Account story
import React from 'react'
import RatingFull from '@lowes-tech/bds-icons/RatingFull'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/RatingFull',
    decorators: [withKnobs]
}

export const RatingFullIcon = () => (
    <RatingFull 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
