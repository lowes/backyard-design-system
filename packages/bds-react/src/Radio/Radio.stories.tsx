import React from 'react'
import { GridV3 as Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, RadioSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Radio', decorators: [withKnobs] }

export const DefaultRadio = () => (
    <Grid.Column start={6} end={12}>
        <Radio
            id='default-radio'
            disabled={boolean('Disabled', false)}
            name={text('Name', 'name')} 
            value="value2" 
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithFormControlLabel = () => (
    <Grid.Column start={6} end={12}>
        <FormControlLabel
            id='control-label-radio'
            label={text('Label', 'Label')}
            control={
                <Radio
                    disabled={boolean('Disabled', false)}
                    name={text('Name', 'name')}
                    value="value2"
                />
            }
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithHelperText = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormControlLabel
                id='helper-text-radio'
                label={text('Label', 'Label')}
                control={
                    <Radio
                        disabled={boolean('Disabled', false)}
                        name={text('Name', 'name')}
                        value="value2"
                    />
                }
            />
            <FormHelperText>{text('HelperText', 'Helper Text')}</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithRadioGroup = () => (
    <Grid.Column start={6} end={12}>
        <RadioGroup name="radio_group">
            <FormControlLabel
                id='first-radio'
                label={text('Label', 'Label')}
                control={
                    <Radio
                        disabled={boolean('Disabled', false)}
                        name={text('Name', 'name')}
                        value="value1"
                    />
                }
            />
            <FormControlLabel
                id='second-radio'
                label={text('Label', 'Label')}
                control={
                    <Radio
                        disabled={boolean('Disabled', false)}
                        name={text('Name', 'name')}
                        value="value2"
                    />
                }
            />
        </RadioGroup>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithRadioGroupAndHelperText = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <RadioGroup name="radio_group">
                <FormControlLabel
                    id='first-radio'
                    label={text('Label', 'Label')}
                    control={
                        <Radio
                            disabled={boolean('Disabled', false)}
                            name={text('Name', 'name')}
                            value="value1"
                        />
                    }
                />
                <FormControlLabel
                    id='second-radio'
                    label={text('Label', 'Label')}
                    control={
                        <Radio
                            disabled={boolean('Disabled', false)}
                            name={text('Name', 'name')}
                            value="value2"
                        />
                    }
                />
            </RadioGroup>
            <FormHelperText>{text('HelperText', 'Helper Text')}</FormHelperText>
        </FormControl>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <RadioSkeleton 
            withLabel={boolean('withLabel', false)}
            labelWidth={text('Label text width', '5rem')}
            withHelper={boolean('withHelper', false)}
            helperWidth={text('Helper text width', '5rem')}
            animate={boolean('Animate', false)}
        />
    </Grid.Column>
)