import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Slider from './Slider'

describe('Slider Snapshots', () => {
    test('Slider default snapshot', () => {
        const { asFragment } = render(
            <Slider />
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: orientation', () => {
        const orientations = ['horizontal', 'vertical']

        orientations.forEach(orientation => {
            test(`Slider ${orientation} orientation snapshot`, () => {
                const { asFragment } = render(
                    <Slider orientation={orientation} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: displayInput', () => {
        const disableInputs = [true, false]

        disableInputs.forEach(disableInput => {
            test(`Slider displayInput=${disableInput} snapshot`, () => {
                const { asFragment } = render(
                    <Slider disableInput={disableInput} />
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})