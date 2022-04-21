// Account story
import React from 'react'
import PauseOutlined from '@lowes-tech/bds-icons/PauseOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/PauseOutlined',
    decorators: [withKnobs]
}

export const PauseOutlinedIcon = () => (
    <PauseOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
