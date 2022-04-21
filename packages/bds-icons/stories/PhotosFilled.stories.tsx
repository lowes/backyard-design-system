// Account story
import React from 'react'
import PhotosFilled from '@lowes-tech/bds-icons/PhotosFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/PhotosFilled',
    decorators: [withKnobs]
}

export const PhotosFilledIcon = () => (
    <PhotosFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
