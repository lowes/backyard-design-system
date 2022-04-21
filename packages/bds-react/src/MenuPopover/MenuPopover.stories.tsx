import React from 'react'
import { GridV3 as Grid, IconButton, MenuPopover, Menu, MenuItem, SubMenu } from '../'
import {
    Dots,
    HomeOutlined,
    Download,
    NotesOutlined,
    DocumentOutlined,
    TrashOutlined,
    DotsVertical,
    Departments,
} from '@lowes-tech/bds-icons'
import { ApiLink } from '../utils/storybook/ApiLink'
import { withKnobs, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default { title: '@lowes-tech/bds-react/MenuPopover', decorators: [withKnobs] }

const shapes = ['Shape', { rounded: 'rounded', squared: 'squared' }, 'rounded'] as const

export const DefaultMenuPopover = () => (
    <React.Fragment>
        <MenuPopover
            onOpen={action('onOpen')}
            onClose={action('onClose')}
            menu={
                <Menu width="15rem" shape={select(...shapes)}>
                    <MenuItem color="interactive" iconBefore={<HomeOutlined />}>
                        Menu Item
                    </MenuItem>
                    <MenuItem iconBefore={<NotesOutlined />}>Menu Item</MenuItem>
                    <MenuItem iconBefore={<DocumentOutlined />}>Menu Item</MenuItem>
                    <MenuItem color="red" iconBefore={<TrashOutlined />}>
                        Menu Item
                    </MenuItem>
                </Menu>
            }
        >
            <IconButton variant="ghost" size="small">
                <DotsVertical />
            </IconButton>
        </MenuPopover>

        <ApiLink to='#' />
    </React.Fragment>
)

export const SubMenuPopover = () => (
    <Grid.Column start={6} end={12}>
        <MenuPopover
            onOpen={action('onOpen')}
            onClose={action('onClose')}
            menu={
                <Menu width="15rem">
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
            }
            open
        >
            <IconButton
                variant="ghost"
                color="neutral"
                size="medium"
                style={{
                    transform: 'translate(-10rem, -10rem)',
                }}
            >
                <Departments />
            </IconButton>
        </MenuPopover>

        <ApiLink to='#' />
    </Grid.Column>
)

export const SubMenuPopoverHover = () => (
    <Grid.Column start={6} end={12}>
        <MenuPopover
            onOpen={action('onOpen')}
            onClose={action('onClose')}
            disableClick
            listenHover
            menu={
                <Menu width="15rem">
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
            }
            open
        >
            <IconButton
                variant="ghost"
                color="neutral"
                size="medium"
                style={{
                    transform: 'translate(-10rem, -10rem)',
                }}
            >
                <Departments />
            </IconButton>
        </MenuPopover>

        <ApiLink to='#' />
    </Grid.Column>
)
