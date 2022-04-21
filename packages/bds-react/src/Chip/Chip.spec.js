import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Chip from './Chip'

describe('Chip Snapshots', () => {
    test('Chip default snapshot', () => {
        const { asFragment } = render(
            <Chip label="Test Label" />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Chip ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Chip label="Test Label" />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: checked', () => {
        const checkeds = [false, true]

        checkeds.forEach((checked) => {
            test(`Chip ${checked ? 'checked' : 'not checked'} snapshot`, () => {
                const { asFragment } = render(
                    <Chip
                        checked={checked}
                        label="Test Label"
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`Chip ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <Chip
                        disabled={disabled}
                        label="Test Label"
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = ['choice', 'filter', 'input']

        variants.forEach((variant) => {
            test(`Chip variant ${variant} snapshot`, () => {
                const { asFragment } = render(
                    <Chip
                        variant={variant}
                        label="Test Label"
                    />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('other props', () => {
        test('Chip DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <Chip
                    id="test-id"
                    name="test-name"
                    value="test-value"
                    label="Test Label"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Chip className snapshot', () => {
            const { asFragment } = render(
                <Chip
                    label="Test Label"
                    className="test-class"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Chip wrapperProps snapshot', () => {
            const { asFragment } = render(
                <Chip
                    label="Test Label"
                    wrapperProps={{
                        style: {
                            opacity: '0'
                        }
                    }}
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Chip subdued snapshot', () => {
            const { asFragment } = render(
                <Chip
                    label="Test Label"
                    subdued
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
