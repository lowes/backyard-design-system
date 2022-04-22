// Account story
import React from 'react'
import WaterHeaterTall from '@lowes-tech/bds-icons/WaterHeaterTall'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/WaterHeaterTall',
    decorators: [withKnobs]
}

export const WaterHeaterTallIcon = () => (
    <WaterHeaterTall 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
