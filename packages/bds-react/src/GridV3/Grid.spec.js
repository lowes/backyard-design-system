import * as React from 'react'
import { render } from '../../test-utils'
import Grid from './GridV3'

describe('Grid Snapshots', () => {
    test('Grid default snapshot', () => {
        const { asFragment } = render(
            <Grid.Container>
                <Grid.Row>
                    <Grid.Column />
                </Grid.Row>
            </Grid.Container>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
