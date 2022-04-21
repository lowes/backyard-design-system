import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Toast from './Toast'

describe('Toast Snapshots', () => {
    test('Toast default snapshot', () => {
        const { asFragment } = render(
            <Toast
                title="Title"
                timestamp="Timestamp [00:00:00]"
            >
                Subtitle
            </Toast>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`Toast ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Toast
                                title="Title"
                                timestamp="Timestamp [00:00:00]"
                            >
                                Subtitle
                            </Toast>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['medium', 'jumbo'] as const

        sizes.forEach((size) => {
            test(`Toast ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Toast
                        title="Title"
                        size={size}
                        timestamp="Timestamp [00:00:00]"
                    >
                        Subtitle
                    </Toast>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: type', () => {
        const types = ['info', 'success', 'error', 'warning'] as const

        types.forEach((type) => {
            test(`Toast ${type} type snapshot`, () => {
                const { asFragment } = render(
                    <Toast
                        title="Title"
                        type={type}
                        timestamp="Timestamp [00:00:00]"
                    >
                        Subtitle
                    </Toast>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: date', () => {
        test('Toast date snapshot', () => {
            const { asFragment } = render(
                <Toast
                    id="id"
                    className="classname"
                    title="Title"
                    date={new Date('2021-08-06 8:00:00')}
                >
                    Subtitle
                </Toast>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('Toast DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Toast
                    id="id"
                    className="classname"
                    title="Title"
                    timestamp="Timestamp [00:00:00]"
                >
                    Subtitle
                </Toast>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
