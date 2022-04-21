// Account story
import React from 'react'
import HistoryFilled from '@lowes-tech/bds-icons/HistoryFilled'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/HistoryFilled',
    decorators: [withKnobs]
}

export const HistoryFilledIcon = () => (
    <HistoryFilled 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
