import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Button from './Button'

describe('Button Snapshots', () => {
    test('Button default snapshot', () => {
        const { asFragment } = render(
            <Button />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Button ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Button />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]
        
        disableds.forEach((disabled) => {
            test(`Button ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <Button disabled={disabled} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: type', () => {
        const types = ['button', 'submit', 'clear']

        types.forEach((type) => {
            test(`Button type ${type} snapshot`, () => {
                const { asFragment } = render(
                    <Button type={type} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: variant', () => {
        const variants = ['primary', 'secondary', 'tertiary', 'ghost', 'inverse']
        
        variants.forEach((variant) => {
            test(`Button variant ${variant} snapshot`, () => {
                const { asFragment } = render(
                    <Button variant={variant} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: color', () => {
        const colors = ['interactive', 'green', 'red', 'neutral']
        
        colors.forEach((color) => {
            test(`Button color ${color} snapshot`, () => {
                const { asFragment } = render(
                    <Button color={color} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: shape', () => {
        const shapes = ['rounded', 'squared', 'circle']
        
        shapes.forEach((shape) => {
            test(`Button shape ${shape} snapshot`, () => {
                const { asFragment } = render(
                    <Button shape={shape} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium', 'large', 'jumbo']
        
        sizes.forEach((size) => {
            test(`Button size ${size} snapshot`, () => {
                const { asFragment } = render(
                    <Button size={size} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('other props', () => {
        test('Button DOM id, name, value snapshot', () => {
            const { asFragment } = render(
                <Button
                    id="test-id"
                    name="test-name"
                    value="test-value"
                />
            )

            expect(asFragment()).toMatchSnapshot()
        })

        test('Button className snapshot', () => {
            const { asFragment } = render(
                <Button className="test-class" />
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
