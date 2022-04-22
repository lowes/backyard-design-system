import * as React from 'react'
import { render } from '../../test-utils'
import { ThemeProvider } from '../ThemeProvider'
import Checkbox from '../Checkbox'
import Switch from '../Switch'
import Radio from '../Radio'
import TextField from '../TextField'
import FormHeading from '../FormHeading'
import FormGroup from '../FormGroup'
import RadioGroup from '../RadioGroup'
import FormHelperText from '../FormHelperText'
import FormControlLabel from '../FormControlLabel'
import FormControl from './FormControl'

describe('FormControl Snapshots', () => {
    test('FormControl default snapshot', () => {
        const { asFragment } = render(
            <FormControl>
                <Switch />
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('FormControl full snapshot', () => {
        const { asFragment } = render(
            <FormControl>
                <FormHeading>Heading</FormHeading>
                <FormGroup>
                    <Checkbox value="0" />
                    <Checkbox value="1" />
                    <Checkbox value="2" />
                </FormGroup>
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('themes', () => {
        const themes = ['light', 'dark']

        themes.forEach((theme) => {
            test(`FormControl ${theme} theme snapshot`, () => {
                const { asFragment } = render(
                    <ThemeProvider theme={theme}>
                        <FormControl>
                            <Switch />
                        </FormControl>
                    </ThemeProvider>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('FormControl with FormControlLabel', () => {
        const { asFragment } = render(
            <FormControl>
                <FormHeading>Heading</FormHeading>
                <FormControlLabel
                    label="Label"
                    control={<Checkbox value="0" />}
                />
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    describe('prop: state', () => {
        const states = [undefined, 'error', 'success', 'warning']

        states.forEach((state) => {
            test(`FormControl shape ${state} snapshot`, () => {
                const { asFragment } = render(
                    <FormControl state={state}>
                        <FormHeading>Heading</FormHeading>
                        <RadioGroup name="test">
                            <Radio value="0" />
                            <Radio value="1" />
                            <Radio value="2" />
                        </RadioGroup>
                        <FormHelperText>Helper Text</FormHelperText>
                    </FormControl>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: disabled', () => {
        const disableds = [false, true]

        disableds.forEach((disabled) => {
            test(`FormControl ${disabled ? 'disabled' : 'enabled'} snapshot`, () => {
                const { asFragment } = render(
                    <FormControl disabled={disabled}>
                        <FormHeading>Heading</FormHeading>
                        <TextField />
                        <FormHelperText>Helper Text</FormHelperText>
                    </FormControl>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    describe('prop: component', () => {
        const components = ['div', 'span']

        components.forEach((component) => {
            test(`FormControl component '${component}' snapshot`, () => {
                const { asFragment } = render(
                    <FormControl component={component}>
                        <FormHeading>Heading</FormHeading>
                        <TextField />
                        <FormHelperText>Helper Text</FormHelperText>
                    </FormControl>
                )

                expect(asFragment()).toMatchSnapshot()
            })
        })
    })

    test('FormControl with disabled component', () => {
        const { asFragment } = render(
            <FormControl>
                <FormHeading>Heading</FormHeading>
                <TextField />
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })

    test('FormControl with state component', () => {
        const { asFragment } = render(
            <FormControl>
                <FormHeading>Heading</FormHeading>
                <TextField state="error" />
                <FormHelperText>Helper Text</FormHelperText>
            </FormControl>
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
