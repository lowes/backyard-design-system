// Account story
import React from 'react'
import Youtube from '@lowes-tech/bds-icons/custom/Youtube'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Youtube',
    decorators: [withKnobs]
}

export const YoutubeIcon = () => (
    <Youtube 
        size={select(...sizes)}
        color={text('Color token', 'primary_text')}
    />
)
