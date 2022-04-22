import * as React from 'react'
import { HomeOutlined, CreditCard } from '@lowes-tech/bds-icons'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import FormControl from '../FormControl'
import FormHelperText from '../FormHelperText'
import TextField from './TextField'

describe('TextField Snapshots', () => {
    test('default snapshot', () => {
        const { asFragment } = render(<TextField />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('with helper text', () => {
        const { asFragment } = render(
            <FormControl>
                <TextField />
                <FormHelperText>Text Field Helper</FormHelperText>
            </FormControl>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark'] as const

        themes.forEach((theme) => {
            test(`Search ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <TextField />
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: icon', () => {
        const icons = [undefined, <HomeOutlined />, <CreditCard />] as const

        icons.forEach((icon) => {
            test(`TextField ${
                typeof icon !== 'undefined' ? icon.type.name : 'default'
            } icon snapshot`, () => {
                const { asFragment } = render(<TextField icon={icon} />)

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: info', () => {
        test(`TextField info snapshot`, () => {
            const { asFragment } = render(<TextField info="Some info" />)

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
