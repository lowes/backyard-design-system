// Account story
import React from 'react'
import ThumbDownFilled from '@lowes-tech/bds-icons/ThumbDownFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/ThumbDownFilled',
    decorators: [withKnobs]
}

export const ThumbDownFilledIcon = () => (
    <ThumbDownFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
