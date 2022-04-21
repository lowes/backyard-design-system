import { LocationOutlined } from '@lowes-tech/bds-icons'
import { ApiLink } from '../utils/storybook/ApiLink'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import { Button, GridV3 as Grid, Tooltip, TooltipPopper, Typography } from '../'

const shadows = [
    'Shadow',
    {
        shadow_04: 'shadow_04',
        shadow_05: 'shadow_05',
    },
    'shadow_04',
] as const

const arrows = [
    'Arrow',
    {
        none: 'none',
        topStart: 'top-start',
        top: 'top',
        topEnd: 'top-end',
        left: 'left',
        right: 'right',
        bottomStart: 'bottom-start',
        bottom: 'bottom',
        bottomEnd: 'bottom-end',
    },
    'top',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export default { title: '@lowes-tech/bds-react/Tooltip', decorators: [withKnobs] }

export const LowContrastTooltip = () => (
    <Grid.Column start={6} end={12}>
        <Tooltip
            title={text('Title', 'Title')}
            arrow={select(...arrows)}
            invisible={boolean('Invisible', false)}
            shadow={select(...shadows)}
            shape={select(...shapes)}
        >
            {text('Text', 'Text')}
        </Tooltip>

        <ApiLink to='#' />
    </Grid.Column>
)

export const HighContrastTooltip = () => (
    <Grid.Column start={6} end={12}>
        <Tooltip
            variant="high_contrast"
            title={text('Title', 'Title')}
            arrow={select(...arrows)}
            invisible={boolean('Invisible', false)}
            shadow={select(...shadows)}
            shape={select(...shapes)}
        >
            {text('Text', 'Text')}
        </Tooltip>

        <ApiLink to='#' />
    </Grid.Column>
)

export const TooltipWithIcon = () => (
    <Grid.Column start={6} end={12}>
        <Tooltip
            variant="high_contrast"
            icon={<LocationOutlined />}
            title={text('Title', 'Title')}
            arrow={select(...arrows)}
            invisible={boolean('Invisible', false)}
            shadow={select(...shadows)}
            shape={select(...shapes)}
        >
            {text('Text', 'Text')}
        </Tooltip>

        <ApiLink to='#' />
    </Grid.Column>
)

export const TooltipWithTooltipPopper = () => (
    <>
        <Grid.Column start={6} end={12}>
            <TooltipPopper
                tooltip={
                    <Tooltip
                        variant="high_contrast"
                        icon={<LocationOutlined />}
                        title={text('Title', 'Title')}
                        arrow={select(...arrows)}
                        invisible={boolean('Invisible', false)}
                        shadow={select(...shadows)}
                        shape={select(...shapes)}
                    >
                        {text('Text', 'Text')}
                    </Tooltip>
                }
            >
                <Button>Hover Me</Button>
            </TooltipPopper>
        </Grid.Column>
        <Grid.Column start={6} end={12}>
            <TooltipPopper
                tooltip={
                    <Tooltip
                        variant="high_contrast"
                        icon={<LocationOutlined />}
                        title={text('Title', 'Title')}
                        arrow={select(...arrows)}
                        invisible={boolean('Invisible', false)}
                        shadow={select(...shadows)}
                        shape={select(...shapes)}
                    >
                        {text('Text', 'Text')}
                    </Tooltip>
                }
            >
                <Typography variant="h1">Hover Me</Typography>
            </TooltipPopper>
        </Grid.Column>

        <ApiLink to='#' />
    </>
)
