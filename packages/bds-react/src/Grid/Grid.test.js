import * as React from 'react'
import { render } from '../../test-utils'
import Grid from './Grid'

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

    describe('props: sm, md, lg, xl', () => {
        it('should push a sm column', () => {
            const { container } = render(
                <Grid.Container data-testid="container">
                    <Grid.Row data-testid="row">
                        <Grid.Column sm data-testid="column" />
                        <Grid.Column md data-testid="column" />
                        <Grid.Column lg data-testid="column" />
                        <Grid.Column xl data-testid="column" />
                    </Grid.Row>
                </Grid.Container>
            )

            const smColumn = container.querySelector('.sm-true')
            const mdColumn = container.querySelector('.md-true')
            const lgColumn = container.querySelector('.lg-true')
            const xlColumn = container.querySelector('.xl-true')

            expect(smColumn).toBeInTheDocument()
            expect(mdColumn).toBeInTheDocument()
            expect(lgColumn).toBeInTheDocument()
            expect(xlColumn).toBeInTheDocument()
        })
    })
})
