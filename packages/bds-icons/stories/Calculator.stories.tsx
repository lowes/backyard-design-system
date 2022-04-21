// Account story
import React from 'react'
import Calculator from '@lowes-tech/bds-icons/Calculator'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Calculator',
    decorators: [withKnobs]
}

export const CalculatorIcon = () => (
    <Calculator 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
