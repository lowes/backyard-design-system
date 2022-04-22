// Account story
import React from 'react'
import NotesOutlined from '@lowes-tech/bds-icons/NotesOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/NotesOutlined',
    decorators: [withKnobs]
}

export const NotesOutlinedIcon = () => (
    <NotesOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
