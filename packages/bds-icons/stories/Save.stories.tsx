// Account story
import React from 'react'
import Save from '@lowes-tech/bds-icons/Save'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Save',
    decorators: [withKnobs]
}

export const SaveIcon = () => (
    <Save 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
