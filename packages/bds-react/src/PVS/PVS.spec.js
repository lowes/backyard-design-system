import * as React from 'react'
import { render } from '../../test-utils'
import RadioGroup from '../RadioGroup'
import { ThemeProvider } from '../ThemeProvider'
import PVS from './PVS'

describe('PVS Snapshots', () => {
    test('PVS default snapshot', () => {
        const { asFragment } = render(<PVS value="test" fill="#123" title="example" />)

        expect(asFragment()).toMatchSnapshot()
    })

    test('PVS default snapshot w/img', () => {
        const { asFragment } = render(
            <PVS value="test" fill="http://some.where/img.jpg" title="img" />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('PVS radioGroup snapshot', () => {
        const { asFragment } = render(
            <RadioGroup name="example" direction="row" defaultValue="crema-oak">
                <PVS value="color-1" title="Color One" fill="#000" />
                <PVS value="color-2" title="Color Two" fill="#FFF" />
            </RadioGroup>,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('defaultChecked prop snapshot', () => {
        const { asFragment } = render(
            <PVS value="test" fill="http://some.where/img.jpg" defaultChecked title="img" />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('color prop', () => {
        const colors = ['interactive', 'green']

        colors.forEach((color) => {
            test(`PVS ${color} badge snapshot`, () => {
                const { asFragment } = render(
                    <PVS value="test" fill="#123" color={color} title="example" />,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('unavailable prop snapshot', () => {
        const { asFragment } = render(
            <PVS value="test" fill="http://some.where/img.jpg" unavailable title="img" />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('inputClassName prop snapshot', () => {
        const { asFragment } = render(
            <PVS value="test" fill="http://some.where/img.jpg" inputClassName="test" title="img" />,
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`PVS ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <PVS value="test" fill="#123" title="example" />
                        </React.Fragment>
                    </ThemeProvider>,
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('extra props', () => {
        test('PVS DOM props (id, className) snapshot', () => {
            const { asFragment } = render(
                <PVS id="id" className="classname" fill="#111" value="test" />,
            )

            expect(asFragment()).toMatchSnapshot()
        })
    })
})
