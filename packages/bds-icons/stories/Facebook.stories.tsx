// Account story
import React from 'react'
import Facebook from '@lowes-tech/bds-icons/custom/Facebook'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Facebook',
    decorators: [withKnobs]
}

export const FacebookIcon = () => (
    <Facebook 
        size={select(...sizes)}
        color={text('Color token', 'primary_text')}
    />
)
