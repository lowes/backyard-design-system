// Account story
import React from 'react'
import Assembly from '@lowes-tech/bds-icons/Assembly'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Assembly',
    decorators: [withKnobs]
}

export const AssemblyIcon = () => (
    <Assembly 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
