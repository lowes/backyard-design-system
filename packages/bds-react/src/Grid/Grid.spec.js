import * as React from 'react'
import { render } from '../../test-utils'
import Grid from './Grid'

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

    describe('prop: className', () => {
        const classNames = ['justify-center', 'justify-start', 'justify-end']

        classNames.forEach((className) => {
            test(`Grid ${className} theme snapshot`, () => {
                const { asFragment } = render(
                    <Grid.Container>
                        <Grid.Row className={className}>
                            <Grid.Column/>
                        </Grid.Row>
                    </Grid.Container>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: sm', () => {
        const sms = [1, 5, 12]

        sms.forEach((sm) => {
            test(`Grid ${sm} theme snapshot`, () => {
                const { asFragment } = render(
                    <Grid.Container>
                        <Grid.Row>
                            <Grid.Column sm={sm} />
                        </Grid.Row>
                    </Grid.Container>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
