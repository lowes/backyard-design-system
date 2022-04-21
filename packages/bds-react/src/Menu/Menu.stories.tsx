import React from 'react'
import { GridV3 as Grid, Menu, MenuItem, SubMenu } from '../'
import { HomeOutlined, NotesOutlined, DocumentOutlined, TrashOutlined } from '@lowes-tech/bds-icons'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Menu', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultMenu = () => (
    <Grid.Column start={6} end={12}>
        <Menu width="15rem" shape={select(...shapes)}>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem color="red">Menu Item</MenuItem>
        </Menu>

        <ApiLink to='#' />
    </Grid.Column>
)

export const WithSubMenu = () => (
    <Grid.Column start={6} end={12}>
        <Menu shape={select(...shapes)} width="15rem">
            <MenuItem color="interactive" iconBefore={<HomeOutlined />}>
                Menu Item
            </MenuItem>
            <MenuItem iconBefore={<NotesOutlined />}>Menu Item</MenuItem>
            <MenuItem iconBefore={<DocumentOutlined />}>Menu Item</MenuItem>
            <MenuItem color="red" iconBefore={<TrashOutlined />}>
                Menu Item
            </MenuItem>
            <SubMenu label="More Options" listenHover>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item</MenuItem>
                <MenuItem color="red">Menu Item</MenuItem>
            </SubMenu>
        </Menu>

        <ApiLink to='#' />
    </Grid.Column>
)
