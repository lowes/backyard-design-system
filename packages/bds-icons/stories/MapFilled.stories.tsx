// Account story
import React from 'react'
import MapFilled from '@lowes-tech/bds-icons/MapFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/MapFilled',
    decorators: [withKnobs]
}

export const MapFilledIcon = () => (
    <MapFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
