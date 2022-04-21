// Account story
import React from 'react'
import DocumentOutlined from '@lowes-tech/bds-icons/DocumentOutlined'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/DocumentOutlined',
    decorators: [withKnobs]
}

export const DocumentOutlinedIcon = () => (
    <DocumentOutlined 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
