import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Checkbox from '../Checkbox'
import FormControlLabel from '../FormControlLabel'
import FormGroup from './FormGroup'

describe('FormGroup Snapshots', () => {
    test('FormGroup checkbox snapshot', () => {
        const { asFragment } = render(
            <FormGroup>
                <FormControlLabel
                    label="Label 1"
                    control={<Checkbox />}
                />
                <FormControlLabel
                    label="Label 2"
                    control={<Checkbox />}
                />
                <FormControlLabel
                    label="Label 3"
                    control={<Checkbox />}
                />
            </FormGroup>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`FormControl ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <FormGroup>
                            <FormControlLabel
                                label="Label 1"
                                control={<Checkbox />}
                            />
                            <FormControlLabel
                                label="Label 2"
                                control={<Checkbox />}
                            />
                            <FormControlLabel
                                label="Label 3"
                                control={<Checkbox />}
                            />
                        </FormGroup>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: direction', () => {
        const directions = ['row', 'column']

        directions.forEach((direction) => {
            test(`FormControl ${direction} snapshot`, () => {
                const { asFragment } = render(
                    <FormGroup>
                        <FormControlLabel
                            label="Label 1"
                            control={<Checkbox />}
                        />
                        <FormControlLabel
                            label="Label 2"
                            control={<Checkbox />}
                        />
                        <FormControlLabel
                            label="Label 3"
                            control={<Checkbox />}
                        />
                    </FormGroup>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })
})
