// Account story
import React from 'react'
import Bolt from '@lowes-tech/bds-icons/Bolt'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Bolt',
    decorators: [withKnobs]
}

export const BoltIcon = () => (
    <Bolt 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
