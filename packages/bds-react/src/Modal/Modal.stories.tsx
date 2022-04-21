import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'

import { ApiLink } from '../utils/storybook/ApiLink'
import {
    Button,
    GridV3 as Grid,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalController,
    Typography,
} from '../'

export default { title: '@lowes-tech/bds-react/Modal', decorators: [withKnobs] }

const sizes = [
    'Size',
    {
        small: 'small',
        medium: 'medium',
        large: 'large',
        jumbo: 'jumbo',
        auto: 'auto',
        fullScreen: 'full-screen',
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

export const DefaultModal = () => (
    <Grid.Column start={5} end={13}>
        <Modal size={select(...sizes)} shape={select(...shapes)}>
            <ModalHeader label={text('Header Label', 'Header Label')}>
                {text('Header Title', 'Header Title')}
            </ModalHeader>
            <ModalBody>{text('Modal Body', 'Modal Body')}</ModalBody>
            <ModalFooter>
                <Button variant="secondary" size="small">
                    Button
                </Button>
            </ModalFooter>
        </Modal>

        <ApiLink to='#' />
    </Grid.Column>
)

export const ModalControllerExample = () => {
    // React open state
    const [open, setOpen] = React.useState(false)
    // Clicking the button opens the modal
    return (
        <Grid.Column start={5} end={13}>
            <Button onClick={() => setOpen(true)}>Click Me</Button>
            <ModalController
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                modal={
                    <Modal size={select(...sizes)} shape={select(...shapes)}>
                        <ModalHeader>{text('Header Label', 'Header Label')}</ModalHeader>
                        <ModalBody>
                            <Typography>Body of the Modal</Typography>
                        </ModalBody>
                        <ModalFooter>
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
                        </ModalFooter>
                    </Modal>
                }
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}
