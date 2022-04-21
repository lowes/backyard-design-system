// Account story
import React from 'react'
import TrashFilled from '@lowes-tech/bds-icons/TrashFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/TrashFilled',
    decorators: [withKnobs]
}

export const TrashFilledIcon = () => (
    <TrashFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
