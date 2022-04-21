import * as React from 'react'
import { LocationOutlined } from '@lowes-tech/bds-icons'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Tooltip from './Tooltip'

describe('Tooltip Snapshots', () => {
    test('Tooltip default snapshot', () => {
        const { asFragment } = render(
            <Tooltip>
                Subtitle
            </Tooltip>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Tooltip ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <Tooltip
                                title="Title"
                            >
                                Subtitle
                            </Tooltip>
                        </React.Fragment>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = ['low_contrast', 'high_contrast']

        variants.forEach((variant) => {
            test(`Tooltip ${variant} variant snapshot`, () => {
                const { asFragment } = render(
                    <Tooltip
                        title="Title"
                        variant={variant}
                    >
                        Subtitle
                    </Tooltip>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: arrow', () => {
        const arrows = [
            'none',
            'top-start',
            'top',
            'top-end',
            'left',
            'right',
            'bottom-start',
            'bottom',
            'bottom-end'
        ]

        arrows.forEach((arrow) => {
            test(`Tooltip ${arrow} arrow snapshot`, () => {
                const { asFragment } = render(
                    <Tooltip
                        title="Title"
                        arrow={arrow}
                    >
                        Subtitle
                    </Tooltip>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: icon', () => {
        test(`Tooltip icon snapshot`, () => {
            const { asFragment } = render(
                <Tooltip
                    title="Title"
                    icon={<LocationOutlined />}
                >
                    Subtitle
                </Tooltip>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('prop: invisible', () => {
        test(`Tooltip invisible snapshot`, () => {
            const { asFragment } = render(
                <Tooltip
                    title="Title"
                    invisible
                >
                    Subtitle
                </Tooltip>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })

    describe('extra props', () => {
        test('Tooltip DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <Tooltip
                    id="id"
                    className="classname"
                    title="Title"
                >
                    Subtitle
                </Tooltip>
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
