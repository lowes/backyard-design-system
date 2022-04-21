// Account story
import React from 'react'
import AccountOutlined from '@lowes-tech/bds-icons/AccountOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/AccountOutlined',
    decorators: [withKnobs]
}

export const AccountOutlinedIcon = () => (
    <AccountOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
