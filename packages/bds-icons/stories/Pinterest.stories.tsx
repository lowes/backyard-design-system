// Account story
import React from 'react'
import Pinterest from '@lowes-tech/bds-icons/custom/Pinterest'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Pinterest',
    decorators: [withKnobs]
}

export const PinterestIcon = () => (
    <Pinterest 
        size={select(...sizes)}
        color={text('Color token', 'primary_text')}
    />
)
