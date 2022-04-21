import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, number, withKnobs } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import { GridV3 as Grid, PVS, RadioGroup, useBackyardTheme, PVSSkeleton } from '../'

export default { title: '@lowes-tech/bds-react/PVS', decorators: [withKnobs] }

const colors = [
    'Color',
    {
        dark_blue: 'interactive',
        green: 'green',
    },
    'interactive',
] as const

const DefaultPVSExample = () => {
    // @todo tokens
    // remove any
    const theme = useBackyardTheme() as any

    return (
        <Grid.Column start={6} end={12}>
            <RadioGroup
                name="pvs-example"
                direction="row"
                defaultValue="crema-oak"
                onChange={action('selected')}
            >
                <PVS
                    value="natural-oak"
                    title="Natural Oak"
                    fill="https://lda.lowes.com/is/image/Lowes/7391753008645_swatch"
                    color={select(...colors)}
                />
                <PVS
                    value="cambridge-abbey-oak"
                    title="Cambridge Abbey Oak"
                    unavailable={boolean('Unavailable', false)}
                    fill="https://lda.lowes.com/is/image/Lowes/1000128595_swatch"
                    color={select(...colors)}
                />
                <PVS
                    value="crema-oak"
                    title="Crema Oak"
                    fill="https://lda.lowes.com/is/image/Lowes/7391753349960_swatch"
                    color={select(...colors)}
                />
                <PVS
                    value="black-stainless"
                    unavailable
                    title="Fingerprint Resistant Black Stainless"
                    fill="https://lda.lowes.com/is/image/Lowes/1000236845_swatch"
                    color={select(...colors)}
                />
                <PVS
                    value="grey"
                    title="Grey"
                    fill="https://lda.lowes.com/is/image/Lowes/1000286265_swatch"
                    color={select(...colors)}
                />
                <PVS
                    value="stainless-steel"
                    title="Fingerprint Resistant Stainless Steel"
                    fill="https://lda.lowes.com/is/image/Lowes/1000236847_swatch"
                    color={select(...colors)}
                />
                <PVS value="black" fill="#000" title="Black" color={select(...colors)} />
                <PVS value="white" fill="#ffffff" title="White" color={select(...colors)} />
                <PVS value="green" fill="#789987" title="Green-ish" color={select(...colors)} />
                <PVS
                    value="text_primary"
                    fill={theme.color.text_primary}
                    title="Text Primary Token"
                    color={select(...colors)}
                />
                <PVS
                    value="text_secondary"
                    fill={theme.color.text_secondary}
                    title="Text Secondary Token"
                    color={select(...colors)}
                />
                <PVS
                    value="overlay"
                    fill={theme.color.overlay}
                    title="Overlay Token"
                    color={select(...colors)}
                />
            </RadioGroup>

            <ApiLink to='#' />
        </Grid.Column>
    )
}

export const DefaultPVS = () => (
    <DefaultPVSExample />
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <PVSSkeleton
            items={number('Items', 1)}
            animate={boolean('Animate', false)}
        />        
    </Grid.Column>
)
