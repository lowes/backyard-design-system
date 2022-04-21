import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Alert from './Alert'

describe('Alert Snapshots', () => {
    test('Alert default snapshot', () => {
        const { asFragment } = render(
            <Alert
                title="Title"
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`Alert ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Alert
                                title="Title"
                            />
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: sizes', () => {
        const sizes = ['medium', 'jumbo'] as const

        sizes.forEach((size) => {
            test(`Alert ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Alert
                        multiline
                        title="Title"
                        subtitle="Subtitle"
                        action="Action"
                        size={size}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: type', () => {
        const types = ['info', 'success', 'error', 'warning'] as const

        types.forEach((type) => {
            test(`Alert ${type} type snapshot`, () => {
                const { asFragment } = render(
                    <Alert
                        subtitle="Subtitle"
                        type={type}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: actionProps', () => {
        test(`Alert action snapshot`, () => {
            const { asFragment } = render(
                <Alert
                    title="Title"
                    action="Action"
                    actionLinkProps={{
                        color: 'primary'
                    }}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('Alert DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Alert
                    id="id"
                    className="classname"
                    title="Title"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
