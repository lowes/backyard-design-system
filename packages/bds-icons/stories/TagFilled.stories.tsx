// Account story
import React from 'react'
import TagFilled from '@lowes-tech/bds-icons/TagFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/TagFilled',
    decorators: [withKnobs]
}

export const TagFilledIcon = () => (
    <TagFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
