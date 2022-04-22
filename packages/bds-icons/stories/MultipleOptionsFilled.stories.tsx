// Account story
import React from 'react'
import MultipleOptionsFilled from '@lowes-tech/bds-icons/MultipleOptionsFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/MultipleOptionsFilled',
    decorators: [withKnobs]
}

export const MultipleOptionsFilledIcon = () => (
    <MultipleOptionsFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
