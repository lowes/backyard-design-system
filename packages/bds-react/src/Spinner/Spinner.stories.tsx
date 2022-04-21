import React from 'react'
import { GridV3 as Grid, Spinner, Button } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, boolean, /*text,*/ select } from '@storybook/addon-knobs'
// import type { BackyardTheme } from '../ThemeProvider'

export default { title: '@lowes-tech/bds-react/Spinner', decorators: [withKnobs] }

const colors = [
    'Color',
    {
        interactive: 'icon_interactive',
        green: 'icon_green',
        white: 'icon_solid_inverse',
    },
    'white',
] as const

export const DefaultSpinner = () => (
    <Grid.Column start={6} end={12}>
        <Spinner
            show={boolean('show', true)}
            small={boolean('small', false)}
            invisible={boolean('invisible', false)}
            // @todo tokens
            // color={select(...colors) as keyof BackyardTheme['color']}
            className={'test-classname'}
        />

        <ApiLink to='#' />
    </Grid.Column>
)

export const InlineSpinner = () => (
    <Grid.Row>
        <Grid.Column start={6} end={12}>
            <div>
                Default inline spinner (no provided color)
                <Spinner show={boolean('show', true)} small={boolean('small', true)} inline />
            </div>
            <br />
            <div>
                Inline spinner with text (with provided color)
                <Spinner
                    show={boolean('show', true)}
                    // @todo tokens
                    // color={text('spinner color', 'error') as keyof BackyardTheme['color']}
                    small={boolean('small', true)}
                    inline
                />
            </div>
            <br />
            <Button>
                Button
                <Spinner
                    show={boolean('show', true)}
                    small={boolean('small', true)}
                    inline
                    color={select(...colors)}
                />
            </Button>
            <br />
            <br />
            <Button variant={'secondary'}>
                Button
                <Spinner
                    show={boolean('show', true)}
                    small={boolean('small', true)}
                    inline
                    color={select(...colors)}
                />
            </Button>
        </Grid.Column>

        <ApiLink to='#' />
    </Grid.Row>
)
