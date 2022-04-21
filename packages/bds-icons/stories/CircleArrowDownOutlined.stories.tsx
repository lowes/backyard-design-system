// Account story
import React from 'react'
import CircleArrowDownOutlined from '@lowes-tech/bds-icons/CircleArrowDownOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/CircleArrowDownOutlined',
    decorators: [withKnobs]
}

export const CircleArrowDownOutlinedIcon = () => (
    <CircleArrowDownOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
