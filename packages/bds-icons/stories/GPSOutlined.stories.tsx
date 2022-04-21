// Account story
import React from 'react'
import GPSOutlined from '@lowes-tech/bds-icons/GPSOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/GPSOutlined',
    decorators: [withKnobs]
}

export const GPSOutlinedIcon = () => (
    <GPSOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
