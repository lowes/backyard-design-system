import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import IconButton from './IconButton'

describe('IconButton Snapshots', () => {
    test('IconButton default snapshot', () => {
        const { asFragment } = render(
            <IconButton />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`IconButton ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <IconButton />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]
        
        disableds.forEach((disabled) => {
            test(`IconButton ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <IconButton disabled={disabled} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = ['primary', 'secondary', 'ghost']
        
        variants.forEach((variant) => {
            test(`IconButton variant ${variant} snapshot`, () => {
                const { asFragment } = render(
                    <IconButton variant={variant} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: type', () => {
        const types = ['button', 'submit', 'clear']

        types.forEach((type) => {
            test(`IconButton type ${type} snapshot`, () => {
                const { asFragment } = render(
                    <IconButton type={type} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: color', () => {
        const colors = ['interactive', 'commerce', 'contrast']
        
        colors.forEach((color) => {
            test(`IconButton color ${color} snapshot`, () => {
                const { asFragment } = render(
                    <IconButton color={color} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: shape', () => {
        const shapes = ['rounded', 'squared', 'circle']
        
        shapes.forEach((shape) => {
            test(`IconButton shape ${shape} snapshot`, () => {
                const { asFragment } = render(
                    <IconButton shape={shape} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium', 'large']
        
        sizes.forEach((size) => {
            test(`IconButton size ${size} snapshot`, () => {
                const { asFragment } = render(
                    <IconButton size={size} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('other props', () => {
        test('IconButton DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <IconButton
                    id="test-id"
                    name="test-name"
                    value="test-value"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('IconButton className snapshot', () => {
            const { asFragment } = render(
                <IconButton className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
