// Account story
import React from 'react'
import ZoomIn from '@lowes-tech/bds-icons/ZoomIn'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/ZoomIn',
    decorators: [withKnobs]
}

export const ZoomInIcon = () => (
    <ZoomIn 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
