import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

import { ThemeProvider, Gridv3, Roboto, Fonts, GridV3 as Grid } from '@lowes-tech/bds-react'
import { ThemeVariables } from '@lowes-tech/bds-tokens/v3/light/_scProperties'

const GlobalStyle = createGlobalStyle`
    ${ThemeVariables}
    ${Roboto}
    ${Gridv3}
    ${Fonts}

    html { overflow-x: hidden; scroll-behavior: smooth; }
    a { text-decoration: none; transition: color 0.2s; }
    body { background-color: var(--bds-color-surface-default); }
    .backyard-preview { margin-top: 5% !important; }
`

export const Wrapper = ({ theme, children }) => (
    <ThemeProvider theme={theme} font='roboto'>
        <React.Fragment>
        <GlobalStyle />
            <Grid.Container container='xxl' className='backyard-preview'>
                <Grid.Row cols='16'>
                    {children}
                </Grid.Row>
            </Grid.Container>
        </React.Fragment>
    </ThemeProvider>
)
