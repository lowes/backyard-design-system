// Account story
import React from 'react'
import Plus from '@lowes-tech/bds-icons/Plus'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Plus',
    decorators: [withKnobs]
}

export const PlusIcon = () => (
    <Plus 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
