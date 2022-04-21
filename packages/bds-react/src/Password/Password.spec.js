import * as React from 'react'
import { HomeOutlined, CreditCard } from '@lowes-tech/bds-icons'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import Password from './Password'

describe('Password Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(
            <Password />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <Password />
                <FormHelperText>Password Helper</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`Password ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <Password />
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: icon', () => {
        const icons = [undefined, <HomeOutlined />, <CreditCard />]

        icons.forEach((icon) => {
            test(`Password ${typeof icon !== 'undefined' ? icon.type.name : 'default'} icon snapshot`, () => {
                const { asFragment } = render(
                    <Password icon={icon} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: size', () => {
        const sizes = ['small', 'medium', 'large']

        sizes.forEach(size => {
            test(`Password ${size} size snapshot`, () => {
                const { asFragment } = render(
                    <Password size={size} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: defaultToggle', () => {
        const defaultToggles = [undefined, true, false]

        defaultToggles.forEach((defaultToggle) => {
            test(`Password ${typeof defaultToggle !== 'undefined' ? defaultToggle : 'default'} defaultToggle snapshot`, () => {
                const { asFragment } = render(
                    <Password defaultToggle={defaultToggle} defaultValue="P4ssw0rd" />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
