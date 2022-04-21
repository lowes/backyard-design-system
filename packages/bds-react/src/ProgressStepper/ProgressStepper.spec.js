import * as React from 'react'

import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'

import ProgressStepper from './ProgressStepper'

describe('ProgressStepper Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(
            <ProgressStepper
                steps={[{
                    title: 'Step 1'
                }, {
                    title: 'Step 2'
                }]}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <ProgressStepper
                            step={1}
                            steps={[{
                                title: 'Step 1'
                            }, {
                                title: 'Step 2'
                            }]}
                        />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: direction', () => {
        const directions = ['row', 'column']

        directions.forEach((direction) => {
            test(`direction ${direction} snapshot`, () => {
                const { asFragment } = render(
                    <ProgressStepper
                        direction={direction}
                        steps={[{
                            title: 'Step 1'
                        }, {
                            title: 'Step 2'
                        }]}
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('other props', () => {
        test('DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <ProgressStepper
                    id="test-id"
                    name="test-name"
                    value="test-value"
                    className="test-class"
                    steps={[{
                        title: 'Step 1'
                    }, {
                        title: 'Step 2'
                    }]}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
