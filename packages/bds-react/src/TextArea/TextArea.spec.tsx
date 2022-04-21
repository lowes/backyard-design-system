import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import TextArea from './TextArea'

describe('TextArea Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(<TextArea />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`TextArea ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <TextArea />
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: shapes', () => {
        const shapes = ['rounded', 'squared'] as const

        shapes.forEach((shape) => {
            test(`TextArea ${shape} shape snapshot`, () => {
                const { asFragment } = render(<TextArea shape={shape} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('with helper text and max', () => {
        const { asFragment } = render(<TextArea helperText="test text" max={200} />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('with disabled, default value', () => {
        const { asFragment } = render(<TextArea disabled={true} defaultValue="test text" />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('with rows and resizer', () => {
        const { asFragment } = render(<TextArea rows={5} resizer={true} />)

        expect(asFragment()).toMatchSnapshot()
    })

    describe('extra props', () => {
        test('TextArea className snapshot', () => {
            const { asFragment } = render(<TextArea className="test-class" />)

            expect(asFragment()).toMatchSnapshot()
        })

        test('TextArea DOM id, name snapshot', () => {
            const { asFragment } = render(<TextArea id="test-id" name="test-name" />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
