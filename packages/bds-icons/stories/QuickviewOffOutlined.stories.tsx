// Account story
import React from 'react'
import QuickviewOffOutlined from '@lowes-tech/bds-icons/QuickviewOffOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/QuickviewOffOutlined',
    decorators: [withKnobs]
}

export const QuickviewOffOutlinedIcon = () => (
    <QuickviewOffOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
