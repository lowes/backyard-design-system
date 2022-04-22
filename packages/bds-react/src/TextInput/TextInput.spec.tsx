import * as React from 'react'
import { HomeOutlined, CreditCard } from '@lowes-tech/bds-icons'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import TextInput from './TextInput'

describe('TextInput Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(<TextInput />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <TextInput />
                <FormHelperText>Text Input Helper</FormHelperText>
            </FormControl>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`TextInput ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <TextInput />
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('sizes', () => {
        const sizes = ['small', 'medium', 'large'] as const

        sizes.forEach((size) => {
            test(`TextInput ${size} size snapshot`, () => {
                const { asFragment } = render(<TextInput size={size} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: icon', () => {
        const icons = [undefined, <HomeOutlined />, <CreditCard />]

        icons.forEach((icon) => {
            test(`TextInput ${
                typeof icon !== 'undefined' ? icon.type.name : 'default'
            } icon snapshot`, () => {
                const { asFragment } = render(<TextInput itemBefore={icon} itemAfter={icon} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
