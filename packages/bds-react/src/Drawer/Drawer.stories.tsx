import * as React from 'react'
import {
    Button,
    GridV3 as Grid,
    DrawerController,
    Drawer,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Typography,
} from '../'
import Location from '@lowes-tech/bds-icons/LocationOutlined'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Drawer', decorators: [withKnobs] }

const anchors = [
    'Anchor',
    {
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
    },
    'left',
] as const

const orientations = [
    'Orientation',
    {
        vertical: 'vertical',
        horizontal: 'horizontal',
    },
    'vertical',
] as const

const sizes = [
    'Size',
    {
        auto: 'auto',
        small: 'small',
        medium: 'medium',
        large: 'large',
    },
    'medium',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const DefaultDrawer = () => {
    return (
        <Grid.Column start={6} end={12}>
            <Drawer
                orientation={select(...orientations)}
                size={select(...sizes)}
                shape={select(...shapes)}
            >
                <DrawerHeader label={text('Label', '')}>
                    {text('Header Label', 'Header Label')}
                </DrawerHeader>
                <DrawerBody>
                    <Typography>Hello</Typography>
                </DrawerBody>
                <DrawerFooter>
                    <Button
                        variant="secondary"
                        size="small"
                        fullWidth={boolean('Button full-width', false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        size="small"
                        fullWidth={boolean('Button full-width', false)}
                    >
                        Apply
                    </Button>
                </DrawerFooter>
            </Drawer>

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const IconDrawer = () => {
    return (
        <Grid.Column start={6} end={12}>
            <Drawer orientation={select(...orientations)} shape={select(...shapes)}>
                <DrawerHeader icon={<Location />}>
                    {text('Header Label', 'Header Label')}
                </DrawerHeader>
                <DrawerBody>
                    <Typography>Hello</Typography>
                </DrawerBody>
                <DrawerFooter>
                    <Button
                        variant="secondary"
                        size="small"
                        fullWidth={boolean('Button full-width', false)}
                    >
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        size="small"
                        fullWidth={boolean('Button full-width', false)}
                    >
                        Apply
                    </Button>
                </DrawerFooter>
            </Drawer>

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const DrawerControllerExample = () => {
    // React open state
    const [open, setOpen] = React.useState(false)
    // Clicking the button opens the modal
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>Click Me</Button>
            <DrawerController
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                anchor={select(...anchors)}
                drawer={
                    <Drawer shape={select(...shapes)}>
                        <DrawerHeader icon={<Location />}>
                            {text('Header Label', 'Header Label')}
                        </DrawerHeader>
                        <DrawerBody>
                            <Typography>Body of the Drawer</Typography>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button
                                variant="secondary"
                                size="small"
                                fullWidth={boolean('Button full-width', false)}
                            >
                                Button
                            </Button>
                            <Button
                                variant="primary"
                                size="small"
                                fullWidth={boolean('Button full-width', false)}
                            >
                                Button
                            </Button>
                        </DrawerFooter>
                    </Drawer>
                }
            />

            <ApiLink to='#' />
        </React.Fragment>
    )
}
