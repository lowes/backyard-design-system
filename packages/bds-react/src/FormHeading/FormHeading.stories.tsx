import React from 'react'
import { GridV3 as Grid, FormHeading } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/FormHeading', decorators: [withKnobs] }

export const DefaultFormHeading = () => (
    <Grid.Column start={6} end={12}>
        <FormHeading>
            {text('Text', 'text')}
        </FormHeading>

        <ApiLink to='#' />
    </Grid.Column>
)