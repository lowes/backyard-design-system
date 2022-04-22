import * as React from 'react'
import { render } from '../../test-utils'
import { GridV3 as Grid } from './GridV3'

describe('Grid Tests', () => {
    it('renders', () => {
        const { getByTestId } = render(
            <Grid.Container data-testid="container">
                <Grid.Row data-testid="row">
                    <Grid.Column data-testid="column" />
                </Grid.Row>
            </Grid.Container>
        )

        const column = getByTestId('column')
        const row = getByTestId('row')
        const container = getByTestId('container')

        expect(column).toBeInTheDocument()
        expect(row).toBeInTheDocument()
        expect(container).toBeInTheDocument()
    })
})
