import React from 'react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { Accordion, GridV3 as Grid, Typography, FormControl, FormHeading, AccordionSkeleton } from '../'
import { ApiLink } from '../utils/storybook/ApiLink'

export default { title: '@lowes-tech/bds-react/Accordion', decorators: [withKnobs] }

const sizes = [
    'Size',
    {
        small: 'small',
        medium: 'medium',
        large: 'large'
    },
    'medium',
] as const

const variants = [
    'Variant',
    {
        triangle: 'triangle',
        plus: 'plus'
    },
    'triangle'
] as const

const colors = [
    'Color',
    {
        transparent: 'transparent',
        interactive: 'interactive',
        neutral: 'neutral'
    },
    'transparent'
] as const

export const DefaultAccordion = () => (
    <Grid.Column start={6} end={12}>
        <Accordion
            title={text('Title', 'Title')}
            subtitle={text('Subtitle', 'Subtitle')}
            open={boolean('Open', false)}
            keepMounted={boolean('Keep Mounted', true)}
            variant={select(...variants)}
            size={select(...sizes)}
            color={select(...colors)}
        >
            <Typography style={{margin: 0, padding: 0}}>Child text</Typography>
        </Accordion>

        <ApiLink to='#' />
    </Grid.Column>
)

export const OpenedAccordion = () => (
    <Grid.Column start={6} end={12}>
        <Accordion
            title={text('Title', 'Title')}
            open={boolean('Open', false)}
            keepMounted={boolean('Keep Mounted', true)}
            size={select(...sizes)}
        >
            <Typography>Child text</Typography>
        </Accordion>

        <ApiLink to='#' />
    </Grid.Column>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Accordion Skeleton</FormHeading>
            <br />
            <AccordionSkeleton
                size={select(...sizes)}
                animate={boolean('Animate', false)}
            />
        </FormControl>
    </Grid.Column>
)

// export default {
//     title: '@lowes-tech/bds-react/Accordion',
//     argTypes: {
//         size: {
//             options: ['small', 'medium', 'large'],
//             control: { type: 'select' }
//         },
//         variants: {
//             options: ['triangle', 'plus'],
//             control: { type: 'select' }
//         },
//         color: {
//             options: ['transparent', 'interactive', 'neutral'],
//             control: { type: 'select' }
//         },
//     }
// } as ComponentMeta<typeof Accordion>

// const Template: ComponentStory<typeof Accordion> = (props) => <Accordion {...props} />

// export const DefaultAccordion = Template.bind({})
// DefaultAccordion.args = {
//     size: 'medium',
//     variant: 'triangle',
//     color: 'transparent'
// }
