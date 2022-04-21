// Account story
import React from 'react'
import LinkIcon from '@lowes-tech/bds-icons/LinkIcon'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/LinkIcon',
    decorators: [withKnobs]
}

export const LinkIconIcon = () => (
    <LinkIcon 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
