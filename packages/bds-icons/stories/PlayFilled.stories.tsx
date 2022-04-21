// Account story
import React from 'react'
import PlayFilled from '@lowes-tech/bds-icons/PlayFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/PlayFilled',
    decorators: [withKnobs]
}

export const PlayFilledIcon = () => (
    <PlayFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
