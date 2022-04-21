// Account story
import React from 'react'
import Subscription from '@lowes-tech/bds-icons/Subscription'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Subscription',
    decorators: [withKnobs]
}

export const SubscriptionIcon = () => (
    <Subscription 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
