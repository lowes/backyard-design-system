// Account story
import React from 'react'
import ItemLookup from '@lowes-tech/bds-icons/ItemLookup'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/ItemLookup',
    decorators: [withKnobs]
}

export const ItemLookupIcon = () => (
    <ItemLookup 
        size={select(...sizes)}
        color={text('Color token', 'text_primary')}
    />
)
