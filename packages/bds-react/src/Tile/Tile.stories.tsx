import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, select, boolean } from '@storybook/addon-knobs'
import { ApiLink } from '../utils/storybook/ApiLink'
import { LocationOutlined } from '@lowes-tech/bds-icons'
import {
    GridV3 as Grid,
    Tile,
    CardTile,
    LinkTile,
    RadioTile,
    FormGroup,
    RadioGroup,
    FormControl,
    Typography,
    TileSkeleton,
    FormHeading,
} from '../'

export default { title: '@lowes-tech/bds-react/Tile', decorators: [withKnobs] }

const defaultTitle = "Mooresville Lowe's"

const defaultCaption = () => (
    <>
        509 River Highway
        <br />
        Mooresville, NC
        <br />
        <br />
        2.1 miles
    </>
)

const filler = (title = defaultTitle, caption = defaultCaption) => (
    <Grid.Container style={{ width: '20rem', padding: '1rem 0.5rem' }}>
        <Grid.Row>
            <Grid.Column start={1} end={3} style={{ paddingLeft: '0.5rem' }}>
                <LocationOutlined size="size_24" />
            </Grid.Column>
            <Grid.Column start={3} end={17}>
                <Typography variant="h4" style={{margin: '0px'}}>{title}</Typography>
                <br />
                <br />
                <Typography variant="body_1">{caption()}</Typography>
            </Grid.Column>
        </Grid.Row>
    </Grid.Container>
)

const colors = [
    'Color',
    {
        surface: 'surface',
        subdued: 'subdued',
    },
    'surface',
] as const

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

export const Card = () => (
    <Grid.Row>
        <CardTile
            color={select(...colors)}
            shape={select(...shapes)}
            disabled={boolean('disabled', false)}
            id="test2"
            className={'test-class2'}
        >
            {filler()}
        </CardTile>

        <ApiLink to='#' />
    </Grid.Row>
)

export const Link = () => (
    <>
        <Tile
            href={'#'}
            variant='link'
            disableIcon={boolean('disableIcon', false)}
            color={select(...colors)}
            shape={select(...shapes)}
            disabled={boolean('disabled', false)}
        >
            {filler()}
        </Tile>

        <ApiLink to='#' />
    </>
)

export const Radio = () => (
    <>
        <Grid.Row style={{ marginBottom: '1rem' }}>
            <Grid.Column start={6} end={12}>
                <FormControl>
                    <RadioGroup
                        name={'test'}
                        direction={'row'}
                        defaultValue={'2.1'}
                        onChange={action('onChange (RadioGroup)')}
                    >
                        <Tile
                            id={'1.1'}
                            className={'test'}
                            variant='radio'
                            value={'1.1'}
                            color={select(...colors)}
                            shape={select(...shapes)}
                        >
                            {filler("Huntersville Lowe's", () => (
                                <>
                                    Some Place
                                    <br />
                                    <br />
                                    <br />
                                    Far Away
                                </>
                            ))}
                        </Tile>
                        <Tile
                            variant='radio'
                            id={'2.1'}
                            value={'2.1'}
                            color={select(...colors)}
                            shape={select(...shapes)}
                        >
                            {filler()}
                        </Tile>
                        <Tile
                            variant='radio'
                            id={'3.1'}
                            value={'3.1'}
                            color={select(...colors)}
                            shape={select(...shapes)}
                            disabled
                        >
                            {filler()}
                        </Tile>
                    </RadioGroup>
                </FormControl>
            </Grid.Column>
        </Grid.Row>

        <ApiLink to='#' />
    </>
)

export const Skeleton = () => (
    <Grid.Column start={6} end={12}>
        <FormControl>
            <FormHeading>Tile Skeleton</FormHeading>
            <br />
            <TileSkeleton shape={select(...shapes)} animate={boolean('Animate', false)} />
        </FormControl>
    </Grid.Column>
)
