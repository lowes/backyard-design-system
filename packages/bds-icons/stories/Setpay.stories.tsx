// Account story
import React from 'react'
import Setpay from '@lowes-tech/bds-icons/custom/Setpay'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Setpay',
    decorators: [withKnobs]
}

export const SetpayIcon = () => (
    <Setpay 
        size={select(...sizes)}
        color={text('Color token', 'primary_text')}
    />
)
