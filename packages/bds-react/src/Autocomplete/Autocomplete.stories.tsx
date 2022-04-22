import React from 'react'
import { Autocomplete, Search, GridV3 as Grid, Typography } from '../'
import styled from 'styled-components'
import { Trend, SubitemArrow } from '@lowes-tech/bds-icons'
import { ApiLink } from '../utils/storybook/ApiLink'

import { withKnobs, select } from '@storybook/addon-knobs'

export default { title: '@lowes-tech/bds-react/Autocomplete', decorators: [withKnobs] }

const shapes = [
    'Shape',
    {
        rounded: 'rounded',
        squared: 'squared',
    },
    'rounded',
] as const

const OptionsWrapper = styled.div`
    width: 100%;
    height: 100%;

    h4 {
        padding: 8px 16px;
    }

    li {
        a {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            color: var(--bds-color-text-secondary);

            &:hover {
                cursor: pointer;
                background: var(--bds-color-surface-subdued);
            }
        }
    }

    svg {
        width: 20px;
        height: 20px;
        margin-right: 16px;

        path {
            fill: var(--bds-color-text-secondary);
        }
    }

    .icon-after {
        float: right;
    }
`

const OptionsItem = styled.a``

const DefaultOptions = () => (
    <OptionsWrapper>
        <Typography variant="h4">Trending Searches</Typography>
        <ul>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Trend />{' '}
                    <Typography variant="h5" regular>
                        Refrigerators
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Trend />{' '}
                    <Typography variant="h5" regular>
                        Ceiling Fan
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Trend />{' '}
                    <Typography variant="h5" regular>
                        Insulation
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Trend />{' '}
                    <Typography variant="h5" regular>
                        2x4x8
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Trend />{' '}
                    <Typography variant="h5" regular>
                        Plywood
                    </Typography>
                </OptionsItem>
            </li>
        </ul>
    </OptionsWrapper>
)

const FetchOptions = () => (
    <OptionsWrapper>
        <ul>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Typography variant="h5" regular>
                        kob<b>alt 80v</b>
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <SubitemArrow />{' '}
                    <Typography variant="h6" color="text_interactive" regular>
                        in Cordless Electric String Trimmers
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <SubitemArrow />{' '}
                    <Typography variant="h6" color="text_interactive" regular>
                        in Cordless Electric Push Lawn Mowers
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Typography variant="h5" regular>
                        kob<b>alt 24v</b>
                    </Typography>
                </OptionsItem>
            </li>
            <li>
                <OptionsItem href="https://www.lowes.com">
                    <Typography variant="h5" regular>
                        kob<b>alt 40v battery</b>
                    </Typography>
                </OptionsItem>
            </li>
        </ul>
    </OptionsWrapper>
)

export const Default = () => {
    const [options, setOptions] = React.useState(<DefaultOptions />)

    const onChange = () => {
        setOptions(<FetchOptions />)
    }

    return (
        <Grid.Column start={6} end={12}>
            <Autocomplete
                renderInput={
                    <Search placeholder="Placeholder search text here ..." autoComplete="off" />
                }
                options={options}
                onChange={onChange}
                shape={select(...shapes)}
                isSearch
            />

            <ApiLink to='#' />
        </Grid.Column>
    )
}
