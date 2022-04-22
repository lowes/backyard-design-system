import React from 'react'
import {
    GridV3 as Grid,
    MaskedInput
} from '../'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: '@lowes-tech/bds-react/MaskedInput', decorators: [withKnobs] }

export const Phone = () => (
    <Grid.Column start={6} end={12}>
        <MaskedInput
            id='phone'
            mask='phone'
            label='Phone number'
            onChange={action('masked-input-change')}
            autoComplete='tel-national'
        />
    </Grid.Column>
)

export const Currency = () => (
    <Grid.Column start={6} end={12}>
        <MaskedInput
            id='currency'
            mask='currency'
            label='Payment amount'
            onChange={action('masked-input-change')}
        />
    </Grid.Column>
)