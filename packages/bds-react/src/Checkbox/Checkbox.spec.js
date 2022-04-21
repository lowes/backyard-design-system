import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Checkbox from './Checkbox'

describe('Checkbox Snapshots', () => {
    test('Checkbox default snapshot', () => {
        const { asFragment } = render(
            <Checkbox />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Checkbox ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Checkbox />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: shape', () => {
        const shapes = ['rounded', 'squared']

        shapes.forEach((shape) => {
            test(`Checkbox shape ${shape} snapshot`, () => {
                const { asFragment } = render(
                    <Checkbox shape={shape} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`Checkbox ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <Checkbox disabled={disabled} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: checked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Checkbox ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Checkbox checked={checked} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: defaultChecked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Checkbox default ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Checkbox defaultChecked={checked} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: indeterminate', () => {
        const indeterminates = [false, true]

        indeterminates.forEach((indeterminate) => {
            test(`Checkbox ${indeterminate ? 'indeterminate' : 'not indeterminate'} snapshot`, () => {
                const { asFragment } = render(
                    <Checkbox indeterminate={indeterminate} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('Checkbox className snapshot', () => {
            const { asFragment } = render(
                <Checkbox className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Checkbox wrapperProps snapshot', () => {
            const { asFragment } = render(
                <Checkbox 
                    wrapperProps={{
                        style: {
                            opacity: '0'
                        }
                    }}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Checkbox DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <Checkbox
                    name="test-name"
                    value="test-value"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
