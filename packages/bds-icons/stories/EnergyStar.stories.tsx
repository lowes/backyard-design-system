// Account story
import React from 'react'
import EnergyStar from '@lowes-tech/bds-icons/custom/EnergyStar'
import theme from '@lowes-tech/bds-tokens/v2/light/theme'
import { withKnobs, select, text } from '@storybook/addon-knobs'

const sizes = ['Sizes', {
    ...theme.sizes
}, 'size_128']

export default { 
    title: '@lowes-tech/bds-icons/EnergyStar',
    decorators: [withKnobs]
}

export const EnergyStarIcon = () => (
    <EnergyStar 
        size={select(...sizes)}
        color={text('Color token', 'primary_text')}
    />
)
