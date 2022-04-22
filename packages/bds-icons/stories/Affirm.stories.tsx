// Account story
import React from 'react'
import Affirm from '@lowes-tech/bds-icons/custom/Affirm'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/Affirm',
    decorators: [withKnobs]
}

export const AffirmIcon = () => (
    <Affirm 
        size={select(...sizes)}
        color={text('Color token', 'primary_text')}
    />
)
