// Account story
import React from 'react'
import WaterHeaterFan from '@lowes-tech/bds-icons/WaterHeaterFan'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/WaterHeaterFan',
    decorators: [withKnobs]
}

export const WaterHeaterFanIcon = () => (
    <WaterHeaterFan 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
